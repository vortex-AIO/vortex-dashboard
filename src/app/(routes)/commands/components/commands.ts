import React from "react";

// Define the command type
type Command = {
  name: string;
  description: string;
  aliases: string[];
  usage: string;
  enabled: boolean;
  cog: string;
};

type CommandsResponse = {
  status: string;
  commands: Command[];
  count: number;
};

const commands: CommandsResponse[] = [
  {
    "status": "success",
    "commands": [
      {
        "name": ",;",
        "description": "No description",
        "aliases": [
          ".;",
          "-;"
        ],
        "usage": ";,; ",
        "enabled": true,
        "cog": "Fun"
      },
      {
        name: "afk",
        description: "Set the AFK status with an optional reason.",
        aliases: [
          "kms",
          "despawn",
          "idle",
          "akf",
          "dies",
          "oof",
          "bye",
          "a",
          "aficionado",
          "apt"
        ],
        usage: ";afk [reason=AFK]",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "autorole",
        description: "No description",
        aliases: [],
        usage: ";autorole <role>",
        enabled: true,
        cog: "Server"
      },
      {
        name: "autorolebots",
        description: "Automatically assigns a role to new bot members for this server.",
        aliases: [],
        usage: ";autorolebots <role>",
        enabled: true,
        cog: "Server"
      },
      {
        name: "avatar",
        description: "Displays the avatar of the specified user or yourself if no one is mentioned.",
        aliases: [
          "pfp",
          "av"
        ],
        usage: ";avatar [member]",
        enabled: true,
        cog: "Information"
      },
      {
        name: "ban",
        description: "No description",
        aliases: [
          "banish"
        ],
        usage: ";ban [target] [reason]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "banlist",
        description: "Display the server's ban list in a paginated embed.",
        aliases: [
          "bans"
        ],
        usage: ";banlist ",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "banner",
        description: "Displays the banner of the specified user or yourself if no one is mentioned.",
        aliases: [],
        usage: ";banner [member]",
        enabled: true,
        cog: "Information"
      },
      {
        name: "bc",
        description: "Invocation for purge bot.",
        aliases: [],
        usage: ";bc [amount]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "bi",
        description: "Shows detailed information about the bot.",
        aliases: [
          "botinfo",
          "abt",
          "bitch"
        ],
        usage: ";bi ",
        enabled: true,
        cog: "Information"
      },
      {
        name: "blacklist",
        description: "Base blacklist command. Use subcommands to manage blacklist.",
        aliases: [],
        usage: ";blacklist ",
        enabled: true,
        cog: "Blacklist"
      },
      {
        name: "blacklist channel",
        description: "Blacklist a channel from using the bot.",
        aliases: [],
        usage: ";blacklist channel <channel_id>",
        enabled: true,
        cog: "Blacklist"
      },
      {
        name: "blacklist command",
        description: "Base command for managing command blacklists. Use subcommands for specific actions.",
        aliases: [],
        usage: ";blacklist command [args]",
        enabled: true,
        cog: "Blacklist"
      },
      {
        name: "blacklist command add",
        description: "Blacklist a command with optional scope.\n\nScopes:\n- `in <channel_id>`: Blacklist in a specific channel\n- `for <user_id>`: Blacklist for a specific user\n- `in_guild <guild_id>`: Blacklist in a specific guild",
        aliases: [],
        usage: ";blacklist command add <command_name> [scope]",
        enabled: true,
        cog: "Blacklist"
      },
      {
        name: "blacklist guild",
        description: "Blacklist a guild from using the bot.",
        aliases: [],
        usage: ";blacklist guild <guild_id>",
        enabled: true,
        cog: "Blacklist"
      },
      {
        name: "blacklist user",
        description: "Blacklist a user from using the bot.",
        aliases: [],
        usage: ";blacklist user <user_id>",
        enabled: true,
        cog: "Blacklist"
      },
      {
        name: "boop",
        description: "Boop someone with cuteness!",
        aliases: [],
        usage: ";boop <user>",
        enabled: true,
        cog: "Reactions"
      },
      {
        name: "bots",
        description: "Displays the number of bots in the server.",
        aliases: [
          "botcount"
        ],
        usage: ";bots ",
        enabled: true,
        cog: "Information"
      },
      {
        name: "button",
        description: "No description",
        aliases: [],
        usage: ";button ",
        enabled: true,
        cog: "Fun"
      },
      {
        name: "channel",
        description: "No description",
        aliases: [],
        usage: ";channel ",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "channel create",
        description: "No description",
        aliases: [],
        usage: ";channel create <name> [category]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "channel delete",
        description: "No description",
        aliases: [],
        usage: ";channel delete [channel]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "channel private",
        description: "No description",
        aliases: [],
        usage: ";channel private [name]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "channel rename",
        description: "No description",
        aliases: [],
        usage: ";channel rename <new_name>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "channel sync",
        description: "No description",
        aliases: [],
        usage: ";channel sync [category]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "channel topic",
        description: "No description",
        aliases: [],
        usage: ";channel topic <new_topic>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "clearsnipe",
        description: "Clear the snipe history.",
        aliases: [
          "cs",
          "cs:go",
          "csharp",
          "counterstrike",
          "csgo",
          "computerscience",
          "cs:go:go",
          "csharp:sharp",
          "counterstrike:strike",
          "csgo:go",
          "clearsnipe:snipe",
          "computerscience:science"
        ],
        usage: ";clearsnipe ",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "command",
        description: "No description",
        aliases: [],
        usage: ";command ",
        enabled: true,
        cog: "CommandManager"
      },
      {
        name: "command disable",
        description: "No description",
        aliases: [],
        usage: ";command disable <command_name>",
        enabled: true,
        cog: "CommandManager"
      },
      {
        name: "command enable",
        description: "No description",
        aliases: [],
        usage: ";command enable <command_name>",
        enabled: true,
        cog: "CommandManager"
      },
      {
        name: "cover",
        description: "No description",
        aliases: [
          "coverart",
          "c"
        ],
        usage: ";cover [user]",
        enabled: true,
        cog: "LastFM"
      },
      {
        name: "createinvite",
        description: "Creates a unique invite for the server. (non-vanity).",
        aliases: [
          "createinv",
          "instantinvite"
        ],
        usage: ";createinvite [channel]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "define",
        description: "No description",
        aliases: [],
        usage: ";define <word>",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "disconnect",
        description: "Server disconnects the mentioned member, or self if none mentioned.",
        aliases: [
          "dc"
        ],
        usage: ";disconnect [member]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "editsnipe",
        description: "Snipe the last edited message.",
        aliases: [
          "es"
        ],
        usage: ";editsnipe ",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "emoji",
        description: "Base command for emoji commands.",
        aliases: [],
        usage: ";emoji ",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "emoji escape",
        description: "Convert emojis to their string representation in a code block.",
        aliases: [
          "esc"
        ],
        usage: ";emoji escape <emojis>",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "errors",
        description: "Search errors by ID. Requires bot owner permissions.",
        aliases: [
          "errorsearch"
        ],
        usage: ";errors <id>",
        enabled: true,
        cog: "ErrorHandler"
      },
      {
        name: "fetch",
        description: "Fetches the sticker from a reply and sends it as a downloadable file.",
        aliases: [],
        usage: ";fetch ",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "filter",
        description: "No description",
        aliases: [],
        usage: ";filter ",
        enabled: true,
        cog: "Automod"
      },
      {
        name: "filter add",
        description: "No description",
        aliases: [],
        usage: ";filter add <keyword>",
        enabled: true,
        cog: "Automod"
      },
      {
        name: "filter list",
        description: "No description",
        aliases: [],
        usage: ";filter list ",
        enabled: true,
        cog: "Automod"
      },
      {
        name: "filter remove",
        description: "No description",
        aliases: [],
        usage: ";filter remove <keyword>",
        enabled: true,
        cog: "Automod"
      },
      {
        name: "finger",
        description: "No description",
        aliases: [
          "fingerfuck",
          "fngerbang"
        ],
        usage: ";finger [user]",
        enabled: true,
        cog: "Fun"
      },
      {
        name: "fm",
        description: "Shows currently playing track via the LastFM API.",
        aliases: [],
        usage: ";fm [user]",
        enabled: true,
        cog: "LastFM"
      },
      {
        name: "fn",
        description: "No description",
        aliases: [
          "nickforce",
          "forcednick"
        ],
        usage: ";fn [member] [forced_nick]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "force_remove_afk",
        description: "Forcefully removes AFK status from a mentioned user if they are AFK.",
        aliases: [
          "uafk",
          "unafk"
        ],
        usage: ";force_remove_afk <member>",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "fuck",
        description: "Fuck a user, yea, thats literally all this does.",
        aliases: [],
        usage: ";fuck [user]",
        enabled: true,
        cog: "Fun"
      },
      {
        name: "gate",
        description: "No description",
        aliases: [],
        usage: ";gate ",
        enabled: true,
        cog: "Server"
      },
      {
        name: "gate join",
        description: "Sets a custom welcome message for the server and displays it in an embed.",
        aliases: [
          "joinmsg",
          "welcmsg",
          "joinmessage",
          "welcomemessage",
          "welcmessage",
          "welc"
        ],
        usage: ";gate join <message>",
        enabled: true,
        cog: "Server"
      },
      {
        name: "gate leave",
        description: "Sets a custom leave message for the server and displays it in an embed.",
        aliases: [
          "leavemsg"
        ],
        usage: ";gate leave <message>",
        enabled: true,
        cog: "Server"
      },
      {
        name: "gate reset",
        description: "Resets the join logs for the current server.",
        aliases: [
          "resetlogs"
        ],
        usage: ";gate reset ",
        enabled: true,
        cog: "Server"
      },
      {
        name: "gate set",
        description: "Sets the join log channel for the current server.",
        aliases: [
          "logs"
        ],
        usage: ";gate set [channel]",
        enabled: true,
        cog: "Server"
      },
      {
        name: "gate view",
        description: "Views the current join logs for the current server.",
        aliases: [
          "viewlogs"
        ],
        usage: ";gate view ",
        enabled: true,
        cog: "Server"
      },
      {
        name: "hardban",
        description: "No description",
        aliases: [
          "hb",
          "hban"
        ],
        usage: ";hardban <user_id> [reason]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "help",
        description: "Shows help about the bot, a command, or a category of commands.",
        aliases: [
          "h",
          "commands"
        ],
        usage: ";help [command]",
        enabled: true,
        cog: "No Category"
      },
      {
        name: "hide",
        description: "Hide a channel from everyone, or a role if specified.",
        aliases: [],
        usage: ";hide [channel] [role]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "hotfix",
        description: "Sends the hotfix update from the hotfix.txt file with role mention.",
        aliases: [],
        usage: ";hotfix ",
        enabled: true,
        cog: "Developer"
      },
      {
        name: "hug",
        description: "Give someone a warm hug!",
        aliases: [],
        usage: ";hug <user>",
        enabled: true,
        cog: "Reactions"
      },
      {
        name: "immunity",
        description: "No description",
        aliases: [],
        usage: ";immunity <target> <rule_id>",
        enabled: true,
        cog: "Automod"
      },
      {
        name: "inrole",
        description: "Displays all members in a specific role with interactive buttons.",
        aliases: [
          "ir"
        ],
        usage: ";inrole <role>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "install",
        description: "Generates an OAuth2 User Install link for the bot.",
        aliases: [],
        usage: ";install ",
        enabled: true,
        cog: "Information"
      },
      {
        name: "invite",
        description: "Generates an invite link for the bot.",
        aliases: [
          "gbi"
        ],
        usage: ";invite [user]",
        enabled: true,
        cog: "Information"
      },
      {
        name: "invocations",
        description: "Shows detailed information about all existing invocations.",
        aliases: [],
        usage: ";invocations <ctx> [args...] <kwargs>",
        enabled: true,
        cog: "Invocations"
      },
      {
        name: "jail",
        description: "Jails a user, applying the jailed role and logging the event.",
        aliases: [],
        usage: ";jail <member> [reason=No reason provided]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "jail channel",
        description: "Sets the jail channel for the jail system.",
        aliases: [],
        usage: ";jail channel <channel>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "jail role",
        description: "Sets the jailed role for the jail system.",
        aliases: [],
        usage: ";jail role <role>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "jail setup",
        description: "Sets up the jail system with required roles and channels.",
        aliases: [],
        usage: ";jail setup ",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "jishaku ast",
        description: "Disassemble Python code into AST.",
        aliases: [],
        usage: ";jishaku ast <argument>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku cancel",
        description: "Cancels a task with the given index.\n\nIf the index passed is -1, will cancel the last task instead.",
        aliases: [],
        usage: ";jishaku cancel <index>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku cat",
        description: "Read out a file, using syntax highlighting if detected.\n\nLines and linespans are supported by adding '#L12' or '#L12-14' etc to the end of the filename.",
        aliases: [],
        usage: ";jishaku cat <argument>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku curl",
        description: "Download and display a text file from the internet.\n\nThis command is similar to jsk cat, but accepts a URL.",
        aliases: [],
        usage: ";jishaku curl <url>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku debug",
        description: "Run a command timing execution and catching exceptions.",
        aliases: [
          "dbg"
        ],
        usage: ";jishaku debug <command_string>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku dis",
        description: "Disassemble Python code into bytecode.",
        aliases: [
          "disassemble"
        ],
        usage: ";jishaku dis <argument>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku git",
        description: "Shortcut for 'jsk sh git'. Invokes the system shell.",
        aliases: [],
        usage: ";jishaku git <argument>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku hide",
        description: "Hides Jishaku from the help command.",
        aliases: [],
        usage: ";jishaku hide ",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku invite",
        description: "Retrieve the invite URL for this bot.\n\nIf the names of permissions are provided, they are requested as part of the invite.",
        aliases: [],
        usage: ";jishaku invite [perms...]",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku load",
        description: "Loads or reloads the given extension names.\n\nReports any extensions that failed to load.",
        aliases: [
          "reload"
        ],
        usage: ";jishaku load [extensions...]",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku node",
        description: "Shortcut for scaffolding and executing 'npm run'. Only exists if the executables are detected.",
        aliases: [],
        usage: ";jishaku node <argument>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku override",
        description: "Run a command with a different user, channel, or thread, optionally bypassing checks and cooldowns.\n\nUsers will try to resolve to a Member, but will use a User if it can't find one.",
        aliases: [
          "execute",
          "exec",
          "override!",
          "execute!",
          "exec!"
        ],
        usage: ";jishaku override [overrides]... <command_string>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku permtrace",
        description: "Calculates the source of granted or rejected permissions.\n\nThis accepts a channel, and either a member or a list of roles.\nIt calculates permissions the same way Discord does, while keeping track of the source.",
        aliases: [],
        usage: ";jishaku permtrace <channel> [targets...]",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku pip",
        description: "Shortcut for 'jsk sh pip'. Invokes the system shell.",
        aliases: [],
        usage: ";jishaku pip <argument>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku py",
        description: "Direct evaluation of Python code.",
        aliases: [
          "python"
        ],
        usage: ";jishaku py <argument>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku py_inspect",
        description: "Evaluation of Python code with inspect information.",
        aliases: [
          "pyi",
          "python_inspect",
          "pythoninspect"
        ],
        usage: ";jishaku py_inspect <argument>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku repeat",
        description: "Runs a command multiple times in a row.\n\nThis acts like the command was invoked several times manually, so it obeys cooldowns.\nYou can use this in conjunction with `jsk sudo` to bypass this.",
        aliases: [],
        usage: ";jishaku repeat <times> <command_string>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku retain",
        description: "Turn variable retention for REPL on or off.\n\nProvide no argument for current status.",
        aliases: [],
        usage: ";jishaku retain [toggle]",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku rtt",
        description: "Calculates Round-Trip Time to the API.",
        aliases: [
          "ping"
        ],
        usage: ";jishaku rtt ",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku rustc",
        description: "Shortcut for scaffolding and executing 'cargo run'. Only exists if the executables are detected.",
        aliases: [],
        usage: ";jishaku rustc <argument>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku shell",
        description: "Executes statements in the system shell.\n\nThis uses the system shell as defined in $SHELL, or `/bin/bash` otherwise.\nExecution can be cancelled by closing the paginator.",
        aliases: [
          "bash",
          "sh",
          "powershell",
          "ps1",
          "ps",
          "cmd",
          "terminal"
        ],
        usage: ";jishaku shell <argument>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku show",
        description: "Shows Jishaku in the help command.",
        aliases: [],
        usage: ";jishaku show ",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku shutdown",
        description: "Logs this bot out.",
        aliases: [
          "logout"
        ],
        usage: ";jishaku shutdown ",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku source",
        description: "Displays the source code for a command.",
        aliases: [
          "src"
        ],
        usage: ";jishaku source <command_name>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku specialist",
        description: "Direct evaluation of Python code.",
        aliases: [],
        usage: ";jishaku specialist <argument>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku sql",
        description: "Parent for SQL adapter related commands",
        aliases: [],
        usage: ";jishaku sql ",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku sql execute",
        description: "Executes a statement against the SQL database.",
        aliases: [],
        usage: ";jishaku sql execute <query>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku sql fetch",
        description: "Fetch multiple rows from the SQL database.",
        aliases: [],
        usage: ";jishaku sql fetch <query>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku sql fetchrow",
        description: "Fetch a single row from the SQL database.",
        aliases: [
          "fetchone"
        ],
        usage: ";jishaku sql fetchrow <query>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku sql schema",
        description: "Queries for the current schema and shows located table structures.",
        aliases: [],
        usage: ";jishaku sql schema [query]",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku sql select",
        description: "Shortcut for 'jsk sql fetch select'.",
        aliases: [],
        usage: ";jishaku sql select <query>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku sync",
        description: "Sync global or guild application commands to Discord.",
        aliases: [],
        usage: ";jishaku sync [targets...]",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku tasks",
        description: "Shows the currently running jishaku tasks.",
        aliases: [],
        usage: ";jishaku tasks ",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku unload",
        description: "Unloads the given extension names.\n\nReports any extensions that failed to unload.",
        aliases: [],
        usage: ";jishaku unload [extensions...]",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku voice",
        description: "Voice-related commands.\n\nIf invoked without subcommand, relays current voice state.",
        aliases: [
          "vc"
        ],
        usage: ";jishaku voice ",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku voice disconnect",
        description: "Disconnects from the voice channel in this guild, if there is one.",
        aliases: [
          "dc"
        ],
        usage: ";jishaku voice disconnect ",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku voice join",
        description: "Joins a voice channel, or moves to it if already connected.\n\nPassing a voice channel uses that voice channel.\nPassing a member will use that member's current voice channel.\nPassing nothing will use the author's voice channel.",
        aliases: [
          "connect"
        ],
        usage: ";jishaku voice join [destination]",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku voice pause",
        description: "Pauses a running audio source, if there is one.",
        aliases: [],
        usage: ";jishaku voice pause ",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku voice play",
        description: "Plays audio direct from a URI.\n\nCan be either a local file or an audio resource on the internet.",
        aliases: [
          "play_local"
        ],
        usage: ";jishaku voice play <uri>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku voice resume",
        description: "Resumes a running audio source, if there is one.",
        aliases: [],
        usage: ";jishaku voice resume ",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku voice stop",
        description: "Stops running an audio source, if there is one.",
        aliases: [],
        usage: ";jishaku voice stop ",
        enabled: true,
        cog: "Jishaku"
      },
      {
          name: "jishaku voice volume",
        description: "Adjusts the volume of an audio source if it is supported.",
        aliases: [],
        usage: ";jishaku voice volume <percentage>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "jishaku voice youtube_dl",
        description: "Plays audio from youtube_dl-compatible sources.",
        aliases: [
          "youtubedl",
          "ytdl",
          "yt"
        ],
        usage: ";jishaku voice youtube_dl <url>",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "kick",
        description: "Kicks a member from the server.",
        aliases: [
          "sock"
        ],
        usage: ";kick [member] [user_id] [reason]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "kill",
        description: "Eliminate someone from existence!",
        aliases: [],
        usage: ";kill <user>",
        enabled: true,
        cog: "Reactions"
      },
      {
        name: "kiss",
        description: "Send a sweet kiss to someone special!",
        aliases: [],
        usage: ";kiss <user>",
        enabled: true,
        cog: "Reactions"
      },
      {
        name: "language",
        description: "Sets the default language for the bot to use when translating.",
        aliases: [],
        usage: ";language <language>",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "lastfm",
        description: "No description",
        aliases: [
          "lf",
          "lfm"
        ],
        usage: ";lastfm ",
        enabled: true,
        cog: "LastFM"
      },
      {
        name: "lastfm set",
        description: "Set your LastFM username manually.",
        aliases: [
          "setusername"
        ],
        usage: ";lastfm set <username>",
        enabled: true,
        cog: "LastFM"
      },
      {
        name: "leaderboard",
        description: "No description",
        aliases: [
          "lb",
          "top"
        ],
        usage: ";leaderboard [page=1]",
        enabled: true,
        cog: "Levels"
      },
      {
        name: "lock",
        description: "Lock a channel from everyone, or a role if specified.",
        aliases: [],
        usage: ";lock [channel] [role]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "lore",
        description: "Shows the lorebook for a user with pagination. \nIf no user is mentioned, shows the invoking user's lorebook.",
        aliases: [],
        usage: ";lore [user]",
        enabled: true,
        cog: "Lore"
      },
      {
        name: "lore add",
        description: "Adds a message to the lorebook of the user who sent the referenced message.\nMust be used by replying to a message.",
        aliases: [],
        usage: ";lore add ",
        enabled: true,
        cog: "Lore"
      },
      {
        name: "lore leaderboard",
        description: "Shows the top 10 users with the most lore entries.",
        aliases: [
          "lb",
          "top"
        ],
        usage: ";lore leaderboard ",
        enabled: true,
        cog: "Lore"
      },
      {
        name: "lore remove",
        description: "Removes a specific lore entry by its number.",
        aliases: [],
        usage: ";lore remove <entry_number> [user]",
        enabled: true,
        cog: "Lore"
      },
      {
        name: "lore reset",
        description: "Resets a user's entire lorebook.",
        aliases: [],
        usage: ";lore reset [user]",
        enabled: true,
        cog: "Lore"
      },
      {
        name: "lore search",
        description: "Search for lore entries containing a keyword",
        aliases: [],
        usage: ";lore search [query]",
        enabled: true,
        cog: "Lore"
      },
      {
        name: "lore show",
        description: "Shows a specific lore entry for a user.\nIf no user is mentioned, uses the command invoker.\nIf entry number is out of range, shows a random entry.",
        aliases: [],
        usage: ";lore show <entry_number> [user]",
        enabled: true,
        cog: "Lore"
      },
      {
        name: "loreadd",
        description: "Adds a new lore entry.",
        aliases: [
          "addlore"
        ],
        usage: ";loreadd ",
        enabled: true,
        cog: "Invocations"
      },
      {
        name: "ltt",
        description: "Estimate the one-way latency (LTT) of the bot.",
        aliases: [
          "oneway",
          "latencyoneway",
          "halfping"
        ],
        usage: ";ltt ",
        enabled: true,
        cog: "Information"
      },
      {
        name: "massban",
        description: "No description",
        aliases: [
          "mban",
          "mb",
          "bulkban"
        ],
        usage: ";massban [user_ids...] [reason]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "mc",
        description: "No description",
        aliases: [
          "membercount",
          "members"
        ],
        usage: ";mc ",
        enabled: true,
        cog: "Information"
      },
      {
        name: "nick",
        description: "No description",
        aliases: [],
        usage: ";nick [member] [new_nick]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "nick force",
        description: "No description",
        aliases: [],
        usage: ";nick force [member] [forced_nick]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "nick remove",
        description: "No description",
        aliases: [
          "reset",
          "clear"
        ],
        usage: ";nick remove [member]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "nick set",
        description: "No description",
        aliases: [
          "change"
        ],
        usage: ";nick set [member] [new_nick]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "nuke",
        description: "Nukes the current channel with confirmation.",
        aliases: [
          "arab",
          "twintowers",
          "hiroshima",
          "nagasaki",
          "japan1945",
          "ww2",
          "boomboom",
          "no_witnesses",
          "allahuakbar",
          "tsarbomba"
        ],
        usage: ";nuke ",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "pat",
        description: "Give someone a nice headpat!",
        aliases: [],
        usage: ";pat <user>",
        enabled: true,
        cog: "Reactions"
      },
      {
        name: "patch",
        description: "Sends the patch update from the patch.txt file with role mention.",
        aliases: [],
        usage: ";patch ",
        enabled: true,
        cog: "Developer"
      },
      {
        name: "pause",
        description: "Pause the current song.",
        aliases: [],
        usage: ";pause ",
        enabled: true,
        cog: "Music"
      },
      {
        name: "permissions",
        description: "Checks the permissions of a member or a role.",
        aliases: [
          "perm",
          "perms"
        ],
        usage: ";permissions [target]",
        enabled: true,
        cog: "Information"
      },
      {
        name: "play",
        description: "Play a song from YouTube.\n\nParameters:\n- query: The search term or YouTube URL",
        aliases: [],
        usage: ";play <query>",
        enabled: true,
        cog: "Music"
      },
      {
        name: "playunfair",
        description: "No description",
        aliases: [],
        usage: ";playunfair ",
        enabled: true,
        cog: "Fun"
      },
      {
        name: "prefix",
        description: "No description",
        aliases: [],
        usage: ";prefix ",
        enabled: true,
        cog: "Information"
      },
      {
        name: "punch",
        description: "Punch someone with your virtual fists!",
        aliases: [],
        usage: ";punch <user>",
        enabled: true,
        cog: "Reactions"
      },
      {
        name: "purge",
        description: "No description",
        aliases: [],
        usage: ";purge [amount]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "purge after",
        description: "No description",
        aliases: [],
        usage: ";purge after <message_id>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "purge all",
        description: "No description",
        aliases: [],
        usage: ";purge all ",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "purge attachments",
        description: "No description",
        aliases: [],
        usage: ";purge attachments ",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "purge before",
        description: "No description",
        aliases: [],
        usage: ";purge before <message_id>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "purge bot",
        description: "No description",
        aliases: [],
        usage: ";purge bot ",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "purge contains",
        description: "No description",
        aliases: [],
        usage: ";purge contains <text>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "purge endswith",
        description: "No description",
        aliases: [],
        usage: ";purge endswith <text>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "purge from",
        description: "No description",
        aliases: [
          "user"
        ],
        usage: ";purge from <user>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "purge invites",
        description: "No description",
        aliases: [],
        usage: ";purge invites ",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "purge links",
        description: "No description",
        aliases: [
          "url"
        ],
        usage: ";purge links ",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "purge mentions",
        description: "No description",
        aliases: [],
        usage: ";purge mentions [user]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "purge reactions",
        description: "No description",
        aliases: [],
        usage: ";purge reactions ",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "purge self",
        description: "No description",
        aliases: [],
        usage: ";purge self ",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "purge startswith",
        description: "No description",
        aliases: [],
        usage: ";purge startswith <text>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "purge stickers",
        description: "No description",
        aliases: [],
        usage: ";purge stickers ",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "r",
        description: "No description",
        aliases: [
          "role"
        ],
        usage: ";r [member] [role_input]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "r bot",
        description: "No description",
        aliases: [
          "bots"
        ],
        usage: ";r bot <role>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "r color",
        description: "No description",
        aliases: [],
        usage: ";r color <role> <color_hex>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "r create",
        description: "No description",
        aliases: [],
        usage: ";r create <role_name>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "r delete",
        description: "No description",
        aliases: [],
        usage: ";r delete <role>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "r give",
        description: "No description",
        aliases: [],
        usage: ";r give <member> <role_input>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "r has",
        description: "No description",
        aliases: [],
        usage: ";r has <role> <action> <new_role>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "r hoist",
        description: "No description",
        aliases: [],
        usage: ";r hoist <role> [hoist]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "r human",
        description: "No description",
        aliases: [
          "humans"
        ],
        usage: ";r human <role>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "r info",
        description: "No description",
        aliases: [],
        usage: ";r info [role]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "r list",
        description: "No description",
        aliases: [],
        usage: ";r list [user]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "r mentionable",
        description: "No description",
        aliases: [],
        usage: ";r mentionable <role>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "r remove",
        description: "No description",
        aliases: [],
        usage: ";r remove <member> <role_input>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "r rename",
        description: "No description",
        aliases: [
          "name"
        ],
        usage: ";r rename <role> <new_name>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "rank",
        description: "No description",
        aliases: [
          "level",
          "lvl"
        ],
        usage: ";rank [user]",
        enabled: true,
        cog: "Levels"
      },
      {
        name: "reactionmute",
        description: "Revokes a users permissions to react in a channel.",
        aliases: [
          "rmute"
        ],
        usage: ";reactionmute <member>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "reactionsnipe",
        description: "Snipes the last removed reaction in the channel.",
        aliases: [
          "rs"
        ],
        usage: ";reactionsnipe ",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "reactionunmute",
        description: "Grants a users permissions to react in a channel.",
        aliases: [
          "rumute",
          "runmute"
        ],
        usage: ";reactionunmute <member>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "resume",
        description: "Resume the current song.",
        aliases: [],
        usage: ";resume ",
        enabled: true,
        cog: "Music"
      },
      {
        name: "ri",
        description: "No description",
        aliases: [
          "roleinfo"
        ],
        usage: ";ri [role]",
        enabled: true,
        cog: "Information"
      },
      {
        name: "roleid",
        description: "Shows the role ID of the specified role or yourself if no one is mentioned.",
        aliases: [
          "rid"
        ],
        usage: ";roleid [role]",
        enabled: true,
        cog: "Information"
      },
      {
        name: "roles",
        description: "No description",
        aliases: [],
        usage: ";roles [user]",
        enabled: true,
        cog: "Information"
      },
      {
        name: "rtt",
        description: "Check the round-trip time (RTT) of the bot.",
        aliases: [
          "ping",
          "pong",
          "roundtrip",
          "latency"
        ],
        usage: ";rtt ",
        enabled: true,
        cog: "Information"
      },
      {
        name: "sav",
        description: "Displays the server avatar of the specified user or yourself if no one is mentioned.",
        aliases: [],
        usage: ";sav [member]",
        enabled: true,
        cog: "Information"
      },
      {
        name: "sbanner",
        description: "Displays the server specific banner of the specified user or yourself if no one is mentioned.",
        aliases: [
          "memberbanner"
        ],
        usage: ";sbanner [member]",
        enabled: true,
        cog: "Information"
      },
      {
        name: "scrobbles",
        description: "No description",
        aliases: [
          "sc",
          "plays"
        ],
        usage: ";scrobbles [user]",
        enabled: true,
        cog: "LastFM"
      },
      {
        name: "sdeafen",
        description: "Server deafens the mentioned member, or self if none mentioned.",
        aliases: [
          "sd",
          "deafen"
        ],
        usage: ";sdeafen [member]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "server",
        description: "No description",
        aliases: [
          "config",
          "serverconfig",
          "configuration"
        ],
        usage: ";server ",
        enabled: true,
        cog: "Server"
      },
      {
        name: "server prefix",
        description: "Sets the prefix for the current server.",
        aliases: [
          "serverprefix",
          "setprefix"
        ],
        usage: ";server prefix <prefix>",
        enabled: true,
        cog: "Server"
      },
      {
        name: "serverbanner",
        description: "Shows the server banner in an embed.",
        aliases: [],
        usage: ";serverbanner ",
        enabled: true,
        cog: "Information"
      },
      {
        name: "serverid",
        description: "No description",
        aliases: [
          "sid"
        ],
        usage: ";serverid ",
        enabled: true,
        cog: "Information"
      },
      {
        name: "shards",
        description: "Shows information about the shards the bot is using.",
        aliases: [],
        usage: ";shards ",
        enabled: true,
        cog: "Information"
      },
      {
        name: "si",
        description: "Show the server info.",
        aliases: [
          "serverinfo"
        ],
        usage: ";si ",
        enabled: true,
        cog: "Information"
      },
      {
        name: "sicon",
        description: "Shows the server icon in an embed.",
        aliases: [],
        usage: ";sicon ",
        enabled: true,
        cog: "Information"
      },
      {
        name: "skibidi",
        description: "No description",
        aliases: [
          "brainrot"
        ],
        usage: ";skibidi ",
        enabled: true,
        cog: "Fun"
      },
      {
        name: "slap",
        description: "Slap some sense into someone!",
        aliases: [],
        usage: ";slap <user>",
        enabled: true,
        cog: "Reactions"
      },
      {
        name: "smute",
        description: "Server mutes the mentioned member, or self if none mentioned.",
        aliases: [
          "sm",
          "mute"
        ],
        usage: ";smute [member]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "sname",
        description: "Change the name of a server.",
        aliases: [
          "servername"
        ],
        usage: ";sname [new_name]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "snipe",
        description: "Snipes recently deleted messages",
        aliases: [
          "s"
        ],
        usage: ";snipe ",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "snipe edit",
        description: "No description",
        aliases: [
          "es"
        ],
        usage: ";snipe edit ",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "snipe reaction",
        description: "Snipes recently removed reactions.",
        aliases: [],
        usage: ";snipe reaction ",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "source",
        description: "Fetches source code.",
        aliases: [
          "src"
        ],
        usage: ";source ",
        enabled: true,
        cog: "Information"
      },
      {
        name: "splash",
        description: "Shows the server splash (invite banner) in an embed.",
        aliases: [],
        usage: ";splash ",
        enabled: true,
        cog: "Information"
      },
      {
        name: "staffstrip",
        description: "No description",
        aliases: [
          "strip",
          "stripstaff"
        ],
        usage: ";staffstrip <member>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "steal",
        description: "Steal first emoji, sticker from replied message, if not provided",
        aliases: [],
        usage: ";steal [emoji]",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "steal emojis",
        description: "Steal multiple emojis from attached message, or replied message",
        aliases: [],
        usage: ";steal emojis [emojis]",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "steal sticker",
        description: "Steal sticker from attached message, or replied message",
        aliases: [],
        usage: ";steal sticker ",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "stop",
        description: "Stop the current song and disconnect from voice.",
        aliases: [],
        usage: ";stop ",
        enabled: true,
        cog: "Music"
      },
      {
        name: "sundeafen",
        description: "Server undeafens the mentioned member, or self if none mentioned.",
        aliases: [
          "sund",
          "sunday",
          "undeafen"
        ],
        usage: ";sundeafen [member]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "sunmute",
        description: "Server unmutes the mentioned member, or self if none mentioned.",
        aliases: [
          "sum",
          "unmute"
        ],
        usage: ";sunmute [member]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "sync",
        description: "Syncs a channel with the default permissions for its category, or all channels in a category if specified.",
        aliases: [],
        usage: ";sync [channel_or_category]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "tableflip",
        description: "No description",
        aliases: [],
        usage: ";tableflip ",
        enabled: true,
        cog: "Fun"
      },
      {
        name: "test",
        description: "No description",
        aliases: [],
        usage: ";test ",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "test status",
        description: "No description",
        aliases: [],
        usage: ";test status ",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "time",
        description: "Get the current time for host.",
        aliases: [],
        usage: ";time ",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "timeout",
        description: "No description",
        aliases: [
          "to",
          "bdsm",
          "ballgag",
          "stfu",
          "sybau",
          "smd"
        ],
        usage: ";timeout [member] [duration=5m]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "touch",
        description: "No description",
        aliases: [],
        usage: ";touch <user>",
        enabled: true,
        cog: "Fun"
      },
      {
        name: "trackplays",
        description: "No description",
        aliases: [
          "tp"
        ],
        usage: ";trackplays [user] [artist] [track]",
        enabled: true,
        cog: "LastFM"
      },
      {
        name: "translate",
        description: "Translates the given text or a replied-to message into the default language.\n\nUsage:\n,translate <text>\nOR\nReply to a message with ,translate",
        aliases: [
          "trans",
          "wtf"
        ],
        usage: ";translate [text]",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "unban",
        description: "Unbans a user by their User ID.",
        aliases: [
          "befree"
        ],
        usage: ";unban <user_id>",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "unflip",
        description: "No description",
        aliases: [],
        usage: ";unflip ",
        enabled: true,
        cog: "Fun"
      },
      {
        name: "unhide",
        description: "Unhide a channel from everyone, or a role if specified.",
        aliases: [],
        usage: ";unhide [channel] [role]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "unjail",
        description: "Removes the jailed role from a user and logs the event.",
        aliases: [],
        usage: ";unjail <member> [reason=No reason provided]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "unlock",
        description: "Unlock a channel from everyone, or a role if specified.",
        aliases: [],
        usage: ";unlock [channel] [role]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "untimeout",
        description: "No description",
        aliases: [
          "uto",
          "futo"
        ],
        usage: ";untimeout [member] [user_id]",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "urban",
        description: "No description",
        aliases: [],
        usage: ";urban <word>",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "userid",
        description: "Shows the user ID of the specified user or yourself if no one is mentioned.",
        aliases: [
          "uid",
          "whoid",
          "id"
        ],
        usage: ";userid [user_id]",
        enabled: true,
        cog: "Information"
      },
      {
        name: "userinfo",
        description: "Displays detailed user information with badges, activity, and roles.",
        aliases: [
          "who",
          "ui",
          "info",
          "whoami",
          "profile"
        ],
        usage: ";userinfo [member]",
        enabled: true,
        cog: "Information"
      },
      {
        name: "uwulock",
        description: "Uwulock commands.",
        aliases: [],
        usage: ";uwulock <user> [flag=False]",
        enabled: true,
        cog: "Fun"
      },
      {
        name: "uwulock reset",
        description: "No description",
        aliases: [],
        usage: ";uwulock reset ",
        enabled: true,
        cog: "Fun"
      },
      {
        name: "vanity",
        description: "Group of commands to manage vanity settings.",
        aliases: [],
        usage: ";vanity ",
        enabled: true,
        cog: "Vanity"
      },
      {
        name: "vanity check",
        description: "Manually check all members' statuses and update roles.",
        aliases: [],
        usage: ";vanity check ",
        enabled: true,
        cog: "Vanity"
      },
      {
        name: "vanity logs",
        description: "Set the log channel for vanity updates.",
        aliases: [],
        usage: ";vanity logs <channel>",
        enabled: true,
        cog: "Vanity"
      },
      {
        name: "vanity reset",
        description: "Reset the vanity settings.",
        aliases: [],
        usage: ";vanity reset ",
        enabled: true,
        cog: "Vanity"
      },
      {
        name: "vanity role",
        description: "Set the pic permissions role for the server.",
        aliases: [],
        usage: ";vanity role <role>",
        enabled: true,
        cog: "Vanity"
      },
      {
        name: "vanity set",
        description: "Set the vanity keyword for the server.",
        aliases: [],
        usage: ";vanity set <vanity>",
        enabled: true,
        cog: "Vanity"
      },
      {
        name: "voicemaster",
        description: "No description",
        aliases: [
          "vmaster",
          "vc",
          "vm"
        ],
        usage: ";voicemaster ",
        enabled: true,
        cog: "VoiceMaster"
      },
      {
        name: "voicemaster bandwidth",
        description: "No description",
        aliases: [],
        usage: ";voicemaster bandwidth <channel> <limit>",
        enabled: true,
        cog: "VoiceMaster"
      },
      {
        name: "voicemaster claim",
        description: "No description",
        aliases: [],
        usage: ";voicemaster claim <channel>",
        enabled: true,
        cog: "VoiceMaster"
      },
      {
        name: "voicemaster delete",
        description: "No description",
        aliases: [],
        usage: ";voicemaster delete <channel>",
        enabled: true,
        cog: "VoiceMaster"
      },
      {
        name: "voicemaster hide",
        description: "No description",
        aliases: [],
        usage: ";voicemaster hide <channel>",
        enabled: true,
        cog: "VoiceMaster"
      },
      {
        name: "voicemaster info",
        description: "No description",
        aliases: [],
        usage: ";voicemaster info <channel>",
        enabled: true,
        cog: "VoiceMaster"
      },
      {
        name: "voicemaster limit",
        description: "No description",
        aliases: [],
        usage: ";voicemaster limit <channel> <limit>",
        enabled: true,
        cog: "VoiceMaster"
      },
      {
        name: "voicemaster list",
        description: "No description",
        aliases: [],
        usage: ";voicemaster list ",
        enabled: true,
        cog: "VoiceMaster"
      },
      {
        name: "voicemaster lock",
        description: "No description",
        aliases: [],
        usage: ";voicemaster lock <channel>",
        enabled: true,
        cog: "VoiceMaster"
      },
      {
        name: "voicemaster permit",
        description: "No description",
        aliases: [],
        usage: ";voicemaster permit <channel> <user>",
        enabled: true,
        cog: "VoiceMaster"
      },
      {
        name: "voicemaster rename",
        description: "No description",
        aliases: [],
        usage: ";voicemaster rename <channel> <name>",
        enabled: true,
        cog: "VoiceMaster"
      },
      {
        name: "voicemaster reset",
        description: "No description",
        aliases: [],
        usage: ";voicemaster reset ",
        enabled: true,
        cog: "VoiceMaster"
      },
      {
        name: "voicemaster revoke",
        description: "No description",
        aliases: [],
        usage: ";voicemaster revoke <channel> <user>",
        enabled: true,
        cog: "VoiceMaster"
      },
      {
        name: "voicemaster setup",
        description: "No description",
        aliases: [],
        usage: ";voicemaster setup ",
        enabled: true,
        cog: "VoiceMaster"
      },
      {
        name: "voicemaster status",
        description: "No description",
        aliases: [],
        usage: ";voicemaster status ",
        enabled: true,
        cog: "VoiceMaster"
      },
      {
        name: "voicemaster transfer",
        description: "No description",
        aliases: [],
        usage: ";voicemaster transfer <channel> <user>",
        enabled: true,
        cog: "VoiceMaster"
      },
      {
        name: "voicemaster unhide",
        description: "No description",
        aliases: [],
        usage: ";voicemaster unhide <channel>",
        enabled: true,
        cog: "VoiceMaster"
      },
      {
        name: "voicemaster unlock",
        description: "No description",
        aliases: [],
        usage: ";voicemaster unlock <channel>",
        enabled: true,
        cog: "VoiceMaster"
      },
      {
        name: "void",
        description: "No description",
        aliases: [
          "ask"
        ],
        usage: ";void <question>",
        enabled: true,
        cog: "Fun"
      },
      {
        name: "vortex",
        description: "No description",
        aliases: [],
        usage: ";vortex ",
        enabled: true,
        cog: "Information"
      },
      {
        name: "whitelist",
        description: "Base whitelist command. Use subcommands to manage whitelist.",
        aliases: [],
        usage: ";whitelist ",
        enabled: true,
        cog: "Blacklist"
      },
      {
        name: "whitelist channel",
        description: "Whitelist a channel to use the bot.",
        aliases: [],
        usage: ";whitelist channel <channel_id>",
        enabled: true,
        cog: "Blacklist"
      },
      {
        name: "whitelist command",
        description: "Base command for managing command whitelists. Use subcommands for specific actions.",
        aliases: [],
        usage: ";whitelist command [args]",
        enabled: true,
        cog: "Blacklist"
      },
      {
        name: "whitelist command remove",
        description: "Remove a command from blacklist.\n\nScopes:\n- `in <channel_id>`: Whitelist in a specific channel\n- `for <user_id>`: Whitelist for a specific user\n- `in_guild <guild_id>`: Whitelist in a specific guild",
        aliases: [],
        usage: ";whitelist command remove <command_name> [scope]",
        enabled: true,
        cog: "Blacklist"
      },
      {
        name: "whitelist guild",
        description: "Whitelist a guild to use the bot.",
        aliases: [],
        usage: ";whitelist guild <guild_id>",
        enabled: true,
        cog: "Blacklist"
      },
      {
        name: "whitelist user",
        description: "Whitelist a user to use the bot.",
        aliases: [],
        usage: ";whitelist user <user_id>",
        enabled: true,
        cog: "Blacklist"
      },
      {
        name: "whois",
        description: "Displays basic user information: username, avatar, and ID.",
        aliases: [],
        usage: ";whois <user_id>",
        enabled: true,
        cog: "Information"
      },
      {
        name: "wolfram",
        description: "No description",
        aliases: [
          "wolframalpha",
          "wr"
        ],
        usage: ";wolfram <question>",
        enabled: true,
        cog: "Fun"
      }
    ],
    "count": 263
  }
]

export default commands;