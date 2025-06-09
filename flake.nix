{
  description = "Flake for Website.";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    treefmt-nix.url = "github:numtide/treefmt-nix";
  };

  outputs =
    {
      nixpkgs,
      flake-utils,
      treefmt-nix,
      self,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        formatters =
          (treefmt-nix.lib.evalModule pkgs (_: {
            projectRootFile = ".git/config";
            programs = {
              nixfmt.enable = true;
              nixf-diagnose.enable = true;
              prettier.enable = true;
            };
          })).config.build;
      in
      {
        devShells.default = pkgs.mkShell {
          meta = {
            license = pkgs.lib.licenses.gpl3Plus;
          };
          buildInputs = with pkgs; [
            nodejs
            deno
            bun
            typescript-language-server
          ];

          shellHook = ''
            echo "This is licensed under GPL-3.0-or-later"
            ./devsh.nu
          '';
        };

        formatter = formatters.wrapper;
        checks.formatting = formatters.check self;

      }
    );
}
