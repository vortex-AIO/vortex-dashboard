#! /usr/bin/env nix
#! nix shell nixpkgs#nushell --command nu

if (ps -l | where name == "bun" | get -i cwd) != [] {
  print $"(ansi bg_b)bun dev(ansi reset) is already running"
  print $"(ansi green)Opening editor(ansi reset)"
  nu -c $"($env.EDITOR) ."
  exit 0
}

if not ("./node_modules" | path exists) {
  bun i
}

let mux: string = if ("TMUX" in $env) and ((which tmux) != []) {
  "tmux"
} else if ("WEZTERM_PANE" in $env) and ($env.TERM == "wezterm") {
  "wezterm"
} else if ("ZELLIJ" in $env) and ((which zellij) != []) {
  "zellij"
} else if ("KONSOLE_VERSION" in $env) and ($env.TERM == "konsole") {
  "konsole"
} else {
  print $"(ansi xyellow)ERROR: No known terminal multiplexer found (ansi reset)"
  print $"(ansi xyellow)Currently known multiplexers include tmux, wezterm, zellij and Konsole (ansi reset)"
  print $"(ansi xyellow)Running `bun dev` in background, may cause some issues(ansi reset)"
  $"Running background Job: (job spawn { bun dev })"
}

if not ($mux | str contains $"Running background Job: ") {
  print $"Starting a tab to run process in background using (ansi g)($mux)(ansi reset)"
}

if $mux == "wezterm" {
  let curr_pane_id = $env.WEZTERM_PANE;
  let server_pane_id = (wezterm cli spawn --cwd . -- ((which bun).path.0) dev)
  wezterm cli set-tab-title --pane-id $server_pane_id server
  wezterm cli set-tab-title code
  wezterm cli activate-pane --pane-id $curr_pane_id
  while not (wezterm cli get-text --pane-id $server_pane_id | str contains "http") {
    print "Server not started yet, trying again in 500ms"
    sleep 500ms;
  }
  print $"(ansi lightgreena)Server started(ansi reset)"
  print "Opening browser ..."
  start (wezterm cli get-text --pane-id $server_pane_id | rg --only-matching "http(s)?://.*" | lines | first)
  print $"(ansi lightgreena)Browser started(ansi reset)"
} else if $mux == "zellij" {
  zellij run --cwd . -c -n server -- $"((which bun).path.0)" dev
  print $"(ansi lightgreena)Server spawned(ansi reset)"
  print "Opening browser ..."
  start http://localhost:8080
  print $"(ansi lightgreena)Browser started(ansi reset)"
} else if $mux == "tmux" {
  let curr_id = (tmux display-message -p '#{window_index}')
  let new_id = (tmux new-window -n server -P -- $"((which bun).path.0)" dev)
  tmux select-window -t $curr_id
  tmux rename-window "code"
  while not (tmux capture-pane -pt 1 | str contains "http") {
    print "Server not started yet, trying again in 500ms"
    sleep 500ms;
  };
  start (tmux capture-pane -pt 1 | rg --only-matching "http(s)?:.*" | lines | first)
  print $"(ansi lightgreena)Browser started(ansi reset)"
}

print $"(ansi green)Opening editor(ansi reset)"
nu -c $"($env.EDITOR) ."
