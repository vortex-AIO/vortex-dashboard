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
    status: "success",
    commands: [
      {
        name: "splash",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "pingrandom",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "trackplays",
        description: "Get the total scrobbles for a specific track.",
        aliases: ["tp"],
        usage: "",
        enabled: true,
        cog: "LastFM"
      },
      {
        name: "hide",
        description: "Hides a channel from everyone, or a role if specified.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "changebanner",
        description: "No description",
        aliases: ["changebanner!"],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "roles",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "echo",
        description: "Echoes the provided message. Only the owner can use this command.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "playunfair",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Fun"
      },
      {
        name: "define",
        description: "Searches for a word via the Merriam-Webster.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "avatar",
        description: "Show your avatar.",
        aliases: ["pfp", "av"],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "play",
        description: "Plays a song from YouTube.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Music"
      },
      {
        name: "fuck",
        description: "Fuck a user, yea, thats literally all this does.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Fun"
      },
      {
        name: "banner",
        description: "Show your banner.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "r",
        description: "Base Command for managing roles.",
        aliases: ["role"],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "unhide",
        description: "Unhides a channel from everyone, or a role if specified.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "inrole",
        description: "No description",
        aliases: ["ir"],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "перезагрузка",
        description: "Reloads the jishaku extension in Russian in case autotranslation is enabled.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "hardban",
        description: "Bans a user by User ID and deletes their messages.",
        aliases: [
        "hb",
        "hban"
        ],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "status",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "banlist",
        description: "Shows list of users banned from the server.",
        aliases: [
        "bans"
        ],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "jail",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "leaderboard",
        description: "No description",
        aliases: [
        "lb",
        "top"
        ],
        usage: "",
        enabled: true,
        cog: "Levels"
      },
      {
        name: "time",
        description: "Get the current time for host.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "sync",
        description: "Syncs a channel with the default permissions for its category, or all channels in a category if specified.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "len",
        description: "Get the length of any object or property.",
        aliases: [
        "length"
        ],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "channel",
        description: "Base command for channel management.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "lore",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Lore"
      },
      {
        name: "sbanner",
        description: "No description",
        aliases: [
        "memberbanner"
        ],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "dm",
        description: "Sends a direct message to a specified user.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "ban",
        description: "Bans a member by mention or User ID.",
        aliases: [
        "banish"
        ],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "sdeafen",
        description: "No description",
        aliases: [
        "sd",
        "deafen"
        ],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "hug",
        description: "Hugs a user >_<",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Reactions"
      },
      {
        name: "unban",
        description: "Unbans a member by User ID.",
        aliases: [
        "befree"
        ],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "afk",
        description: "No description",
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
        usage: "",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "fetch",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "kick",
        description: "Kicks a member by mention or User ID.",
        aliases: [
        "sock"
        ],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "kiss",
        description: "Kisses a user >_<",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Reactions"
      },
      {
        name: "stop",
        description: "Stops the current song and disconnects from voice.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Music"
      },
      {
        name: "command",
        description: "Base command for command management.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "CommandManager"
      },
      {
        name: "send",
        description: "Sends a message to a specified channel or the current one if none mentioned.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "finger",
        description: "Fingerfuck a user.. for some reason..?",
        aliases: [
        "fingerfuck",
        "fngerbang"
        ],
        usage: "",
        enabled: true,
        cog: "Fun"
      },
      {
        name: "smute",
        description: "No description",
        aliases: [
        "sm",
        "mute"
        ],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "sunmute",
        description: "No description",
        aliases: [
        "sum",
        "unmute"
        ],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "slap",
        description: "Slaps a user >_<",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Reactions"
      },
      {
        name: "timeout",
        description: "Times out a member (e.g. ,to @user 7d, 24h, 60m)",
        aliases: [
        "to",
        "bdsm",
        "ballgag",
        "stfu",
        "sybau",
        "smd"
        ],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "fn",
        description: "Forces a nickname on a user that cannot be changed. If no nickname is provided, removes the forced nickname.",
        aliases: [
        "nickforce",
        "forcednick"
        ],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "sundeafen",
        description: "No description",
        aliases: [
        "sund",
        "sunday",
        "undeafen"
        ],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "resume",
        description: "Resumes the current song.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Music"
      },
      {
        name: "force_remove_afk",
        description: "No description",
        aliases: [
        "uafk",
        "unafk"
        ],
        usage: "",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "sav",
        description: "Show your server avatar.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "server",
        description: "View server configuration.",
        aliases: [
        "config",
        "serverconfig",
        "configuration"
        ],
        usage: "",
        enabled: true,
        cog: "Server"
      },
      {
        name: "punch",
        description: "Punches a user >_<",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Reactions"
      },
      {
        name: "servers",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "urban",
        description: "Searches for a word via the Urban Dictionary",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "disconnect",
        description: "No description",
        aliases: [
        "dc"
        ],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "untimeout",
        description: "Removes the timeout from a member by mention or User ID.",
        aliases: [
        "uto",
        "futo"
        ],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "permissions",
        description: "Checks the permissions of a member or a role.",
        aliases: [
        "perm",
        "perms"
        ],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "kill",
        description: "Kills a user >_<",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Reactions"
      },
      {
        name: "createinvite",
        description: "No description",
        aliases: [
        "createinv",
        "instantinvite"
        ],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "prefix",
        description: "Fetches the current prefix for the bot.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "hello",
        description: "Says hello",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "wolfram",
        description: "Ask Wolfram Alpha a question.",
        aliases: [
        "wolframalpha",
        "wr"
        ],
        usage: "",
        enabled: true,
        cog: "Fun"
      },
      {
        name: "whitelist",
        description: "Manage whitelist settings.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Blacklist"
      },
      {
        name: "translate",
        description: "No description",
        aliases: [
        "trans",
        "wtf"
        ],
        usage: "",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "imports",
        description: "Counts the number of imports in the project.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "sname",
        description: "No description",
        aliases: [
        "servername"
        ],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "loreadd",
        description: "No description",
        aliases: [
        "addlore"
        ],
        usage: "",
        enabled: true,
        cog: "Invocations"
      },
      {
        name: "test",
        description: "Base command for testing intents.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "staffstrip",
        description: "Strips a user of all their moderation-related roles",
        aliases: [
        "strip",
        "stripstaff"
        ],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "invite",
        description: "Generates an invite link for the bot.",
        aliases: [
        "gbi"
        ],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "skibidi",
        description: "brainrot",
        aliases: [
        "brainrot"
        ],
        usage: "",
        enabled: true,
        cog: "Fun"
      },
      {
        name: "tableflip",
        description: "flips a table",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Fun"
      },
      {
        name: "vortex",
        description: "Pointless command, shows the song in which the bots name was inspired by.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "bi",
        description: "No description",
        aliases: [
        "botinfo",
        "abt",
        "bitch"
        ],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "boop",
        description: "Boops a user >_<",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Reactions"
      },
      {
        name: "language",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "unjail",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "reactionmute",
        description: "Revokes a users permissions to react in a channel.",
        aliases: [
        "rmute"
        ],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "attachment",
        description: "Sends an attachment",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "userid",
        description: "No description",
        aliases: [
        "uid",
        "whoid",
        "id"
        ],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "runas",
        description: "No description",
        aliases: [
        "execute",
        "exec",
        "override!",
        "execute!",
        "exec!",
        "override"
        ],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "snipe",
        description: "No description",
        aliases: [
        "s"
        ],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "unflip",
        description: "unflips a table",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Fun"
      },
      {
        name: "errors",
        description: "No description",
        aliases: [
        "errorsearch"
        ],
        usage: "",
        enabled: true,
        cog: "ErrorHandler"
      },
      {
        name: "cover",
        description: "Get the cover art for the track you are currently listening to.",
        aliases: [
        "coverart",
        "c"
        ],
        usage: "",
        enabled: true,
        cog: "LastFM"
      },
      {
        name: "userinfo",
        description: "Show detailed information about a user.",
        aliases: [
        "who",
        "ui",
        "info",
        "whoami",
        "profile"
        ],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "embed",
        description: "Sends an embed to a specified channel or the current one if none mentioned.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "whois",
        description: "Show basic information about a user not in a server by ID.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "bc",
        description: "Invocation for purge bot.",
        aliases: [],
        usage: "",
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
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "filter",
        description: "Filter words via Automod.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Automod"
      },
      {
        name: "roleid",
        description: "No description",
        aliases: [
        "rid"
        ],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "silence",
        description: "Deletes messages from a user everytime they talk",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "void",
        description: "asks void ai a question",
        aliases: [
        "ask"
        ],
        usage: "",
        enabled: true,
        cog: "Fun"
      },
      {
        name: "rank",
        description: "No description",
        aliases: [
        "level",
        "lvl"
        ],
        usage: "",
        enabled: true,
        cog: "Levels"
      },
      {
        name: "steal",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "vanity",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Vanity"
      },
      {
        name: "voicemaster",
        description: "Base command for VoiceMaster management.",
        aliases: [
        "vmaster",
        "vc",
        "vm"
        ],
        usage: "",
        enabled: true,
        cog: "VoiceMaster"
      },
      {
        name: "touch",
        description: "Touches a user.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Fun"
      },
      {
        name: "pause",
        description: "Pauses the current song.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Music"
      },
      {
        name: "bp",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "yabai",
        description: "Restarts the yabai service",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "autorole",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Server"
      },
      {
        name: "sbd",
        description: "Runs `help` with every common selfbot prefix to detect selfbots.",
        aliases: [
        "watchdog"
        ],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "serverid",
        description: "Shows the ID of the current server.",
        aliases: [
        "sid"
        ],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "fm",
        description: "Shows currently playing track via the LastFM API.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "LastFM"
      },
      {
        name: "install",
        description: "Generates an OAuth2 User Install link for the bot.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "lastfm",
        description: "Base command for LastFM related commands.",
        aliases: [
        "lf",
        "lfm"
        ],
        usage: "",
        enabled: true,
        cog: "LastFM"
      },
      {
        name: "autorolebots",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Server"
      },
      {
        name: "si",
        description: "No description",
        aliases: [
        "serverinfo"
        ],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "unsilence",
        description: "Unsilences a user",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "massban",
        description: "Mass bans users by User ID.",
        aliases: [
        "mban",
        "mb",
        "bulkban"
        ],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "immunity",
        description: "Excludes a user from an Automod rule.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Automod"
      },
      {
        name: "uwulock",
        description: "Uwulock commands.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Fun"
      },
      {
        name: "editsnipe",
        description: "No description",
        aliases: [
        "es"
        ],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "patch",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Developer"
      },
      {
        name: "ri",
        description: "No description",
        aliases: [
        "roleinfo"
        ],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "clipboard",
        description: "No description",
        aliases: [
        "cb"
        ],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "hotfix",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Developer"
      },
      {
        name: "react",
        description: "Reacts to a message",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "mc",
        description: "No description",
        aliases: [
        "membercount",
        "members"
        ],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "help",
        description: "No description",
        aliases: [
        "h",
        "commands"
        ],
        usage: "",
        enabled: true,
        cog: "No Category"
      },
      {
        name: "rtt",
        description: "No description",
        aliases: [
        "ping",
        "pong",
        "roundtrip",
        "latency"
        ],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "tech",
        description: ">_< this funny wittle command is made in spite of tech",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "ltt",
        description: "No description",
        aliases: [
        "oneway",
        "latencyoneway",
        "halfping"
        ],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "reactionsnipe",
        description: "No description",
        aliases: [
        "rs"
        ],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "jishaku",
        description: "No description",
        aliases: [
        "jsk"
        ],
        usage: "",
        enabled: true,
        cog: "Jishaku"
      },
      {
        name: "source",
        description: "No description",
        aliases: [
        "src"
        ],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "invocations",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Invocations"
      },
      {
        name: "emoji",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Utility"
      },
      {
        name: "bots",
        description: "Displays the number of bots in the server.",
        aliases: [
        "botcount"
        ],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "clearsnipe",
        description: "No description",
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
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "brew",
        description: "Runs a brew command. Supports the same syntax as the terminal, including --cask and --formulae.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "blacklist",
        description: "Manage blacklist settings.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Blacklist"
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
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "shards",
        description: "Shows information about the shards the bot is using.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "serverbanner",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "changeavatar",
        description: "No description",
        aliases: [
        "changeavatar!"
        ],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "flameshot",
        description: "Uses Flameshot to take a screenshot of whereever the mouse is currently located.",
        aliases: [
        "fs"
        ],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "pat",
        description: "Pats a user >_<",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Reactions"
      },
      {
        name: "button",
        description: "Embeds as many buttons as possible.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Fun"
      },
      {
        name: "lock",
        description: "Locks a channel from everyone, or a role if specified.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "playfairs",
        description: "Why do I need a command for myself?",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "scrobbles",
        description: "Get the total scrobbles for a specific user.",
        aliases: [
        "sc",
        "plays"
        ],
        usage: "",
        enabled: true,
        cog: "LastFM"
      },
      {
        name: "sicon",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Information"
      },
      {
        name: "spotify",
        description: "Spotify commands",
        aliases: [
        "spotifyctl"
        ],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "avoco",
        description: ">_< this funny wittle command is made in spite of avoco",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "nick",
        description: "Base command for nickname management.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "o",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Owner"
      },
      {
        name: "purge",
        description: "Base command for purging messages. Also purges a specified amount of messages if invoked with a number.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: "unlock",
        description: "Unlocks a channel from everyone, or a role if specified.",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Moderation"
      },
      {
        name: ",;",
        description: "Common emoticon, bots prefix is ; so whynot make a command for the emoticon :p",
        aliases: [
        ".;",
        "-;"
        ],
        usage: "",
        enabled: true,
        cog: "Fun"
      },
      {
        name: "gate",
        description: "No description",
        aliases: [],
        usage: "",
        enabled: true,
        cog: "Server"
      }
    ],
    "count": 153
    }
];

const groupedCommands = commands[0].commands.reduce<Record<string, Command[]>>((acc, command) => {
  if (!acc[command.cog]) {
    acc[command.cog] = [];
  }
  acc[command.cog].push(command);
  return acc;
}, {});

const sortedCategories = Object.keys(groupedCommands).sort();
const sortedCommands = sortedCategories.map((category) =>
  groupedCommands[category].sort((a, b) => a.name.localeCompare(b.name))
);

export default function DocsPage() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center">Documentation</h1>
      <p className="mt-4 text-lg text-center">
        Below is the categorized documentation for all commands.
      </p>

      {/* Table of Contents */}
      <nav className="mt-8">
        <h2 className="text-2xl font-semibold">Table of Contents</h2>
        <ul className="list-disc list-inside mt-4">
          {sortedCategories.map((category) => (
            <li key={category}>
              <a href={`#${category}`} className="text-blue-500 hover:underline">
                {category}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Command Documentation */}
      <section className="mt-10 space-y-16">
        {sortedCategories.map((category, index) => (
          <div key={category} id={category} className="mt-10">
            <h2 className="text-3xl font-bold">{category}</h2>
            <ul className="mt-4 space-y-4">
              {sortedCommands[index].map((command: Command) => (
                <li key={command.name} className="border-b pb-4">
                  <h3 className="text-xl font-semibold">{command.name}</h3>
                  <p className="mt-2">
                    <strong>Description:</strong>{" "}
                    {command.description || "No description provided."}
                  </p>
                  <p className="mt-2">
                    <strong>Aliases:</strong>{" "}
                    {command.aliases.length > 0
                      ? command.aliases.join(", ")
                      : "None"}
                  </p>
                  <p className="mt-2">
                    <strong>Usage:</strong>{" "}
                    {command.usage || "No usage information provided."}
                  </p>
                  <p className="mt-2">
                    <strong>Enabled:</strong> {command.enabled ? "Yes" : "No"}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}