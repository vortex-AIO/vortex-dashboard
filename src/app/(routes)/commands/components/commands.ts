/*
 * Fuck making an API, I'll manually import the commands if I want.
 * I have every right to.
 */

// ion even know what this shi does 😭✌️
type ImportedCommand = {
    name: string
    description: string
    aliases: string[]
    usage: string
    enabled: boolean
    cog: string
    permissions: string
    hidden?: boolean
}

type CommandsResponse = {
    status: string
    commands: ImportedCommand[]
    count: number
}

const commands: CommandsResponse[] = [
    {
        status: "success",
        commands: [
            {
                name: ",;",
                description: `No description`,
                aliases: [".;", "-;"],
                usage: ";,; ,;",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "3",
                description: `;3`,
                aliases: [],
                usage: ";3 ;3",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "addxp",
                description: `Add XP to a user in the server.`,
                aliases: ["givexp"],
                usage: ";addxp <user> <xp>",
                enabled: true,
                cog: "Levels",
                permissions: "None",
                hidden: true
            },
            {
                name: "afk",
                description: `Set the AFK status with an optional reason.`,
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
                    "apt",
                    "sleeping",
                    "sleep",
                    "tired"
                ],
                usage: ";afk [reason=AFK]",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "ai",
                description: `Toggle AI functionality for the server or a specific channel.`,
                aliases: [],
                usage: ";ai <enabled> [channel]",
                enabled: true,
                cog: "AICommands",
                permissions: "None",
                hidden: false
            },
            {
                name: "ascii",
                description: `Converts a given message into ASCII art.`,
                aliases: ["as"],
                usage: ";ascii <message>",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "asslore",
                description: `Adds a new lore entry.`,
                aliases: [],
                usage: ";asslore ",
                enabled: true,
                cog: "Invocations",
                permissions: "None",
                hidden: false
            },
            {
                name: "attachment",
                description: `No description`,
                aliases: [],
                usage: ";attachment <file (upload a file)>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "automod",
                description: `No description`,
                aliases: ["am"],
                usage: ";automod ",
                enabled: true,
                cog: "Automod",
                permissions: "None",
                hidden: false
            },
            {
                name: "autorole",
                description: `No description`,
                aliases: [],
                usage: ";autorole <role>",
                enabled: true,
                cog: "Server",
                permissions: "None",
                hidden: false
            },
            {
                name: "autorolebots",
                description: `Automatically assigns a role to new bot members for this server.`,
                aliases: [],
                usage: ";autorolebots <role>",
                enabled: true,
                cog: "Server",
                permissions: "None",
                hidden: false
            },
            {
                name: "avatar",
                description: `Displays the avatar of the specified user or yourself if no one is mentioned.`,
                aliases: ["pfp", "av"],
                usage: ";avatar [member]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "avoco",
                description: `No description`,
                aliases: [],
                usage: ";avoco [name]",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "ban",
                description: `No description`,
                aliases: [
                    "banish",
                    "yeet",
                    "bonk",
                    "perish",
                    "smite",
                    "hammer",
                    "devinejustice",
                    "corpses",
                    "murk",
                    "lavender",
                    "floral",
                    "bannerbutbad",
                    "ban-ner",
                    "repel",
                    "disintegrate",
                    "deport",
                    "kys"
                ],
                usage: ";ban [target] [reason]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "banlist",
                description: `Display the server's ban list in a paginated embed.`,
                aliases: ["bans"],
                usage: ";banlist ",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "banner",
                description: `Displays the banner of the specified user or yourself if no one is mentioned.`,
                aliases: [],
                usage: ";banner [member]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "bathe",
                description: `No description`,
                aliases: [],
                usage: ";bathe <user>",
                enabled: true,
                cog: "Reactions",
                permissions: "None",
                hidden: false
            },
            {
                name: "bc",
                description: `Invocation for purge bot.`,
                aliases: [],
                usage: ";bc [amount]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "bi",
                description: `Shows detailed information about the bot.`,
                aliases: ["botinfo", "abt", "bitch"],
                usage: ";bi ",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "blacklist",
                description: `Base blacklist command. Use subcommands to manage blacklist.`,
                aliases: [],
                usage: ";blacklist ",
                enabled: true,
                cog: "Blacklist",
                permissions: "None",
                hidden: false
            },
            {
                name: "blacktea",
                description: `No description`,
                aliases: [],
                usage: ";blacktea ",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "boop",
                description: `Boop someone with cuteness!`,
                aliases: [],
                usage: ";boop <user>",
                enabled: true,
                cog: "Reactions",
                permissions: "None",
                hidden: false
            },
            {
                name: "bots",
                description: `Displays the number of bots in the server.`,
                aliases: ["botcount"],
                usage: ";bots ",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "bp",
                description: `Base command for purging only the bots messages.`,
                aliases: [],
                usage: ";bp ",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "brew",
                description: `Runs a brew command. Supports the same syntax as the terminal, including --cask and --formulae.`,
                aliases: [],
                usage: ";brew <command>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "button",
                description: `No description`,
                aliases: [],
                usage: ";button ",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "changeavatar",
                description: `Change the bot's avatar to the provided URL or attachment.`,
                aliases: ["changeavatar!"],
                usage: ";changeavatar [url] <attachment (upload a file)>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "changebanner",
                description: `Change the bot's banner to the provided URL or attachment.`,
                aliases: ["changebanner!"],
                usage: ";changebanner [url] <attachment (upload a file)>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "channel",
                description: `No description`,
                aliases: [],
                usage: ";channel ",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "clearsnipe",
                description: `Clear the snipe history.`,
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
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "clipboard",
                description: `Show the current contents of the clipboard.`,
                aliases: ["cb"],
                usage: ";clipboard ",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "command",
                description: `No description`,
                aliases: [],
                usage: ";command ",
                enabled: true,
                cog: "CommandManager",
                permissions: "None",
                hidden: false
            },
            {
                name: "commands",
                description: `No description`,
                aliases: [],
                usage: ";commands ",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "commands.json",
                description: `No description`,
                aliases: [],
                usage: ";commands.json ",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "cover",
                description: `No description`,
                aliases: ["coverart", "c"],
                usage: ";cover [user]",
                enabled: true,
                cog: "LastFM",
                permissions: "None",
                hidden: false
            },
            {
                name: "createinvite",
                description: `Creates a unique invite for the server. (non-vanity).`,
                aliases: ["createinv", "instantinvite"],
                usage: ";createinvite [channel]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "define",
                description: `No description`,
                aliases: [],
                usage: ";define <word>",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "disable",
                description: `Disable XP gain in the server.`,
                aliases: ["disablexp"],
                usage: ";disable ",
                enabled: true,
                cog: "Levels",
                permissions: "None",
                hidden: true
            },
            {
                name: "disconnect",
                description: `Server disconnects the mentioned member, or self if none mentioned.`,
                aliases: ["dc"],
                usage: ";disconnect [member]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "dm",
                description: `Sends a direct message to a specified user.`,
                aliases: [],
                usage: ";dm <user> <message>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "docs",
                description: `No description`,
                aliases: ["documentation"],
                usage: ";docs ",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "echo",
                description: `Echoes the provided message. Only the owner can use this command.`,
                aliases: [],
                usage: ";echo <message>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "editsnipe",
                description: `Snipe the last edited message.`,
                aliases: ["es"],
                usage: ";editsnipe ",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "embed",
                description: `Sends an embed to a specified channel or the current one if none mentioned.`,
                aliases: [],
                usage: ";embed [channel] [title] [description] <color> [thumbnail] [footer]",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "emoji",
                description: `Base command for emoji commands.`,
                aliases: [],
                usage: ";emoji ",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "errors",
                description: `Search errors by ID. Requires bot owner permissions.`,
                aliases: ["errorsearch", "tb", "traceback"],
                usage: ";errors [id]",
                enabled: true,
                cog: "ErrorHandler",
                permissions: "None",
                hidden: false
            },
            {
                name: "fetch",
                description: `Fetches the sticker from a reply and sends it as a downloadable file.`,
                aliases: [],
                usage: ";fetch ",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "flameshot",
                description: `No description`,
                aliases: ["fs"],
                usage: ";flameshot ",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "fm",
                description: `Shows currently playing track via the LastFM API.`,
                aliases: [],
                usage: ";fm [user]",
                enabled: true,
                cog: "LastFM",
                permissions: "None",
                hidden: false
            },
            {
                name: "fn",
                description: `No description`,
                aliases: ["nickforce", "forcednick"],
                usage: ";fn [member] [forced_nick]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "force_remove_afk",
                description: `Forcefully removes AFK status from a mentioned user if they are AFK.`,
                aliases: ["uafk", "unafk"],
                usage: ";force_remove_afk <member>",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "gate",
                description: `No description`,
                aliases: [],
                usage: ";gate ",
                enabled: true,
                cog: "Server",
                permissions: "None",
                hidden: false
            },
            {
                name: "git",
                description: `No description`,
                aliases: [],
                usage: ";git ",
                enabled: true,
                cog: "Git",
                permissions: "None",
                hidden: false
            },
            {
                name: "hardban",
                description: `No description`,
                aliases: ["hb", "hban"],
                usage: ";hardban <user_id> [reason]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "hello",
                description: `No description`,
                aliases: [],
                usage: ";hello <name>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "help",
                description: `Shows help about the bot, a command, or a category of commands.`,
                aliases: ["h", "man", "manual"],
                usage: ";help [command]",
                enabled: true,
                cog: "No Category",
                permissions: "None",
                hidden: false
            },
            {
                name: "hide",
                description: `Hide a channel from everyone, or a role if specified.`,
                aliases: [],
                usage: ";hide [channel] [role]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "hotfix",
                description: `Sends the hotfix update from the hotfix.txt file with role mention.`,
                aliases: [],
                usage: ";hotfix ",
                enabled: true,
                cog: "Developer",
                permissions: "None",
                hidden: false
            },
            {
                name: "hug",
                description: `Give someone a warm hug!`,
                aliases: [],
                usage: ";hug <user>",
                enabled: true,
                cog: "Reactions",
                permissions: "None",
                hidden: false
            },
            {
                name: "imports",
                description: `No description`,
                aliases: [],
                usage: ";imports ",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "inrole",
                description: `Displays all members in a specific role with interactive buttons.`,
                aliases: ["ir"],
                usage: ";inrole <role>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "install",
                description: `Generates an OAuth2 User Install link for the bot.`,
                aliases: [],
                usage: ";install ",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "invite",
                description: `Generates an invite link for the bot.`,
                aliases: ["gbi"],
                usage: ";invite [user]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "invocations",
                description: `Shows detailed information about all existing invocations.`,
                aliases: [],
                usage: ";invocations ",
                enabled: true,
                cog: "Invocations",
                permissions: "None",
                hidden: false
            },
            {
                name: "jail",
                description: `Jails a user, applying the jailed role and logging the event.`,
                aliases: [],
                usage: ";jail <member> [reason=No reason provided]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "jishaku",
                description: `The Jishaku debug and diagnostic commands.\n\nThis command on its own gives a status brief.\nAll other functionality is within its subcommands.`,
                aliases: ["jsk", "磁石"],
                usage: ";jishaku ",
                enabled: true,
                cog: "Jishaku",
                permissions: "None",
                hidden: true
            },
            {
                name: "joinvc",
                description: `No description`,
                aliases: ["jvc"],
                usage: ";joinvc ",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "kick",
                description: `Kicks a member from the server.`,
                aliases: ["sock"],
                usage: ";kick [member] [user_id] [reason]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "kill",
                description: `Eliminate someone from existence!`,
                aliases: [],
                usage: ";kill <user>",
                enabled: true,
                cog: "Reactions",
                permissions: "None",
                hidden: false
            },
            {
                name: "kiss",
                description: `Send a sweet kiss to someone special!`,
                aliases: [],
                usage: ";kiss <user>",
                enabled: true,
                cog: "Reactions",
                permissions: "None",
                hidden: false
            },
            {
                name: "l",
                description: `No description`,
                aliases: [],
                usage: ";l ",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "language",
                description: `Sets the default language for the bot to use when translating.`,
                aliases: [],
                usage: ";language <language>",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "lastfm",
                description: `No description`,
                aliases: ["lf", "lfm"],
                usage: ";lastfm ",
                enabled: true,
                cog: "LastFM",
                permissions: "None",
                hidden: false
            },
            {
                name: "leaderboard",
                description: `No description`,
                aliases: ["lb", "top"],
                usage: ";leaderboard [page=1]",
                enabled: true,
                cog: "Levels",
                permissions: "None",
                hidden: false
            },
            {
                name: "len",
                description: `No description`,
                aliases: ["length"],
                usage: ";len [expr]",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "lock",
                description: `Lock a channel from everyone, or a role if specified.`,
                aliases: [],
                usage: ";lock [channel] [role]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "lore",
                description: `Shows the lorebook for a user with pagination.\nIf no user is mentioned, shows the invoking user's lorebook.`,
                aliases: [],
                usage: ";lore [user]",
                enabled: true,
                cog: "Lore",
                permissions: "None",
                hidden: false
            },
            {
                name: "loreadd",
                description: `Adds a new lore entry.`,
                aliases: ["addlore"],
                usage: ";loreadd ",
                enabled: true,
                cog: "Invocations",
                permissions: "None",
                hidden: false
            },
            {
                name: "ltt",
                description: `Estimate the one-way latency (LTT) of the bot.`,
                aliases: ["oneway", "latencyoneway", "halfping"],
                usage: ";ltt ",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "massban",
                description: `No description`,
                aliases: ["mban", "mb", "bulkban"],
                usage: ";massban [user_ids...] [reason]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "mc",
                description: `No description`,
                aliases: ["membercount", "members"],
                usage: ";mc ",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "nick",
                description: `No description`,
                aliases: [],
                usage: ";nick [member] [new_nick]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "nothing",
                description: `Literally does nothing.`,
                aliases: [],
                usage: ";nothing ;nothing",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "nuke",
                description: `Nukes the current channel with confirmation.`,
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
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "nword",
                description: `See how many times you have said the nword.`,
                aliases: [],
                usage: ";nword [user]",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "o",
                description: `Runs the specified command as the bot's owner.`,
                aliases: [],
                usage: ";o <command>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "pat",
                description: `Give someone a nice headpat!`,
                aliases: [],
                usage: ";pat <user>",
                enabled: true,
                cog: "Reactions",
                permissions: "None",
                hidden: false
            },
            {
                name: "patch",
                description: `Sends the patch update from the patch.txt file with role mention.`,
                aliases: [],
                usage: ";patch ",
                enabled: true,
                cog: "Developer",
                permissions: "None",
                hidden: false
            },
            {
                name: "pause",
                description: `Pause the current song.`,
                aliases: [],
                usage: ";pause ",
                enabled: true,
                cog: "Music",
                permissions: "None",
                hidden: false
            },
            {
                name: "permissions",
                description: `Checks the permissions of a member or a role.`,
                aliases: ["perm", "perms"],
                usage: ";permissions [target]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "pickupline",
                description: `Get a random pickup line.`,
                aliases: ["pickup", "rizz"],
                usage: ";pickupline [user]",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "play",
                description: `Play a song from YouTube.\n\nParameters:\n- query: The search term or YouTube URL`,
                aliases: [],
                usage: ";play <query>",
                enabled: true,
                cog: "Music",
                permissions: "None",
                hidden: false
            },
            {
                name: "playfairs",
                description: `No description`,
                aliases: [],
                usage: ";playfairs ",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "playunfair",
                description: `No description`,
                aliases: [],
                usage: ";playunfair ",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "pp",
                description: `See someones pp size`,
                aliases: ["dih", "dihsize"],
                usage: ";pp [user=<you>]",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "prefix",
                description: `No description`,
                aliases: [],
                usage: ";prefix ",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "privacy",
                description: `No description`,
                aliases: [],
                usage: ";privacy ",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "punch",
                description: `Punch someone with your virtual fists!`,
                aliases: [],
                usage: ";punch <user>",
                enabled: true,
                cog: "Reactions",
                permissions: "None",
                hidden: false
            },
            {
                name: "purge",
                description: `No description`,
                aliases: [],
                usage: ";purge [amount]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "queue",
                description: `Shows the current queue or adds a track to the queue.`,
                aliases: [],
                usage: ";queue [url]",
                enabled: true,
                cog: "Music",
                permissions: "None",
                hidden: false
            },
            {
                name: "r",
                description: `No description`,
                aliases: ["role"],
                usage: ";r [member] [role_input]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "rank",
                description: `No description`,
                aliases: ["level", "lvl"],
                usage: ";rank [user]",
                enabled: true,
                cog: "Levels",
                permissions: "None",
                hidden: false
            },
            {
                name: "react",
                description: `Reacts to a message.`,
                aliases: [],
                usage: ";react <message_id> <emoji>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "reactionmute",
                description: `Revokes a users permissions to react in a channel.`,
                aliases: ["rmute"],
                usage: ";reactionmute <member>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "reactionsnipe",
                description: `Snipes the last removed reaction in the channel.`,
                aliases: ["rs"],
                usage: ";reactionsnipe ",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "reactionunmute",
                description: `Grants a users permissions to react in a channel.`,
                aliases: ["rumute", "runmute"],
                usage: ";reactionunmute <member>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "reminder",
                description: `Base command for reminder commands.`,
                aliases: ["reminders"],
                usage: ";reminder ",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "reset",
                description: `Reset a user's XP in the server.`,
                aliases: ["resetxp"],
                usage: ";reset <user>",
                enabled: true,
                cog: "Levels",
                permissions: "None",
                hidden: true
            },
            {
                name: "resetall",
                description: `Reset all users' XP in the server.`,
                aliases: ["resetallxp"],
                usage: ";resetall ",
                enabled: true,
                cog: "Levels",
                permissions: "None",
                hidden: true
            },
            {
                name: "resume",
                description: `Resume the current song.`,
                aliases: [],
                usage: ";resume ",
                enabled: true,
                cog: "Music",
                permissions: "None",
                hidden: false
            },
            {
                name: "ri",
                description: `No description`,
                aliases: ["roleinfo"],
                usage: ";ri [role]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "roleid",
                description: `Shows the role ID of the specified role or yourself if no one is mentioned.`,
                aliases: ["rid"],
                usage: ";roleid [role]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "roles",
                description: `No description`,
                aliases: [],
                usage: ";roles [user]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "rtt",
                description: `Check the round-trip time (RTT) of the bot.`,
                aliases: ["ping", "pong", "roundtrip", "latency"],
                usage: ";rtt ",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "runas",
                description: `Run a command with a different user, channel, or thread, optionally bypassing checks and cooldowns.`,
                aliases: ["execute", "exec", "override!", "execute!", "exec!", "override"],
                usage: ";runas [overrides]... <command_string>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "sav",
                description: `Displays the server avatar of the specified user or yourself if no one is mentioned.`,
                aliases: [],
                usage: ";sav [member]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "sbanner",
                description: `Displays the server specific banner of the specified user or yourself if no one is mentioned.`,
                aliases: ["memberbanner"],
                usage: ";sbanner [member]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "sbd",
                description: `No description`,
                aliases: ["watchdog"],
                usage: ";sbd ",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "scrobbles",
                description: `No description`,
                aliases: ["sc", "plays"],
                usage: ";scrobbles [user]",
                enabled: true,
                cog: "LastFM",
                permissions: "None",
                hidden: false
            },
            {
                name: "sdeafen",
                description: `Server deafens the mentioned member, or self if none mentioned.`,
                aliases: ["sd", "deafen"],
                usage: ";sdeafen [member]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "send",
                description: `Sends a message to a specified channel or the current one if none mentioned.`,
                aliases: [],
                usage: ";send [channel] [message] [message_id] [attachment (upload a file)]",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "server",
                description: `No description`,
                aliases: ["config", "serverconfig", "configuration"],
                usage: ";server ",
                enabled: true,
                cog: "Server",
                permissions: "None",
                hidden: false
            },
            {
                name: "serverbanner",
                description: `Shows the server banner in an embed.`,
                aliases: [],
                usage: ";serverbanner ",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "serverid",
                description: `No description`,
                aliases: ["sid"],
                usage: ";serverid ",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "servers",
                description: `Server management and Blacklist`,
                aliases: [],
                usage: ";servers ",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "setlevel",
                description: `Set a user's level in the server.`,
                aliases: ["setlvl"],
                usage: ";setlevel <user> <level>",
                enabled: true,
                cog: "Levels",
                permissions: "None",
                hidden: true
            },
            {
                name: "shards",
                description: `Shows information about the shards the bot is using.`,
                aliases: [],
                usage: ";shards ",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "si",
                description: `Show the server info.`,
                aliases: ["serverinfo"],
                usage: ";si ",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "sicon",
                description: `Shows the server icon in an embed.`,
                aliases: [],
                usage: ";sicon ",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "silence",
                description: `Deletes messages from a user everytime they talk.`,
                aliases: [],
                usage: ";silence <user>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "skibidi",
                description: `No description`,
                aliases: ["brainrot"],
                usage: ";skibidi ",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "slap",
                description: `Slap some sense into someone!`,
                aliases: [],
                usage: ";slap <user>",
                enabled: true,
                cog: "Reactions",
                permissions: "None",
                hidden: false
            },
            {
                name: "smute",
                description: `Server mutes the mentioned member, or self if none mentioned.`,
                aliases: ["sm", "mute"],
                usage: ";smute [member]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "sname",
                description: `Change the name of a server.`,
                aliases: ["servername"],
                usage: ";sname [new_name]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "snipe",
                description: `Snipes recently deleted messages`,
                aliases: ["s"],
                usage: ";snipe ",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "source",
                description: `Fetches source code.`,
                aliases: ["src"],
                usage: ";source ",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "splash",
                description: `Shows the server splash (invite banner) in an embed.`,
                aliases: [],
                usage: ";splash ",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "spotify",
                description: `No description`,
                aliases: ["spotifyctl"],
                usage: ";spotify ",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "staffstrip",
                description: `No description`,
                aliases: ["strip", "stripstaff"],
                usage: ";staffstrip <member>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "status",
                description: `Change the bot's status.`,
                aliases: [],
                usage: ";status [status]",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "steal",
                description: `Steal first emoji, sticker from replied message, if not provided`,
                aliases: [],
                usage: ";steal [emoji]",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "stop",
                description: `Stop the current song and disconnect from voice.`,
                aliases: [],
                usage: ";stop ",
                enabled: true,
                cog: "Music",
                permissions: "None",
                hidden: false
            },
            {
                name: "sundeafen",
                description: `Server undeafens the mentioned member, or self if none mentioned.`,
                aliases: ["sund", "sunday", "undeafen"],
                usage: ";sundeafen [member]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "sunmute",
                description: `Server unmutes the mentioned member, or self if none mentioned.`,
                aliases: ["sum", "unmute"],
                usage: ";sunmute [member]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "sync",
                description: `Syncs a channel with the default permissions for its category, or all channels in a category if specified.`,
                aliases: [],
                usage: ";sync [channel_or_category]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "tableflip",
                description: `No description`,
                aliases: [],
                usage: ";tableflip ",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "tech",
                description: `No description`,
                aliases: [],
                usage: ";tech [name]",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "terms",
                description: `No description`,
                aliases: [],
                usage: ";terms ",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "test",
                description: `No description`,
                aliases: [],
                usage: ";test ",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "tiktok",
                description: `No description`,
                aliases: ["tt"],
                usage: ";tiktok ",
                enabled: true,
                cog: "Reposters",
                permissions: "None",
                hidden: false
            },
            {
                name: "time",
                description: `Get the current time for yourself or another user based on their set timezone.`,
                aliases: ["timezone", "tz"],
                usage: ";time [member]",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "timeout",
                description: `No description`,
                aliases: ["to", "bdsm", "ballgag", "stfu", "sybau", "smd"],
                usage: ";timeout [member] [duration=5m]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "touch",
                description: `No description`,
                aliases: [],
                usage: ";touch <user>",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "trackplays",
                description: `No description`,
                aliases: ["tp"],
                usage: ";trackplays [user] [artist] [track]",
                enabled: true,
                cog: "LastFM",
                permissions: "None",
                hidden: false
            },
            {
                name: "translate",
                description: `Translates the given text or a replied-to message into the default language.\n\nUsage:\n,translate <text>\nOR\nReply to a message with ,translate`,
                aliases: ["trans", "wtf"],
                usage: ";translate [text]",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "unban",
                description: `Unbans a user by their User ID.`,
                aliases: ["befree"],
                usage: ";unban <user_id>",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "unflip",
                description: `No description`,
                aliases: [],
                usage: ";unflip ",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "unhide",
                description: `Unhide a channel from everyone, or a role if specified.`,
                aliases: [],
                usage: ";unhide [channel] [role]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "unjail",
                description: `Removes the jailed role from a user and logs the event.`,
                aliases: [],
                usage: ";unjail <member> [reason=No reason provided]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "unlock",
                description: `Unlock a channel from everyone, or a role if specified.`,
                aliases: [],
                usage: ";unlock [channel] [role]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "unsilence",
                description: `Unsilences a user.`,
                aliases: [],
                usage: ";unsilence <user>",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "untimeout",
                description: `No description`,
                aliases: ["uto", "futo"],
                usage: ";untimeout [member] [user_id]",
                enabled: true,
                cog: "Moderation",
                permissions: "None",
                hidden: false
            },
            {
                name: "urban",
                description: `No description`,
                aliases: [],
                usage: ";urban <word>",
                enabled: true,
                cog: "Utility",
                permissions: "None",
                hidden: false
            },
            {
                name: "userid",
                description: `Shows the user ID of the specified user or yourself if no one is mentioned.`,
                aliases: ["uid", "whoid", "id"],
                usage: ";userid [user_id]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "userinfo",
                description: `Displays detailed user information with badges, activity, and roles.`,
                aliases: ["who", "ui", "info", "whoami", "profile"],
                usage: ";userinfo [member]",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "uwulock",
                description: `Uwulock commands.`,
                aliases: [],
                usage: ";uwulock <user> [flag=False]",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "voicemaster",
                description: `No description`,
                aliases: ["vmaster", "vc", "vm"],
                usage: ";voicemaster ",
                enabled: true,
                cog: "VoiceMaster",
                permissions: "None",
                hidden: false
            },
            {
                name: "void",
                description: `No description`,
                aliases: ["ask"],
                usage: ";void <question>",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "vortex",
                description: `No description`,
                aliases: [],
                usage: ";vortex ",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "whitelist",
                description: `Base whitelist command. Use subcommands to manage whitelist.`,
                aliases: [],
                usage: ";whitelist ",
                enabled: true,
                cog: "Blacklist",
                permissions: "None",
                hidden: false
            },
            {
                name: "whois",
                description: `Displays basic user information: username, avatar, and ID.`,
                aliases: [],
                usage: ";whois <user_id>",
                enabled: true,
                cog: "Information",
                permissions: "None",
                hidden: false
            },
            {
                name: "wolfram",
                description: `No description`,
                aliases: ["wolframalpha", "wr"],
                usage: ";wolfram <question>",
                enabled: true,
                cog: "Fun",
                permissions: "None",
                hidden: false
            },
            {
                name: "yabai",
                description: `No description`,
                aliases: [],
                usage: ";yabai ",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            },
            {
                name: "перезагрузка",
                description: `No description`,
                aliases: [],
                usage: ";перезагрузка [command]",
                enabled: true,
                cog: "Owner",
                permissions: "None",
                hidden: true
            }
        ],
        count: 174
    }
]

export default commands
