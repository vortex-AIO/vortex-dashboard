const commandsData = [
    {
        "id": "about::Information::cogs/information/information.py:73",
        "name": "about",
        "description": "About the bot or Developer.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "About the bot or Developer.",
        "aliases": [],
        "usage": [
            "/about interaction:discord.Interaction option:app_commands.Choice[str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "interaction",
                "kind": "positional_or_keyword",
                "type": "discord.Interaction",
                "default": null,
                "required": true
            },
            {
                "name": "option",
                "kind": "positional_or_keyword",
                "type": "app_commands.Choice[str]",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "option": "Select either Playfair, Heresy, or Vortex"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "slash"
        ],
        "commandType": "slash",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.describe(option='Select either Playfair, Heresy, or Vortex')",
            "app_commands.choices(option=[app_commands.Choice(name='Playfair', value='playfair'), app_commands.Choice(name='Vortex', value='vortex')])"
        ],
        "signature": "self, interaction: discord.Interaction, option: app_commands.Choice[str]",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 73,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L73",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "ac::Information::cogs/information/information.py:1890",
        "name": "ac",
        "description": "Air Conditioning",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";ac",
            "/ac"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1890,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1890",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "Add to Lore::Lore::cogs/lore/lore.py:29",
        "name": "Add to Lore",
        "description": "Add the selected message to Vortex lore.",
        "descriptionSource": "inferred",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            "Right-click a message > Apps > Add to Lore"
        ],
        "customUsage": null,
        "arguments": [],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "slash"
        ],
        "commandType": "context_menu",
        "kind": "context_menu",
        "cog": "Lore",
        "category": "Lore",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": null,
        "sourceFile": "cogs/lore/lore.py",
        "sourceLine": 29,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lore/lore.py#L29",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "addxp::Levels::cogs/levels/levels.py:109",
        "name": "addxp",
        "description": "Add XP to a user in the server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Add XP to a user in the server.",
        "aliases": [
            "givexp"
        ],
        "usage": [
            ";addxp <user> <xp>",
            "/addxp user:discord.User xp:int"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "commands.Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.User",
                "default": null,
                "required": true
            },
            {
                "name": "xp",
                "kind": "positional_or_keyword",
                "type": "int",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Levels",
        "category": "Levels",
        "permissions": [
            "is_owner()"
        ],
        "checks": [
            "is_owner()"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "is_owner()"
        ],
        "signature": "self, ctx: commands.Context, user: discord.User, xp: int",
        "sourceFile": "cogs/levels/levels.py",
        "sourceLine": 109,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/levels/levels.py#L109",
        "metadata": {
            "hidden": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "afk::Utility::cogs/utility/utility.py:196",
        "name": "afk",
        "description": "Set the AFK status with an optional reason.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Set the AFK status with an optional reason.",
        "aliases": [
            "kms",
            "goodnight",
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
        "usage": [
            ";afk [reason]",
            "/afk [reason:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "reason",
                "kind": "keyword_only",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "reason": "The reason for going AFK."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Utility",
        "category": "Utility",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.describe(reason='The reason for going AFK.')"
        ],
        "signature": "self, ctx: Context, *, reason: str=None",
        "sourceFile": "cogs/utility/utility.py",
        "sourceLine": 196,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/utility/utility.py#L196",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "afk leaderboard::Utility::cogs/utility/utility.py:402",
        "name": "afk leaderboard",
        "description": "Shows the AFK leaderboard.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shows the AFK leaderboard.",
        "aliases": [
            "lb"
        ],
        "usage": [
            ";afk leaderboard",
            "/afk leaderboard"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Utility",
        "category": "Utility",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/utility/utility.py",
        "sourceLine": 402,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/utility/utility.py#L402",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "afk remove::Utility::cogs/utility/utility.py:441",
        "name": "afk remove",
        "description": "Forcefully removes AFK status from a mentioned user if they are AFK.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Forcefully removes AFK status from a mentioned user if they are AFK.",
        "aliases": [
            "uafk",
            "unafk",
            "forceremove"
        ],
        "usage": [
            ";afk remove <member>",
            "/afk remove member:discord.Member"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Utility",
        "category": "Utility",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx, member: discord.Member",
        "sourceFile": "cogs/utility/utility.py",
        "sourceLine": 441,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/utility/utility.py#L441",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "afk set::Utility::cogs/utility/utility.py:339",
        "name": "afk set",
        "description": "Set or update your AFK status.",
        "descriptionSource": "inferred",
        "help": null,
        "docstring": null,
        "aliases": [
            "update"
        ],
        "usage": [
            ";afk set [reason]",
            "/afk set [reason:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "reason",
                "kind": "keyword_only",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Utility",
        "category": "Utility",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx, *, reason: str=None",
        "sourceFile": "cogs/utility/utility.py",
        "sourceLine": 339,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/utility/utility.py#L339",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "ai::AICommands::cogs/ai/commands.py:146",
        "name": "ai",
        "description": "Toggles the AI Cog per server or channel",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Toggle AI functionality for the server or a specific channel.",
        "aliases": [],
        "usage": [
            ";ai <enabled> [channel]",
            "/ai enabled:bool [channel:discord.TextChannel]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "enabled",
                "kind": "positional_or_keyword",
                "type": "bool",
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "discord.TextChannel",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "enabled": "Enable or Disable the AI in this server",
            "channel": "The channel to enable/disable the AI in (optional)"
        },
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "AICommands",
        "category": "AICommands",
        "permissions": [
            "app_commands.checks.has_permissions(administrator=True)"
        ],
        "checks": [
            "app_commands.checks.has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(enabled='Enable or Disable the AI in this server', channel='The channel to enable/disable the AI in (optional)')",
            "app_commands.checks.has_permissions(administrator=True)"
        ],
        "signature": "self, ctx: Context, enabled: bool, channel: discord.TextChannel=None",
        "sourceFile": "cogs/ai/commands.py",
        "sourceLine": 146,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/ai/commands.py#L146",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "amb::Owner::cogs/owner/owner.py:1590",
        "name": "amb",
        "description": "Create multiple automod rules in specified guilds",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";amb [guild_ids]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "guild_ids",
                "kind": "var_positional",
                "type": "str",
                "required": false
            }
        ],
        "optionDescriptions": {
            "guild_ids": "The guild ids to create automod rules in, separated by spaces"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [
            "app_commands.describe(guild_ids='The guild ids to create automod rules in, separated by spaces')"
        ],
        "signature": "self, ctx: Context, *guild_ids: str",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 1590,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L1590",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "antilink::Automod::cogs/automod/automod.py:623",
        "name": "antilink",
        "description": "Base command for Antilink management.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";antilink",
            "/antilink"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Automod",
        "category": "Automod",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/automod/automod.py",
        "sourceLine": 623,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/automod/automod.py#L623",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "antilink alert::Automod::cogs/automod/automod.py:967",
        "name": "antilink alert",
        "description": "Configure alert settings for Antilink rule.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";antilink alert [enabled] [channel]",
            "/antilink alert [enabled:bool] [channel:Optional[discord.TextChannel]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "enabled",
                "kind": "positional_or_keyword",
                "type": "bool",
                "default": "None",
                "required": false
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.TextChannel]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "enabled": "Whether to enable or disable alerts",
            "channel": "The channel to send alerts to (leave empty to keep current or if disabled)"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Automod",
        "category": "Automod",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(enabled='Whether to enable or disable alerts', channel='The channel to send alerts to (leave empty to keep current or if disabled)')",
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context, enabled: bool=None, channel: Optional[discord.TextChannel]=None",
        "sourceFile": "cogs/automod/automod.py",
        "sourceLine": 967,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/automod/automod.py#L967",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "antilink disable::Automod::cogs/automod/automod.py:811",
        "name": "antilink disable",
        "description": "Disable Antilink.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";antilink disable",
            "/antilink disable"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Automod",
        "category": "Automod",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/automod/automod.py",
        "sourceLine": 811,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/automod/automod.py#L811",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "antilink enable::Automod::cogs/automod/automod.py:632",
        "name": "antilink enable",
        "description": "Enable Antilink.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";antilink enable <url_type> <action> [channel] [time]",
            "/antilink enable url_type:str action:str [channel:Optional[discord.TextChannel]] [time:Optional[str]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "url_type",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            },
            {
                "name": "action",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.TextChannel]",
                "default": "None",
                "required": false
            },
            {
                "name": "time",
                "kind": "positional_or_keyword",
                "type": "Optional[str]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "url_type": "The type of URL to filter.",
            "action": "The type of action to take when a link is detected.",
            "channel": "The channel to send alerts to (leave empty for none)",
            "time": "The time to timeout the user for (leave empty for none)"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Automod",
        "category": "Automod",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)",
            "app_commands.describe(url_type='The type of URL to filter.', action='The type of action to take when a link is detected.', channel='The channel to send alerts to (leave empty for none)', time='The time to timeout the user for (leave empty for none)')",
            "app_commands.choices(url_type=[app_commands.Choice(name='All', value='all'), app_commands.Choice(name='Discord', value='discord'), app_commands.Choice(name='Media', value='media'), app_commands.Choice(name='NSFW', value='nsfw'), app_commands.Choice(name='Social', value='social')], action=[app_commands.Choice(name='Block', value='block'), app_commands.Choice(name='Timeout', value='timeout')])"
        ],
        "signature": "self, ctx: Context, url_type: str, action: str, channel: Optional[discord.TextChannel]=None, time: Optional[str]=None",
        "sourceFile": "cogs/automod/automod.py",
        "sourceLine": 632,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/automod/automod.py#L632",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "antilink exempt::Automod::cogs/automod/automod.py:940",
        "name": "antilink exempt",
        "description": "Exempt a role from the Antilink Filter.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";antilink exempt <role>",
            "/antilink exempt role:discord.Role"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "role": "The role to exempt."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Automod",
        "category": "Automod",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(role='The role to exempt.')",
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context, role: discord.Role",
        "sourceFile": "cogs/automod/automod.py",
        "sourceLine": 940,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/automod/automod.py#L940",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "antilink remove::Automod::cogs/automod/automod.py:828",
        "name": "antilink remove",
        "description": "Remove a specific URL type from the antilink rule.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Remove specific URL types from the antilink rule.",
        "aliases": [],
        "usage": [
            ";antilink remove <url_type>",
            "/antilink remove url_type:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "url_type",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "url_type": "The type of URL to remove from the antilink rule."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Automod",
        "category": "Automod",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)",
            "app_commands.describe(url_type='The type of URL to remove from the antilink rule.')",
            "app_commands.choices(url_type=[app_commands.Choice(name='All URLs', value='all'), app_commands.Choice(name='Discord Invites', value='discord'), app_commands.Choice(name='Media Files', value='media'), app_commands.Choice(name='NSFW Content', value='nsfw'), app_commands.Choice(name='Social Media', value='social')])"
        ],
        "signature": "self, ctx: Context, url_type: str",
        "sourceFile": "cogs/automod/automod.py",
        "sourceLine": 828,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/automod/automod.py#L828",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "ascii::Fun::cogs/fun/fun.py:947",
        "name": "ascii",
        "description": "Converts a given message into ASCII art.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Converts a given message into ASCII art.",
        "aliases": [],
        "usage": [
            ";ascii <message>",
            "/ascii message:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "message",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx, *, message: str",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 947,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L947",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "asslore::Invocations::cogs/invocations/invocations.py:58",
        "name": "asslore",
        "description": "Adds a new lore entry.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Adds a new lore entry.",
        "aliases": [],
        "usage": [
            ";asslore"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Invocations",
        "category": "Invocations",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/invocations/invocations.py",
        "sourceLine": 58,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/invocations/invocations.py#L58",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "automod::Automod::cogs/automod/automod.py:69",
        "name": "automod",
        "description": "Base command for Automod Management.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "am"
        ],
        "usage": [
            ";automod",
            "/automod"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Automod",
        "category": "Automod",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/automod/automod.py",
        "sourceLine": 69,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/automod/automod.py#L69",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "automod alert::Automod::cogs/automod/automod.py:480",
        "name": "automod alert",
        "description": "Configure alert settings for Automod rule.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";automod alert [enabled] [channel]",
            "/automod alert [enabled:bool] [channel:Optional[discord.TextChannel]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "enabled",
                "kind": "positional_or_keyword",
                "type": "bool",
                "default": "None",
                "required": false
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.TextChannel]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "enabled": "Whether to enable or disable alerts",
            "channel": "The channel to send alerts to (leave empty to keep current or if disabled)"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Automod",
        "category": "Automod",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(enabled='Whether to enable or disable alerts', channel='The channel to send alerts to (leave empty to keep current or if disabled)')",
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context, enabled: bool=None, channel: Optional[discord.TextChannel]=None",
        "sourceFile": "cogs/automod/automod.py",
        "sourceLine": 480,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/automod/automod.py#L480",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "automod config::Automod::cogs/automod/automod.py:561",
        "name": "automod config",
        "description": "Shows the current Automod rule configuration.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";automod config",
            "/automod config"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Automod",
        "category": "Automod",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/automod/automod.py",
        "sourceLine": 561,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/automod/automod.py#L561",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "automod disable::Automod::cogs/automod/automod.py:277",
        "name": "automod disable",
        "description": "Disable the Automod Filter.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";automod disable",
            "/automod disable"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Automod",
        "category": "Automod",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/automod/automod.py",
        "sourceLine": 277,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/automod/automod.py#L277",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "automod edit::Automod::cogs/automod/automod.py:326",
        "name": "automod edit",
        "description": "Edit the action of the Automod Filter.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";automod edit <option> [time] [rule_id]",
            "/automod edit option:str [time:Optional[str]] [rule_id:Optional[int]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "option",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            },
            {
                "name": "time",
                "kind": "positional_or_keyword",
                "type": "Optional[str]",
                "default": "None",
                "required": false
            },
            {
                "name": "rule_id",
                "kind": "positional_or_keyword",
                "type": "Optional[int]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "option": "The action to perform.",
            "time": "The time to timeout a member if the option is timeout (60s, 5m, 10m, 1h, 1d, 7d, or 1w)",
            "rule_id": "The ID of the Automod rule to edit."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Automod",
        "category": "Automod",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(option='The action to perform.', time='The time to timeout a member if the option is timeout (60s, 5m, 10m, 1h, 1d, 7d, or 1w)', rule_id='The ID of the Automod rule to edit.')",
            "app_commands.choices(option=[app_commands.Choice(name='Block Message', value='block'), app_commands.Choice(name='Ban User', value='ban'), app_commands.Choice(name='Timeout User', value='timeout')], time=[app_commands.Choice(name='60 seconds', value='60s'), app_commands.Choice(name='5 minutes', value='5m'), app_commands.Choice(name='10 minutes', value='10m'), app_commands.Choice(name='1 hour', value='1h'), app_commands.Choice(name='1 day', value='1d'), app_commands.Choice(name='7 days', value='7d'), app_commands.Choice(name='1 week', value='1w')])",
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context, option: str, time: Optional[str]=None, rule_id: Optional[int]=None",
        "sourceFile": "cogs/automod/automod.py",
        "sourceLine": 326,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/automod/automod.py#L326",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "automod enable::Automod::cogs/automod/automod.py:251",
        "name": "automod enable",
        "description": "Enable the Automod Filter.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";automod enable",
            "/automod enable"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Automod",
        "category": "Automod",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/automod/automod.py",
        "sourceLine": 251,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/automod/automod.py#L251",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "automod exempt::Automod::cogs/automod/automod.py:303",
        "name": "automod exempt",
        "description": "Exempt a role from the Automod Filter.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";automod exempt <role>",
            "/automod exempt role:discord.Role"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "role": "The role to exempt."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Automod",
        "category": "Automod",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(role='The role to exempt.')",
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context, role: discord.Role",
        "sourceFile": "cogs/automod/automod.py",
        "sourceLine": 303,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/automod/automod.py#L303",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "automod filter::Automod::cogs/automod/automod.py:80",
        "name": "automod filter",
        "description": "Filter words via Automod.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";automod filter <keyword> [option] [time]",
            "/automod filter keyword:str [option:str] [time:Optional[str]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "keyword",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            },
            {
                "name": "option",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "'block'",
                "required": false
            },
            {
                "name": "time",
                "kind": "positional_or_keyword",
                "type": "Optional[str]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "keyword": "The word to filter.",
            "option": "The action to perform. (Default: 'block')",
            "time": "The time to timeout a member (60s, 5m, 10m, 1h, 1d, 7d, or 1w)"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Automod",
        "category": "Automod",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(keyword='The word to filter.', option=\"The action to perform. (Default: 'block')\", time='The time to timeout a member (60s, 5m, 10m, 1h, 1d, 7d, or 1w)')",
            "app_commands.choices(option=[app_commands.Choice(name='Block Message', value='block'), app_commands.Choice(name='Ban User', value='ban'), app_commands.Choice(name='Timeout User', value='timeout')], time=[app_commands.Choice(name='60 seconds', value='60s'), app_commands.Choice(name='5 minutes', value='5m'), app_commands.Choice(name='10 minutes', value='10m'), app_commands.Choice(name='1 hour', value='1h'), app_commands.Choice(name='1 day', value='1d'), app_commands.Choice(name='7 days', value='7d'), app_commands.Choice(name='1 week', value='1w')])",
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context, keyword: str, option: str='block', time: Optional[str]=None",
        "sourceFile": "cogs/automod/automod.py",
        "sourceLine": 80,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/automod/automod.py#L80",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "automod list::Automod::cogs/automod/automod.py:231",
        "name": "automod list",
        "description": "List all filtered words.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";automod list",
            "/automod list"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Automod",
        "category": "Automod",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/automod/automod.py",
        "sourceLine": 231,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/automod/automod.py#L231",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "automod remove::Automod::cogs/automod/automod.py:441",
        "name": "automod remove",
        "description": "Remove a word from the Automod filter.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";automod remove <keyword>",
            "/automod remove keyword:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "keyword",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Automod",
        "category": "Automod",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context, keyword: str",
        "sourceFile": "cogs/automod/automod.py",
        "sourceLine": 441,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/automod/automod.py#L441",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "autoreactions::AutoResponders::cogs/autoresponders/autoresponders.py:421",
        "name": "autoreactions",
        "description": "Setup autoreactions for your server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Setup autoreactions for your server.",
        "aliases": [
            "ar"
        ],
        "usage": [
            ";autoreactions",
            "/autoreactions"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "AutoResponders",
        "category": "AutoResponders",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)",
            "app_commands.guild_only()"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)",
            "app_commands.guild_only()"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/autoresponders/autoresponders.py",
        "sourceLine": 421,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/autoresponders/autoresponders.py#L421",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "autoreactions create::AutoResponders::cogs/autoresponders/autoresponders.py:431",
        "name": "autoreactions create",
        "description": "Create an autoreaction.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Create an autoreaction.",
        "aliases": [],
        "usage": [
            ";autoreactions create <trigger> <emoji>",
            "/autoreactions create trigger:str emoji:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "trigger",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            },
            {
                "name": "emoji",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "trigger": "The trigger for the autoreaction.",
            "emoji": "The emoji for the autoreaction."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "AutoResponders",
        "category": "AutoResponders",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_guild=True)",
            "app_commands.guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)",
            "app_commands.describe(trigger='The trigger for the autoreaction.', emoji='The emoji for the autoreaction.')"
        ],
        "signature": "self, ctx: Context, trigger: str, emoji: str",
        "sourceFile": "cogs/autoresponders/autoresponders.py",
        "sourceLine": 431,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/autoresponders/autoresponders.py#L431",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "autoreactions delete::AutoResponders::cogs/autoresponders/autoresponders.py:467",
        "name": "autoreactions delete",
        "description": "Delete an autoreaction.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Delete an autoreaction.",
        "aliases": [],
        "usage": [
            ";autoreactions delete <trigger>",
            "/autoreactions delete trigger:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "trigger",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "trigger": "The trigger for the autoreaction."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "AutoResponders",
        "category": "AutoResponders",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_guild=True)",
            "app_commands.guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)",
            "app_commands.describe(trigger='The trigger for the autoreaction.')"
        ],
        "signature": "self, ctx: Context, trigger: str",
        "sourceFile": "cogs/autoresponders/autoresponders.py",
        "sourceLine": 467,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/autoresponders/autoresponders.py#L467",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "autoreactions edit::AutoResponders::cogs/autoresponders/autoresponders.py:510",
        "name": "autoreactions edit",
        "description": "Edit an autoreaction.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Edit an autoreaction.",
        "aliases": [],
        "usage": [
            ";autoreactions edit <trigger> <emoji>",
            "/autoreactions edit trigger:str emoji:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "trigger",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            },
            {
                "name": "emoji",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "trigger": "The trigger for the autoreaction.",
            "emoji": "The emoji for the autoreaction."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "AutoResponders",
        "category": "AutoResponders",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_guild=True)",
            "app_commands.guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)",
            "app_commands.describe(trigger='The trigger for the autoreaction.', emoji='The emoji for the autoreaction.')"
        ],
        "signature": "self, ctx: Context, trigger: str, emoji: str",
        "sourceFile": "cogs/autoresponders/autoresponders.py",
        "sourceLine": 510,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/autoresponders/autoresponders.py#L510",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "autoreactions list::AutoResponders::cogs/autoresponders/autoresponders.py:489",
        "name": "autoreactions list",
        "description": "List all autoreactions.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "List all autoreactions.",
        "aliases": [],
        "usage": [
            ";autoreactions list",
            "/autoreactions list"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "AutoResponders",
        "category": "AutoResponders",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [],
        "inheritedGroupChecks": [
            "has_permissions(manage_guild=True)",
            "app_commands.guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe()"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/autoresponders/autoresponders.py",
        "sourceLine": 489,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/autoresponders/autoresponders.py#L489",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "autoreactions toggle::AutoResponders::cogs/autoresponders/autoresponders.py:537",
        "name": "autoreactions toggle",
        "description": "Toggle a specific autoreaction. Whether to enable or disable the autoreaction",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Toggle a specific autoreaction. Whether to enable or disable the autoreaction",
        "aliases": [],
        "usage": [
            ";autoreactions toggle <trigger> <action>",
            "/autoreactions toggle trigger:str action:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "trigger",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            },
            {
                "name": "action",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "trigger": "The trigger to enable/disable",
            "action": "Whether to enable or disable the autoreaction"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "AutoResponders",
        "category": "AutoResponders",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_guild=True)",
            "app_commands.guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)",
            "app_commands.describe(trigger='The trigger to enable/disable', action='Whether to enable or disable the autoreaction')",
            "app_commands.choices(action=[app_commands.Choice(name='Enable', value='enable'), app_commands.Choice(name='Disable', value='disable')])"
        ],
        "signature": "self, ctx: Context, trigger: str, action: str",
        "sourceFile": "cogs/autoresponders/autoresponders.py",
        "sourceLine": 537,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/autoresponders/autoresponders.py#L537",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "autoresponder::AutoResponders::cogs/autoresponders/autoresponders.py:206",
        "name": "autoresponder",
        "description": "Setup autoresponders for your server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Setup autoresponders for your server.",
        "aliases": [],
        "usage": [
            ";autoresponder",
            "/autoresponder"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "AutoResponders",
        "category": "AutoResponders",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)",
            "app_commands.guild_only()"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)",
            "app_commands.guild_only()"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/autoresponders/autoresponders.py",
        "sourceLine": 206,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/autoresponders/autoresponders.py#L206",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "autoresponder create::AutoResponders::cogs/autoresponders/autoresponders.py:216",
        "name": "autoresponder create",
        "description": "Create an autoresponder.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Create an autoresponder.",
        "aliases": [],
        "usage": [
            ";autoresponder create <trigger> <response> [string]",
            "/autoresponder create trigger:str response:str [string:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "trigger",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            },
            {
                "name": "response",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            },
            {
                "name": "string",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "'exact'",
                "required": false
            }
        ],
        "optionDescriptions": {
            "trigger": "The trigger for the autoresponder.",
            "response": "The response for the autoresponder.",
            "string": "Type of matching to use (exact, partial, or regex)."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "AutoResponders",
        "category": "AutoResponders",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_guild=True)",
            "app_commands.guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)",
            "app_commands.describe(trigger='The trigger for the autoresponder.', response='The response for the autoresponder.', string='Type of matching to use (exact, partial, or regex).')",
            "app_commands.choices(string=[app_commands.Choice(name='Exact', value='exact'), app_commands.Choice(name='Partial', value='partial'), app_commands.Choice(name='Regex', value='regex')])"
        ],
        "signature": "self, ctx: Context, trigger: str, response: str, string: str='exact'",
        "sourceFile": "cogs/autoresponders/autoresponders.py",
        "sourceLine": 216,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/autoresponders/autoresponders.py#L216",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "autoresponder delete::AutoResponders::cogs/autoresponders/autoresponders.py:293",
        "name": "autoresponder delete",
        "description": "Delete an autoresponder.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Delete an autoresponder.",
        "aliases": [],
        "usage": [
            ";autoresponder delete <trigger>",
            "/autoresponder delete trigger:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "trigger",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "trigger": "The trigger for the autoresponder."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "AutoResponders",
        "category": "AutoResponders",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_guild=True)",
            "app_commands.guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)",
            "app_commands.describe(trigger='The trigger for the autoresponder.')"
        ],
        "signature": "self, ctx: Context, trigger: str",
        "sourceFile": "cogs/autoresponders/autoresponders.py",
        "sourceLine": 293,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/autoresponders/autoresponders.py#L293",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "autoresponder edit::AutoResponders::cogs/autoresponders/autoresponders.py:346",
        "name": "autoresponder edit",
        "description": "Edit an autoresponder.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Edit an autoresponder.",
        "aliases": [],
        "usage": [
            ";autoresponder edit <trigger> <response> [string]",
            "/autoresponder edit trigger:str response:str [string:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "trigger",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            },
            {
                "name": "response",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            },
            {
                "name": "string",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "'exact'",
                "required": false
            }
        ],
        "optionDescriptions": {
            "trigger": "The trigger for the autoresponder.",
            "response": "The response for the autoresponder.",
            "string": "Type of matching to use (exact, partial, or regex)."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "AutoResponders",
        "category": "AutoResponders",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_guild=True)",
            "app_commands.guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)",
            "app_commands.describe(trigger='The trigger for the autoresponder.', response='The response for the autoresponder.', string='Type of matching to use (exact, partial, or regex).')",
            "app_commands.choices(string=[app_commands.Choice(name='Exact', value='exact'), app_commands.Choice(name='Partial', value='partial'), app_commands.Choice(name='Regex', value='regex')])"
        ],
        "signature": "self, ctx: Context, trigger: str, response: str, string: str='exact'",
        "sourceFile": "cogs/autoresponders/autoresponders.py",
        "sourceLine": 346,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/autoresponders/autoresponders.py#L346",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "autoresponder list::AutoResponders::cogs/autoresponders/autoresponders.py:315",
        "name": "autoresponder list",
        "description": "List all autoresponders.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "List all autoresponders.",
        "aliases": [],
        "usage": [
            ";autoresponder list",
            "/autoresponder list"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "AutoResponders",
        "category": "AutoResponders",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_guild=True)",
            "app_commands.guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)",
            "app_commands.describe()"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/autoresponders/autoresponders.py",
        "sourceLine": 315,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/autoresponders/autoresponders.py#L315",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "autoresponder toggle::AutoResponders::cogs/autoresponders/autoresponders.py:392",
        "name": "autoresponder toggle",
        "description": "Toggle autoresponders for this server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Toggle autoresponders for this server.",
        "aliases": [],
        "usage": [
            ";autoresponder toggle <action>",
            "/autoresponder toggle action:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "action",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "action": "Whether to enable or disable autoresponders"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "AutoResponders",
        "category": "AutoResponders",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_guild=True)",
            "app_commands.guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)",
            "app_commands.describe(action='Whether to enable or disable autoresponders')",
            "app_commands.choices(action=[app_commands.Choice(name='Enable', value='enable'), app_commands.Choice(name='Disable', value='disable')])"
        ],
        "signature": "self, ctx: Context, action: str",
        "sourceFile": "cogs/autoresponders/autoresponders.py",
        "sourceLine": 392,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/autoresponders/autoresponders.py#L392",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "autorole::Config::cogs/config/configuration.py:404",
        "name": "autorole",
        "description": "View or manage the server autorole.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "View or manage the server autorole.",
        "aliases": [],
        "usage": [
            ";autorole",
            "/autorole"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Config",
        "category": "Config",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/config/configuration.py",
        "sourceLine": 404,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/config/configuration.py#L404",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "autorole::Server::cogs/server/server.py:286",
        "name": "autorole",
        "description": "Set or remove the role assigned to new human members.",
        "descriptionSource": "inferred",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";autorole <role>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Server",
        "category": "Server",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx, role: discord.Role",
        "sourceFile": "cogs/server/server.py",
        "sourceLine": 286,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/server/server.py#L286",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "autorole reset::Config::cogs/config/configuration.py:500",
        "name": "autorole reset",
        "description": "Reset the server autorole.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Reset the server autorole.",
        "aliases": [],
        "usage": [
            ";autorole reset",
            "/autorole reset"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Config",
        "category": "Config",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/config/configuration.py",
        "sourceLine": 500,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/config/configuration.py#L500",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "autorole set::Config::cogs/config/configuration.py:412",
        "name": "autorole set",
        "description": "Set the server autorole.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Set the server autorole.",
        "aliases": [],
        "usage": [
            ";autorole set"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "Config",
        "category": "Config",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/config/configuration.py",
        "sourceLine": 412,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/config/configuration.py#L412",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "autorole set bot::Config::cogs/config/configuration.py:440",
        "name": "autorole set bot",
        "description": "Set the server autorole for bots.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Set the server autorole for bots.",
        "aliases": [],
        "usage": [
            ";autorole set bot <role>",
            "/autorole set bot role:discord.Role"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Config",
        "category": "Config",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context, role: discord.Role",
        "sourceFile": "cogs/config/configuration.py",
        "sourceLine": 440,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/config/configuration.py#L440",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "autorole set human::Config::cogs/config/configuration.py:421",
        "name": "autorole set human",
        "description": "Set the server autorole for humans.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Set the server autorole for humans.",
        "aliases": [],
        "usage": [
            ";autorole set human <role>",
            "/autorole set human role:discord.Role"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Config",
        "category": "Config",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context, role: discord.Role",
        "sourceFile": "cogs/config/configuration.py",
        "sourceLine": 421,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/config/configuration.py#L421",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "autorole toggle::Config::cogs/config/configuration.py:511",
        "name": "autorole toggle",
        "description": "Toggle the server autorole.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Toggle the server autorole.",
        "aliases": [],
        "usage": [
            ";autorole toggle <status>",
            "/autorole toggle status:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "status",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "status": "Enable or disable the server autorole"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Config",
        "category": "Config",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)",
            "app_commands.describe(status='Enable or disable the server autorole')",
            "app_commands.choices(status=[app_commands.Choice(name='Enable', value='enable'), app_commands.Choice(name='Disable', value='disable')])"
        ],
        "signature": "self, ctx: Context, status: str",
        "sourceFile": "cogs/config/configuration.py",
        "sourceLine": 511,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/config/configuration.py#L511",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "autorole view::Config::cogs/config/configuration.py:459",
        "name": "autorole view",
        "description": "View the server autorole.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "View the server autorole.",
        "aliases": [],
        "usage": [
            ";autorole view",
            "/autorole view"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Config",
        "category": "Config",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/config/configuration.py",
        "sourceLine": 459,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/config/configuration.py#L459",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "autorolebots::Server::cogs/server/server.py:318",
        "name": "autorolebots",
        "description": "Automatically assigns a role to new bot members for this server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Automatically assigns a role to new bot members for this server.",
        "aliases": [],
        "usage": [
            ";autorolebots <role>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Server",
        "category": "Server",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context, role: discord.Role",
        "sourceFile": "cogs/server/server.py",
        "sourceLine": 318,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/server/server.py#L318",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "avatar::Information::cogs/information/information.py:1103",
        "name": "avatar",
        "description": "Show your avatar.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "pfp",
            "av"
        ],
        "usage": [
            ";avatar [user]",
            "/avatar [user:Union[discord.User, discord.User]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Union[discord.User, discord.User]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "Select either a User or self to show your avatar."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [
            "cooldown(1, 3, BucketType.user)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.describe(user='Select either a User or self to show your avatar.')",
            "cooldown(1, 3, BucketType.user)"
        ],
        "signature": "self, ctx, user: Union[discord.User, discord.User]=None",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1103,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1103",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "avatarhistory::Information::cogs/information/information.py:1595",
        "name": "avatarhistory",
        "description": "View a user's avatar history.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "View a user's avatar history from the database.",
        "aliases": [
            "avhistory",
            "ah",
            "avh"
        ],
        "usage": [
            ";avatarhistory [user]",
            "/avatarhistory [user:Optional[discord.Member]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.Member]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to view avatar history for."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_installs(guilds=True, users=False)",
            "app_commands.allowed_contexts(guilds=True, dms=False, private_channels=False)",
            "app_commands.describe(user='The user to view avatar history for.')"
        ],
        "signature": "self, ctx: Context, user: Optional[discord.Member]=None",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1595,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1595",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "ban::Moderation::cogs/moderation/moderation.py:472",
        "name": "ban",
        "description": "Ban a user with an optional reason",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Ban a user with an optional reason",
        "aliases": [
            "execute"
        ],
        "usage": [
            ";ban <member> [reason]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "Union[discord.Member, discord.User, int, str]",
                "default": null,
                "required": true
            },
            {
                "name": "reason",
                "kind": "keyword_only",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(ban_members=True)"
        ],
        "checks": [
            "has_permissions(ban_members=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(ban_members=True)"
        ],
        "signature": "self, ctx, member: Union[discord.Member, discord.User, int, str], *, reason: str=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 472,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L472",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "banlist::Moderation::cogs/moderation/moderation.py:624",
        "name": "banlist",
        "description": "Shows list of users banned from the server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Display the server's ban list in a paginated embed.",
        "aliases": [
            "bans"
        ],
        "usage": [
            ";banlist"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(administrator=True)"
        ],
        "checks": [
            "has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(administrator=True)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 624,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L624",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "banner::Information::cogs/information/information.py:1136",
        "name": "banner",
        "description": "Show your banner.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";banner [member]",
            "/banner [member:Union[discord.Member, discord.User]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "Union[discord.Member, discord.User]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "member": "Select either a User or if none is selected, the current user will be used."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.describe(member='Select either a User or if none is selected, the current user will be used.')"
        ],
        "signature": "self, ctx, member: Union[discord.Member, discord.User]=None",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1136,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1136",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "bathe::Reactions::cogs/reactions/reactions.py:263",
        "name": "bathe",
        "description": "You racist motherfucker",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";bathe <user>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Reactions",
        "category": "Reactions",
        "permissions": [],
        "checks": [
            "cooldown(1, 10, BucketType.user)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 10, BucketType.user)"
        ],
        "signature": "self, ctx, user: discord.Member",
        "sourceFile": "cogs/reactions/reactions.py",
        "sourceLine": 263,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/reactions/reactions.py#L263",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "bc::Moderation::cogs/moderation/moderation.py:1671",
        "name": "bc",
        "description": "Invocation for purge bot.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Invocation for purge bot.",
        "aliases": [],
        "usage": [
            ";bc [amount]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "amount",
                "kind": "positional_or_keyword",
                "type": "int",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_messages=True)"
        ],
        "checks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "signature": "self, ctx, amount: int=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1671,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1671",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "bi::Information::cogs/information/information.py:338",
        "name": "bi",
        "description": "Shows detailed information about the bot.",
        "descriptionSource": "source",
        "help": "Shows detailed information about the bot.",
        "docstring": "Displays detailed information about the bot including stats and system info.",
        "aliases": [
            "botinfo",
            "abt",
            "bitch"
        ],
        "usage": [
            ";bi"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 338,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L338",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "blacklist::Blacklist::cogs/blacklist/blacklist.py:74",
        "name": "blacklist",
        "description": "View commands in Blacklist.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "View commands in Blacklist.",
        "aliases": [
            "bl"
        ],
        "usage": [
            ";blacklist",
            "/blacklist"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Blacklist",
        "category": "Blacklist",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/blacklist/blacklist.py",
            "sourceLine": 26
        },
        "otherDecorators": [
            "app_commands.describe()",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/blacklist/blacklist.py",
        "sourceLine": 74,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/blacklist/blacklist.py#L74",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "blacklist extend::Blacklist::cogs/blacklist/blacklist.py:208",
        "name": "blacklist extend",
        "description": "Blacklist more than one guild or user, or both, at once.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Blacklist more than one guild or user, or both, at once.",
        "aliases": [],
        "usage": [
            ";blacklist extend [users] [guilds] [reason]",
            "/blacklist extend [users:Optional[str]] [guilds:Optional[str]] [reason:Optional[str]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "users",
                "kind": "positional_or_keyword",
                "type": "Optional[str]",
                "default": "None",
                "required": false
            },
            {
                "name": "guilds",
                "kind": "positional_or_keyword",
                "type": "Optional[str]",
                "default": "None",
                "required": false
            },
            {
                "name": "reason",
                "kind": "keyword_only",
                "type": "Optional[str]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "users": "The users to blacklist. Optional. Separate multiple users with commas.",
            "guilds": "The guilds to blacklist. Optional. Separate multiple guilds with commas.",
            "reason": "The reason for blacklisting. Optional."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Blacklist",
        "category": "Blacklist",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/blacklist/blacklist.py",
            "sourceLine": 26
        },
        "otherDecorators": [
            "app_commands.describe(users='The users to blacklist. Optional. Separate multiple users with commas.', guilds='The guilds to blacklist. Optional. Separate multiple guilds with commas.', reason='The reason for blacklisting. Optional.')",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, users: Optional[str]=None, guilds: Optional[str]=None, *, reason: Optional[str]=None",
        "sourceFile": "cogs/blacklist/blacklist.py",
        "sourceLine": 208,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/blacklist/blacklist.py#L208",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "blacklist guild::Blacklist::cogs/blacklist/blacklist.py:126",
        "name": "blacklist guild",
        "description": "Blacklist a guild.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Blacklist a guild.",
        "aliases": [],
        "usage": [
            ";blacklist guild <guild> [reason] [leave]",
            "/blacklist guild guild:str [reason:Optional[str]] [leave:bool]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "guild",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            },
            {
                "name": "reason",
                "kind": "keyword_only",
                "type": "Optional[str]",
                "default": "None",
                "required": false
            },
            {
                "name": "leave",
                "kind": "keyword_only",
                "type": "bool",
                "default": "False",
                "required": false
            }
        ],
        "optionDescriptions": {
            "guild": "The guild to blacklist (ID or mention).",
            "reason": "The reason for blacklisting. Optional.",
            "leave": "Whether the bot should leave the guild after blacklisting. Defaults to False."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Blacklist",
        "category": "Blacklist",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/blacklist/blacklist.py",
            "sourceLine": 26
        },
        "otherDecorators": [
            "app_commands.describe(guild='The guild to blacklist (ID or mention).', reason='The reason for blacklisting. Optional.', leave='Whether the bot should leave the guild after blacklisting. Defaults to False.')",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, guild: str, *, reason: Optional[str]=None, leave: bool=False",
        "sourceFile": "cogs/blacklist/blacklist.py",
        "sourceLine": 126,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/blacklist/blacklist.py#L126",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "blacklist list::Blacklist::cogs/blacklist/blacklist.py:420",
        "name": "blacklist list",
        "description": "Generate a Python file with all blacklisted users and guilds.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Generate a Python file with all blacklisted users and guilds in the specified format.",
        "aliases": [],
        "usage": [
            ";blacklist list",
            "/blacklist list"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Blacklist",
        "category": "Blacklist",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/blacklist/blacklist.py",
            "sourceLine": 26
        },
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/blacklist/blacklist.py",
        "sourceLine": 420,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/blacklist/blacklist.py#L420",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "blacklist remove::Blacklist::cogs/blacklist/blacklist.py:330",
        "name": "blacklist remove",
        "description": "Remove a user or guild from the blacklist.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Remove a user or guild from the blacklist.",
        "aliases": [],
        "usage": [
            ";blacklist remove [user] [guild]",
            "/blacklist remove [user:Optional[str]] [guild:Optional[str]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Optional[str]",
                "default": "None",
                "required": false
            },
            {
                "name": "guild",
                "kind": "positional_or_keyword",
                "type": "Optional[str]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to remove from the blacklist.",
            "guild": "The guild to remove from the blacklist."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Blacklist",
        "category": "Blacklist",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/blacklist/blacklist.py",
            "sourceLine": 26
        },
        "otherDecorators": [
            "app_commands.describe(user='The user to remove from the blacklist.', guild='The guild to remove from the blacklist.')",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, user: Optional[str]=None, guild: Optional[str]=None",
        "sourceFile": "cogs/blacklist/blacklist.py",
        "sourceLine": 330,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/blacklist/blacklist.py#L330",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "blacklist user::Blacklist::cogs/blacklist/blacklist.py:83",
        "name": "blacklist user",
        "description": "Blacklist a user.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Blacklist a user.",
        "aliases": [],
        "usage": [
            ";blacklist user <user> [reason]",
            "/blacklist user user:str [reason:Optional[str]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            },
            {
                "name": "reason",
                "kind": "keyword_only",
                "type": "Optional[str]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to blacklist.",
            "reason": "The reason for blacklisting. Optional."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Blacklist",
        "category": "Blacklist",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/blacklist/blacklist.py",
            "sourceLine": 26
        },
        "otherDecorators": [
            "app_commands.describe(user='The user to blacklist.', reason='The reason for blacklisting. Optional.')",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, user: str, *, reason: Optional[str]=None",
        "sourceFile": "cogs/blacklist/blacklist.py",
        "sourceLine": 83,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/blacklist/blacklist.py#L83",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "blacklist view::Blacklist::cogs/blacklist/blacklist.py:489",
        "name": "blacklist view",
        "description": "Get information about a user or guild in the blacklist.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Get information about a user or guild in the blacklist.",
        "aliases": [],
        "usage": [
            ";blacklist view [user] [guild]",
            "/blacklist view [user:Optional[str]] [guild:Optional[str]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Optional[str]",
                "default": "None",
                "required": false
            },
            {
                "name": "guild",
                "kind": "positional_or_keyword",
                "type": "Optional[str]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to get information about.",
            "guild": "The guild to get information about."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Blacklist",
        "category": "Blacklist",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/blacklist/blacklist.py",
            "sourceLine": 26
        },
        "otherDecorators": [
            "app_commands.describe(user='The user to get information about.', guild='The guild to get information about.')",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, user: Optional[str]=None, guild: Optional[str]=None",
        "sourceFile": "cogs/blacklist/blacklist.py",
        "sourceLine": 489,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/blacklist/blacklist.py#L489",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "blacktea::Fun::cogs/fun/fun.py:790",
        "name": "blacktea",
        "description": "Play a game of blacktea.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";blacktea"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [
            "cooldown(1, 5, commands.BucketType.user)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 5, commands.BucketType.user)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 790,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L790",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "boop::Reactions::cogs/reactions/reactions.py:83",
        "name": "boop",
        "description": "Boops a user >_<",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Boop someone with cuteness!",
        "aliases": [],
        "usage": [
            ";boop <user>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Reactions",
        "category": "Reactions",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx, user: discord.Member",
        "sourceFile": "cogs/reactions/reactions.py",
        "sourceLine": 83,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/reactions/reactions.py#L83",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "bots::Information::cogs/information/information.py:984",
        "name": "bots",
        "description": "Displays the number of bots in the server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Displays the number of bots in the server.",
        "aliases": [
            "botcount"
        ],
        "usage": [
            ";bots"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 984,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L984",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "bp::Owner::cogs/owner/owner.py:396",
        "name": "bp",
        "description": "Base command for purging only the bots messages.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Base command for purging only the bots messages.",
        "aliases": [],
        "usage": [
            ";bp"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [],
        "signature": "self, ctx",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 396,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L396",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "bp after::Owner::cogs/owner/owner.py:402",
        "name": "bp after",
        "description": "Purges only messages sent after the specified message.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Purges only messages sent after the specified message.",
        "aliases": [
            "a"
        ],
        "usage": [
            ";bp after <message_id>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "message_id",
                "kind": "positional_or_keyword",
                "type": "int",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [],
        "signature": "self, ctx: Context, message_id: int",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 402,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L402",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "bp before::Owner::cogs/owner/owner.py:418",
        "name": "bp before",
        "description": "Purges only messages sent before the specified message.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Purges only messages sent before the specified message.",
        "aliases": [
            "b"
        ],
        "usage": [
            ";bp before <message_id>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "message_id",
                "kind": "positional_or_keyword",
                "type": "int",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [],
        "signature": "self, ctx: Context, message_id: int",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 418,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L418",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "bp specific::Owner::cogs/owner/owner.py:434",
        "name": "bp specific",
        "description": "Purges only the specified message.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Purges only the specified message.",
        "aliases": [
            "s"
        ],
        "usage": [
            ";bp specific <message_id>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "message_id",
                "kind": "positional_or_keyword",
                "type": "int",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [],
        "signature": "self, ctx: Context, message_id: int",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 434,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L434",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "bunni::Fun::cogs/fun/fun.py:2124",
        "name": "bunni",
        "description": "bunni bunni bunni bunni",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";bunni",
            "/bunni"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 2124,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L2124",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "button::Fun::cogs/fun/fun.py:450",
        "name": "button",
        "description": "Embeds as many buttons as possible.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";button"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 450,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L450",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "caption::Fun::cogs/fun/fun.py:1747",
        "name": "caption",
        "description": "Add a caption to an image or GIF",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            "/caption interaction:discord.Interaction image:discord.Attachment caption:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "interaction",
                "kind": "positional_or_keyword",
                "type": "discord.Interaction",
                "default": null,
                "required": true
            },
            {
                "name": "image",
                "kind": "positional_or_keyword",
                "type": "discord.Attachment",
                "default": null,
                "required": true
            },
            {
                "name": "caption",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "image": "The image to add a caption to",
            "caption": "The caption text to add to the image"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "slash"
        ],
        "commandType": "slash",
        "kind": "command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.describe(image='The image to add a caption to', caption='The caption text to add to the image')"
        ],
        "signature": "self, interaction: discord.Interaction, image: discord.Attachment, *, caption: str",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 1747,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L1747",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "carrot::Fun::cogs/fun/fun.py:2117",
        "name": "carrot",
        "description": "carrot ok...?",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";carrot",
            "/carrot"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 2117,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L2117",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "cat::Fun::cogs/fun/fun.py:1155",
        "name": "cat",
        "description": "Send a random image of a cat from the Cat API",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "kitty",
            "kitten",
            "cats",
            "kitties",
            "kittens"
        ],
        "usage": [
            ";cat",
            "/cat"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 1155,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L1155",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "catfact::Fun::cogs/fun/fun.py:1430",
        "name": "catfact",
        "description": "Get a random cat fact",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Get information about a cat breed",
        "aliases": [],
        "usage": [
            ";catfact [breed]",
            "/catfact [breed:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "breed",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "breed": "The cat breed to get information about"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.describe(breed='The cat breed to get information about')"
        ],
        "signature": "self, ctx: Context, breed: str=None",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 1430,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L1430",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "change::Owner::cogs/owner/owner.py:100",
        "name": "change",
        "description": "Manage the bot's avatar, banner, and server profile details.",
        "descriptionSource": "inferred",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";change",
            "/change"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 100,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L100",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "change avatar::Owner::cogs/owner/owner.py:107",
        "name": "change avatar",
        "description": "Change the bot's avatar to the provided URL or attachment.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Change the bot's avatar to the provided URL or attachment.",
        "aliases": [],
        "usage": [
            ";change avatar [url] [attachment]",
            "/change avatar [url:str] [attachment:discord.Attachment]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "url",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            },
            {
                "name": "attachment",
                "kind": "positional_or_keyword",
                "type": "discord.Attachment",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "url": "The URL of the image to use as the avatar.",
            "attachment": "The image attachment to use as the avatar."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.describe(url='The URL of the image to use as the avatar.', attachment='The image attachment to use as the avatar.')"
        ],
        "signature": "self, ctx: Context, url: str=None, attachment: discord.Attachment=None",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 107,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L107",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "change banner::Owner::cogs/owner/owner.py:146",
        "name": "change banner",
        "description": "Change the bot's banner to the provided URL or attachment.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Change the bot's banner to the provided URL or attachment.",
        "aliases": [],
        "usage": [
            ";change banner [url] [attachment]",
            "/change banner [url:str] [attachment:discord.Attachment]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "url",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            },
            {
                "name": "attachment",
                "kind": "positional_or_keyword",
                "type": "discord.Attachment",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "url": "The URL of the image to use as the banner.",
            "attachment": "The image attachment to use as the banner."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.describe(url='The URL of the image to use as the banner.', attachment='The image attachment to use as the banner.')"
        ],
        "signature": "self, ctx: Context, url: str=None, attachment: discord.Attachment=None",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 146,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L146",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "change serveravatar::Owner::cogs/owner/owner.py:185",
        "name": "change serveravatar",
        "description": "Change the bot's server avatar to the provided URL or attachment.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Change the bot's server avatar to the provided URL or attachment.",
        "aliases": [],
        "usage": [
            ";change serveravatar [url] [attachment]",
            "/change serveravatar [url:str] [attachment:discord.Attachment]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "url",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            },
            {
                "name": "attachment",
                "kind": "positional_or_keyword",
                "type": "discord.Attachment",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "url": "The URL of the image to use as the server avatar.",
            "attachment": "The image attachment to use as the server avatar."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [
            "app_commands.describe(url='The URL of the image to use as the server avatar.', attachment='The image attachment to use as the server avatar.')"
        ],
        "signature": "self, ctx: Context, url: str=None, attachment: discord.Attachment=None",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 185,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L185",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "change serverbanner::Owner::cogs/owner/owner.py:222",
        "name": "change serverbanner",
        "description": "Change the bot's server banner to the provided URL or attachment.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Change the bot's server banner to the provided URL or attachment.",
        "aliases": [],
        "usage": [
            ";change serverbanner [url] [attachment]",
            "/change serverbanner [url:str] [attachment:discord.Attachment]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "url",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            },
            {
                "name": "attachment",
                "kind": "positional_or_keyword",
                "type": "discord.Attachment",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "url": "The URL of the image to use as the server banner.",
            "attachment": "The image attachment to use as the server banner."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [
            "app_commands.describe(url='The URL of the image to use as the server banner.', attachment='The image attachment to use as the server banner.')"
        ],
        "signature": "self, ctx: Context, url: str=None, attachment: discord.Attachment=None",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 222,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L222",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "change serverbio::Owner::cogs/owner/owner.py:259",
        "name": "change serverbio",
        "description": "Change the bot's server bio to the provided bio.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Change the bot's server bio to the provided bio.",
        "aliases": [],
        "usage": [
            ";change serverbio [bio]",
            "/change serverbio [bio:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "bio",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "bio": "The bio to set for the server."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [
            "app_commands.describe(bio='The bio to set for the server.')"
        ],
        "signature": "self, ctx: Context, bio: str=None",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 259,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L259",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "channel::Moderation::cogs/moderation/moderation.py:3427",
        "name": "channel",
        "description": "Base command for channel management.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";channel"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_channels=True)"
        ],
        "checks": [
            "cooldown(3, 5, BucketType.guild)",
            "has_permissions(manage_channels=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(3, 5, BucketType.guild)",
            "has_permissions(manage_channels=True)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3427,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3427",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "channel create::Moderation::cogs/moderation/moderation.py:3438",
        "name": "channel create",
        "description": "Creates a new text channel.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";channel create <name> [category]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "name",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            },
            {
                "name": "category",
                "kind": "positional_or_keyword",
                "type": "discord.CategoryChannel",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_channels=True)",
            "has_permissions(manage_channels=True)"
        ],
        "checks": [
            "cooldown(3, 5, BucketType.guild)",
            "has_permissions(manage_channels=True)"
        ],
        "inheritedGroupChecks": [
            "cooldown(3, 5, BucketType.guild)",
            "has_permissions(manage_channels=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(3, 5, BucketType.guild)",
            "has_permissions(manage_channels=True)"
        ],
        "signature": "self, ctx, name: str, category: discord.CategoryChannel=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3438,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3438",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "channel delete::Moderation::cogs/moderation/moderation.py:3457",
        "name": "channel delete",
        "description": "Deletes a channel.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";channel delete [channel]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "discord.TextChannel",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_channels=True)",
            "has_permissions(manage_channels=True)"
        ],
        "checks": [
            "cooldown(3, 5, BucketType.guild)",
            "has_permissions(manage_channels=True)"
        ],
        "inheritedGroupChecks": [
            "cooldown(3, 5, BucketType.guild)",
            "has_permissions(manage_channels=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(3, 5, BucketType.guild)",
            "has_permissions(manage_channels=True)"
        ],
        "signature": "self, ctx, channel: discord.TextChannel=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3457,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3457",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "channel private::Moderation::cogs/moderation/moderation.py:3486",
        "name": "channel private",
        "description": "Creates a private channel??",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";channel private [name]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "name",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_channels=True)",
            "has_permissions(manage_channels=True)"
        ],
        "checks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_channels=True)"
        ],
        "inheritedGroupChecks": [
            "cooldown(3, 5, BucketType.guild)",
            "has_permissions(manage_channels=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_channels=True)"
        ],
        "signature": "self, ctx, name: str=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3486,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3486",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "channel rename::Moderation::cogs/moderation/moderation.py:3472",
        "name": "channel rename",
        "description": "Renames a channel.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";channel rename <new_name>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "new_name",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_channels=True)",
            "has_permissions(manage_channels=True)"
        ],
        "checks": [
            "cooldown(1, 60, BucketType.guild)",
            "has_permissions(manage_channels=True)"
        ],
        "inheritedGroupChecks": [
            "cooldown(3, 5, BucketType.guild)",
            "has_permissions(manage_channels=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 60, BucketType.guild)",
            "has_permissions(manage_channels=True)"
        ],
        "signature": "self, ctx, *, new_name: str",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3472,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3472",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "channel sync::Moderation::cogs/moderation/moderation.py:3529",
        "name": "channel sync",
        "description": "Syncs channel permissions for a specific category, or all if specified as all.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";channel sync [category]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "category",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_channels=True)",
            "has_permissions(manage_channels=True)"
        ],
        "checks": [
            "cooldown(3, 5, BucketType.guild)",
            "has_permissions(manage_channels=True)"
        ],
        "inheritedGroupChecks": [
            "cooldown(3, 5, BucketType.guild)",
            "has_permissions(manage_channels=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(3, 5, BucketType.guild)",
            "has_permissions(manage_channels=True)"
        ],
        "signature": "self, ctx, category: str=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3529,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3529",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "channel topic::Moderation::cogs/moderation/moderation.py:3513",
        "name": "channel topic",
        "description": "Sets the topic for a channel.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";channel topic <new_topic>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "new_topic",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_channels=True)",
            "has_permissions(manage_channels=True)"
        ],
        "checks": [
            "cooldown(3, 5, BucketType.guild)",
            "has_permissions(manage_channels=True)"
        ],
        "inheritedGroupChecks": [
            "cooldown(3, 5, BucketType.guild)",
            "has_permissions(manage_channels=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(3, 5, BucketType.guild)",
            "has_permissions(manage_channels=True)"
        ],
        "signature": "self, ctx, *, new_topic: str",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3513,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3513",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "chipichipi::Fun::cogs/fun/fun.py:954",
        "name": "chipichipi",
        "description": "CHIPI CHIPI CHAPA CHA DUBI DUBI BADABA",
        "descriptionSource": "source",
        "help": null,
        "docstring": "CHIPI CHIPI CHAPA CHA DUBI DUBI BADABA",
        "aliases": [],
        "usage": [
            ";chipichipi",
            "/chipichipi"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 954,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L954",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "clearavatarhistory::Information::cogs/information/information.py:1762",
        "name": "clearavatarhistory",
        "description": "Clears the avatar history of a user.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Clears the avatar history of a user.",
        "aliases": [
            "clearavhistory",
            "cah",
            "cavh"
        ],
        "usage": [
            ";clearavatarhistory [user]",
            "/clearavatarhistory [user:Optional[discord.Member]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.Member]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to clear avatar history for."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Information",
        "category": "Information",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(user='The user to clear avatar history for.')",
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context, user: Optional[discord.Member]=None",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1762,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1762",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "clearnicknamehistory::Information::cogs/information/information.py:1740",
        "name": "clearnicknamehistory",
        "description": "Clears the nickname history of a user.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Clears the nickname history of a user.",
        "aliases": [
            "clearnickhistory",
            "cnh",
            "cngh"
        ],
        "usage": [
            ";clearnicknamehistory [user]",
            "/clearnicknamehistory [user:Optional[discord.User]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.User]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to clear nickname history for."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Information",
        "category": "Information",
        "permissions": [
            "is_owner()"
        ],
        "checks": [
            "is_owner()"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "is_owner()",
            "app_commands.describe(user='The user to clear nickname history for.')"
        ],
        "signature": "self, ctx: Context, user: Optional[discord.User]=None",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1740,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1740",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "color::Utility::cogs/utility/utility.py:941",
        "name": "color",
        "description": "Shows a color swatch and RGB, HEX, HSL info.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shows a color swatch and RGB, HEX, HSL info.",
        "aliases": [
            "hex",
            "colour"
        ],
        "usage": [
            ";color [hexcode]",
            "/color [hexcode:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "hexcode",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "hexcode": "The hex code to show."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Utility",
        "category": "Utility",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.describe(hexcode='The hex code to show.')"
        ],
        "signature": "self, ctx: Context, hexcode: str=None",
        "sourceFile": "cogs/utility/utility.py",
        "sourceLine": 941,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/utility/utility.py#L941",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "command::CommandManager::cogs/cmdmngr/cmdmngr.py:29",
        "name": "command",
        "description": "Base command for command management.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";command"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "CommandManager",
        "category": "CommandManager",
        "permissions": [
            "has_permissions(administrator=True)"
        ],
        "checks": [
            "has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(administrator=True)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/cmdmngr/cmdmngr.py",
        "sourceLine": 29,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/cmdmngr/cmdmngr.py#L29",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "command disable::CommandManager::cogs/cmdmngr/cmdmngr.py:39",
        "name": "command disable",
        "description": "Disables a command for the guild.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";command disable <command_name>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "command_name",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "CommandManager",
        "category": "CommandManager",
        "permissions": [
            "has_permissions(administrator=True)",
            "has_permissions(administrator=True)"
        ],
        "checks": [
            "has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(administrator=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(administrator=True)"
        ],
        "signature": "self, ctx, *, command_name: str",
        "sourceFile": "cogs/cmdmngr/cmdmngr.py",
        "sourceLine": 39,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/cmdmngr/cmdmngr.py#L39",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "command enable::CommandManager::cogs/cmdmngr/cmdmngr.py:59",
        "name": "command enable",
        "description": "Enables a command for the guild.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";command enable <command_name>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "command_name",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "CommandManager",
        "category": "CommandManager",
        "permissions": [
            "has_permissions(administrator=True)",
            "has_permissions(administrator=True)"
        ],
        "checks": [
            "has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(administrator=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(administrator=True)"
        ],
        "signature": "self, ctx, *, command_name: str",
        "sourceFile": "cogs/cmdmngr/cmdmngr.py",
        "sourceLine": 59,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/cmdmngr/cmdmngr.py#L59",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "commands::Information::cogs/information/information.py:316",
        "name": "commands",
        "description": "Sends link to the bot's commands.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";commands"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 316,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L316",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "commands.json::Owner::cogs/owner/owner.py:984",
        "name": "commands.json",
        "description": "Returns every command and subcommand in alphabetical order in JSON, including hidden ones.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";commands.json"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 984,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L984",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "createinvite::Moderation::cogs/moderation/moderation.py:2935",
        "name": "createinvite",
        "description": "Creates a unique invite for the server. (non-vanity).",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Creates a unique invite for the server. (non-vanity).",
        "aliases": [
            "createinv",
            "instantinvite"
        ],
        "usage": [
            ";createinvite [channel] [age] [uses]",
            "/createinvite [channel:discord.TextChannel] [age:app_commands.Choice[int]] [uses:app_commands.Choice[int]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "discord.TextChannel",
                "default": "None",
                "required": false
            },
            {
                "name": "age",
                "kind": "positional_or_keyword",
                "type": "app_commands.Choice[int]",
                "default": "None",
                "required": false
            },
            {
                "name": "uses",
                "kind": "positional_or_keyword",
                "type": "app_commands.Choice[int]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "channel": "The channel to create an invite for.",
            "age": "The max age of the invite in seconds.",
            "uses": "The max uses of the invite."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(create_instant_invite=True)"
        ],
        "checks": [
            "has_permissions(create_instant_invite=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(channel='The channel to create an invite for.', age='The max age of the invite in seconds.', uses='The max uses of the invite.')",
            "app_commands.choices(age=[app_commands.Choice(name='30 minutes', value=1800), app_commands.Choice(name='1 hour', value=3600), app_commands.Choice(name='6 hours', value=21600), app_commands.Choice(name='12 hours', value=43200), app_commands.Choice(name='1 day', value=86400), app_commands.Choice(name='7 days', value=604800), app_commands.Choice(name='Never', value=0)], uses=[app_commands.Choice(name='1 use', value=1), app_commands.Choice(name='5 uses', value=5), app_commands.Choice(name='10 uses', value=10), app_commands.Choice(name='25 uses', value=25), app_commands.Choice(name='50 uses', value=50), app_commands.Choice(name='100 uses', value=100), app_commands.Choice(name='No limit', value=0)])",
            "has_permissions(create_instant_invite=True)"
        ],
        "signature": "self, ctx, channel: discord.TextChannel=None, age: app_commands.Choice[int]=None, uses: app_commands.Choice[int]=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2935,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2935",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "createinvite::Moderation::cogs/moderation/moderation.py:3267",
        "name": "createinvite",
        "description": "Creates a unique invite for the server. (non-vanity).",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Creates a unique invite for the server. (non-vanity).",
        "aliases": [
            "createinv",
            "instantinvite"
        ],
        "usage": [
            ";createinvite [channel] [age] [uses]",
            "/createinvite [channel:discord.TextChannel] [age:app_commands.Choice[int]] [uses:app_commands.Choice[int]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "discord.TextChannel",
                "default": "None",
                "required": false
            },
            {
                "name": "age",
                "kind": "positional_or_keyword",
                "type": "app_commands.Choice[int]",
                "default": "None",
                "required": false
            },
            {
                "name": "uses",
                "kind": "positional_or_keyword",
                "type": "app_commands.Choice[int]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "channel": "The channel to create an invite for.",
            "age": "The max age of the invite in seconds.",
            "uses": "The max uses of the invite."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(create_instant_invite=True)"
        ],
        "checks": [
            "has_permissions(create_instant_invite=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(channel='The channel to create an invite for.', age='The max age of the invite in seconds.', uses='The max uses of the invite.')",
            "app_commands.choices(age=[app_commands.Choice(name='30 minutes', value=1800), app_commands.Choice(name='1 hour', value=3600), app_commands.Choice(name='6 hours', value=21600), app_commands.Choice(name='12 hours', value=43200), app_commands.Choice(name='1 day', value=86400), app_commands.Choice(name='7 days', value=604800), app_commands.Choice(name='Never', value=0)], uses=[app_commands.Choice(name='1 use', value=1), app_commands.Choice(name='5 uses', value=5), app_commands.Choice(name='10 uses', value=10), app_commands.Choice(name='25 uses', value=25), app_commands.Choice(name='50 uses', value=50), app_commands.Choice(name='100 uses', value=100), app_commands.Choice(name='No limit', value=0)])",
            "has_permissions(create_instant_invite=True)"
        ],
        "signature": "self, ctx, channel: discord.TextChannel=None, age: app_commands.Choice[int]=None, uses: app_commands.Choice[int]=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3267,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3267",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "define::Utility::cogs/utility/utility.py:545",
        "name": "define",
        "description": "Searches for a word via the Merriam-Webster.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";define <word>",
            "/define word:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "word",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "word": "Defines a word via the Merriam-Webster."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Utility",
        "category": "Utility",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.describe(word='Defines a word via the Merriam-Webster.')"
        ],
        "signature": "self, ctx: Context, *, word: str",
        "sourceFile": "cogs/utility/utility.py",
        "sourceLine": 545,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/utility/utility.py#L545",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "disable::Levels::cogs/levels/levels.py:195",
        "name": "disable",
        "description": "Disable XP gain in the server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Disable XP gain in the server.",
        "aliases": [
            "disablexp"
        ],
        "usage": [
            ";disable",
            "/disable"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "commands.Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Levels",
        "category": "Levels",
        "permissions": [
            "is_owner()"
        ],
        "checks": [
            "is_owner()"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "is_owner()"
        ],
        "signature": "self, ctx: commands.Context",
        "sourceFile": "cogs/levels/levels.py",
        "sourceLine": 195,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/levels/levels.py#L195",
        "metadata": {
            "hidden": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "disconnect::Moderation::cogs/moderation/moderation.py:2922",
        "name": "disconnect",
        "description": "Server disconnects the mentioned member, or self if none mentioned.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Server disconnects the mentioned member, or self if none mentioned.",
        "aliases": [
            "dc"
        ],
        "usage": [
            ";disconnect [member]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(moderate_members=True)"
        ],
        "checks": [
            "has_permissions(moderate_members=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(moderate_members=True)"
        ],
        "signature": "self, ctx, member: discord.Member=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2922,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2922",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "disconnect::Moderation::cogs/moderation/moderation.py:3254",
        "name": "disconnect",
        "description": "Server disconnects the mentioned member, or self if none mentioned.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Server disconnects the mentioned member, or self if none mentioned.",
        "aliases": [
            "dc"
        ],
        "usage": [
            ";disconnect [member]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(moderate_members=True)"
        ],
        "checks": [
            "has_permissions(moderate_members=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(moderate_members=True)"
        ],
        "signature": "self, ctx, member: discord.Member=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3254,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3254",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "dm::Owner::cogs/owner/owner.py:530",
        "name": "dm",
        "description": "Sends a direct message to a specified user.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Sends a direct message to a specified user.",
        "aliases": [],
        "usage": [
            ";dm <user> <message>",
            "/dm user:discord.Member message:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": null,
                "required": true
            },
            {
                "name": "message",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "user": "Select either a User or if none is selected, the current user will be used.",
            "message": "The message to send."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.describe(user='Select either a User or if none is selected, the current user will be used.', message='The message to send.')"
        ],
        "signature": "self, ctx: Context, user: discord.Member, *, message: str",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 530,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L530",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "docs::Information::cogs/information/information.py:330",
        "name": "docs",
        "description": "Sends link to the bot's documentation.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "documentation"
        ],
        "usage": [
            ";docs"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 330,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L330",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "dog::Fun::cogs/fun/fun.py:1339",
        "name": "dog",
        "description": "Send a random image of a dog from the Dog API",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "pupper",
            "pup",
            "puppies",
            "puppy",
            "pups",
            "doggo",
            "doggos",
            "doggie",
            "doggies"
        ],
        "usage": [
            ";dog",
            "/dog"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 1339,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L1339",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "duck::Fun::cogs/fun/fun.py:1279",
        "name": "duck",
        "description": "Send a random image of a duck from the Duck API",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "quack",
            "duckling"
        ],
        "usage": [
            ";duck",
            "/duck"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 1279,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L1279",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "dumbassdog::Fun::cogs/fun/fun.py:2140",
        "name": "dumbassdog",
        "description": " LFMOAOOAOAOAOAOAOOAOA",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";dumbassdog",
            "/dumbassdog"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 2140,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L2140",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "dump::Owner::cogs/owner/owner.py:1697",
        "name": "dump",
        "description": "Dumps all commands to a json file",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Dumps all bot commands to a JSON file",
        "aliases": [],
        "usage": [
            ";dump"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [],
        "signature": "self, ctx",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 1697,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L1697",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "embed::Owner::cogs/owner/owner.py:672",
        "name": "embed",
        "description": "Sends an embed to a specified channel or the current one if none mentioned.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Sends an embed to a specified channel or the current one if none mentioned.",
        "aliases": [],
        "usage": [
            ";embed <channel> <title> <description> <color> <thumbnail> <footer>",
            "/embed channel:Optional[discord.TextChannel] title:Optional[str] description:Optional[str] color:str thumbnail:Optional[str] footer:Optional[str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.TextChannel]",
                "default": null,
                "required": true
            },
            {
                "name": "title",
                "kind": "positional_or_keyword",
                "type": "Optional[str]",
                "default": null,
                "required": true
            },
            {
                "name": "description",
                "kind": "positional_or_keyword",
                "type": "Optional[str]",
                "default": null,
                "required": true
            },
            {
                "name": "color",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            },
            {
                "name": "thumbnail",
                "kind": "positional_or_keyword",
                "type": "Optional[str]",
                "default": null,
                "required": true
            },
            {
                "name": "footer",
                "kind": "positional_or_keyword",
                "type": "Optional[str]",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "channel": "Select a channel to send the embed to.",
            "title": "The title of the embed.",
            "description": "The description of the embed.",
            "color": "The color of the embed.",
            "thumbnail": "The thumbnail of the embed.",
            "footer": "The footer of the embed."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.describe(channel='Select a channel to send the embed to.', title='The title of the embed.', description='The description of the embed.', color='The color of the embed.', thumbnail='The thumbnail of the embed.', footer='The footer of the embed.')"
        ],
        "signature": "self, ctx: Context, channel: Optional[discord.TextChannel], title: Optional[str], description: Optional[str], color: str, thumbnail: Optional[str], footer: Optional[str]",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 672,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L672",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "emoji::Utility::cogs/utility/utility.py:907",
        "name": "emoji",
        "description": "Base command for emoji commands.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Base command for emoji commands.",
        "aliases": [],
        "usage": [
            ";emoji"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "commands.Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "Utility",
        "category": "Utility",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: commands.Context",
        "sourceFile": "cogs/utility/utility.py",
        "sourceLine": 907,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/utility/utility.py#L907",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "emoji escape::Utility::cogs/utility/utility.py:913",
        "name": "emoji escape",
        "description": "Convert emojis to their string representation in a code block.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Convert emojis to their string representation in a code block.",
        "aliases": [
            "esc"
        ],
        "usage": [
            ";emoji escape <emojis>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "commands.Context",
                "default": null,
                "required": true
            },
            {
                "name": "emojis",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Utility",
        "category": "Utility",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: commands.Context, *, emojis: str",
        "sourceFile": "cogs/utility/utility.py",
        "sourceLine": 913,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/utility/utility.py#L913",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "errors::ErrorHandler::cogs/errors/error.py:106",
        "name": "errors",
        "description": "Search errors by ID. Requires bot owner permissions.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Search errors by ID. Requires bot owner permissions.",
        "aliases": [
            "errorsearch",
            "tb",
            "traceback"
        ],
        "usage": [
            ";errors [id]",
            "/errors [id:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "id",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "ErrorHandler",
        "category": "ErrorHandler",
        "permissions": [
            "commands.is_owner()"
        ],
        "checks": [
            "commands.is_owner()"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "commands.is_owner()"
        ],
        "signature": "self, ctx, id: str=None",
        "sourceFile": "cogs/errors/error.py",
        "sourceLine": 106,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/errors/error.py#L106",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "fakepermissions::FakePermissions::cogs/fakepermissions/fakepermissions.py:32",
        "name": "fakepermissions",
        "description": "View commands in FakePermissions.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "View commands in FakePermissions.",
        "aliases": [
            "fp"
        ],
        "usage": [
            ";fakepermissions",
            "/fakepermissions"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "FakePermissions",
        "category": "FakePermissions",
        "permissions": [
            "app_commands.checks.has_permissions(administrator=True)"
        ],
        "checks": [
            "app_commands.checks.has_permissions(administrator=True)",
            "app_commands.guild_only()"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.checks.has_permissions(administrator=True)",
            "app_commands.guild_only()"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/fakepermissions/fakepermissions.py",
        "sourceLine": 32,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fakepermissions/fakepermissions.py#L32",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "fakepermissions add::FakePermissions::cogs/fakepermissions/fakepermissions.py:40",
        "name": "fakepermissions add",
        "description": "Add fake permissions for a role.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Add fake permissions for a role.",
        "aliases": [],
        "usage": [
            ";fakepermissions add <role> <permissions>",
            "/fakepermissions add role:discord.Role permissions:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            },
            {
                "name": "permissions",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "role": "The role to add permissions for.",
            "permissions": "The permissions to add."
        },
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "FakePermissions",
        "category": "FakePermissions",
        "permissions": [
            "app_commands.describe(role='The role to add permissions for.', permissions='The permissions to add.')",
            "has_permissions(administrator=True)",
            "app_commands.choices(permissions=[app_commands.Choice(name='Administrator', value='admin'), app_commands.Choice(name='Server Management', value='server'), app_commands.Choice(name='Channel Management', value='channel'), app_commands.Choice(name='Moderation', value='mod'), app_commands.Choice(name='Voice & Stage', value='voice'), app_commands.Choice(name='Message', value='message'), app_commands.Choice(name='Application Commands', value='app_cmd')])",
            "app_commands.checks.has_permissions(administrator=True)"
        ],
        "checks": [
            "app_commands.describe(role='The role to add permissions for.', permissions='The permissions to add.')",
            "has_permissions(administrator=True)",
            "app_commands.choices(permissions=[app_commands.Choice(name='Administrator', value='admin'), app_commands.Choice(name='Server Management', value='server'), app_commands.Choice(name='Channel Management', value='channel'), app_commands.Choice(name='Moderation', value='mod'), app_commands.Choice(name='Voice & Stage', value='voice'), app_commands.Choice(name='Message', value='message'), app_commands.Choice(name='Application Commands', value='app_cmd')])"
        ],
        "inheritedGroupChecks": [
            "app_commands.checks.has_permissions(administrator=True)",
            "app_commands.guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(role='The role to add permissions for.', permissions='The permissions to add.')",
            "has_permissions(administrator=True)",
            "app_commands.choices(permissions=[app_commands.Choice(name='Administrator', value='admin'), app_commands.Choice(name='Server Management', value='server'), app_commands.Choice(name='Channel Management', value='channel'), app_commands.Choice(name='Moderation', value='mod'), app_commands.Choice(name='Voice & Stage', value='voice'), app_commands.Choice(name='Message', value='message'), app_commands.Choice(name='Application Commands', value='app_cmd')])"
        ],
        "signature": "self, ctx: Context, role: discord.Role, permissions: str",
        "sourceFile": "cogs/fakepermissions/fakepermissions.py",
        "sourceLine": 40,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fakepermissions/fakepermissions.py#L40",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "fakepermissions list::FakePermissions::cogs/fakepermissions/fakepermissions.py:96",
        "name": "fakepermissions list",
        "description": "List fake permissions for a role.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "List fake permissions for a role.",
        "aliases": [],
        "usage": [
            ";fakepermissions list [role]",
            "/fakepermissions list [role:discord.Role]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "FakePermissions",
        "category": "FakePermissions",
        "permissions": [
            "has_permissions(administrator=True)",
            "app_commands.checks.has_permissions(administrator=True)"
        ],
        "checks": [
            "has_permissions(administrator=True)",
            "app_commands.guild_only()"
        ],
        "inheritedGroupChecks": [
            "app_commands.checks.has_permissions(administrator=True)",
            "app_commands.guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(administrator=True)",
            "app_commands.guild_only()"
        ],
        "signature": "self, ctx: Context, role: discord.Role=None",
        "sourceFile": "cogs/fakepermissions/fakepermissions.py",
        "sourceLine": 96,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fakepermissions/fakepermissions.py#L96",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "fakepermissions remove::FakePermissions::cogs/fakepermissions/fakepermissions.py:140",
        "name": "fakepermissions remove",
        "description": "Remove fake permissions from a role.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Remove fake permissions from a role.",
        "aliases": [],
        "usage": [
            ";fakepermissions remove <role> [permissions]",
            "/fakepermissions remove role:discord.Role [permissions:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            },
            {
                "name": "permissions",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "role": "The role to remove fake permissions from",
            "permissions": "The permissions to remove"
        },
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "FakePermissions",
        "category": "FakePermissions",
        "permissions": [
            "has_permissions(administrator=True)",
            "app_commands.describe(role='The role to remove fake permissions from', permissions='The permissions to remove')",
            "app_commands.checks.has_permissions(administrator=True)"
        ],
        "checks": [
            "has_permissions(administrator=True)",
            "app_commands.guild_only()",
            "app_commands.describe(role='The role to remove fake permissions from', permissions='The permissions to remove')"
        ],
        "inheritedGroupChecks": [
            "app_commands.checks.has_permissions(administrator=True)",
            "app_commands.guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(administrator=True)",
            "app_commands.guild_only()",
            "app_commands.describe(role='The role to remove fake permissions from', permissions='The permissions to remove')"
        ],
        "signature": "self, ctx: Context, role: discord.Role, permissions: str=None",
        "sourceFile": "cogs/fakepermissions/fakepermissions.py",
        "sourceLine": 140,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fakepermissions/fakepermissions.py#L140",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "fetch::Utility::cogs/utility/utility.py:691",
        "name": "fetch",
        "description": "Fetches the sticker from a reply and sends it as a downloadable file.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Fetches the sticker from a reply and sends it as a downloadable file.",
        "aliases": [],
        "usage": [
            ";fetch"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Utility",
        "category": "Utility",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx",
        "sourceFile": "cogs/utility/utility.py",
        "sourceLine": 691,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/utility/utility.py#L691",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "fih::Fun::cogs/fun/fun.py:2155",
        "name": "fih",
        "description": "fih",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";fih",
            "/fih"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 2155,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L2155",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "fm::LastFM::cogs/lastfm/.lastfm.py:164",
        "name": "fm",
        "description": "Shows currently playing track via the LastFM API.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shows currently playing track via the LastFM API.",
        "aliases": [],
        "usage": [
            ";fm [user]",
            "/fm [user:Optional[discord.User]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.User]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to show the currently playing track for."
        },
        "enabled": false,
        "runtimeStatus": "not_registered_by_setup_or_module_not_imported",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.describe(user='The user to show the currently playing track for.')"
        ],
        "signature": "self, ctx: Context, user: Optional[discord.User]=None",
        "sourceFile": "cogs/lastfm/.lastfm.py",
        "sourceLine": 164,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/.lastfm.py#L164",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "fm::LastFM::cogs/lastfm/lastfm.py:489",
        "name": "fm",
        "description": "Shows currently playing track via the LastFM API.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shows currently playing track via the LastFM API.",
        "aliases": [
            "fuckme",
            "np",
            "nowplaying"
        ],
        "usage": [
            ";fm [user]",
            "/fm [user:Optional[discord.User]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.User]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to show the currently playing track for."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.describe(user='The user to show the currently playing track for.')"
        ],
        "signature": "self, ctx: Context, user: Optional[discord.User]=None",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 489,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L489",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "fox::Fun::cogs/fun/fun.py:1221",
        "name": "fox",
        "description": "Send a random image of a fox from the Fox API",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "whatdoesthefoxsay"
        ],
        "usage": [
            ";fox",
            "/fox"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 1221,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L1221",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "gate::Config::cogs/config/configuration.py:114",
        "name": "gate",
        "description": "View or manage the server gate.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "View or manage the server gate.",
        "aliases": [],
        "usage": [
            ";gate",
            "/gate"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Config",
        "category": "Config",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/config/configuration.py",
        "sourceLine": 114,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/config/configuration.py#L114",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "gate::Server::cogs/server/server.py:111",
        "name": "gate",
        "description": "Configure the server join and leave log settings.",
        "descriptionSource": "inferred",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";gate"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "Server",
        "category": "Server",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/server/server.py",
        "sourceLine": 111,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/server/server.py#L111",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "gate channel::Config::cogs/config/configuration.py:294",
        "name": "gate channel",
        "description": "Manage the server gate channel.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Set the server gate channel.",
        "aliases": [],
        "usage": [
            ";gate channel <channel>",
            "/gate channel channel:discord.TextChannel"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "discord.TextChannel",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "channel": "The channel to send the server gate messages to"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Config",
        "category": "Config",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)",
            "app_commands.describe(channel='The channel to send the server gate messages to')"
        ],
        "signature": "self, ctx: Context, channel: discord.TextChannel",
        "sourceFile": "cogs/config/configuration.py",
        "sourceLine": 294,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/config/configuration.py#L294",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "gate dm::Config::cogs/config/configuration.py:230",
        "name": "gate dm",
        "description": "Manage the server gate DM message.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "View or manage the server gate DM message.",
        "aliases": [],
        "usage": [
            ";gate dm"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "Config",
        "category": "Config",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/config/configuration.py",
        "sourceLine": 230,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/config/configuration.py#L230",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "gate dm reset::Config::cogs/config/configuration.py:284",
        "name": "gate dm reset",
        "description": "Reset the server gate DM message.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Reset the server gate DM message.",
        "aliases": [],
        "usage": [
            ";gate dm reset",
            "/gate dm reset"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Config",
        "category": "Config",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/config/configuration.py",
        "sourceLine": 284,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/config/configuration.py#L284",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "gate dm set::Config::cogs/config/configuration.py:241",
        "name": "gate dm set",
        "description": "Set the server gate DM message with embed replacements.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Set the server gate DM message with embed replacements.",
        "aliases": [],
        "usage": [
            ";gate dm set <message>",
            "/gate dm set message:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "message",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "message": "The message to DM when a user joins the server. Use {user.mention} for mentions, {user.name} for username, etc."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Config",
        "category": "Config",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(message='The message to DM when a user joins the server. Use {user.mention} for mentions, {user.name} for username, etc.')",
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context, *, message: str",
        "sourceFile": "cogs/config/configuration.py",
        "sourceLine": 241,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/config/configuration.py#L241",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "gate goodbye::Config::cogs/config/configuration.py:176",
        "name": "gate goodbye",
        "description": "Manage the server gate goodbye message.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Set the server gate goodbye message.",
        "aliases": [],
        "usage": [
            ";gate goodbye"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "Config",
        "category": "Config",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/config/configuration.py",
        "sourceLine": 176,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/config/configuration.py#L176",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "gate goodbye set::Config::cogs/config/configuration.py:187",
        "name": "gate goodbye set",
        "description": "Set the server gate goodbye message with embed replacements.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Set the server gate goodbye message with embed replacements.",
        "aliases": [],
        "usage": [
            ";gate goodbye set <message>",
            "/gate goodbye set message:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "message",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "message": "The message to send when a user leaves the server. Use {user.name} for username, etc."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Config",
        "category": "Config",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(message='The message to send when a user leaves the server. Use {user.name} for username, etc.')",
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context, *, message: str",
        "sourceFile": "cogs/config/configuration.py",
        "sourceLine": 187,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/config/configuration.py#L187",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "gate join::Server::cogs/server/server.py:168",
        "name": "gate join",
        "description": "Sets a custom welcome message for the server and displays it in an embed.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Sets a custom welcome message for the server and displays it in an embed.",
        "aliases": [
            "joinmsg",
            "welcmsg",
            "joinmessage",
            "welcomemessage",
            "welcmessage",
            "welc"
        ],
        "usage": [
            ";gate join <message>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "message",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Server",
        "category": "Server",
        "permissions": [
            "has_permissions(administrator=True)"
        ],
        "checks": [
            "has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(administrator=True)"
        ],
        "signature": "self, ctx: Context, *, message: str",
        "sourceFile": "cogs/server/server.py",
        "sourceLine": 168,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/server/server.py#L168",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "gate leave::Server::cogs/server/server.py:200",
        "name": "gate leave",
        "description": "Sets a custom leave message for the server and displays it in an embed.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Sets a custom leave message for the server and displays it in an embed.",
        "aliases": [
            "leavemsg"
        ],
        "usage": [
            ";gate leave <message>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "message",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Server",
        "category": "Server",
        "permissions": [
            "has_permissions(administrator=True)"
        ],
        "checks": [
            "has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(administrator=True)"
        ],
        "signature": "self, ctx: Context, *, message: str",
        "sourceFile": "cogs/server/server.py",
        "sourceLine": 200,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/server/server.py#L200",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "gate reset::Config::cogs/config/configuration.py:356",
        "name": "gate reset",
        "description": "Reset the server gate.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Reset the server gate.",
        "aliases": [],
        "usage": [
            ";gate reset",
            "/gate reset"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Config",
        "category": "Config",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/config/configuration.py",
        "sourceLine": 356,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/config/configuration.py#L356",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "gate reset::Server::cogs/server/server.py:222",
        "name": "gate reset",
        "description": "Resets the join logs for the current server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Resets the join logs for the current server.",
        "aliases": [
            "resetlogs"
        ],
        "usage": [
            ";gate reset"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Server",
        "category": "Server",
        "permissions": [
            "has_permissions(administrator=True)"
        ],
        "checks": [
            "has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(administrator=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/server/server.py",
        "sourceLine": 222,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/server/server.py#L222",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "gate set::Server::cogs/server/server.py:116",
        "name": "gate set",
        "description": "Sets the join log channel for the current server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Sets the join log channel for the current server.",
        "aliases": [
            "logs"
        ],
        "usage": [
            ";gate set [channel]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "discord.TextChannel",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Server",
        "category": "Server",
        "permissions": [
            "has_permissions(administrator=True)"
        ],
        "checks": [
            "has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(administrator=True)"
        ],
        "signature": "self, ctx: Context, channel: discord.TextChannel=None",
        "sourceFile": "cogs/server/server.py",
        "sourceLine": 116,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/server/server.py#L116",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "gate toggle::Config::cogs/config/configuration.py:365",
        "name": "gate toggle",
        "description": "Toggle the server gate.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Toggle the server gate.",
        "aliases": [],
        "usage": [
            ";gate toggle <status>",
            "/gate toggle status:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "status",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "status": "Enable or disable the server gate"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Config",
        "category": "Config",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)",
            "app_commands.describe(status='Enable or disable the server gate')",
            "app_commands.choices(status=[app_commands.Choice(name='Enable', value='enable'), app_commands.Choice(name='Disable', value='disable')])"
        ],
        "signature": "self, ctx: Context, status: str",
        "sourceFile": "cogs/config/configuration.py",
        "sourceLine": 365,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/config/configuration.py#L365",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "gate view::Config::cogs/config/configuration.py:314",
        "name": "gate view",
        "description": "View the server gate.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "View the server gate.",
        "aliases": [],
        "usage": [
            ";gate view",
            "/gate view"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Config",
        "category": "Config",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/config/configuration.py",
        "sourceLine": 314,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/config/configuration.py#L314",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "gate view::Server::cogs/server/server.py:248",
        "name": "gate view",
        "description": "Views the current join logs for the current server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Views the current join logs for the current server.",
        "aliases": [
            "viewlogs"
        ],
        "usage": [
            ";gate view"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Server",
        "category": "Server",
        "permissions": [
            "has_permissions(administrator=True)"
        ],
        "checks": [
            "has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(administrator=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/server/server.py",
        "sourceLine": 248,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/server/server.py#L248",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "gate welcome::Config::cogs/config/configuration.py:122",
        "name": "gate welcome",
        "description": "Manage the server gate welcome message.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "View or manage the server gate welcome message.",
        "aliases": [],
        "usage": [
            ";gate welcome"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "Config",
        "category": "Config",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/config/configuration.py",
        "sourceLine": 122,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/config/configuration.py#L122",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "gate welcome set::Config::cogs/config/configuration.py:133",
        "name": "gate welcome set",
        "description": "Set the server gate welcome message with embed replacements.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Set the server gate welcome message with embed replacements.",
        "aliases": [],
        "usage": [
            ";gate welcome set <message>",
            "/gate welcome set message:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "message",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "message": "The message to send when a user joins the server. Use {user.mention} for mentions, {user.name} for username, etc."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Config",
        "category": "Config",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(message='The message to send when a user joins the server. Use {user.mention} for mentions, {user.name} for username, etc.')",
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context, *, message: str",
        "sourceFile": "cogs/config/configuration.py",
        "sourceLine": 133,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/config/configuration.py#L133",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "gif::Utility::cogs/utility/utility.py:1358",
        "name": "gif",
        "description": "Convert image to Gif",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";gif <image>",
            "/gif image:discord.Attachment"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "image",
                "kind": "positional_or_keyword",
                "type": "discord.Attachment",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "image": "The image to convert to GIF"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Utility",
        "category": "Utility",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.describe(image='The image to convert to GIF')"
        ],
        "signature": "self, ctx, image: discord.Attachment",
        "sourceFile": "cogs/utility/utility.py",
        "sourceLine": 1358,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/utility/utility.py#L1358",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "git::Git::cogs/git/git.py:54",
        "name": "git",
        "description": "Git commands.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";git"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "Git",
        "category": "Git",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/git/git.py",
            "sourceLine": 17
        },
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/git/git.py",
        "sourceLine": 54,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/git/git.py#L54",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "git log::Git::cogs/git/git.py:81",
        "name": "git log",
        "description": "Shows the commit logs.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Show commit logs.\n\nParameters:\nlimit: Number of commits to show (default: 10)",
        "aliases": [],
        "usage": [
            ";git log [limit]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "limit",
                "kind": "positional_or_keyword",
                "type": "int",
                "default": "10",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Git",
        "category": "Git",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/git/git.py",
            "sourceLine": 17
        },
        "otherDecorators": [],
        "signature": "self, ctx: Context, limit: int=10",
        "sourceFile": "cogs/git/git.py",
        "sourceLine": 81,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/git/git.py#L81",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "git pull::Git::cogs/git/git.py:74",
        "name": "git pull",
        "description": "Pulls the git repository from the remote repository.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Pull changes from the remote repository.",
        "aliases": [],
        "usage": [
            ";git pull"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Git",
        "category": "Git",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/git/git.py",
            "sourceLine": 17
        },
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/git/git.py",
        "sourceLine": 74,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/git/git.py#L74",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "git push::Git::cogs/git/git.py:67",
        "name": "git push",
        "description": "Pushes the git repository to the remote repository.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Push changes to the remote repository.",
        "aliases": [],
        "usage": [
            ";git push"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Git",
        "category": "Git",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/git/git.py",
            "sourceLine": 17
        },
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/git/git.py",
        "sourceLine": 67,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/git/git.py#L67",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "git status::Git::cogs/git/git.py:59",
        "name": "git status",
        "description": "Shows the working tree status of the git repository.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Show the working tree status.",
        "aliases": [],
        "usage": [
            ";git status"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Git",
        "category": "Git",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/git/git.py",
            "sourceLine": 17
        },
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/git/git.py",
        "sourceLine": 59,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/git/git.py#L59",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "globalwhoknows::LastFM::cogs/lastfm/lastfm.py:2497",
        "name": "globalwhoknows",
        "description": "Shortcut for lastfm globalwhoknows command",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shortcut for lastfm globalwhoknows command",
        "aliases": [
            "gwk"
        ],
        "usage": [
            ";globalwhoknows [artist]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "artist",
                "kind": "keyword_only",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context, *, artist: str=None",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 2497,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L2497",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "globalwhoknowsalbum::LastFM::cogs/lastfm/lastfm.py:2515",
        "name": "globalwhoknowsalbum",
        "description": "Shortcut for lastfm globalwhoknowsalbum command",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shortcut for lastfm globalwhoknowsalbum command",
        "aliases": [
            "gwkalbum",
            "gwka"
        ],
        "usage": [
            ";globalwhoknowsalbum [album]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "album",
                "kind": "keyword_only",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context, *, album: str=None",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 2515,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L2515",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "globalwhoknowstrack::LastFM::cogs/lastfm/lastfm.py:2506",
        "name": "globalwhoknowstrack",
        "description": "Shortcut for lastfm globalwhoknowstrack command",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shortcut for lastfm globalwhoknowstrack command",
        "aliases": [
            "gwktrack",
            "gwkt"
        ],
        "usage": [
            ";globalwhoknowstrack [track]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "track",
                "kind": "keyword_only",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context, *, track: str=None",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 2506,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L2506",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "hangman::Games::cogs/games/games.py:339",
        "name": "hangman",
        "description": "Start a solo Hangman game",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Start a solo Hangman game",
        "aliases": [
            "hm"
        ],
        "usage": [
            ";hangman"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Games",
        "category": "Games",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx",
        "sourceFile": "cogs/games/games.py",
        "sourceLine": 339,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/games/games.py#L339",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "hardban::Moderation::cogs/moderation/moderation.py:577",
        "name": "hardban",
        "description": "Bans a user by User ID and deletes their messages.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "hb",
            "hban"
        ],
        "usage": [
            ";hardban <user_id> [reason]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "user_id",
                "kind": "positional_or_keyword",
                "type": "int",
                "default": null,
                "required": true
            },
            {
                "name": "reason",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(administrator=True)"
        ],
        "checks": [
            "has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(administrator=True)"
        ],
        "signature": "self, ctx, user_id: int, reason: str=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 577,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L577",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "heater::Information::cogs/information/information.py:1907",
        "name": "heater",
        "description": "Heater",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";heater",
            "/heater"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1907,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1907",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "help::VortexHelp::core/client/help.py:45",
        "name": "help",
        "description": "Shows help about the bot, a command, or a category of commands.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "h",
            "man",
            "manual"
        ],
        "usage": [
            ";help [command]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "command",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "configured_as_help_command",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "prefix",
        "cog": "VortexHelp",
        "category": "VortexHelp",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "command=None",
        "sourceFile": "core/client/help.py",
        "sourceLine": 45,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/core/client/help.py#L45",
        "metadata": {
            "example": "help",
            "configured_at": "src/base/bot.py:44"
        },
        "classCommandAttributes": {}
    },
    {
        "id": "hide::Moderation::cogs/moderation/moderation.py:2756",
        "name": "hide",
        "description": "Hides the specified channel or the current channel if none is specified.\n\nThis prevents @everyone from viewing the channel.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Hides the specified channel or the current channel if none is specified.\n\nThis prevents @everyone from viewing the channel.",
        "aliases": [],
        "usage": [
            ";hide [channel]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.TextChannel]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_channels=True)"
        ],
        "checks": [
            "has_permissions(manage_channels=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_channels=True)"
        ],
        "signature": "self, ctx, channel: Optional[discord.TextChannel]=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2756,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2756",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "hotfix::Developer::cogs/developer/developer.py:56",
        "name": "hotfix",
        "description": "Sends the hotfix update from the hotfix.txt file with role mention.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Sends the hotfix update from the hotfix.txt file with role mention.",
        "aliases": [],
        "usage": [
            ";hotfix"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Developer",
        "category": "Developer",
        "permissions": [
            "commands.has_permissions(manage_guild=True)"
        ],
        "checks": [
            "commands.has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "commands.has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/developer/developer.py",
        "sourceLine": 56,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/developer/developer.py#L56",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "hug::Reactions::cogs/reactions/reactions.py:133",
        "name": "hug",
        "description": "Hugs a user >_<",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Give someone a warm hug!",
        "aliases": [],
        "usage": [
            ";hug <user>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Reactions",
        "category": "Reactions",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx, user: discord.Member",
        "sourceFile": "cogs/reactions/reactions.py",
        "sourceLine": 133,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/reactions/reactions.py#L133",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "imagine::Listeners::cogs/listeners/listeners.py:395",
        "name": "imagine",
        "description": "A hidden command that only responds if run by a specific bot.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "A hidden command that only responds if run by a specific bot.",
        "aliases": [],
        "usage": [
            ";imagine"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Listeners",
        "category": "Listeners",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/listeners/listeners.py",
        "sourceLine": 395,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/listeners/listeners.py#L395",
        "metadata": {
            "hidden": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "imports::Owner::cogs/owner/owner.py:727",
        "name": "imports",
        "description": "Counts the number of imports in the project.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";imports"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 727,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L727",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "inrole::Moderation::cogs/moderation/moderation.py:2210",
        "name": "inrole",
        "description": "Displays all members in a specific role with interactive buttons.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Displays all members in a specific role with interactive buttons.",
        "aliases": [
            "ir"
        ],
        "usage": [
            ";inrole <role>",
            "/inrole role:discord.Role"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx, role: discord.Role",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2210,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2210",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "inrole kick::Moderation::cogs/moderation/moderation.py:2225",
        "name": "inrole kick",
        "description": "kicks all users within a specific role",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";inrole kick <role> [reason]",
            "/inrole kick role:discord.Role [reason:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            },
            {
                "name": "reason",
                "kind": "keyword_only",
                "type": "str",
                "default": "'No reason provided'",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_guild=True, kick_members=True)",
            "bot_has_permissions(kick_members=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True, kick_members=True)",
            "bot_has_permissions(kick_members=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True, kick_members=True)",
            "bot_has_permissions(kick_members=True)"
        ],
        "signature": "self, ctx, role: discord.Role, *, reason: str='No reason provided'",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2225,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2225",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "instagram::Reposters::cogs/reposters/reposters.py:258",
        "name": "instagram",
        "description": "Browse Instagram user and trending-post commands.",
        "descriptionSource": "inferred",
        "help": null,
        "docstring": null,
        "aliases": [
            "ig"
        ],
        "usage": [
            ";instagram",
            "/instagram"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Reposters",
        "category": "Reposters",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/reposters/reposters.py",
        "sourceLine": 258,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/reposters/reposters.py#L258",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "instagram trending::Reposters::cogs/reposters/reposters.py:327",
        "name": "instagram trending",
        "description": "Get a trending instagram post",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Get a trending instagram post",
        "aliases": [
            "fyp",
            "doomscroll"
        ],
        "usage": [
            ";instagram trending",
            "/instagram trending"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Reposters",
        "category": "Reposters",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/reposters/reposters.py",
        "sourceLine": 327,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/reposters/reposters.py#L327",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "instagram user::Reposters::cogs/reposters/reposters.py:264",
        "name": "instagram user",
        "description": "Get Instagram user info.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Get Instagram user information.",
        "aliases": [],
        "usage": [
            ";instagram user [username]",
            "/instagram user [username:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "username",
                "kind": "keyword_only",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Reposters",
        "category": "Reposters",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, *, username: str=None",
        "sourceFile": "cogs/reposters/reposters.py",
        "sourceLine": 264,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/reposters/reposters.py#L264",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "install::Information::cogs/information/information.py:1423",
        "name": "install",
        "description": "Generates an OAuth2 User Install link for the bot.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Generates an OAuth2 User Install link for the bot.",
        "aliases": [],
        "usage": [
            ";install",
            "/install"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1423,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1423",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "invite::Information::cogs/information/information.py:1379",
        "name": "invite",
        "description": "Generates an invite link for the bot.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Generates an invite link for the bot.",
        "aliases": [
            "gbi"
        ],
        "usage": [
            ";invite [user]",
            "/invite [user:Optional[discord.Member]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.Member]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)"
        ],
        "signature": "self, ctx: Context, user: Optional[discord.Member]=None",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1379,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1379",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "invocations::Invocations::cogs/invocations/invocations.py:36",
        "name": "invocations",
        "description": "Shows detailed information about all existing invocations.",
        "descriptionSource": "source",
        "help": "Shows detailed information about all existing invocations.",
        "docstring": "Displays detailed information about all existing invocations.",
        "aliases": [],
        "usage": [
            ";invocations"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Invocations",
        "category": "Invocations",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "Invocation(restrict_to_owner=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/invocations/invocations.py",
        "sourceLine": 36,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/invocations/invocations.py#L36",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "jail::Moderation::cogs/moderation/moderation.py:2266",
        "name": "jail",
        "description": "Jails a user, applying the jailed role and logging the event.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Jails a user, applying the jailed role and logging the event.",
        "aliases": [],
        "usage": [
            ";jail <member> [reason]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": null,
                "required": true
            },
            {
                "name": "reason",
                "kind": "keyword_only",
                "type": null,
                "default": "'No reason provided'",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(moderate_members=True)"
        ],
        "checks": [
            "has_permissions(moderate_members=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(moderate_members=True)"
        ],
        "signature": "self, ctx, member: discord.Member, *, reason='No reason provided'",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2266,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2266",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "jail channel::Moderation::cogs/moderation/moderation.py:2343",
        "name": "jail channel",
        "description": "Sets the jail channel for the jail system.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Sets the jail channel for the jail system.",
        "aliases": [],
        "usage": [
            ";jail channel <channel>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "discord.TextChannel",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(moderate_members=True)"
        ],
        "checks": [],
        "inheritedGroupChecks": [
            "has_permissions(moderate_members=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx, channel: discord.TextChannel",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2343,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2343",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "jail role::Moderation::cogs/moderation/moderation.py:2349",
        "name": "jail role",
        "description": "Sets the jailed role for the jail system.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Sets the jailed role for the jail system.",
        "aliases": [],
        "usage": [
            ";jail role <role>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(moderate_members=True)"
        ],
        "checks": [],
        "inheritedGroupChecks": [
            "has_permissions(moderate_members=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx, role: discord.Role",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2349,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2349",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "jail setup::Moderation::cogs/moderation/moderation.py:2310",
        "name": "jail setup",
        "description": "Sets up the jail system with required roles and channels.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Sets up the jail system with required roles and channels.",
        "aliases": [],
        "usage": [
            ";jail setup"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(administrator=True)",
            "has_permissions(moderate_members=True)"
        ],
        "checks": [
            "has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(moderate_members=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(administrator=True)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2310,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2310",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "kick::Moderation::cogs/moderation/moderation.py:708",
        "name": "kick",
        "description": "Kicks a member by mention or User ID.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Kicks a member from the server.",
        "aliases": [
            "sock"
        ],
        "usage": [
            ";kick [member] [user_id] [reason]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": "None",
                "required": false
            },
            {
                "name": "user_id",
                "kind": "positional_or_keyword",
                "type": "int",
                "default": "None",
                "required": false
            },
            {
                "name": "reason",
                "kind": "keyword_only",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(kick_members=True)"
        ],
        "checks": [
            "has_permissions(kick_members=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(kick_members=True)"
        ],
        "signature": "self, ctx, member: discord.Member=None, user_id: int=None, *, reason: str=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 708,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L708",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "kill::Suicide::cogs/$uicide/suicide.py:296",
        "name": "kill",
        "description": "Kill Yourself",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";kill"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "Suicide",
        "category": "Suicide",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/$uicide/suicide.py",
        "sourceLine": 296,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/$uicide/suicide.py#L296",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "kill yourself::Suicide::cogs/$uicide/suicide.py:300",
        "name": "kill yourself",
        "description": "Kill Yourself",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";kill yourself [part]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "part",
                "kind": "keyword_only",
                "type": "Optional[str]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Suicide",
        "category": "Suicide",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context, *, part: Optional[str]=None",
        "sourceFile": "cogs/$uicide/suicide.py",
        "sourceLine": 300,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/$uicide/suicide.py#L300",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "kiss::Reactions::cogs/reactions/reactions.py:158",
        "name": "kiss",
        "description": "Kisses a user >_<",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Send a sweet kiss to someone special!",
        "aliases": [],
        "usage": [
            ";kiss <user>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Reactions",
        "category": "Reactions",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx, user: discord.Member",
        "sourceFile": "cogs/reactions/reactions.py",
        "sourceLine": 158,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/reactions/reactions.py#L158",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "kys::Suicide::cogs/$uicide/suicide.py:305",
        "name": "kys",
        "description": "Shortcut for 'kill yourself'",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";kys [part]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "part",
                "kind": "keyword_only",
                "type": "Optional[str]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Suicide",
        "category": "Suicide",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context, *, part: Optional[str]=None",
        "sourceFile": "cogs/$uicide/suicide.py",
        "sourceLine": 305,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/$uicide/suicide.py#L305",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "l::Fun::cogs/fun/fun.py:494",
        "name": "l",
        "description": "L to you for thinking this was a command.. oh wait.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";l"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 494,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L494",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lastfm::LastFM::cogs/lastfm/.lastfm.py:76",
        "name": "lastfm",
        "description": "Base command for LastFM related commands.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "lf",
            "lfm"
        ],
        "usage": [
            ";lastfm",
            "/lastfm"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "not_registered_by_setup_or_module_not_imported",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/lastfm/.lastfm.py",
        "sourceLine": 76,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/.lastfm.py#L76",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lastfm::LastFM::cogs/lastfm/lastfm.py:331",
        "name": "lastfm",
        "description": "Base command for LastFM related commands.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "lf",
            "lfm"
        ],
        "usage": [
            ";lastfm",
            "/lastfm"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 331,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L331",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lastfm auth::LastFM::cogs/lastfm/.lastfm.py:85",
        "name": "lastfm auth",
        "description": "Authenticate with Last.fm to link your account.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Start the Last.fm authentication process",
        "aliases": [],
        "usage": [
            ";lastfm auth",
            "/lastfm auth"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "not_registered_by_setup_or_module_not_imported",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [
            "commands.cooldown(1, 60, commands.BucketType.user)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "commands.cooldown(1, 60, commands.BucketType.user)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/lastfm/.lastfm.py",
        "sourceLine": 85,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/.lastfm.py#L85",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lastfm auth::LastFM::cogs/lastfm/lastfm.py:342",
        "name": "lastfm auth",
        "description": "Authenticate with Last.fm to link your account.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Start the Last.fm authentication process",
        "aliases": [],
        "usage": [
            ";lastfm auth",
            "/lastfm auth"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [
            "commands.cooldown(1, 60, commands.BucketType.user)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)",
            "commands.cooldown(1, 60, commands.BucketType.user)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 342,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L342",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lastfm cover::LastFM::cogs/lastfm/.lastfm.py:277",
        "name": "lastfm cover",
        "description": "Get the cover art for the track you are currently listening to.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "coverart",
            "c"
        ],
        "usage": [
            ";lastfm cover [user]",
            "/lastfm cover [user:Optional[discord.Member]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.Member]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "not_registered_by_setup_or_module_not_imported",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, user: Optional[discord.Member]=None",
        "sourceFile": "cogs/lastfm/.lastfm.py",
        "sourceLine": 277,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/.lastfm.py#L277",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lastfm cover::LastFM::cogs/lastfm/lastfm.py:784",
        "name": "lastfm cover",
        "description": "Get the cover art for the track you are currently listening to.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "coverart",
            "c"
        ],
        "usage": [
            ";lastfm cover [user]",
            "/lastfm cover [user:Optional[discord.Member]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.Member]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, user: Optional[discord.Member]=None",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 784,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L784",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lastfm globalwhoknows::LastFM::cogs/lastfm/lastfm.py:1893",
        "name": "lastfm globalwhoknows",
        "description": "Shows what other users listen to globally.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shows who listens to a specific artist the most across all servers.",
        "aliases": [
            "gwk"
        ],
        "usage": [
            ";lastfm globalwhoknows [artist]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "artist",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, artist: str=None",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 1893,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L1893",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "lastfm globalwhoknows album::LastFM::cogs/lastfm/lastfm.py:2279",
        "name": "lastfm globalwhoknows album",
        "description": "Shows the top 15 users who listen to an album globally.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shows who listens to a specific album the most across all servers.",
        "aliases": [],
        "usage": [
            ";lastfm globalwhoknows album [album] [artist]",
            "/lastfm globalwhoknows album [album:str] [artist:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "album",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            },
            {
                "name": "artist",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "album": "The album (optional, uses your currently playing album if not specified)",
            "artist": "The artist (optional, only needed if album is specified and you want to override the artist)"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(album='The album (optional, uses your currently playing album if not specified)', artist='The artist (optional, only needed if album is specified and you want to override the artist)')",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, album: str=None, artist: str=None",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 2279,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L2279",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lastfm globalwhoknows artist::LastFM::cogs/lastfm/lastfm.py:1944",
        "name": "lastfm globalwhoknows artist",
        "description": "Shows the top 15 users who listen to an artist globally.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shows who listens to a specific artist the most across all servers.",
        "aliases": [],
        "usage": [
            ";lastfm globalwhoknows artist [artist]",
            "/lastfm globalwhoknows artist [artist:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "artist",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "artist": "The artist."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(artist='The artist.')",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, artist: str=None",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 1944,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L1944",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lastfm globalwhoknows track::LastFM::cogs/lastfm/lastfm.py:2093",
        "name": "lastfm globalwhoknows track",
        "description": "Shows the top 15 users who listen to a track globally.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shows who listens to a specific track the most across all servers.",
        "aliases": [],
        "usage": [
            ";lastfm globalwhoknows track [track] [artist]",
            "/lastfm globalwhoknows track [track:str] [artist:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "track",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            },
            {
                "name": "artist",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "track": "The track to search for (optional, uses your currently playing track if not specified)",
            "artist": "The artist of the track (optional, only needed if track is specified and you want to override the artist)"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(track='The track to search for (optional, uses your currently playing track if not specified)', artist='The artist of the track (optional, only needed if track is specified and you want to override the artist)')",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, track: str=None, artist: str=None",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 2093,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L2093",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lastfm logout::LastFM::cogs/lastfm/lastfm.py:430",
        "name": "lastfm logout",
        "description": "Logout of Last.fm.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Logout of Last.fm.",
        "aliases": [],
        "usage": [
            ";lastfm logout",
            "/lastfm logout"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 430,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L430",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lastfm scrobbles::LastFM::cogs/lastfm/.lastfm.py:338",
        "name": "lastfm scrobbles",
        "description": "Get the total scrobbles for a specific user.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "sc",
            "plays"
        ],
        "usage": [
            ";lastfm scrobbles [user]",
            "/lastfm scrobbles [user:Optional[discord.Member]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.Member]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to get the total scrobbles for."
        },
        "enabled": false,
        "runtimeStatus": "not_registered_by_setup_or_module_not_imported",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.describe(user='The user to get the total scrobbles for.')"
        ],
        "signature": "self, ctx: Context, user: Optional[discord.Member]=None",
        "sourceFile": "cogs/lastfm/.lastfm.py",
        "sourceLine": 338,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/.lastfm.py#L338",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lastfm scrobbles::LastFM::cogs/lastfm/lastfm.py:843",
        "name": "lastfm scrobbles",
        "description": "Get the total scrobbles for a specific user.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "sc",
            "plays"
        ],
        "usage": [
            ";lastfm scrobbles [user]",
            "/lastfm scrobbles [user:Optional[discord.Member]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.Member]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to get the total scrobbles for."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.describe(user='The user to get the total scrobbles for.')"
        ],
        "signature": "self, ctx: Context, user: Optional[discord.Member]=None",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 843,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L843",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lastfm top::LastFM::cogs/lastfm/lastfm.py:1601",
        "name": "lastfm top",
        "description": "Shows the top artists, albums, or tracks for a specific user.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Show your top artists",
        "aliases": [],
        "usage": [
            ";lastfm top [user] [period]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.Member]",
                "default": "None",
                "required": false
            },
            {
                "name": "period",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "'7day'",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user.",
            "period": "Time period."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.describe(user='The user.', period='Time period.')",
            "app_commands.choices(period=[app_commands.Choice(name='All Time', value='overall'), app_commands.Choice(name='Weekly', value='7day'), app_commands.Choice(name='Monthly', value='1month'), app_commands.Choice(name='3 Months', value='3month'), app_commands.Choice(name='6 Months', value='6month'), app_commands.Choice(name='Yearly', value='12month')])"
        ],
        "signature": "self, ctx: Context, user: Optional[discord.Member]=None, period: str='7day'",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 1601,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L1601",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "lastfm top artist::LastFM::cogs/lastfm/lastfm.py:1692",
        "name": "lastfm top artist",
        "description": "Shows the top artists for a specific user.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Show your top artists",
        "aliases": [],
        "usage": [
            ";lastfm top artist [user] [period]",
            "/lastfm top artist [user:Optional[discord.Member]] [period:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.Member]",
                "default": "None",
                "required": false
            },
            {
                "name": "period",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "'7day'",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user.",
            "period": "Time period."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.describe(user='The user.', period='Time period.')",
            "app_commands.choices(period=[app_commands.Choice(name='All Time', value='overall'), app_commands.Choice(name='Weekly', value='7day'), app_commands.Choice(name='Monthly', value='1month'), app_commands.Choice(name='3 Months', value='3month'), app_commands.Choice(name='6 Months', value='6month'), app_commands.Choice(name='Yearly', value='12month')])"
        ],
        "signature": "self, ctx: Context, user: Optional[discord.Member]=None, period: str='7day'",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 1692,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L1692",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lastfm trackplays::LastFM::cogs/lastfm/.lastfm.py:362",
        "name": "lastfm trackplays",
        "description": "Get the total scrobbles for a specific track.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "tp"
        ],
        "usage": [
            ";lastfm trackplays [user] [track]",
            "/lastfm trackplays [user:Optional[discord.Member]] [track:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.Member]",
                "default": "None",
                "required": false
            },
            {
                "name": "track",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to get the total scrobbles for.",
            "track": "The track."
        },
        "enabled": false,
        "runtimeStatus": "not_registered_by_setup_or_module_not_imported",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.describe(user='The user to get the total scrobbles for.', track='The track.')"
        ],
        "signature": "self, ctx: Context, user: Optional[discord.Member]=None, track: str=None",
        "sourceFile": "cogs/lastfm/.lastfm.py",
        "sourceLine": 362,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/.lastfm.py#L362",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lastfm trackplays::LastFM::cogs/lastfm/lastfm.py:870",
        "name": "lastfm trackplays",
        "description": "Get the total scrobbles for a specific track.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "tp"
        ],
        "usage": [
            ";lastfm trackplays [user] [track]",
            "/lastfm trackplays [user:Optional[discord.Member]] [track:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.Member]",
                "default": "None",
                "required": false
            },
            {
                "name": "track",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to get the total scrobbles for.",
            "track": "The track."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.describe(user='The user to get the total scrobbles for.', track='The track.')"
        ],
        "signature": "self, ctx: Context, user: Optional[discord.Member]=None, track: str=None",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 870,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L870",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lastfm whoknows::LastFM::cogs/lastfm/lastfm.py:930",
        "name": "lastfm whoknows",
        "description": "Shows who in the server listens to a specific artist the most.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shows who in the server listens to a specific artist the most.",
        "aliases": [
            "wk",
            "whoknowsthis"
        ],
        "usage": [
            ";lastfm whoknows [artist]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "artist",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, artist: str=None",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 930,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L930",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lastfm whoknows album::LastFM::cogs/lastfm/lastfm.py:1221",
        "name": "lastfm whoknows album",
        "description": "Shows the top 10 users who listen to an album server wide.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shows who in the server listens to a specific album the most.",
        "aliases": [],
        "usage": [
            ";lastfm whoknows album [album] [artist]",
            "/lastfm whoknows album [album:str] [artist:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "album",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            },
            {
                "name": "artist",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "album": "The album. Leave empty to use your currently playing track's album.",
            "artist": "The artist of the album. Only needed if not using currently playing track."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(album=\"The album. Leave empty to use your currently playing track's album.\", artist='The artist of the album. Only needed if not using currently playing track.')"
        ],
        "signature": "self, ctx: Context, album: str=None, artist: str=None",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 1221,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L1221",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lastfm whoknows artist::LastFM::cogs/lastfm/lastfm.py:1080",
        "name": "lastfm whoknows artist",
        "description": "Shows the top 10 users who listen to an artist server wide.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shows who in the server listens to a specific artist the most.",
        "aliases": [],
        "usage": [
            ";lastfm whoknows artist [artist]",
            "/lastfm whoknows artist [artist:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "artist",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "artist": "The artist. Leave empty to use your currently playing track's artist."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(artist=\"The artist. Leave empty to use your currently playing track's artist.\")"
        ],
        "signature": "self, ctx: Context, artist: str=None",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 1080,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L1080",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lastfm whoknows track::LastFM::cogs/lastfm/lastfm.py:1408",
        "name": "lastfm whoknows track",
        "description": "Shows the top 10 users who listen to a track server wide.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shows who in the server listens to a specific track the most.",
        "aliases": [],
        "usage": [
            ";lastfm whoknows track [track] [artist]",
            "/lastfm whoknows track [track:str] [artist:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "track",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            },
            {
                "name": "artist",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "track": "The track."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(track='The track.')"
        ],
        "signature": "self, ctx: Context, track: str=None, artist: str=None",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 1408,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L1408",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "leaderboard::Levels::cogs/levels/levels.py:77",
        "name": "leaderboard",
        "description": "Shows the server level leaderboard.",
        "descriptionSource": "inferred",
        "help": null,
        "docstring": null,
        "aliases": [
            "lb",
            "top"
        ],
        "usage": [
            ";leaderboard [page]",
            "/leaderboard [page:int]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "page",
                "kind": "positional_or_keyword",
                "type": "int",
                "default": "1",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Levels",
        "category": "Levels",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx, page: int=1",
        "sourceFile": "cogs/levels/levels.py",
        "sourceLine": 77,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/levels/levels.py#L77",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "len::Owner::cogs/owner/owner.py:928",
        "name": "len",
        "description": "Get the length of any object or property.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "length"
        ],
        "usage": [
            ";len [expr]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "expr",
                "kind": "keyword_only",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [],
        "signature": "self, ctx: Context, *, expr: str=None",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 928,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L928",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "lock::Moderation::cogs/moderation/moderation.py:2694",
        "name": "lock",
        "description": "Locks down the specified channel or the current channel if none is specified.\n\nThis prevents @everyone from sending messages in the channel.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Locks down the specified channel or the current channel if none is specified.\n\nThis prevents @everyone from sending messages in the channel.",
        "aliases": [],
        "usage": [
            ";lock [channel]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.TextChannel]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_channels=True)"
        ],
        "checks": [
            "has_permissions(manage_channels=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_channels=True)"
        ],
        "signature": "self, ctx, channel: Optional[discord.TextChannel]=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2694,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2694",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lockdown::Moderation::cogs/moderation/moderation.py:2569",
        "name": "lockdown",
        "description": "Lockdown commands",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";lockdown",
            "/lockdown"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_channels=True)"
        ],
        "checks": [
            "has_permissions(manage_channels=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_channels=True)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2569,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2569",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lockdown::Moderation::cogs/moderation/moderation.py:3077",
        "name": "lockdown",
        "description": "Lockdown commands",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";lockdown",
            "/lockdown"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_channels=True)"
        ],
        "checks": [
            "has_permissions(manage_channels=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_channels=True)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3077,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3077",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lockdown channel::Moderation::cogs/moderation/moderation.py:2607",
        "name": "lockdown channel",
        "description": "Locks down a specific channel, or the current channel if none is specified.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Locks down a specific channel, or the current channel if none is specified.",
        "aliases": [],
        "usage": [
            ";lockdown channel [channel] [action]",
            "/lockdown channel [channel:Optional[discord.TextChannel]] [action:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.TextChannel]",
                "default": "None",
                "required": false
            },
            {
                "name": "action",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "'lock'",
                "required": false
            }
        ],
        "optionDescriptions": {
            "channel": "Locks down a specific channel, or the current channel if none is specified.",
            "action": "The action to perform on the channel."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_channels=True)",
            "has_permissions(manage_channels=True)"
        ],
        "checks": [
            "has_permissions(manage_channels=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_channels=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(channel='Locks down a specific channel, or the current channel if none is specified.', action='The action to perform on the channel.')",
            "app_commands.choices(action=[app_commands.Choice(name='Lock', value='lock'), app_commands.Choice(name='Unlock', value='unlock'), app_commands.Choice(name='Hide', value='hide'), app_commands.Choice(name='Unhide', value='unhide'), app_commands.Choice(name='Hide & Lock', value='hide_lock'), app_commands.Choice(name='Unhide & Unlock', value='unhide_unlock')])",
            "has_permissions(manage_channels=True)"
        ],
        "signature": "self, ctx, channel: Optional[discord.TextChannel]=None, action: str='lock'",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2607,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2607",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lockdown channel::Moderation::cogs/moderation/moderation.py:3115",
        "name": "lockdown channel",
        "description": "Locks down a specific channel, or the current channel if none is specified.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Locks down a specific channel, or the current channel if none is specified.",
        "aliases": [],
        "usage": [
            ";lockdown channel [channel] [action]",
            "/lockdown channel [channel:Optional[discord.TextChannel]] [action:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.TextChannel]",
                "default": "None",
                "required": false
            },
            {
                "name": "action",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "'lock'",
                "required": false
            }
        ],
        "optionDescriptions": {
            "channel": "Locks down a specific channel, or the current channel if none is specified.",
            "action": "The action to perform on the channel."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_channels=True)",
            "has_permissions(manage_channels=True)"
        ],
        "checks": [
            "has_permissions(manage_channels=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_channels=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(channel='Locks down a specific channel, or the current channel if none is specified.', action='The action to perform on the channel.')",
            "app_commands.choices(action=[app_commands.Choice(name='Lock', value='lock'), app_commands.Choice(name='Unlock', value='unlock'), app_commands.Choice(name='Hide', value='hide'), app_commands.Choice(name='Unhide', value='unhide'), app_commands.Choice(name='Hide & Lock', value='hide_lock'), app_commands.Choice(name='Unhide & Unlock', value='unhide_unlock')])",
            "has_permissions(manage_channels=True)"
        ],
        "signature": "self, ctx, channel: Optional[discord.TextChannel]=None, action: str='lock'",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3115,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3115",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lockdown staticrole::Moderation::cogs/moderation/moderation.py:2575",
        "name": "lockdown staticrole",
        "description": "Sets the static member role if a member role exists.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Sets the static member role if a member role exists.",
        "aliases": [],
        "usage": [
            ";lockdown staticrole <role>",
            "/lockdown staticrole role:discord.Role"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "role": "Sets the static member role if a member role exists."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_channels=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_channels=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(role='Sets the static member role if a member role exists.')",
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx, role: discord.Role",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2575,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2575",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lockdown staticrole::Moderation::cogs/moderation/moderation.py:3083",
        "name": "lockdown staticrole",
        "description": "Sets the static member role if a member role exists.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Sets the static member role if a member role exists.",
        "aliases": [],
        "usage": [
            ";lockdown staticrole <role>",
            "/lockdown staticrole role:discord.Role"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "role": "Sets the static member role if a member role exists."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_channels=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_channels=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(role='Sets the static member role if a member role exists.')",
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx, role: discord.Role",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3083,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3083",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lore::Lore::cogs/lore/lore.py:96",
        "name": "lore",
        "description": "Shows the lorebook for a user with pagination.\nIf no user is mentioned, shows the invoking user's lorebook.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shows the lorebook for a user with pagination.\nIf no user is mentioned, shows the invoking user's lorebook.",
        "aliases": [],
        "usage": [
            ";lore [user]",
            "/lore [user:Optional[Union[User, str]]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Optional[Union[User, str]]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to view lore for (mention or ID)"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Lore",
        "category": "Lore",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.describe(user='The user to view lore for (mention or ID)')"
        ],
        "signature": "self, ctx, user: Optional[Union[User, str]]=None",
        "sourceFile": "cogs/lore/lore.py",
        "sourceLine": 96,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lore/lore.py#L96",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "lore add::Lore::cogs/lore/lore.py:174",
        "name": "lore add",
        "description": "Adds a message to the lorebook of the user who sent the referenced message.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Adds a message to the lorebook of the user who sent the referenced message.\nMust be used by replying to a message or providing a message ID.",
        "aliases": [],
        "usage": [
            ";lore add [message]",
            "/lore add [message:Optional[str]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "message",
                "kind": "positional_or_keyword",
                "type": "Optional[str]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "message": "The message to add to the lorebook (reply to a message or provide message ID)"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Lore",
        "category": "Lore",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(message='The message to add to the lorebook (reply to a message or provide message ID)')",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, message: Optional[str]=None",
        "sourceFile": "cogs/lore/lore.py",
        "sourceLine": 174,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lore/lore.py#L174",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lore leaderboard::Lore::cogs/lore/lore.py:445",
        "name": "lore leaderboard",
        "description": "Shows the top 10 users with the most lore entries.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shows the top 10 users with the most lore entries.",
        "aliases": [
            "lb",
            "top"
        ],
        "usage": [
            ";lore leaderboard",
            "/lore leaderboard"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Lore",
        "category": "Lore",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx",
        "sourceFile": "cogs/lore/lore.py",
        "sourceLine": 445,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lore/lore.py#L445",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lore opt-in::Lore::cogs/lore/lore.py:668",
        "name": "lore opt-in",
        "description": "Opt-in to having your lorebook visible to others.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Opt-in to having your lorebook visible to others.",
        "aliases": [
            "optin"
        ],
        "usage": [
            ";lore opt-in [user]",
            "/lore opt-in [user:Member]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Member",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to opt-in to lore tracking."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Lore",
        "category": "Lore",
        "permissions": [
            "is_owner()"
        ],
        "checks": [
            "is_owner()"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "is_owner()",
            "app_commands.describe(user='The user to opt-in to lore tracking.')",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, user: Member=None",
        "sourceFile": "cogs/lore/lore.py",
        "sourceLine": 668,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lore/lore.py#L668",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lore opt-out::Lore::cogs/lore/lore.py:593",
        "name": "lore opt-out",
        "description": "Opt-out of having your lorebook visible to others.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Opt-out of having your lorebook visible to others.",
        "aliases": [
            "optout"
        ],
        "usage": [
            ";lore opt-out",
            "/lore opt-out"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Lore",
        "category": "Lore",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/lore/lore.py",
        "sourceLine": 593,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lore/lore.py#L593",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lore remove::Lore::cogs/lore/lore.py:369",
        "name": "lore remove",
        "description": "Removes a specific lore entry by its number.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Removes a specific lore entry by its number.",
        "aliases": [],
        "usage": [
            ";lore remove <entry_number> [user]",
            "/lore remove entry_number:int [user:Member]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "entry_number",
                "kind": "positional_or_keyword",
                "type": "int",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Member",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "entry_number": "The entry number to remove.",
            "user": "The user to remove the entry from. Optional."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Lore",
        "category": "Lore",
        "permissions": [
            "is_owner()"
        ],
        "checks": [
            "is_owner()"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(entry_number='The entry number to remove.', user='The user to remove the entry from. Optional.')",
            "is_owner()"
        ],
        "signature": "self, ctx: Context, entry_number: int, user: Member=None",
        "sourceFile": "cogs/lore/lore.py",
        "sourceLine": 369,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lore/lore.py#L369",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lore reset::Lore::cogs/lore/lore.py:397",
        "name": "lore reset",
        "description": "Resets a user's entire lorebook.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Resets a user's entire lorebook.",
        "aliases": [],
        "usage": [
            ";lore reset [user]",
            "/lore reset [user:Member]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Member",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Lore",
        "category": "Lore",
        "permissions": [
            "is_owner()"
        ],
        "checks": [
            "is_owner()"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "is_owner()"
        ],
        "signature": "self, ctx: Context, user: Member=None",
        "sourceFile": "cogs/lore/lore.py",
        "sourceLine": 397,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lore/lore.py#L397",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lore search::Lore::cogs/lore/lore.py:465",
        "name": "lore search",
        "description": "Search for lore entries containing a keyword",
        "descriptionSource": "source",
        "help": "Search for lore entries containing a keyword",
        "docstring": "Search for lore entries containing a specific keyword.",
        "aliases": [],
        "usage": [
            ";lore search [query] [user]",
            "/lore search [query:str] [user:Member]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "query",
                "kind": "keyword_only",
                "type": "str",
                "default": "None",
                "required": false
            },
            {
                "name": "user",
                "kind": "keyword_only",
                "type": "Member",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "query": "The keyword to search for.",
            "user": "The user to search only their lorebook. Optional."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Lore",
        "category": "Lore",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(query='The keyword to search for.', user='The user to search only their lorebook. Optional.')"
        ],
        "signature": "self, ctx: Context, *, query: str=None, user: Member=None",
        "sourceFile": "cogs/lore/lore.py",
        "sourceLine": 465,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lore/lore.py#L465",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lore show::Lore::cogs/lore/lore.py:411",
        "name": "lore show",
        "description": "Shows a specific lore entry for a user.\nIf no user is mentioned, uses the command invoker.\nIf entry number is out of range, shows a random entry.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shows a specific lore entry for a user.\nIf no user is mentioned, uses the command invoker.\nIf entry number is out of range, shows a random entry.",
        "aliases": [],
        "usage": [
            ";lore show <entry_number> [user]",
            "/lore show entry_number:int [user:Member]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "entry_number",
                "kind": "positional_or_keyword",
                "type": "int",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Member",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "entry_number": "The entry number to show.",
            "user": "The user to show the entry from. Optional."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Lore",
        "category": "Lore",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(entry_number='The entry number to show.', user='The user to show the entry from. Optional.')"
        ],
        "signature": "self, ctx: Context, entry_number: int, user: Member=None",
        "sourceFile": "cogs/lore/lore.py",
        "sourceLine": 411,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lore/lore.py#L411",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "lore view::Lore::cogs/lore/lore.py:162",
        "name": "lore view",
        "description": "Views a users lore, or your own if none mentioned.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Views a users lore, or your own if none mentioned.",
        "aliases": [],
        "usage": [
            ";lore view [user]",
            "/lore view [user:Optional[User]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Optional[User]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to view lore for."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Lore",
        "category": "Lore",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(user='The user to view lore for.')",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, user: Optional[User]=None",
        "sourceFile": "cogs/lore/lore.py",
        "sourceLine": 162,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lore/lore.py#L162",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "loreadd::Invocations::cogs/invocations/invocations.py:45",
        "name": "loreadd",
        "description": "Adds a new lore entry.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Adds a new lore entry.",
        "aliases": [
            "addlore",
            "al",
            "clip"
        ],
        "usage": [
            ";loreadd"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Invocations",
        "category": "Invocations",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/invocations/invocations.py",
        "sourceLine": 45,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/invocations/invocations.py#L45",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "ltt::Information::cogs/information/information.py:1510",
        "name": "ltt",
        "description": "Estimate the one-way latency (LTT) of the bot.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Estimate the one-way latency (LTT) of the bot.",
        "aliases": [
            "oneway",
            "latencyoneway",
            "halfping"
        ],
        "usage": [
            ";ltt"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [
            "cooldown(1, 3, BucketType.user)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 3, BucketType.user)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1510,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1510",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "massban::Moderation::cogs/moderation/moderation.py:550",
        "name": "massban",
        "description": "Mass bans users by User ID.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "mban",
            "mb",
            "bulkban"
        ],
        "usage": [
            ";massban [user_ids] [reason]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "user_ids",
                "kind": "var_positional",
                "type": "int",
                "required": false
            },
            {
                "name": "reason",
                "kind": "keyword_only",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(administrator=True)"
        ],
        "checks": [
            "has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(administrator=True)"
        ],
        "signature": "self, ctx, *user_ids: int, reason: str=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 550,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L550",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "math::Math::cogs/math/commands.py:24",
        "name": "math",
        "description": "View commands in Math.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";math",
            "/math"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Math",
        "category": "Math",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/math/commands.py",
        "sourceLine": 24,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/math/commands.py#L24",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "math algebra::Math::cogs/math/commands.py:72",
        "name": "math algebra",
        "description": "Solve equations or evaluate expressions",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Solve equations or evaluate mathematical expressions",
        "aliases": [],
        "usage": [
            ";math algebra <input> [variable]",
            "/math algebra input:str [variable:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "input",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            },
            {
                "name": "variable",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "'x'",
                "required": false
            }
        ],
        "optionDescriptions": {
            "input": "Equation to solve.",
            "variable": "Variable to solve for."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Math",
        "category": "Math",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.describe(input='Equation to solve.', variable='Variable to solve for.')"
        ],
        "signature": "self, ctx: Context, input: str, variable: str='x'",
        "sourceFile": "cogs/math/commands.py",
        "sourceLine": 72,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/math/commands.py#L72",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "math calc::Math::cogs/math/commands.py:31",
        "name": "math calc",
        "description": "Calculate a mathematical expression",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Calculate a mathematical expression with basic operations (+, -, *, /, ^, **)",
        "aliases": [],
        "usage": [
            ";math calc <expression>",
            "/math calc expression:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "expression",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "expression": "The mathematical expression to evaluate."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Math",
        "category": "Math",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.describe(expression='The mathematical expression to evaluate.')"
        ],
        "signature": "self, ctx: Context, *, expression: str",
        "sourceFile": "cogs/math/commands.py",
        "sourceLine": 31,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/math/commands.py#L31",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "mc::Information::cogs/information/information.py:950",
        "name": "mc",
        "description": "Display the member count of the server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "membercount",
            "members"
        ],
        "usage": [
            ";mc"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [
            "cooldown(1, 3, BucketType.user)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 3, BucketType.user)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 950,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L950",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "memberslist::Information::cogs/information/information.py:1872",
        "name": "memberslist",
        "description": "View the list of members in the server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shows a list of all members in the server.",
        "aliases": [
            "memberlist"
        ],
        "usage": [
            ";memberslist"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1872,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1872",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "mutualservers::Owner::cogs/owner/owner.py:1474",
        "name": "mutualservers",
        "description": "View mutual servers with the bot.\n\nIf no user is specified, shows your mutual servers with the bot.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "View mutual servers with the bot.\n\nIf no user is specified, shows your mutual servers with the bot.",
        "aliases": [
            "mutuals",
            "mutualguilds",
            "mutual",
            "ms"
        ],
        "usage": [
            ";mutualservers [user]",
            "/mutualservers [user:discord.User]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.User",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to view mutual servers with. Optional."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [
            "app_commands.describe(user='The user to view mutual servers with. Optional.')",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, user: discord.User=None",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 1474,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L1474",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "namehistory::Information::cogs/information/information.py:1566",
        "name": "namehistory",
        "description": "Shows the server nickname history of a user.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shows the server nickname history of a user in an embed with pagination.",
        "aliases": [
            "nickhistory",
            "nh",
            "ngh"
        ],
        "usage": [
            ";namehistory [user]",
            "/namehistory [user:Optional[discord.User]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.User]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to show nickname history for."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(users=True, guilds=True)",
            "app_commands.describe(user='The user to show nickname history for.')"
        ],
        "signature": "self, ctx: Context, user: Optional[discord.User]=None",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1566,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1566",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "newusers::Moderation::cogs/moderation/moderation.py:3558",
        "name": "newusers",
        "description": "View list of all members that joined today",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";newusers",
            "/newusers"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3558,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3558",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "nick::Moderation::cogs/moderation/moderation.py:889",
        "name": "nick",
        "description": "Base command for nickname management.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";nick [member] [new_nick]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": "None",
                "required": false
            },
            {
                "name": "new_nick",
                "kind": "keyword_only",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_nicknames=True)"
        ],
        "checks": [
            "has_permissions(manage_nicknames=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_nicknames=True)"
        ],
        "signature": "self, ctx, member: discord.Member=None, *, new_nick: str=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 889,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L889",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "nick force::Moderation::cogs/moderation/moderation.py:1000",
        "name": "nick force",
        "description": "Forces a nickname on a user that cannot be changed. If no nickname is provided, removes the forced nickname.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";nick force [member] [forced_nick]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": "None",
                "required": false
            },
            {
                "name": "forced_nick",
                "kind": "keyword_only",
                "type": "Optional[str]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(administrator=True)",
            "has_permissions(manage_nicknames=True)"
        ],
        "checks": [
            "has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_nicknames=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(administrator=True)"
        ],
        "signature": "self, ctx, member: discord.Member=None, *, forced_nick: Optional[str]=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1000,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1000",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "nick remove::Moderation::cogs/moderation/moderation.py:964",
        "name": "nick remove",
        "description": "Removes the nickname of the mentioned user.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "reset",
            "clear"
        ],
        "usage": [
            ";nick remove [member]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_nicknames=True)"
        ],
        "checks": [],
        "inheritedGroupChecks": [
            "has_permissions(manage_nicknames=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx, member: discord.Member=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 964,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L964",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "nick set::Moderation::cogs/moderation/moderation.py:914",
        "name": "nick set",
        "description": "Changes or resets the nickname of the mentioned user.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "change"
        ],
        "usage": [
            ";nick set [member] [new_nick]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": "None",
                "required": false
            },
            {
                "name": "new_nick",
                "kind": "keyword_only",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_nicknames=True)"
        ],
        "checks": [],
        "inheritedGroupChecks": [
            "has_permissions(manage_nicknames=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx, member: discord.Member=None, *, new_nick: str=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 914,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L914",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "noselfreact::Moderation::cogs/moderation/moderation.py:3624",
        "name": "noselfreact",
        "description": "Prevents users from reacting to their own messages",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Prevents users from reacting to their own messages",
        "aliases": [
            "nsr"
        ],
        "usage": [
            ";noselfreact",
            "/noselfreact"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3624,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3624",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "noselfreact disable::Moderation::cogs/moderation/moderation.py:3654",
        "name": "noselfreact disable",
        "description": "Disable NoSelfReact for this server",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Disable NoSelfReact for this server",
        "aliases": [],
        "usage": [
            ";noselfreact disable",
            "/noselfreact disable"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3654,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3654",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "noselfreact enable::Moderation::cogs/moderation/moderation.py:3632",
        "name": "noselfreact enable",
        "description": "Enable NoSelfReact for this server",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Enable NoSelfReact for this server",
        "aliases": [],
        "usage": [
            ";noselfreact enable",
            "/noselfreact enable"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3632,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3632",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "noselfreact message::Moderation::cogs/moderation/moderation.py:3675",
        "name": "noselfreact message",
        "description": "Manage the message sent when NoSelfReact blocks a self-reaction.",
        "descriptionSource": "inferred",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";noselfreact message"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3675,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3675",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "noselfreact message reset::Moderation::cogs/moderation/moderation.py:3706",
        "name": "noselfreact message reset",
        "description": "Reset NoSelfReact message for this server",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Reset NoSelfReact message for this server",
        "aliases": [],
        "usage": [
            ";noselfreact message reset",
            "/noselfreact message reset"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "guild_only()",
            "has_permissions(manage_guild=True)",
            "guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3706,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3706",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "noselfreact message set::Moderation::cogs/moderation/moderation.py:3682",
        "name": "noselfreact message set",
        "description": "Set NoSelfReact message for this server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Set NoSelfReact message for this server.",
        "aliases": [],
        "usage": [
            ";noselfreact message set <message>",
            "/noselfreact message set message:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "message",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "message": "The message the bot sends if nsr is enabled"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "guild_only()",
            "has_permissions(manage_guild=True)",
            "guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "guild_only()",
            "has_permissions(manage_guild=True)",
            "app_commands.describe(message='The message the bot sends if nsr is enabled')"
        ],
        "signature": "self, ctx: Context, message: str",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3682,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3682",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "nothing::Fun::cogs/fun/fun.py:509",
        "name": "nothing",
        "description": "Literally does nothing.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Literally does nothing.",
        "aliases": [],
        "usage": [
            ";nothing"
        ],
        "customUsage": ";nothing",
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 509,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L509",
        "metadata": {
            "usage": ";nothing"
        },
        "classCommandAttributes": {}
    },
    {
        "id": "nuke::Moderation::cogs/moderation/moderation.py:1678",
        "name": "nuke",
        "description": "Nukes the current channel with confirmation.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Nukes the current channel with confirmation.",
        "aliases": [
            "arab",
            "twintowers",
            "hiroshima",
            "nagasaki",
            "japan1945",
            "ww2",
            "boomboom",
            "no_witnesses",
            "allahuakbar",
            "tsarbomba",
            "saint"
        ],
        "usage": [
            ";nuke"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(administrator=True)",
            "bot_has_permissions(administrator=True)"
        ],
        "checks": [
            "cooldown(1, 10, BucketType.guild)",
            "has_permissions(administrator=True)",
            "bot_has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 10, BucketType.guild)",
            "has_permissions(administrator=True)",
            "bot_has_permissions(administrator=True)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1678,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1678",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "nword::Fun::cogs/fun/fun.py:517",
        "name": "nword",
        "description": "See how many times you have said the nword.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "See how many times you have said the nword.",
        "aliases": [],
        "usage": [
            ";nword [user]",
            "/nword [user:discord.User]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "keyword_only",
                "type": "discord.User",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(dms=True, guilds=True, private_channels=True)",
            "app_commands.allowed_installs(users=True, guilds=True)"
        ],
        "signature": "self, ctx, *, user: discord.User=None",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 517,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L517",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "nword apologize::Fun::cogs/fun/fun.py:639",
        "name": "nword apologize",
        "description": "Apologize for your racism.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Reset your hard R count and apologize.",
        "aliases": [],
        "usage": [
            ";nword apologize",
            "/nword apologize"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(dms=True, guilds=True, private_channels=True)",
            "app_commands.allowed_installs(users=True, guilds=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 639,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L639",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "nword forgive::Fun::cogs/fun/fun.py:663",
        "name": "nword forgive",
        "description": "Reset a user's n-word count entirely.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Reset a user's n-word count entirely.",
        "aliases": [],
        "usage": [
            ";nword forgive <user>",
            "/nword forgive user:discord.User"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.User",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [
            "is_owner()"
        ],
        "checks": [
            "is_owner()"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "is_owner()",
            "app_commands.allowed_contexts(dms=True, guilds=True, private_channels=True)",
            "app_commands.allowed_installs(users=True, guilds=True)"
        ],
        "signature": "self, ctx: Context, user: discord.User",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 663,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L663",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "nword scale::Fun::cogs/fun/fun.py:541",
        "name": "nword scale",
        "description": "See how black you are based on how many times you have said the nword.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "See how black you are based on how many times you have said the nword.",
        "aliases": [],
        "usage": [
            ";nword scale [user]",
            "/nword scale [user:discord.User]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.User",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(dms=True, guilds=True, private_channels=True)",
            "app_commands.allowed_installs(users=True, guilds=True)"
        ],
        "signature": "self, ctx: Context, user: discord.User=None",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 541,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L541",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "outofsync::LastFM::cogs/lastfm/lastfm.py:697",
        "name": "outofsync",
        "description": "Check if your LastFM scrobbles are out of sync.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";outofsync",
            "/outofsync"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 697,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L697",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "pat::Reactions::cogs/reactions/reactions.py:108",
        "name": "pat",
        "description": "Pats a user >_<",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Give someone a nice headpat!",
        "aliases": [],
        "usage": [
            ";pat <user>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Reactions",
        "category": "Reactions",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx, user: discord.Member",
        "sourceFile": "cogs/reactions/reactions.py",
        "sourceLine": 108,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/reactions/reactions.py#L108",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "patch::Developer::cogs/developer/developer.py:19",
        "name": "patch",
        "description": "Sends the patch update from the patch.txt file with role mention.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Sends the patch update from the patch.txt file with role mention.",
        "aliases": [],
        "usage": [
            ";patch"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Developer",
        "category": "Developer",
        "permissions": [
            "commands.has_permissions(manage_guild=True)"
        ],
        "checks": [
            "commands.has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "commands.has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/developer/developer.py",
        "sourceLine": 19,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/developer/developer.py#L19",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "pause::Music::cogs/music/music.py:496",
        "name": "pause",
        "description": "Pauses the current song.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Pauses the current song.",
        "aliases": [],
        "usage": [
            ";pause",
            "/pause"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Music",
        "category": "Music",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/music/music.py",
        "sourceLine": 496,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/music/music.py#L496",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "permissions::Information::cogs/information/information.py:1164",
        "name": "permissions",
        "description": "Checks the permissions of a member or a role.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Checks the permissions of a member or a role.",
        "aliases": [
            "perm",
            "perms"
        ],
        "usage": [
            ";permissions [target]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "target",
                "kind": "keyword_only",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context, *, target: str=None",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1164,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1164",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "pickupline::Fun::cogs/fun/fun.py:763",
        "name": "pickupline",
        "description": "Get a random pickup line.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Get a random pickup line.",
        "aliases": [
            "pickup",
            "rizz"
        ],
        "usage": [
            ";pickupline [user]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "keyword_only",
                "type": "Optional[discord.User]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx, *, user: Optional[discord.User]=None",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 763,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L763",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "pinterest::PinterestCog::cogs/scrapers/scrapers.py:189",
        "name": "pinterest",
        "description": "Base command for Pinterest commands.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Base command for Pinterest commands.",
        "aliases": [
            "pin"
        ],
        "usage": [
            ";pinterest",
            "/pinterest"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "PinterestCog",
        "category": "PinterestCog",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/scrapers/scrapers.py",
        "sourceLine": 189,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/scrapers/scrapers.py#L189",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "pinterest channel::PinterestCog::cogs/scrapers/scrapers.py:332",
        "name": "pinterest channel",
        "description": "Set the channel for Pinterest posts",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Set the channel for Pinterest posts",
        "aliases": [
            "ch"
        ],
        "usage": [
            ";pinterest channel <channel>",
            "/pinterest channel channel:discord.TextChannel"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Union[Context, discord.Interaction]",
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "discord.TextChannel",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "channel": "The channel to post Pinterest images to"
        },
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "PinterestCog",
        "category": "PinterestCog",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(channel='The channel to post Pinterest images to')"
        ],
        "signature": "self, ctx: Union[Context, discord.Interaction], channel: discord.TextChannel",
        "sourceFile": "cogs/scrapers/scrapers.py",
        "sourceLine": 332,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/scrapers/scrapers.py#L332",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "pinterest debug::PinterestCog::cogs/scrapers/scrapers.py:474",
        "name": "pinterest debug",
        "description": "Debug information about the Pinterest posting",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Show debug information about the Pinterest posting",
        "aliases": [
            "dbg"
        ],
        "usage": [
            ";pinterest debug",
            "/pinterest debug"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Union[Context, discord.Interaction]",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "PinterestCog",
        "category": "PinterestCog",
        "permissions": [
            "is_owner()"
        ],
        "checks": [
            "is_owner()"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "is_owner()"
        ],
        "signature": "self, ctx: Union[Context, discord.Interaction]",
        "sourceFile": "cogs/scrapers/scrapers.py",
        "sourceLine": 474,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/scrapers/scrapers.py#L474",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "pinterest disable::PinterestCog::cogs/scrapers/scrapers.py:566",
        "name": "pinterest disable",
        "description": "Disable automatic Pinterest image posting in this server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Disable automatic Pinterest image posting in this server.",
        "aliases": [],
        "usage": [
            ";pinterest disable",
            "/pinterest disable"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "commands.Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "PinterestCog",
        "category": "PinterestCog",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: commands.Context",
        "sourceFile": "cogs/scrapers/scrapers.py",
        "sourceLine": 566,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/scrapers/scrapers.py#L566",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "pinterest enable::PinterestCog::cogs/scrapers/scrapers.py:547",
        "name": "pinterest enable",
        "description": "Enable automatic Pinterest image posting in this server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Enable automatic Pinterest image posting in this server.",
        "aliases": [],
        "usage": [
            ";pinterest enable",
            "/pinterest enable"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "commands.Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "PinterestCog",
        "category": "PinterestCog",
        "permissions": [
            "commands.has_permissions(manage_guild=True)"
        ],
        "checks": [
            "commands.has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "commands.has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: commands.Context",
        "sourceFile": "cogs/scrapers/scrapers.py",
        "sourceLine": 547,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/scrapers/scrapers.py#L547",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "pinterest posting::PinterestCog::cogs/scrapers/scrapers.py:377",
        "name": "pinterest posting",
        "description": "Base command for Pinterest posting commands.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Base command for Pinterest posting commands.",
        "aliases": [
            "post"
        ],
        "usage": [
            ";pinterest posting"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "PinterestCog",
        "category": "PinterestCog",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/scrapers/scrapers.py",
        "sourceLine": 377,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/scrapers/scrapers.py#L377",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "pinterest posting start::PinterestCog::cogs/scrapers/scrapers.py:388",
        "name": "pinterest posting start",
        "description": "Start auto-posting Pinterest images",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Start the auto-posting task",
        "aliases": [],
        "usage": [
            ";pinterest posting start",
            "/pinterest posting start"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Union[Context, discord.Interaction]",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "PinterestCog",
        "category": "PinterestCog",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Union[Context, discord.Interaction]",
        "sourceFile": "cogs/scrapers/scrapers.py",
        "sourceLine": 388,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/scrapers/scrapers.py#L388",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "pinterest posting stop::PinterestCog::cogs/scrapers/scrapers.py:435",
        "name": "pinterest posting stop",
        "description": "Stop auto-posting Pinterest images",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Stop the auto-posting task",
        "aliases": [],
        "usage": [
            ";pinterest posting stop",
            "/pinterest posting stop"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Union[Context, discord.Interaction]",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "PinterestCog",
        "category": "PinterestCog",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Union[Context, discord.Interaction]",
        "sourceFile": "cogs/scrapers/scrapers.py",
        "sourceLine": 435,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/scrapers/scrapers.py#L435",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "pinterest query::PinterestCog::cogs/scrapers/scrapers.py:200",
        "name": "pinterest query",
        "description": "Base command for Pinterest query commands.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Base command for Pinterest query commands.",
        "aliases": [
            "q"
        ],
        "usage": [
            ";pinterest query"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "PinterestCog",
        "category": "PinterestCog",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/scrapers/scrapers.py",
        "sourceLine": 200,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/scrapers/scrapers.py#L200",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "pinterest query add::PinterestCog::cogs/scrapers/scrapers.py:211",
        "name": "pinterest query add",
        "description": "Add a new Pinterest search query",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Add a new Pinterest search query to the database",
        "aliases": [],
        "usage": [
            ";pinterest query add <query>",
            "/pinterest query add query:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Union[Context, discord.Interaction]",
                "default": null,
                "required": true
            },
            {
                "name": "query",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "query": "The search term to add"
        },
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "PinterestCog",
        "category": "PinterestCog",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(query='The search term to add')"
        ],
        "signature": "self, ctx: Union[Context, discord.Interaction], *, query: str",
        "sourceFile": "cogs/scrapers/scrapers.py",
        "sourceLine": 211,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/scrapers/scrapers.py#L211",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "pinterest query list::PinterestCog::cogs/scrapers/scrapers.py:289",
        "name": "pinterest query list",
        "description": "List all Pinterest search queries",
        "descriptionSource": "source",
        "help": null,
        "docstring": "List all Pinterest search queries",
        "aliases": [
            "ls"
        ],
        "usage": [
            ";pinterest query list",
            "/pinterest query list"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Union[Context, discord.Interaction]",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "PinterestCog",
        "category": "PinterestCog",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Union[Context, discord.Interaction]",
        "sourceFile": "cogs/scrapers/scrapers.py",
        "sourceLine": 289,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/scrapers/scrapers.py#L289",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "pinterest query remove::PinterestCog::cogs/scrapers/scrapers.py:252",
        "name": "pinterest query remove",
        "description": "Remove a Pinterest search query",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Remove a Pinterest search query from the database",
        "aliases": [
            "rm"
        ],
        "usage": [
            ";pinterest query remove <query>",
            "/pinterest query remove query:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Union[Context, discord.Interaction]",
                "default": null,
                "required": true
            },
            {
                "name": "query",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "query": "The search term to remove"
        },
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "PinterestCog",
        "category": "PinterestCog",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(query='The search term to remove')"
        ],
        "signature": "self, ctx: Union[Context, discord.Interaction], *, query: str",
        "sourceFile": "cogs/scrapers/scrapers.py",
        "sourceLine": 252,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/scrapers/scrapers.py#L252",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "pinterest status::PinterestCog::cogs/scrapers/scrapers.py:580",
        "name": "pinterest status",
        "description": "Show the current status of Pinterest image posting.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Show the current status of Pinterest image posting.",
        "aliases": [],
        "usage": [
            ";pinterest status",
            "/pinterest status"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "commands.Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "PinterestCog",
        "category": "PinterestCog",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: commands.Context",
        "sourceFile": "cogs/scrapers/scrapers.py",
        "sourceLine": 580,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/scrapers/scrapers.py#L580",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "play::Music::cogs/music/music.py:416",
        "name": "play",
        "description": "Plays a song from YouTube, Spotify, or searches YouTube.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Plays a song from YouTube, Spotify, or searches YouTube.",
        "aliases": [],
        "usage": [
            ";play <query>",
            "/play query:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "query",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "query": "The song name, YouTube URL, or Spotify track URL to play"
        },
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Music",
        "category": "Music",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(query='The song name, YouTube URL, or Spotify track URL to play')"
        ],
        "signature": "self, ctx: Context, *, query: str",
        "sourceFile": "cogs/music/music.py",
        "sourceLine": 416,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/music/music.py#L416",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "playfairs::Owner::cogs/owner/owner.py:880",
        "name": "playfairs",
        "description": "Why do I need a command for myself?",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";playfairs"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 880,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L880",
        "metadata": {
            "hidden": true
        },
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "playfairs.cc::Information::cogs/information/information.py:2032",
        "name": "playfairs.cc",
        "description": "Get information about playfairs.cc.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";playfairs.cc"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 2032,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L2032",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "playunfair::Fun::cogs/fun/fun.py:490",
        "name": "playunfair",
        "description": "Mentions a specific user.",
        "descriptionSource": "inferred",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";playunfair"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 490,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L490",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "pp::Fun::cogs/fun/fun.py:720",
        "name": "pp",
        "description": ",pp user",
        "descriptionSource": "source",
        "help": null,
        "docstring": "See someones pp size",
        "aliases": [
            "dih",
            "dihsize"
        ],
        "usage": [
            ";pp [user]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.Member]",
                "default": "Author",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context, user: Optional[discord.Member]=Author",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 720,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L720",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "prefix::Information::cogs/information/information.py:1265",
        "name": "prefix",
        "description": "Fetches the current prefixes for the bot.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";prefix"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1265,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1265",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "privacy::Information::cogs/information/information.py:322",
        "name": "privacy",
        "description": "Sends link to the bot's privacy policy.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";privacy"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 322,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L322",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "punch::Reactions::cogs/reactions/reactions.py:213",
        "name": "punch",
        "description": "Punches a user >_<",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Punch someone with your virtual fists!",
        "aliases": [],
        "usage": [
            ";punch <user>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Reactions",
        "category": "Reactions",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx, user: discord.Member",
        "sourceFile": "cogs/reactions/reactions.py",
        "sourceLine": 213,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/reactions/reactions.py#L213",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "purge::Moderation::cogs/moderation/moderation.py:1099",
        "name": "purge",
        "description": "Base command for purging messages.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "c",
            "clear"
        ],
        "usage": [
            ";purge [amount]",
            "/purge [amount:Union[int, discord.Member, discord.User]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "amount",
                "kind": "positional_or_keyword",
                "type": "Union[int, discord.Member, discord.User]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_messages=True)"
        ],
        "checks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "signature": "self, ctx, amount: Union[int, discord.Member, discord.User]=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1099,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1099",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "purge after::Moderation::cogs/moderation/moderation.py:1200",
        "name": "purge after",
        "description": "Deletes all messages after a specified message ID.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";purge after <message_id>",
            "/purge after message_id:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "message_id",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "message_id": "The message ID to delete messages after."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_messages=True)",
            "has_permissions(manage_messages=True)"
        ],
        "checks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "inheritedGroupChecks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 5, BucketType.guild)",
            "app_commands.describe(message_id='The message ID to delete messages after.')",
            "has_permissions(manage_messages=True)"
        ],
        "signature": "self, ctx, message_id: str",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1200,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1200",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "purge all::Moderation::cogs/moderation/moderation.py:1637",
        "name": "purge all",
        "description": "Please don't use this command 😭..",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";purge all",
            "/purge all"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(administrator=True)",
            "has_permissions(manage_messages=True)"
        ],
        "checks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(administrator=True)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1637,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1637",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "purge attachments::Moderation::cogs/moderation/moderation.py:1315",
        "name": "purge attachments",
        "description": "Deletes the last 100 messages with attachments.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";purge attachments",
            "/purge attachments"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_messages=True)",
            "has_permissions(manage_messages=True)"
        ],
        "checks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "inheritedGroupChecks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1315,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1315",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "purge before::Moderation::cogs/moderation/moderation.py:1180",
        "name": "purge before",
        "description": "Deletes all messages before a specified message ID.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";purge before <message_id>",
            "/purge before message_id:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "message_id",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "message_id": "The message ID to delete messages before."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_messages=True)",
            "has_permissions(manage_messages=True)"
        ],
        "checks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "inheritedGroupChecks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 5, BucketType.guild)",
            "app_commands.describe(message_id='The message ID to delete messages before.')",
            "has_permissions(manage_messages=True)"
        ],
        "signature": "self, ctx, message_id: str",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1180,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1180",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "purge bot::Moderation::cogs/moderation/moderation.py:1220",
        "name": "purge bot",
        "description": "Deletes the last 100 bot related messages (Bot messages and commands).",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";purge bot [bot] [amount]",
            "/purge bot [bot:Optional[discord.Member]] [amount:Optional[int]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "bot",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.Member]",
                "default": "None",
                "required": false
            },
            {
                "name": "amount",
                "kind": "positional_or_keyword",
                "type": "Optional[int]",
                "default": "50",
                "required": false
            }
        ],
        "optionDescriptions": {
            "amount": "The amount of messages to check (defaults to 50).",
            "bot": "The specific bot to purge messages from (optional)."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_messages=True)",
            "has_permissions(manage_messages=True)"
        ],
        "checks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "inheritedGroupChecks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 5, BucketType.guild)",
            "app_commands.describe(amount='The amount of messages to check (defaults to 50).', bot='The specific bot to purge messages from (optional).')",
            "has_permissions(manage_messages=True)"
        ],
        "signature": "self, ctx, bot: Optional[discord.Member]=None, amount: Optional[int]=50",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1220,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1220",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "purge contains::Moderation::cogs/moderation/moderation.py:1404",
        "name": "purge contains",
        "description": "Deletes the last 100 messages containing the specified text.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";purge contains <text>",
            "/purge contains text:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "text",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_messages=True)",
            "has_permissions(manage_messages=True)"
        ],
        "checks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "inheritedGroupChecks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "signature": "self, ctx, *, text: str",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1404,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1404",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "purge endswith::Moderation::cogs/moderation/moderation.py:1443",
        "name": "purge endswith",
        "description": "Deletes the last 100 messages ending with the specified text.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";purge endswith <text>",
            "/purge endswith text:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "text",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_messages=True)",
            "has_permissions(manage_messages=True)"
        ],
        "checks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "inheritedGroupChecks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "signature": "self, ctx, *, text: str",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1443,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1443",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "purge from::Moderation::cogs/moderation/moderation.py:1143",
        "name": "purge from",
        "description": "Purges messages from a specified user.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "user"
        ],
        "usage": [
            ";purge from <user> [amount]",
            "/purge from user:discord.User [amount:int]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.User",
                "default": null,
                "required": true
            },
            {
                "name": "amount",
                "kind": "positional_or_keyword",
                "type": "int",
                "default": "20",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to purge messages from.",
            "amount": "The amount of messages to purge."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_messages=True)",
            "has_permissions(manage_messages=True)"
        ],
        "checks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "inheritedGroupChecks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 5, BucketType.guild)",
            "app_commands.describe(user='The user to purge messages from.', amount='The amount of messages to purge.')",
            "has_permissions(manage_messages=True)"
        ],
        "signature": "self, ctx, user: discord.User, amount: int=20",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1143,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1143",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "purge invites::Moderation::cogs/moderation/moderation.py:1507",
        "name": "purge invites",
        "description": "Deletes the last 100 messages containing an invite link.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";purge invites",
            "/purge invites"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_messages=True)",
            "has_permissions(manage_messages=True)"
        ],
        "checks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "inheritedGroupChecks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1507,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1507",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "purge links::Moderation::cogs/moderation/moderation.py:1354",
        "name": "purge links",
        "description": "Deletes the last 100 messages with links.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "url"
        ],
        "usage": [
            ";purge links",
            "/purge links"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_messages=True)",
            "has_permissions(manage_messages=True)"
        ],
        "checks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "inheritedGroupChecks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1354,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1354",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "purge mentions::Moderation::cogs/moderation/moderation.py:1539",
        "name": "purge mentions",
        "description": "Deletes the last 100 messages containing a mention.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";purge mentions [user]",
            "/purge mentions [user:discord.Member]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "keyword_only",
                "type": "discord.Member",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_messages=True)",
            "has_permissions(manage_messages=True)"
        ],
        "checks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "inheritedGroupChecks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "signature": "self, ctx, *, user: discord.Member=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1539,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1539",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "purge reactions::Moderation::cogs/moderation/moderation.py:1587",
        "name": "purge reactions",
        "description": "Deletes all reactions on the last 100 messages.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";purge reactions",
            "/purge reactions"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_messages=True)",
            "has_permissions(manage_messages=True)"
        ],
        "checks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "inheritedGroupChecks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1587,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1587",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "purge self::Moderation::cogs/moderation/moderation.py:1285",
        "name": "purge self",
        "description": "Deletes the last 100 messages from the author.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";purge self",
            "/purge self"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_messages=True)",
            "has_permissions(manage_messages=True)"
        ],
        "checks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "inheritedGroupChecks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1285,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1285",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "purge startswith::Moderation::cogs/moderation/moderation.py:1475",
        "name": "purge startswith",
        "description": "Deletes the last 100 messages starting with the specified text.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";purge startswith <text>",
            "/purge startswith text:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "text",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_messages=True)",
            "has_permissions(manage_messages=True)"
        ],
        "checks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "inheritedGroupChecks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "signature": "self, ctx, *, text: str",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1475,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1475",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "purge stickers::Moderation::cogs/moderation/moderation.py:1608",
        "name": "purge stickers",
        "description": "Deletes all stickers on the last 100 messages.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";purge stickers",
            "/purge stickers"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_messages=True)",
            "has_permissions(manage_messages=True)"
        ],
        "checks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "inheritedGroupChecks": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 5, BucketType.guild)",
            "has_permissions(manage_messages=True)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1608,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1608",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "randomfact::Fun::cogs/fun/fun.py:2098",
        "name": "randomfact",
        "description": "Get a random fact.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "fact"
        ],
        "usage": [
            ";randomfact",
            "/randomfact"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 2098,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L2098",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "rank::Levels::cogs/levels/levels.py:31",
        "name": "rank",
        "description": "Shows your level rank or the rank of another user.",
        "descriptionSource": "inferred",
        "help": null,
        "docstring": null,
        "aliases": [
            "level",
            "lvl"
        ],
        "usage": [
            ";rank [user]",
            "/rank [user:discord.User]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "commands.Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.User",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Levels",
        "category": "Levels",
        "permissions": [],
        "checks": [
            "commands.cooldown(1, 5, commands.BucketType.user)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "commands.cooldown(1, 5, commands.BucketType.user)"
        ],
        "signature": "self, ctx: commands.Context, user: discord.User=None",
        "sourceFile": "cogs/levels/levels.py",
        "sourceLine": 31,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/levels/levels.py#L31",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "react::Owner::cogs/owner/owner.py:864",
        "name": "react",
        "description": "Reacts to a message",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Reacts to a message.",
        "aliases": [],
        "usage": [
            ";react <message_id> <emoji>",
            "/react message_id:str emoji:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "message_id",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            },
            {
                "name": "emoji",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "message_id": "The message ID to react to.",
            "emoji": "The emoji to react with."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [
            "app_commands.describe(message_id='The message ID to react to.', emoji='The emoji to react with.')",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, message_id: str, emoji: str",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 864,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L864",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "reaction::Moderation::cogs/moderation/moderation.py:3031",
        "name": "reaction",
        "description": "Base command for reaction management.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";reaction",
            "/reaction"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(moderate_members=True)"
        ],
        "checks": [
            "guild_only()",
            "has_permissions(moderate_members=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "guild_only()",
            "has_permissions(moderate_members=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3031,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3031",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "reaction::Moderation::cogs/moderation/moderation.py:3772",
        "name": "reaction",
        "description": "Base command for reaction management.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";reaction",
            "/reaction"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3772,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3772",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "reaction mute::Moderation::cogs/moderation/moderation.py:3038",
        "name": "reaction mute",
        "description": "Mute a user from reacting to messages.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Revokes a users permissions to react in a channel.",
        "aliases": [],
        "usage": [
            ";reaction mute <member> [channel]",
            "/reaction mute member:discord.Member [channel:Optional[discord.TextChannel]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.TextChannel]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "member": "The member to mute from reacting to messages.",
            "channel": "The channel to mute the user from reacting in. Defaults to the current channel."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(moderate_members=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(moderate_members=True)"
        ],
        "inheritedGroupChecks": [
            "guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(member='The member to mute from reacting to messages.', channel='The channel to mute the user from reacting in. Defaults to the current channel.')",
            "has_permissions(moderate_members=True)"
        ],
        "signature": "self, ctx: Context, member: discord.Member, channel: Optional[discord.TextChannel]=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3038,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3038",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "reaction mute::Moderation::cogs/moderation/moderation.py:3779",
        "name": "reaction mute",
        "description": "Mute a user from reacting to messages.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Revokes a users permissions to react in a channel.",
        "aliases": [],
        "usage": [
            ";reaction mute <member> [channel]",
            "/reaction mute member:discord.Member [channel:Optional[discord.TextChannel]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.TextChannel]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "member": "The member to mute from reacting to messages.",
            "channel": "The channel to mute the user from reacting in. Defaults to the current channel."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(moderate_members=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(moderate_members=True)"
        ],
        "inheritedGroupChecks": [
            "guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(member='The member to mute from reacting to messages.', channel='The channel to mute the user from reacting in. Defaults to the current channel.')",
            "has_permissions(moderate_members=True)"
        ],
        "signature": "self, ctx: Context, member: discord.Member, channel: Optional[discord.TextChannel]=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3779,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3779",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "reaction unmute::Moderation::cogs/moderation/moderation.py:3057",
        "name": "reaction unmute",
        "description": "Unmute a user from reacting to messages.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Grants a users permissions to react in a channel.",
        "aliases": [],
        "usage": [
            ";reaction unmute <member>",
            "/reaction unmute member:discord.Member"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "member": "The member to unmute from reacting to messages."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(moderate_members=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(moderate_members=True)"
        ],
        "inheritedGroupChecks": [
            "guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(member='The member to unmute from reacting to messages.')",
            "has_permissions(moderate_members=True)"
        ],
        "signature": "self, ctx: Context, member: discord.Member",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3057,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3057",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "reaction unmute::Moderation::cogs/moderation/moderation.py:3798",
        "name": "reaction unmute",
        "description": "Unmute a user from reacting to messages.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Grants a users permissions to react in a channel.",
        "aliases": [],
        "usage": [
            ";reaction unmute <member>",
            "/reaction unmute member:discord.Member"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "member": "The member to unmute from reacting to messages."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(moderate_members=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(moderate_members=True)"
        ],
        "inheritedGroupChecks": [
            "guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(member='The member to unmute from reacting to messages.')",
            "has_permissions(moderate_members=True)"
        ],
        "signature": "self, ctx: Context, member: discord.Member",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3798,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3798",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "reactionmute::Moderation::cogs/moderation/moderation.py:861",
        "name": "reactionmute",
        "description": "Revokes a users permissions to react in a channel.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Revokes a users permissions to react in a channel.",
        "aliases": [
            "rmute"
        ],
        "usage": [
            ";reactionmute <member>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(moderate_members=True)"
        ],
        "checks": [
            "has_permissions(moderate_members=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(moderate_members=True)"
        ],
        "signature": "self, ctx, member: discord.Member",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 861,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L861",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "reactionunmute::Moderation::cogs/moderation/moderation.py:875",
        "name": "reactionunmute",
        "description": "Grants a users permissions to react in a channel.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Grants a users permissions to react in a channel.",
        "aliases": [
            "rumute",
            "runmute"
        ],
        "usage": [
            ";reactionunmute <member>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(moderate_members=True)"
        ],
        "checks": [
            "has_permissions(moderate_members=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(moderate_members=True)"
        ],
        "signature": "self, ctx, member: discord.Member",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 875,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L875",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "registart::Moderation::cogs/moderation/moderation.py:3592",
        "name": "registart",
        "description": "the fuck does this even do?",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "random-ass-command-that-does-nothing-useful-and-is-only-here-because-i-got-horribly-bored-and-decided-to-do-something-about-my-insufferable-boredom,why-are-you-even-reading-this"
        ],
        "usage": [
            ";registart"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3592,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3592",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "registarts::Moderation::cogs/moderation/moderation.py:3614",
        "name": "registarts",
        "description": "Shows how many times the registart command has been run.",
        "descriptionSource": "inferred",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";registarts"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "is_owner()"
        ],
        "checks": [
            "is_owner()"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "is_owner()"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3614,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3614",
        "metadata": {
            "hidden": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "Reply with AI::AICommands::cogs/ai/commands.py:18",
        "name": "Reply with AI",
        "description": "Reply to a message using the bot’s AI feature.",
        "descriptionSource": "inferred",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            "Right-click a message > Apps > Reply with AI"
        ],
        "customUsage": null,
        "arguments": [],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "slash"
        ],
        "commandType": "context_menu",
        "kind": "context_menu",
        "cog": "AICommands",
        "category": "AICommands",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": null,
        "sourceFile": "cogs/ai/commands.py",
        "sourceLine": 18,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/ai/commands.py#L18",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "reset::Levels::cogs/levels/levels.py:161",
        "name": "reset",
        "description": "Reset a user's XP in the server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Reset a user's XP in the server.",
        "aliases": [
            "resetxp"
        ],
        "usage": [
            ";reset <user>",
            "/reset user:discord.User"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "commands.Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.User",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Levels",
        "category": "Levels",
        "permissions": [
            "is_owner()"
        ],
        "checks": [
            "is_owner()"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "is_owner()"
        ],
        "signature": "self, ctx: commands.Context, user: discord.User",
        "sourceFile": "cogs/levels/levels.py",
        "sourceLine": 161,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/levels/levels.py#L161",
        "metadata": {
            "hidden": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "resetall::Levels::cogs/levels/levels.py:180",
        "name": "resetall",
        "description": "Reset all users' XP in the server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Reset all users' XP in the server.",
        "aliases": [
            "resetallxp"
        ],
        "usage": [
            ";resetall",
            "/resetall"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "commands.Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Levels",
        "category": "Levels",
        "permissions": [
            "is_owner()"
        ],
        "checks": [
            "is_owner()"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "is_owner()"
        ],
        "signature": "self, ctx: commands.Context",
        "sourceFile": "cogs/levels/levels.py",
        "sourceLine": 180,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/levels/levels.py#L180",
        "metadata": {
            "hidden": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "resetsav::Owner::cogs/owner/owner.py:287",
        "name": "resetsav",
        "description": "Resets the bot's server-specific avatar",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Resets the bot's server-specific avatar",
        "aliases": [],
        "usage": [
            ";resetsav"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [],
        "signature": "self, ctx",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 287,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L287",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "resetsbanner::Owner::cogs/owner/owner.py:309",
        "name": "resetsbanner",
        "description": "Resets bot banner",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Resets bot banner",
        "aliases": [],
        "usage": [
            ";resetsbanner"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [],
        "signature": "self, ctx",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 309,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L309",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "resetsbio::Owner::cogs/owner/owner.py:298",
        "name": "resetsbio",
        "description": "Resets bot bio",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Resets bot bio",
        "aliases": [],
        "usage": [
            ";resetsbio"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [],
        "signature": "self, ctx",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 298,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L298",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "resume::Music::cogs/music/music.py:510",
        "name": "resume",
        "description": "Resumes the current song.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Resumes the current song.",
        "aliases": [],
        "usage": [
            ";resume",
            "/resume"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Music",
        "category": "Music",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/music/music.py",
        "sourceLine": 510,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/music/music.py#L510",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "ri::Information::cogs/information/information.py:933",
        "name": "ri",
        "description": "Display detailed information about a role.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "roleinfo"
        ],
        "usage": [
            ";ri [role]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "keyword_only",
                "type": "discord.Role",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx, *, role: discord.Role=None",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 933,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L933",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "roast::Fun::cogs/fun/fun.py:2074",
        "name": "roast",
        "description": "Roast a user.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Roast a user.",
        "aliases": [
            "insult"
        ],
        "usage": [
            ";roast [user]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.User]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to roast."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(user='The user to roast.')"
        ],
        "signature": "self, ctx: Context, user: Optional[discord.User]=None",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 2074,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L2074",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "role::Moderation::cogs/moderation/moderation.py:1709",
        "name": "role",
        "description": "Base Command for managing roles.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "r"
        ],
        "usage": [
            ";role [member] [role_input]",
            "/role [member:discord.Member] [role_input:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": "None",
                "required": false
            },
            {
                "name": "role_input",
                "kind": "keyword_only",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "member": "The member to assign the role to.",
            "role_input": "The role to assign to the member."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_roles=True)"
        ],
        "checks": [
            "has_permissions(manage_roles=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_roles=True)",
            "app_commands.describe(member='The member to assign the role to.', role_input='The role to assign to the member.')"
        ],
        "signature": "self, ctx, member: discord.Member=None, *, role_input: str=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1709,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1709",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "role bot::Moderation::cogs/moderation/moderation.py:1752",
        "name": "role bot",
        "description": "Assigns all bots in the server a specific role (Needs to be rewritten)",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "bots"
        ],
        "usage": [
            ";role bot <role>",
            "/role bot role:discord.Role"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "role": "The role to assign to all bots in the server."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_roles=True)",
            "has_permissions(manage_roles=True)"
        ],
        "checks": [
            "has_permissions(manage_roles=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_roles=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_roles=True)",
            "app_commands.describe(role='The role to assign to all bots in the server.')"
        ],
        "signature": "self, ctx, role: discord.Role",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1752,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1752",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "role color::Moderation::cogs/moderation/moderation.py:1972",
        "name": "role color",
        "description": "Changes the color of a role.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";role color <role> <color_hex>",
            "/role color role:discord.Role color_hex:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            },
            {
                "name": "color_hex",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "role": "The role to change the color of.",
            "color_hex": "The color hex code to set for the role."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_roles=True)",
            "has_permissions(manage_roles=True)"
        ],
        "checks": [
            "has_permissions(manage_roles=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_roles=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_roles=True)",
            "app_commands.describe(role='The role to change the color of.', color_hex='The color hex code to set for the role.')"
        ],
        "signature": "self, ctx: Context, role: discord.Role, color_hex: str",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1972,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1972",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "role create::Moderation::cogs/moderation/moderation.py:1824",
        "name": "role create",
        "description": "Creates a role.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";role create <role_name>",
            "/role create role_name:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "role_name",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "role_name": "The name of the role to create."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_roles=True)",
            "has_permissions(manage_roles=True)"
        ],
        "checks": [
            "has_permissions(manage_roles=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_roles=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_roles=True)",
            "app_commands.describe(role_name='The name of the role to create.')"
        ],
        "signature": "self, ctx, *, role_name: str",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1824,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1824",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "role delete::Moderation::cogs/moderation/moderation.py:1834",
        "name": "role delete",
        "description": "Deletes a role.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";role delete <role>",
            "/role delete role:discord.Role"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "role": "The role to delete."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_roles=True)",
            "has_permissions(manage_roles=True)"
        ],
        "checks": [
            "has_permissions(manage_roles=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_roles=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_roles=True)",
            "app_commands.describe(role='The role to delete.')"
        ],
        "signature": "self, ctx, role: discord.Role",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1834,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1834",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "role give::Moderation::cogs/moderation/moderation.py:1843",
        "name": "role give",
        "description": "Gives a role to a member. (Doing ,r {member} {role} also does this.)",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";role give <member> <role>",
            "/role give member:discord.Member role:discord.Role"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "member": "The member to give the role to.",
            "role": "The role to give to the member."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_roles=True)",
            "has_permissions(manage_roles=True)"
        ],
        "checks": [
            "has_permissions(manage_roles=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_roles=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_roles=True)",
            "app_commands.describe(member='The member to give the role to.', role='The role to give to the member.')"
        ],
        "signature": "self, ctx: Context, member: discord.Member, role: discord.Role",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1843,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1843",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "role has::Moderation::cogs/moderation/moderation.py:1776",
        "name": "role has",
        "description": "Gives or removes a role to/from members who have a specific role.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";role has <role> <action> <new_role>",
            "/role has role:discord.Role action:app_commands.Choice[str] new_role:discord.Role"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            },
            {
                "name": "action",
                "kind": "positional_or_keyword",
                "type": "app_commands.Choice[str]",
                "default": null,
                "required": true
            },
            {
                "name": "new_role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "role": "The role to check for.",
            "action": "The action to perform (give or remove).",
            "new_role": "The role to give or remove."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_roles=True)",
            "has_permissions(manage_roles=True)"
        ],
        "checks": [
            "has_permissions(manage_roles=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_roles=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_roles=True)",
            "app_commands.describe(role='The role to check for.', action='The action to perform (give or remove).', new_role='The role to give or remove.')",
            "app_commands.choices(action=[app_commands.Choice(name='Give', value='give'), app_commands.Choice(name='Remove', value='remove')])"
        ],
        "signature": "self, ctx, role: discord.Role, action: app_commands.Choice[str], new_role: discord.Role",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1776,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1776",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "role hoist::Moderation::cogs/moderation/moderation.py:1939",
        "name": "role hoist",
        "description": "Toggles whether a role is hoisted or not.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";role hoist <role> [hoist]",
            "/role hoist role:discord.Role [hoist:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            },
            {
                "name": "hoist",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "role": "The role to toggle hoisting for.",
            "hoist": "The hoist value to set for the role."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_roles=True)",
            "has_permissions(manage_roles=True)"
        ],
        "checks": [
            "has_permissions(manage_roles=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_roles=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_roles=True)",
            "app_commands.describe(role='The role to toggle hoisting for.', hoist='The hoist value to set for the role.')"
        ],
        "signature": "self, ctx: Context, role: discord.Role, hoist: str=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1939,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1939",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "role human::Moderation::cogs/moderation/moderation.py:1726",
        "name": "role human",
        "description": "Assigns all non-bots in the server a specific role (Needs to be rewritten)",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "humans"
        ],
        "usage": [
            ";role human <role>",
            "/role human role:discord.Role"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "role": "The role to assign to all non-bots in the server."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_roles=True)",
            "has_permissions(manage_roles=True)"
        ],
        "checks": [
            "has_permissions(manage_roles=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_roles=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_roles=True)",
            "app_commands.describe(role='The role to assign to all non-bots in the server.')"
        ],
        "signature": "self, ctx, role: discord.Role",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1726,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1726",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "role info::Moderation::cogs/moderation/moderation.py:2025",
        "name": "role info",
        "description": "Gives information about a role.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";role info [role]",
            "/role info [role:discord.Role]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "keyword_only",
                "type": "discord.Role",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "role": "The role to get information about."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_roles=True)"
        ],
        "checks": [],
        "inheritedGroupChecks": [
            "has_permissions(manage_roles=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(role='The role to get information about.')"
        ],
        "signature": "self, ctx: Context, *, role: discord.Role=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2025,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2025",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "role list::Moderation::cogs/moderation/moderation.py:2095",
        "name": "role list",
        "description": "Lists all roles in the server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";role list [user]",
            "/role list [user:discord.Member]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to list roles for."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_roles=True)",
            "has_permissions(manage_roles=True)"
        ],
        "checks": [
            "has_permissions(manage_roles=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_roles=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_roles=True)",
            "app_commands.describe(user='The user to list roles for.')"
        ],
        "signature": "self, ctx, user: discord.Member=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2095,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2095",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "role mentionable::Moderation::cogs/moderation/moderation.py:1992",
        "name": "role mentionable",
        "description": "Toggles whether a role is mentionable or not.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";role mentionable <role>",
            "/role mentionable role:discord.Role"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "role": "The role to toggle mentionability for."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_roles=True)",
            "has_permissions(manage_roles=True)"
        ],
        "checks": [
            "has_permissions(manage_roles=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_roles=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_roles=True)",
            "app_commands.describe(role='The role to toggle mentionability for.')"
        ],
        "signature": "self, ctx: Context, role: discord.Role",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1992,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1992",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "role remove::Moderation::cogs/moderation/moderation.py:1889",
        "name": "role remove",
        "description": "Removes a role from a member. (Doing ,r {member} {role} also does this.)",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";role remove <member> <role>",
            "/role remove member:discord.Member role:discord.Role"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "member": "The member to remove the role from.",
            "role": "The role to remove from the member."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_roles=True)",
            "has_permissions(manage_roles=True)"
        ],
        "checks": [
            "has_permissions(manage_roles=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_roles=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_roles=True)",
            "app_commands.describe(member='The member to remove the role from.', role='The role to remove from the member.')"
        ],
        "signature": "self, ctx: Context, member: discord.Member, role: discord.Role",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1889,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1889",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "role rename::Moderation::cogs/moderation/moderation.py:1923",
        "name": "role rename",
        "description": "Changes the name of a role.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "name"
        ],
        "usage": [
            ";role rename <role> <new_name>",
            "/role rename role:discord.Role new_name:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            },
            {
                "name": "new_name",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "role": "The role to rename.",
            "new_name": "The new name for the role."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_roles=True)",
            "has_permissions(manage_roles=True)"
        ],
        "checks": [
            "has_permissions(manage_roles=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_roles=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_roles=True)",
            "app_commands.describe(role='The role to rename.', new_name='The new name for the role.')"
        ],
        "signature": "self, ctx: Context, role: discord.Role, new_name: str",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 1923,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L1923",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "role restore::Moderation::cogs/moderation/moderation.py:2113",
        "name": "role restore",
        "description": "Restores a user's recently removed roles (within the last hour).",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";role restore <user>",
            "/role restore user:discord.Member"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "user": "The user to restore roles for."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(administrator=True)",
            "has_permissions(manage_roles=True)"
        ],
        "checks": [
            "has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_roles=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(administrator=True)",
            "app_commands.describe(user='The user to restore roles for.')"
        ],
        "signature": "self, ctx, user: discord.Member",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2113,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2113",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "roleid::Information::cogs/information/information.py:624",
        "name": "roleid",
        "description": "Shows the role ID of the specified role or yourself if no one is mentioned.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shows the role ID of the specified role or yourself if no one is mentioned.",
        "aliases": [
            "rid"
        ],
        "usage": [
            ";roleid [role]",
            "/roleid [role:discord.Role]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "role": "The role to show the ID for."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(role='The role to show the ID for.')"
        ],
        "signature": "self, ctx: Context, role: discord.Role=None",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 624,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L624",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "roles::Information::cogs/information/information.py:941",
        "name": "roles",
        "description": "Lists all roles in the server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";roles [user]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [
            "has_permissions(manage_roles=True)"
        ],
        "checks": [
            "has_permissions(manage_roles=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_roles=True)"
        ],
        "signature": "self, ctx, user: discord.Member=None",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 941,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L941",
        "metadata": {
            "alises": [
                "rl",
                "rolelist"
            ]
        },
        "classCommandAttributes": {}
    },
    {
        "id": "rtt::Information::cogs/information/information.py:1470",
        "name": "rtt",
        "description": "Check the round-trip time (RTT) of the bot.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Check the round-trip time (RTT) of the bot.",
        "aliases": [
            "ping",
            "pong",
            "roundtrip",
            "latency"
        ],
        "usage": [
            ";rtt"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [
            "cooldown(1, 3, BucketType.user)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 3, BucketType.user)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1470,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1470",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "sbanner::Information::cogs/information/information.py:1153",
        "name": "sbanner",
        "description": "Show your server banner.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";sbanner [member]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx, member: discord.Member=None",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1153,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1153",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "sbd::Owner::cogs/owner/owner.py:789",
        "name": "sbd",
        "description": "Runs `help` with every common selfbot prefix to detect selfbots.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "watchdog"
        ],
        "usage": [
            ";sbd"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 789,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L789",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "screenshot::Owner::cogs/owner/owner.py:454",
        "name": "screenshot",
        "description": "Takes a screenshot of the specified URL and sends it.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Takes a screenshot of the specified URL and sends it.",
        "aliases": [
            "ss"
        ],
        "usage": [
            ";screenshot [url] [delay] [args]",
            "/screenshot [url:str] [delay:int] [args:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "url",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            },
            {
                "name": "delay",
                "kind": "positional_or_keyword",
                "type": "int",
                "default": "0",
                "required": false
            },
            {
                "name": "args",
                "kind": "keyword_only",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "url": "The website to take a screenshot of.",
            "delay": "The delay in seconds before taking the screenshot."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [
            "app_commands.describe(url='The website to take a screenshot of.', delay='The delay in seconds before taking the screenshot.')",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, url: str=None, delay: int=0, *, args: str=None",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 454,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L454",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "sdeafen::Moderation::cogs/moderation/moderation.py:2870",
        "name": "sdeafen",
        "description": "Server deafens the mentioned member, or self if none mentioned.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Server deafens the mentioned member, or self if none mentioned.",
        "aliases": [
            "sd",
            "deafen"
        ],
        "usage": [
            ";sdeafen [member]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(moderate_members=True)"
        ],
        "checks": [
            "has_permissions(moderate_members=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(moderate_members=True)"
        ],
        "signature": "self, ctx, member: discord.Member=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2870,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2870",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "sdeafen::Moderation::cogs/moderation/moderation.py:3202",
        "name": "sdeafen",
        "description": "Server deafens the mentioned member, or self if none mentioned.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Server deafens the mentioned member, or self if none mentioned.",
        "aliases": [
            "sd",
            "deafen"
        ],
        "usage": [
            ";sdeafen [member]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(moderate_members=True)"
        ],
        "checks": [
            "has_permissions(moderate_members=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(moderate_members=True)"
        ],
        "signature": "self, ctx, member: discord.Member=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3202,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3202",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "selfreaction::Fun::cogs/fun/fun.py:974",
        "name": "selfreaction",
        "description": "Selfreaction commands",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "sr",
            "selfreactions"
        ],
        "usage": [
            ";selfreaction",
            "/selfreaction"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 974,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L974",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "selfreaction count::Fun::cogs/fun/fun.py:984",
        "name": "selfreaction count",
        "description": "Count your selfreactions",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";selfreaction count [user]",
            "/selfreaction count [user:discord.User]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.User",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to count selfreactions for"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(user='The user to count selfreactions for')",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, user: discord.User=None",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 984,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L984",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "selfreaction leaderboard::Fun::cogs/fun/fun.py:1045",
        "name": "selfreaction leaderboard",
        "description": "See the leaderboard of selfreactions",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Show the top 10 users with the most self-reactions, optionally filtered by emoji.",
        "aliases": [
            "lb"
        ],
        "usage": [
            ";selfreaction leaderboard [emoji]",
            "/selfreaction leaderboard [emoji:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "emoji",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "emoji": "The emoji to filter by (optional)"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(emoji='The emoji to filter by (optional)')",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, emoji: str=None",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 1045,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L1045",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "selfreaction reset::Fun::cogs/fun/fun.py:1102",
        "name": "selfreaction reset",
        "description": "Reset your selfreactions",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";selfreaction reset [user] [table]",
            "/selfreaction reset [user:discord.User] [table:bool]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.User",
                "default": "None",
                "required": false
            },
            {
                "name": "table",
                "kind": "positional_or_keyword",
                "type": "bool",
                "default": "False",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to reset selfreactions for",
            "table": "Drop and recreate the selfreaction table"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [
            "is_owner()"
        ],
        "checks": [
            "is_owner()"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "is_owner()",
            "app_commands.describe(user='The user to reset selfreactions for', table='Drop and recreate the selfreaction table')",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, user: discord.User=None, table: bool=False",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 1102,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L1102",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "selfreaction top::Fun::cogs/fun/fun.py:1004",
        "name": "selfreaction top",
        "description": "See the top selfreactions",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";selfreaction top [user]",
            "/selfreaction top [user:discord.User]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.User",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to check top selfreactions for"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(user='The user to check top selfreactions for')",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, user: discord.User=None",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 1004,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L1004",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "send::Owner::cogs/owner/owner.py:558",
        "name": "send",
        "description": "Sends a message to a specified channel or the current one if none mentioned.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Sends a message to a specified channel or the current one if none mentioned.",
        "aliases": [],
        "usage": [
            ";send <channel> [message] [message_id] [attachment]",
            "/send channel:Optional[discord.TextChannel] [message:str] [message_id:Optional[str]] [attachment:Optional[discord.Attachment]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.TextChannel]",
                "default": null,
                "required": true
            },
            {
                "name": "message",
                "kind": "keyword_only",
                "type": "str",
                "default": "''",
                "required": false
            },
            {
                "name": "message_id",
                "kind": "keyword_only",
                "type": "Optional[str]",
                "default": "None",
                "required": false
            },
            {
                "name": "attachment",
                "kind": "keyword_only",
                "type": "Optional[discord.Attachment]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "channel": "Select a channel to send the message to.",
            "message": "The message to send.",
            "message_id": "The message ID to reply to.",
            "attachment": "The attachment to send."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.describe(channel='Select a channel to send the message to.', message='The message to send.', message_id='The message ID to reply to.', attachment='The attachment to send.')"
        ],
        "signature": "self, ctx: Context, channel: Optional[discord.TextChannel], *, message: str='', message_id: Optional[str]=None, attachment: Optional[discord.Attachment]=None",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 558,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L558",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "server::Config::cogs/config/configuration.py:54",
        "name": "server",
        "description": "Server configuration commands.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Server configuration commands.",
        "aliases": [],
        "usage": [
            ";server",
            "/server"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Config",
        "category": "Config",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/config/configuration.py",
        "sourceLine": 54,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/config/configuration.py#L54",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "server prefix::Config::cogs/config/configuration.py:62",
        "name": "server prefix",
        "description": "View or manage the server prefix.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "View or manage the server prefix.",
        "aliases": [],
        "usage": [
            ";server prefix"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "Config",
        "category": "Config",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/config/configuration.py",
        "sourceLine": 62,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/config/configuration.py#L62",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "server prefix reset::Config::cogs/config/configuration.py:102",
        "name": "server prefix reset",
        "description": "Reset the server prefix to the default.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Reset the server prefix to the default.",
        "aliases": [],
        "usage": [
            ";server prefix reset",
            "/server prefix reset"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Config",
        "category": "Config",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/config/configuration.py",
        "sourceLine": 102,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/config/configuration.py#L102",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "server prefix set::Config::cogs/config/configuration.py:82",
        "name": "server prefix set",
        "description": "Set the server prefix.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Set the server prefix.",
        "aliases": [],
        "usage": [
            ";server prefix set <prefix>",
            "/server prefix set prefix:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "prefix",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "prefix": "The new prefix for the server"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Config",
        "category": "Config",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "app_commands.guild_only()",
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(prefix='The new prefix for the server')",
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context, prefix: str",
        "sourceFile": "cogs/config/configuration.py",
        "sourceLine": 82,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/config/configuration.py#L82",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "serveravatar::Information::cogs/information/information.py:1120",
        "name": "serveravatar",
        "description": "Show your server avatar.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "sav",
            "savatar"
        ],
        "usage": [
            ";serveravatar [member]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "Union[discord.Member, discord.User]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [
            "cooldown(1, 3, BucketType.user)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 3, BucketType.user)"
        ],
        "signature": "self, ctx, member: Union[discord.Member, discord.User]=None",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1120,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1120",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "serverbanner::Information::cogs/information/information.py:1057",
        "name": "serverbanner",
        "description": "Shows the server banner in an embed.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shows the server banner in an embed.",
        "aliases": [],
        "usage": [
            ";serverbanner"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [
            "cooldown(1, 3, BucketType.user)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 3, BucketType.user)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1057,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1057",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "serverfeatures::Information::cogs/information/information.py:912",
        "name": "serverfeatures",
        "description": "Display all features the server can access.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Display all features the server can access.",
        "aliases": [
            "sf",
            "features"
        ],
        "usage": [
            ";serverfeatures"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 912,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L912",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "serverid::Information::cogs/information/information.py:633",
        "name": "serverid",
        "description": "Shows the current server ID.",
        "descriptionSource": "inferred",
        "help": null,
        "docstring": null,
        "aliases": [
            "sid"
        ],
        "usage": [
            ";serverid"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 633,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L633",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "servers::Owner::cogs/owner/owner.py:334",
        "name": "servers",
        "description": "Server management and Blacklist",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Server management and Blacklist",
        "aliases": [],
        "usage": [
            ";servers"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [],
        "signature": "self, ctx",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 334,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L334",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "servers invite::Owner::cogs/owner/owner.py:356",
        "name": "servers invite",
        "description": "Get an invite link for the specified guild.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Get an invite link for the specified guild.",
        "aliases": [],
        "usage": [
            ";servers invite <guild_id>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "guild_id",
                "kind": "positional_or_keyword",
                "type": "int",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [],
        "signature": "self, ctx: Context, guild_id: int",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 356,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L356",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "servers leave::Owner::cogs/owner/owner.py:379",
        "name": "servers leave",
        "description": "Makes the bot leave a server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Makes the bot leave a server.",
        "aliases": [],
        "usage": [
            ";servers leave [guild_id]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "guild_id",
                "kind": "positional_or_keyword",
                "type": "int",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [],
        "signature": "self, ctx: Context, guild_id: int=None",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 379,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L379",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "servers list::Owner::cogs/owner/owner.py:340",
        "name": "servers list",
        "description": "Lists the servers the bot is currently in.",
        "descriptionSource": "inferred",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";servers list"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 340,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L340",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "setlevel::Levels::cogs/levels/levels.py:133",
        "name": "setlevel",
        "description": "Set a user's level in the server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Set a user's level in the server.",
        "aliases": [
            "setlvl"
        ],
        "usage": [
            ";setlevel <user> <level>",
            "/setlevel user:discord.User level:int"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "commands.Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.User",
                "default": null,
                "required": true
            },
            {
                "name": "level",
                "kind": "positional_or_keyword",
                "type": "int",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Levels",
        "category": "Levels",
        "permissions": [
            "is_owner()"
        ],
        "checks": [
            "is_owner()"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "is_owner()"
        ],
        "signature": "self, ctx: commands.Context, user: discord.User, level: int",
        "sourceFile": "cogs/levels/levels.py",
        "sourceLine": 133,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/levels/levels.py#L133",
        "metadata": {
            "hidden": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "shards::Information::cogs/information/information.py:1537",
        "name": "shards",
        "description": "Shows information about the shards the bot is using.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shows information about the shards the bot is using.",
        "aliases": [],
        "usage": [
            ";shards"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1537,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1537",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "si::Information::cogs/information/information.py:637",
        "name": "si",
        "description": "Show the server info.",
        "descriptionSource": "source",
        "help": "Show the server info.",
        "docstring": "Shows the server information in an embed.\n\nIn DMs, you must specify a guild ID.\nIf you're a bot owner, you can specify any guild ID the bot is in.",
        "aliases": [
            "serverinfo"
        ],
        "usage": [
            ";si [guild_id]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "guild_id",
                "kind": "positional_or_keyword",
                "type": "int",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [
            "cooldown(1, 3, BucketType.user)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 3, BucketType.user)"
        ],
        "signature": "self, ctx: Context, guild_id: int=None",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 637,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L637",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "sicon::Information::cogs/information/information.py:1070",
        "name": "sicon",
        "description": "Shows the server icon in an embed.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shows the server icon in an embed.",
        "aliases": [],
        "usage": [
            ";sicon"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [
            "cooldown(1, 3, BucketType.user)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 3, BucketType.user)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1070,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1070",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "silence::Owner::cogs/owner/owner.py:839",
        "name": "silence",
        "description": "Deletes messages from a user everytime they talk",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Deletes messages from a user everytime they talk.",
        "aliases": [],
        "usage": [
            ";silence <user>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.User",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [],
        "signature": "self, ctx: Context, user: discord.User",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 839,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L839",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "skibidi::Fun::cogs/fun/fun.py:255",
        "name": "skibidi",
        "description": "brainrot",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "brainrot"
        ],
        "usage": [
            ";skibidi"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 255,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L255",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "skip::Music::cogs/music/music.py:538",
        "name": "skip",
        "description": "Skips the current song.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Skips the current song.",
        "aliases": [],
        "usage": [
            ";skip",
            "/skip"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Music",
        "category": "Music",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/music/music.py",
        "sourceLine": 538,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/music/music.py#L538",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "slap::Reactions::cogs/reactions/reactions.py:183",
        "name": "slap",
        "description": "Slaps a user >_<",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Slap some sense into someone!",
        "aliases": [],
        "usage": [
            ";slap <user>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Reactions",
        "category": "Reactions",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx, user: discord.Member",
        "sourceFile": "cogs/reactions/reactions.py",
        "sourceLine": 183,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/reactions/reactions.py#L183",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "slowmode::Moderation::cogs/moderation/moderation.py:2808",
        "name": "slowmode",
        "description": "Restricts members to sending one message per interval",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Enable slowmode in the current channel.",
        "aliases": [],
        "usage": [
            ";slowmode [time]",
            "/slowmode [time:Optional[str]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "time",
                "kind": "positional_or_keyword",
                "type": "Optional[str]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_channels=True)"
        ],
        "checks": [
            "has_permissions(manage_channels=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_channels=True)"
        ],
        "signature": "self, ctx: Context, time: Optional[str]=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2808,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2808",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "slowmode off::Moderation::cogs/moderation/moderation.py:2857",
        "name": "slowmode off",
        "description": "Disables slowmode in a channel",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "disable"
        ],
        "usage": [
            ";slowmode off [channel]",
            "/slowmode off [channel:Optional[TextChannel]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "Optional[TextChannel]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_channels=True)",
            "has_permissions(manage_channels=True)"
        ],
        "checks": [
            "has_permissions(manage_channels=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_channels=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_channels=True)"
        ],
        "signature": "self, ctx: Context, channel: Optional[TextChannel]=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2857,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2857",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "slowmode on::Moderation::cogs/moderation/moderation.py:2820",
        "name": "slowmode on",
        "description": "Enable slowmode in a channel",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Enable slowmode in a channel.",
        "aliases": [
            "enable"
        ],
        "usage": [
            ";slowmode on [channel] [time]",
            "/slowmode on [channel:Optional[TextChannel]] [time:Optional[str]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "Optional[TextChannel]",
                "default": "None",
                "required": false
            },
            {
                "name": "time",
                "kind": "keyword_only",
                "type": "Optional[str]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_channels=True)",
            "has_permissions(manage_channels=True)"
        ],
        "checks": [
            "has_permissions(manage_channels=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_channels=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_channels=True)"
        ],
        "signature": "self, ctx: Context, channel: Optional[TextChannel]=None, *, time: Optional[str]=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2820,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2820",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "smute::Moderation::cogs/moderation/moderation.py:2883",
        "name": "smute",
        "description": "Server mutes the mentioned member, or self if none mentioned.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Server mutes the mentioned member, or self if none mentioned.",
        "aliases": [
            "sm",
            "mute"
        ],
        "usage": [
            ";smute [member]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(moderate_members=True)"
        ],
        "checks": [
            "has_permissions(moderate_members=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(moderate_members=True)"
        ],
        "signature": "self, ctx, member: discord.Member=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2883,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2883",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "smute::Moderation::cogs/moderation/moderation.py:3215",
        "name": "smute",
        "description": "Server mutes the mentioned member, or self if none mentioned.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Server mutes the mentioned member, or self if none mentioned.",
        "aliases": [
            "sm",
            "mute"
        ],
        "usage": [
            ";smute [member]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(moderate_members=True)"
        ],
        "checks": [
            "has_permissions(moderate_members=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(moderate_members=True)"
        ],
        "signature": "self, ctx, member: discord.Member=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3215,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3215",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "sname::Moderation::cogs/moderation/moderation.py:2987",
        "name": "sname",
        "description": "Change the name of a server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Change the name of a server.",
        "aliases": [
            "servername"
        ],
        "usage": [
            ";sname [new_name]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "new_name",
                "kind": "keyword_only",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx, *, new_name: str=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2987,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2987",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "sname::Moderation::cogs/moderation/moderation.py:3319",
        "name": "sname",
        "description": "Change the name of a server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Change the name of a server.",
        "aliases": [
            "servername"
        ],
        "usage": [
            ";sname [new_name]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "new_name",
                "kind": "keyword_only",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx, *, new_name: str=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3319,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3319",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "splash::Information::cogs/information/information.py:1087",
        "name": "splash",
        "description": "Shows the server splash (invite banner) in an embed.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shows the server splash (invite banner) in an embed.",
        "aliases": [],
        "usage": [
            ";splash"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [
            "cooldown(1, 3, BucketType.user)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "cooldown(1, 3, BucketType.user)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1087,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1087",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "staffstrip::Moderation::cogs/moderation/moderation.py:3363",
        "name": "staffstrip",
        "description": "Strips a user of all their moderation-related roles",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "strip",
            "stripstaff"
        ],
        "usage": [
            ";staffstrip <member>",
            "/staffstrip member:discord.Member"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(administrator=True)"
        ],
        "checks": [
            "has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(administrator=True)"
        ],
        "signature": "self, ctx, member: discord.Member",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3363,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3363",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "steal::Utility::cogs/utility/utility.py:732",
        "name": "steal",
        "description": "Steal first emoji, sticker from replied message, if not provided",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Steal first emoji, sticker from replied message, if not provided",
        "aliases": [],
        "usage": [
            ";steal [emoji]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "commands.Context",
                "default": null,
                "required": true
            },
            {
                "name": "emoji",
                "kind": "positional_or_keyword",
                "type": null,
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "Utility",
        "category": "Utility",
        "permissions": [
            "has_permissions(manage_emojis_and_stickers=True)"
        ],
        "checks": [
            "has_permissions(manage_emojis_and_stickers=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_emojis_and_stickers=True)"
        ],
        "signature": "self, ctx: commands.Context, emoji=None",
        "sourceFile": "cogs/utility/utility.py",
        "sourceLine": 732,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/utility/utility.py#L732",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "steal emojis::Utility::cogs/utility/utility.py:768",
        "name": "steal emojis",
        "description": "Steal multiple emojis from attached message, or replied message",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Steal multiple emojis from attached message, or replied message",
        "aliases": [],
        "usage": [
            ";steal emojis [emojis]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "commands.Context",
                "default": null,
                "required": true
            },
            {
                "name": "emojis",
                "kind": "keyword_only",
                "type": null,
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Utility",
        "category": "Utility",
        "permissions": [
            "has_permissions(manage_emojis_and_stickers=True)",
            "has_permissions(manage_emojis_and_stickers=True)"
        ],
        "checks": [
            "has_permissions(manage_emojis_and_stickers=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_emojis_and_stickers=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_emojis_and_stickers=True)"
        ],
        "signature": "self, ctx: commands.Context, *, emojis=None",
        "sourceFile": "cogs/utility/utility.py",
        "sourceLine": 768,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/utility/utility.py#L768",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "steal sticker::Utility::cogs/utility/utility.py:816",
        "name": "steal sticker",
        "description": "Steal a sticker by downloading from CDN and re-adding it to this guild preserving its values.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Steal a sticker by downloading from CDN and re-adding it to this guild preserving its values.",
        "aliases": [],
        "usage": [
            ";steal sticker"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "commands.Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Utility",
        "category": "Utility",
        "permissions": [
            "has_permissions(manage_emojis_and_stickers=True)",
            "has_permissions(manage_emojis_and_stickers=True)"
        ],
        "checks": [
            "has_permissions(manage_emojis_and_stickers=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_emojis_and_stickers=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_emojis_and_stickers=True)"
        ],
        "signature": "self, ctx: commands.Context",
        "sourceFile": "cogs/utility/utility.py",
        "sourceLine": 816,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/utility/utility.py#L816",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "sticky::Utility::cogs/utility/utility.py:1043",
        "name": "sticky",
        "description": "Sticky notes",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Sticky notes",
        "aliases": [
            "stickynote",
            "note"
        ],
        "usage": [
            ";sticky",
            "/sticky"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Utility",
        "category": "Utility",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/utility/utility.py",
        "sourceLine": 1043,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/utility/utility.py#L1043",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "sticky create::Utility::cogs/utility/utility.py:1051",
        "name": "sticky create",
        "description": "Create a sticky note",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Create a sticky note",
        "aliases": [
            "add",
            "new"
        ],
        "usage": [
            ";sticky create <note> [channel] [rate]",
            "/sticky create note:str [channel:discord.TextChannel] [rate:int]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "note",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "keyword_only",
                "type": "discord.TextChannel",
                "default": "None",
                "required": false
            },
            {
                "name": "rate",
                "kind": "keyword_only",
                "type": "int",
                "default": "5",
                "required": false
            }
        ],
        "optionDescriptions": {
            "note": "The note to create",
            "channel": "The channel to create the sticky note in",
            "rate": "Number of messages between each sticky note"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Utility",
        "category": "Utility",
        "permissions": [
            "has_permissions(manage_guild=True, manage_webhooks=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True, manage_webhooks=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(note='The note to create', channel='The channel to create the sticky note in', rate='Number of messages between each sticky note')",
            "has_permissions(manage_guild=True, manage_webhooks=True)"
        ],
        "signature": "self, ctx: Context, *, note: str, channel: discord.TextChannel=None, rate: int=5",
        "sourceFile": "cogs/utility/utility.py",
        "sourceLine": 1051,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/utility/utility.py#L1051",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "sticky delete::Utility::cogs/utility/utility.py:1146",
        "name": "sticky delete",
        "description": "Delete a sticky note",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Delete a sticky note",
        "aliases": [
            "remove",
            "del",
            "rm"
        ],
        "usage": [
            ";sticky delete [channel]",
            "/sticky delete [channel:discord.TextChannel]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "discord.TextChannel",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Utility",
        "category": "Utility",
        "permissions": [
            "has_permissions(manage_guild=True, manage_webhooks=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True, manage_webhooks=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True, manage_webhooks=True)"
        ],
        "signature": "self, ctx: Context, channel: discord.TextChannel=None",
        "sourceFile": "cogs/utility/utility.py",
        "sourceLine": 1146,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/utility/utility.py#L1146",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "sticky deleteall::Utility::cogs/utility/utility.py:1184",
        "name": "sticky deleteall",
        "description": "Delete all sticky notes",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Delete all sticky notes",
        "aliases": [
            "removeall",
            "delall",
            "reset"
        ],
        "usage": [
            ";sticky deleteall",
            "/sticky deleteall"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Utility",
        "category": "Utility",
        "permissions": [
            "has_permissions(manage_guild=True, manage_webhooks=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True, manage_webhooks=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True, manage_webhooks=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/utility/utility.py",
        "sourceLine": 1184,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/utility/utility.py#L1184",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "stop::Music::cogs/music/music.py:527",
        "name": "stop",
        "description": "Stops the current song.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Stops the current song.",
        "aliases": [],
        "usage": [
            ";stop",
            "/stop"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Music",
        "category": "Music",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/music/music.py",
        "sourceLine": 527,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/music/music.py#L527",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "sundeafen::Moderation::cogs/moderation/moderation.py:2896",
        "name": "sundeafen",
        "description": "Server undeafens the mentioned member, or self if none mentioned.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Server undeafens the mentioned member, or self if none mentioned.",
        "aliases": [
            "sund",
            "sunday",
            "undeafen"
        ],
        "usage": [
            ";sundeafen [member]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(moderate_members=True)"
        ],
        "checks": [
            "has_permissions(moderate_members=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(moderate_members=True)"
        ],
        "signature": "self, ctx, member: discord.Member=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2896,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2896",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "sundeafen::Moderation::cogs/moderation/moderation.py:3228",
        "name": "sundeafen",
        "description": "Server undeafens the mentioned member, or self if none mentioned.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Server undeafens the mentioned member, or self if none mentioned.",
        "aliases": [
            "sund",
            "sunday",
            "undeafen"
        ],
        "usage": [
            ";sundeafen [member]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(moderate_members=True)"
        ],
        "checks": [
            "has_permissions(moderate_members=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(moderate_members=True)"
        ],
        "signature": "self, ctx, member: discord.Member=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3228,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3228",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "sunmute::Moderation::cogs/moderation/moderation.py:2909",
        "name": "sunmute",
        "description": "Server unmutes the mentioned member, or self if none mentioned.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Server unmutes the mentioned member, or self if none mentioned.",
        "aliases": [
            "sum",
            "unmute"
        ],
        "usage": [
            ";sunmute [member]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(moderate_members=True)"
        ],
        "checks": [
            "has_permissions(moderate_members=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(moderate_members=True)"
        ],
        "signature": "self, ctx, member: discord.Member=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2909,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2909",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "sunmute::Moderation::cogs/moderation/moderation.py:3241",
        "name": "sunmute",
        "description": "Server unmutes the mentioned member, or self if none mentioned.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Server unmutes the mentioned member, or self if none mentioned.",
        "aliases": [
            "sum",
            "unmute"
        ],
        "usage": [
            ";sunmute [member]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(moderate_members=True)"
        ],
        "checks": [
            "has_permissions(moderate_members=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(moderate_members=True)"
        ],
        "signature": "self, ctx, member: discord.Member=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 3241,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L3241",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "support::Information::cogs/information/information.py:1338",
        "name": "support",
        "description": "Sends a link to the bot's support server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";support"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1338,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1338",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "tableflip::Fun::cogs/fun/fun.py:263",
        "name": "tableflip",
        "description": "flips a table",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";tableflip"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 263,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L263",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "terms::Information::cogs/information/information.py:326",
        "name": "terms",
        "description": "Sends link to the bot's terms of service.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";terms"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 326,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L326",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "tiktok::Reposters::cogs/reposters/reposters.py:45",
        "name": "tiktok",
        "description": "Browse TikTok user, repost, and server configuration commands.",
        "descriptionSource": "inferred",
        "help": null,
        "docstring": null,
        "aliases": [
            "tt"
        ],
        "usage": [
            ";tiktok",
            "/tiktok"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Reposters",
        "category": "Reposters",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/reposters/reposters.py",
        "sourceLine": 45,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/reposters/reposters.py#L45",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "tiktok disable::Reposters::cogs/reposters/reposters.py:186",
        "name": "tiktok disable",
        "description": "Disable TikTok reposting in the server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";tiktok disable",
            "/tiktok disable"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Reposters",
        "category": "Reposters",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)",
            "app_commands.describe()"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/reposters/reposters.py",
        "sourceLine": 186,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/reposters/reposters.py#L186",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "tiktok enable::Reposters::cogs/reposters/reposters.py:173",
        "name": "tiktok enable",
        "description": "Enable TikTok reposting in the server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";tiktok enable",
            "/tiktok enable"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Reposters",
        "category": "Reposters",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)",
            "app_commands.describe()"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/reposters/reposters.py",
        "sourceLine": 173,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/reposters/reposters.py#L173",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "tiktok repost::Reposters::cogs/reposters/reposters.py:118",
        "name": "tiktok repost",
        "description": "Repost a TikTok video.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Repost a TikTok video.",
        "aliases": [],
        "usage": [
            ";tiktok repost [url]",
            "/tiktok repost [url:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "url",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "url": "The link to the TikTok video."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Reposters",
        "category": "Reposters",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(url='The link to the TikTok video.')",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, url: str=None",
        "sourceFile": "cogs/reposters/reposters.py",
        "sourceLine": 118,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/reposters/reposters.py#L118",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "tiktok user::Reposters::cogs/reposters/reposters.py:51",
        "name": "tiktok user",
        "description": "Get TikTok user info.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Get tiktok user information.",
        "aliases": [],
        "usage": [
            ";tiktok user [username]",
            "/tiktok user [username:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "username",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "username": "The TikTok username."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Reposters",
        "category": "Reposters",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(username='The TikTok username.')",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, username: str=None",
        "sourceFile": "cogs/reposters/reposters.py",
        "sourceLine": 51,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/reposters/reposters.py#L51",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "time::Utility::cogs/utility/utility.py:600",
        "name": "time",
        "description": "Get the current time for yourself or set your timezone.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Get the current time for yourself or another user based on their set timezone.",
        "aliases": [
            "timezone",
            "tz"
        ],
        "usage": [
            ";time [member]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "Utility",
        "category": "Utility",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context, member: discord.Member=None",
        "sourceFile": "cogs/utility/utility.py",
        "sourceLine": 600,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/utility/utility.py#L600",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "time set::Utility::cogs/utility/utility.py:658",
        "name": "time set",
        "description": "Set your timezone (see /time for available timezones).",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Set your timezone for time commands.",
        "aliases": [],
        "usage": [
            ";time set <timezone_abbr>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "timezone_abbr",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Utility",
        "category": "Utility",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context, timezone_abbr: str",
        "sourceFile": "cogs/utility/utility.py",
        "sourceLine": 658,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/utility/utility.py#L658",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "timeout::Moderation::cogs/moderation/moderation.py:775",
        "name": "timeout",
        "description": "Times out a member (e.g. ,to @user 7d, 24h, 60m)",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "to",
            "bdsm",
            "ballgag",
            "stfu",
            "sybau",
            "smd"
        ],
        "usage": [
            ";timeout [member] [duration]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": "None",
                "required": false
            },
            {
                "name": "duration",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "'5m'",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(moderate_members=True)"
        ],
        "checks": [
            "has_permissions(moderate_members=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(moderate_members=True)"
        ],
        "signature": "self, ctx, member: discord.Member=None, duration: str='5m'",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 775,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L775",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "topartist::LastFM::cogs/lastfm/lastfm.py:1883",
        "name": "topartist",
        "description": "Shows the top 10 artists for a specific user.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "ta"
        ],
        "usage": [
            ";topartist [user] [period]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.Member]",
                "default": "None",
                "required": false
            },
            {
                "name": "period",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "'7day'",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context, user: Optional[discord.Member]=None, period: str='7day'",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 1883,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L1883",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "touch::Fun::cogs/fun/fun.py:302",
        "name": "touch",
        "description": "Touches a user.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";touch <user>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.User | discord.Member",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx, user: discord.User | discord.Member",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 302,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L302",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "ttt::Games::cogs/games/games.py:360",
        "name": "ttt",
        "description": "Challenge someone to Tic-Tac-Toe! Usage: `!ttt @user`",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Challenge someone to Tic-Tac-Toe! Usage: `!ttt @user`",
        "aliases": [
            "tictactoe"
        ],
        "usage": [
            ";ttt [opponent]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "opponent",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.Member]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Games",
        "category": "Games",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx, opponent: Optional[discord.Member]=None",
        "sourceFile": "cogs/games/games.py",
        "sourceLine": 360,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/games/games.py#L360",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "unban::Moderation::cogs/moderation/moderation.py:650",
        "name": "unban",
        "description": "Unbans a member by User ID or mention.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Unbans a user by their User ID or mention.\nExample: ,unban 1234567890 or ,unban @user",
        "aliases": [
            "befree"
        ],
        "usage": [
            ";unban <user>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Union[discord.User, int, str]",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(ban_members=True)"
        ],
        "checks": [
            "has_permissions(ban_members=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(ban_members=True)"
        ],
        "signature": "self, ctx, user: Union[discord.User, int, str]",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 650,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L650",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "unflip::Fun::cogs/fun/fun.py:267",
        "name": "unflip",
        "description": "unflips a table",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";unflip"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 267,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L267",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "unhide::Moderation::cogs/moderation/moderation.py:2782",
        "name": "unhide",
        "description": "Unhides the specified channel or the current channel if none is specified.\n\nThis allows @everyone to view the channel.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Unhides the specified channel or the current channel if none is specified.\n\nThis allows @everyone to view the channel.",
        "aliases": [],
        "usage": [
            ";unhide [channel]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.TextChannel]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_channels=True)"
        ],
        "checks": [
            "has_permissions(manage_channels=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_channels=True)"
        ],
        "signature": "self, ctx, channel: Optional[discord.TextChannel]=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2782,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2782",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "unjail::Moderation::cogs/moderation/moderation.py:2371",
        "name": "unjail",
        "description": "Removes the jailed role from a user and logs the event.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Removes the jailed role from a user and logs the event.",
        "aliases": [
            "unj"
        ],
        "usage": [
            ";unjail <member> [reason]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": null,
                "required": true
            },
            {
                "name": "reason",
                "kind": "keyword_only",
                "type": null,
                "default": "'No reason provided'",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(moderate_members=True)"
        ],
        "checks": [
            "has_permissions(moderate_members=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(moderate_members=True)"
        ],
        "signature": "self, ctx, member: discord.Member, *, reason='No reason provided'",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2371,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2371",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "unlock::Moderation::cogs/moderation/moderation.py:2725",
        "name": "unlock",
        "description": "Unlocks the specified channel or the current channel if none is specified.\n\nThis allows @everyone to send messages in the channel.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Unlocks the specified channel or the current channel if none is specified.\n\nThis allows @everyone to send messages in the channel.",
        "aliases": [],
        "usage": [
            ";unlock [channel]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.TextChannel]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(manage_channels=True)"
        ],
        "checks": [
            "has_permissions(manage_channels=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_channels=True)"
        ],
        "signature": "self, ctx, channel: Optional[discord.TextChannel]=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 2725,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L2725",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "unsilence::Owner::cogs/owner/owner.py:855",
        "name": "unsilence",
        "description": "Unsilences a user",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Unsilences a user.",
        "aliases": [],
        "usage": [
            ";unsilence <user>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.User",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [],
        "signature": "self, ctx: Context, user: discord.User",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 855,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L855",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "untimeout::Moderation::cogs/moderation/moderation.py:836",
        "name": "untimeout",
        "description": "Removes the timeout from a member by mention or User ID.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "uto",
            "futo",
            "rto"
        ],
        "usage": [
            ";untimeout [member] [user_id]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": "None",
                "required": false
            },
            {
                "name": "user_id",
                "kind": "positional_or_keyword",
                "type": "int",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Moderation",
        "category": "Moderation",
        "permissions": [
            "has_permissions(moderate_members=True)"
        ],
        "checks": [
            "has_permissions(moderate_members=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(moderate_members=True)"
        ],
        "signature": "self, ctx, member: discord.Member=None, user_id: int=None",
        "sourceFile": "cogs/moderation/moderation.py",
        "sourceLine": 836,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/moderation/moderation.py#L836",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "update::Owner::cogs/owner/owner.py:1156",
        "name": "update",
        "description": "Update and restart the bot.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Update and restart the bot.",
        "aliases": [],
        "usage": [
            ";update",
            "/update"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 1156,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L1156",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "uptime::Information::cogs/information/information.py:1924",
        "name": "uptime",
        "description": "Get the bot's uptime and system information.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Displays the bot's uptime and system information.",
        "aliases": [],
        "usage": [
            ";uptime",
            "/uptime"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1924,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1924",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "urban::Utility::cogs/utility/utility.py:475",
        "name": "urban",
        "description": "Searches for a word via the Urban Dictionary",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";urban <word>",
            "/urban word:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "word",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "word": "Defines a word via the Urban Dictionary."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Utility",
        "category": "Utility",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.describe(word='Defines a word via the Urban Dictionary.')"
        ],
        "signature": "self, ctx: Context, *, word: str",
        "sourceFile": "cogs/utility/utility.py",
        "sourceLine": 475,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/utility/utility.py#L475",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "usage::Owner::cogs/owner/owner.py:1196",
        "name": "usage",
        "description": "View command usage statistics.",
        "descriptionSource": "inferred",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";usage",
            "/usage"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [
            "commands.cooldown(1, 5, commands.BucketType.user)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)",
            "commands.cooldown(1, 5, commands.BucketType.user)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 1196,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L1196",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "usage global::Owner::cogs/owner/owner.py:1379",
        "name": "usage global",
        "description": "View global command usage statistics.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "View global command usage statistics.",
        "aliases": [],
        "usage": [
            ";usage global",
            "/usage global"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [
            "commands.cooldown(1, 5, commands.BucketType.user)"
        ],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 1379,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L1379",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "usage guild::Owner::cogs/owner/owner.py:1283",
        "name": "usage guild",
        "description": "View command usage statistics for a guild.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "View command usage statistics for a guild.",
        "aliases": [],
        "usage": [
            ";usage guild [guild_id]",
            "/usage guild [guild_id:Optional[str]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "guild_id",
                "kind": "positional_or_keyword",
                "type": "Optional[str]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "guild_id": "The guild ID to view command usage for (leave empty for current guild)."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [
            "commands.cooldown(1, 5, commands.BucketType.user)"
        ],
        "inheritedGroupChecks": [
            "commands.cooldown(1, 5, commands.BucketType.user)"
        ],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [
            "app_commands.describe(guild_id='The guild ID to view command usage for (leave empty for current guild).')",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)",
            "commands.cooldown(1, 5, commands.BucketType.user)"
        ],
        "signature": "self, ctx: Context, guild_id: Optional[str]=None",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 1283,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L1283",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "usage user::Owner::cogs/owner/owner.py:1203",
        "name": "usage user",
        "description": "View command usage statistics for a specific user.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "View command usage statistics for a specific user.",
        "aliases": [],
        "usage": [
            ";usage user [user] [guild_id]",
            "/usage user [user:Optional[discord.Member]] [guild_id:Optional[str]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "Optional[discord.Member]",
                "default": "None",
                "required": false
            },
            {
                "name": "guild_id",
                "kind": "positional_or_keyword",
                "type": "Optional[str]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user to view command usage for (leave empty for your own stats).",
            "guild_id": "The guild ID to check usage in (leave empty for current guild or global)."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [
            "commands.cooldown(1, 5, commands.BucketType.user)"
        ],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [
            "app_commands.describe(user='The user to view command usage for (leave empty for your own stats).', guild_id='The guild ID to check usage in (leave empty for current guild or global).')"
        ],
        "signature": "self, ctx: Context, user: Optional[discord.Member]=None, guild_id: Optional[str]=None",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 1203,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L1203",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "userid::Information::cogs/information/information.py:571",
        "name": "userid",
        "description": "Shows the user ID of the specified user or yourself if no one is mentioned.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shows the user ID of the specified user or yourself if no one is mentioned.",
        "aliases": [
            "uid",
            "whoid",
            "id"
        ],
        "usage": [
            ";userid [user_id]",
            "/userid [user_id:str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user_id",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user_id": "The ID of the user you want to look up."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(user_id='The ID of the user you want to look up.')",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.allowed_installs(guilds=True, users=True)"
        ],
        "signature": "self, ctx: Context, user_id: str=None",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 571,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L571",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "userinfo::Information::cogs/information/information.py:537",
        "name": "userinfo",
        "description": "Show detailed information about a user.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Displays detailed user information with badges, activity, and roles.",
        "aliases": [
            "who",
            "ui",
            "info",
            "whoami",
            "profile"
        ],
        "usage": [
            ";userinfo [member]",
            "/userinfo [member:discord.Member]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "member",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "member": "The user you want to look up."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(member='The user you want to look up.')"
        ],
        "signature": "self, ctx: Context, member: discord.Member=None",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 537,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L537",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "userreactions::AutoResponders::cogs/autoresponders/autoresponders.py:580",
        "name": "userreactions",
        "description": "Setup userreactions for your server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Setup userreactions for your server.",
        "aliases": [],
        "usage": [
            ";userreactions",
            "/userreactions"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "AutoResponders",
        "category": "AutoResponders",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)",
            "app_commands.guild_only()"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)",
            "app_commands.guild_only()"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/autoresponders/autoresponders.py",
        "sourceLine": 580,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/autoresponders/autoresponders.py#L580",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "userreactions create::AutoResponders::cogs/autoresponders/autoresponders.py:590",
        "name": "userreactions create",
        "description": "Create a userreaction.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Create a userreaction.",
        "aliases": [],
        "usage": [
            ";userreactions create <emoji> <user>",
            "/userreactions create emoji:str user:User"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "emoji",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "User",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "emoji": "The emoji for the userreaction. Separate multiple emojis with commas.",
            "user": "The user to add the userreaction to."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "AutoResponders",
        "category": "AutoResponders",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_guild=True)",
            "app_commands.guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)",
            "app_commands.describe(emoji='The emoji for the userreaction. Separate multiple emojis with commas.', user='The user to add the userreaction to.')"
        ],
        "signature": "self, ctx: Context, emoji: str, user: User",
        "sourceFile": "cogs/autoresponders/autoresponders.py",
        "sourceLine": 590,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/autoresponders/autoresponders.py#L590",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "userreactions delete::AutoResponders::cogs/autoresponders/autoresponders.py:648",
        "name": "userreactions delete",
        "description": "Delete a userreaction.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Delete a userreaction.",
        "aliases": [],
        "usage": [
            ";userreactions delete <user>",
            "/userreactions delete user:User"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "User",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "user": "The user to remove the userreaction from."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "AutoResponders",
        "category": "AutoResponders",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_guild=True)",
            "app_commands.guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)",
            "app_commands.describe(user='The user to remove the userreaction from.')"
        ],
        "signature": "self, ctx: Context, user: User",
        "sourceFile": "cogs/autoresponders/autoresponders.py",
        "sourceLine": 648,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/autoresponders/autoresponders.py#L648",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "userreactions list::AutoResponders::cogs/autoresponders/autoresponders.py:686",
        "name": "userreactions list",
        "description": "List all userreactions for this guild.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "List all userreactions for this guild.",
        "aliases": [],
        "usage": [
            ";userreactions list",
            "/userreactions list"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "AutoResponders",
        "category": "AutoResponders",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_guild=True)",
            "app_commands.guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/autoresponders/autoresponders.py",
        "sourceLine": 686,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/autoresponders/autoresponders.py#L686",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "userreactions reset::AutoResponders::cogs/autoresponders/autoresponders.py:711",
        "name": "userreactions reset",
        "description": "Reset all userreactions for this guild.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Reset all userreactions for this guild.",
        "aliases": [],
        "usage": [
            ";userreactions reset",
            "/userreactions reset"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "AutoResponders",
        "category": "AutoResponders",
        "permissions": [
            "has_permissions(manage_guild=True)",
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(manage_guild=True)",
            "app_commands.guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/autoresponders/autoresponders.py",
        "sourceLine": 711,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/autoresponders/autoresponders.py#L711",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "vanity::Vanity::cogs/vanity/vanity.py:56",
        "name": "vanity",
        "description": "Group of commands to manage vanity settings.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Group of commands to manage vanity settings.",
        "aliases": [],
        "usage": [
            ";vanity"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "group",
        "kind": "group",
        "cog": "Vanity",
        "category": "Vanity",
        "permissions": [
            "has_permissions(administrator=True)"
        ],
        "checks": [
            "has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(administrator=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/vanity/vanity.py",
        "sourceLine": 56,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/vanity/vanity.py#L56",
        "metadata": {
            "invoke_without_command": true
        },
        "classCommandAttributes": {}
    },
    {
        "id": "vanity check::Vanity::cogs/vanity/vanity.py:204",
        "name": "vanity check",
        "description": "Manually check all members' statuses and update roles.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Manually check all members' statuses and update roles.",
        "aliases": [],
        "usage": [
            ";vanity check"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Vanity",
        "category": "Vanity",
        "permissions": [
            "has_permissions(administrator=True)",
            "has_permissions(administrator=True)"
        ],
        "checks": [
            "has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(administrator=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(administrator=True)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/vanity/vanity.py",
        "sourceLine": 204,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/vanity/vanity.py#L204",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "vanity logs::Vanity::cogs/vanity/vanity.py:95",
        "name": "vanity logs",
        "description": "Set the log channel for vanity updates.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Set the log channel for vanity updates.",
        "aliases": [],
        "usage": [
            ";vanity logs <channel>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "discord.TextChannel",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Vanity",
        "category": "Vanity",
        "permissions": [
            "has_permissions(administrator=True)",
            "has_permissions(administrator=True)"
        ],
        "checks": [
            "has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(administrator=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(administrator=True)"
        ],
        "signature": "self, ctx: Context, channel: discord.TextChannel",
        "sourceFile": "cogs/vanity/vanity.py",
        "sourceLine": 95,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/vanity/vanity.py#L95",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "vanity reset::Vanity::cogs/vanity/vanity.py:265",
        "name": "vanity reset",
        "description": "Reset the vanity settings.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Reset the vanity settings.",
        "aliases": [],
        "usage": [
            ";vanity reset"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Vanity",
        "category": "Vanity",
        "permissions": [
            "has_permissions(administrator=True)",
            "has_permissions(administrator=True)"
        ],
        "checks": [
            "has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(administrator=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(administrator=True)"
        ],
        "signature": "self, ctx",
        "sourceFile": "cogs/vanity/vanity.py",
        "sourceLine": 265,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/vanity/vanity.py#L265",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "vanity role::Vanity::cogs/vanity/vanity.py:79",
        "name": "vanity role",
        "description": "Set the pic permissions role for the server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Set the pic permissions role for the server.",
        "aliases": [],
        "usage": [
            ";vanity role <role>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Vanity",
        "category": "Vanity",
        "permissions": [
            "has_permissions(administrator=True)",
            "has_permissions(administrator=True)"
        ],
        "checks": [
            "has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(administrator=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(administrator=True)"
        ],
        "signature": "self, ctx: Context, role: discord.Role",
        "sourceFile": "cogs/vanity/vanity.py",
        "sourceLine": 79,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/vanity/vanity.py#L79",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "vanity set::Vanity::cogs/vanity/vanity.py:63",
        "name": "vanity set",
        "description": "Set the vanity keyword for the server.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Set the vanity keyword for the server.",
        "aliases": [],
        "usage": [
            ";vanity set <vanity>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "vanity",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": false,
        "runtimeStatus": "skipped_by_bot_configuration",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Vanity",
        "category": "Vanity",
        "permissions": [
            "has_permissions(administrator=True)",
            "has_permissions(administrator=True)"
        ],
        "checks": [
            "has_permissions(administrator=True)"
        ],
        "inheritedGroupChecks": [
            "has_permissions(administrator=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(administrator=True)"
        ],
        "signature": "self, ctx: Context, *, vanity: str",
        "sourceFile": "cogs/vanity/vanity.py",
        "sourceLine": 63,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/vanity/vanity.py#L63",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "voice::Owner::cogs/owner/owner.py:1113",
        "name": "voice",
        "description": "VC commands.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";voice",
            "/voice"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 1113,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L1113",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "voice join::Owner::cogs/owner/owner.py:1120",
        "name": "voice join",
        "description": "Joins a voice channel.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";voice join <channel>",
            "/voice join channel:discord.VoiceChannel"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "discord.VoiceChannel",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "channel": "The channel to join."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [
            "app_commands.describe(channel='The channel to join.')"
        ],
        "signature": "self, ctx: Context, channel: discord.VoiceChannel",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 1120,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L1120",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "voice leave::Owner::cogs/owner/owner.py:1132",
        "name": "voice leave",
        "description": "Leaves a voice channel.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";voice leave <channel>",
            "/voice leave channel:discord.VoiceChannel"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "discord.VoiceChannel",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "channel": "The channel to leave."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [
            "app_commands.describe(channel='The channel to leave.')"
        ],
        "signature": "self, ctx: Context, channel: discord.VoiceChannel",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 1132,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L1132",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "voice move::Owner::cogs/owner/owner.py:1143",
        "name": "voice move",
        "description": "Moves the bot to a different voice channel.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";voice move <channel>",
            "/voice move channel:discord.VoiceChannel"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "discord.VoiceChannel",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "channel": "The channel to move to."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [
            "app_commands.describe(channel='The channel to move to.')"
        ],
        "signature": "self, ctx: Context, channel: discord.VoiceChannel",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 1143,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L1143",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    },
    {
        "id": "voicemaster::VoiceMaster::cogs/voicemaster/voicemaster.py:54",
        "name": "voicemaster",
        "description": "View commands in VoiceMaster.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "View commands in VoiceMaster.",
        "aliases": [
            "vm",
            "vc"
        ],
        "usage": [
            ";voicemaster",
            "/voicemaster"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "VoiceMaster",
        "category": "VoiceMaster",
        "permissions": [],
        "checks": [
            "guild_only()"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "guild_only()"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/voicemaster/voicemaster.py",
        "sourceLine": 54,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/voicemaster/voicemaster.py#L54",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "voicemaster claim::VoiceMaster::cogs/voicemaster/voicemaster.py:428",
        "name": "voicemaster claim",
        "description": "Claim a VoiceMaster channel if the owner is not present.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Claim a VoiceMaster channel if the owner is not present.",
        "aliases": [],
        "usage": [
            ";voicemaster claim",
            "/voicemaster claim"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "VoiceMaster",
        "category": "VoiceMaster",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [
            "guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/voicemaster/voicemaster.py",
        "sourceLine": 428,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/voicemaster/voicemaster.py#L428",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "voicemaster cleanup::VoiceMaster::cogs/voicemaster/voicemaster.py:384",
        "name": "voicemaster cleanup",
        "description": "Cleanup empty VoiceMaster channels.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Cleanup empty VoiceMaster channels.",
        "aliases": [],
        "usage": [
            ";voicemaster cleanup",
            "/voicemaster cleanup"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "VoiceMaster",
        "category": "VoiceMaster",
        "permissions": [
            "has_permissions(manage_channels=True)"
        ],
        "checks": [
            "has_permissions(manage_channels=True)"
        ],
        "inheritedGroupChecks": [
            "guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_channels=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/voicemaster/voicemaster.py",
        "sourceLine": 384,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/voicemaster/voicemaster.py#L384",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "voicemaster hide::VoiceMaster::cogs/voicemaster/voicemaster.py:288",
        "name": "voicemaster hide",
        "description": "Hide your VoiceMaster channel from the channel list.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Hide your VoiceMaster channel from the channel list.",
        "aliases": [],
        "usage": [
            ";voicemaster hide",
            "/voicemaster hide"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "VoiceMaster",
        "category": "VoiceMaster",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [
            "guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/voicemaster/voicemaster.py",
        "sourceLine": 288,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/voicemaster/voicemaster.py#L288",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "voicemaster lock::VoiceMaster::cogs/voicemaster/voicemaster.py:192",
        "name": "voicemaster lock",
        "description": "Lock your VoiceMaster channel to prevent others from joining.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Lock your VoiceMaster channel to prevent others from joining.",
        "aliases": [],
        "usage": [
            ";voicemaster lock",
            "/voicemaster lock"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "VoiceMaster",
        "category": "VoiceMaster",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [
            "guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/voicemaster/voicemaster.py",
        "sourceLine": 192,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/voicemaster/voicemaster.py#L192",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "voicemaster permit::VoiceMaster::cogs/voicemaster/voicemaster.py:621",
        "name": "voicemaster permit",
        "description": "Permit a user's permissions in this VoiceMaster channel.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Permit a user's permissions in this VoiceMaster channel.",
        "aliases": [],
        "usage": [
            ";voicemaster permit <user> <action>",
            "/voicemaster permit user:discord.Member action:app_commands.Choice[str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": null,
                "required": true
            },
            {
                "name": "action",
                "kind": "positional_or_keyword",
                "type": "app_commands.Choice[str]",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "user": "The user to permit.",
            "action": "The action to permit (join, speak, view)."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "VoiceMaster",
        "category": "VoiceMaster",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [
            "guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(user='The user to permit.', action='The action to permit (join, speak, view).')",
            "app_commands.choices(action=[app_commands.Choice(name='Join', value='join'), app_commands.Choice(name='Speak', value='speak'), app_commands.Choice(name='View', value='view')])"
        ],
        "signature": "self, ctx: Context, user: discord.Member, action: app_commands.Choice[str]",
        "sourceFile": "cogs/voicemaster/voicemaster.py",
        "sourceLine": 621,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/voicemaster/voicemaster.py#L621",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "voicemaster rename::VoiceMaster::cogs/voicemaster/voicemaster.py:703",
        "name": "voicemaster rename",
        "description": "Rename this VoiceMaster channel.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Rename this VoiceMaster channel.",
        "aliases": [],
        "usage": [
            ";voicemaster rename <name>",
            "/voicemaster rename name:str"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "name",
                "kind": "positional_or_keyword",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "name": "The new name for the channel."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "VoiceMaster",
        "category": "VoiceMaster",
        "permissions": [],
        "checks": [
            "cooldown(1, 10 * 60, BucketType.channel)"
        ],
        "inheritedGroupChecks": [
            "guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(name='The new name for the channel.')",
            "cooldown(1, 10 * 60, BucketType.channel)"
        ],
        "signature": "self, ctx: Context, name: str",
        "sourceFile": "cogs/voicemaster/voicemaster.py",
        "sourceLine": 703,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/voicemaster/voicemaster.py#L703",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "voicemaster reset::VoiceMaster::cogs/voicemaster/voicemaster.py:110",
        "name": "voicemaster reset",
        "description": "Reset VoiceMaster.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Reset VoiceMaster.",
        "aliases": [],
        "usage": [
            ";voicemaster reset",
            "/voicemaster reset"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "VoiceMaster",
        "category": "VoiceMaster",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/voicemaster/voicemaster.py",
        "sourceLine": 110,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/voicemaster/voicemaster.py#L110",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "voicemaster restrict::VoiceMaster::cogs/voicemaster/voicemaster.py:538",
        "name": "voicemaster restrict",
        "description": "Restrict a user's permissions in this VoiceMaster channel.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Restrict a user's permissions in this VoiceMaster channel.",
        "aliases": [],
        "usage": [
            ";voicemaster restrict <user> <action>",
            "/voicemaster restrict user:discord.Member action:app_commands.Choice[str]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.Member",
                "default": null,
                "required": true
            },
            {
                "name": "action",
                "kind": "positional_or_keyword",
                "type": "app_commands.Choice[str]",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "user": "The user to restrict.",
            "action": "The action to restrict (join, speak, view)."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "VoiceMaster",
        "category": "VoiceMaster",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [
            "guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(user='The user to restrict.', action='The action to restrict (join, speak, view).')",
            "app_commands.choices(action=[app_commands.Choice(name='Join', value='join'), app_commands.Choice(name='Speak', value='speak'), app_commands.Choice(name='View', value='view')])"
        ],
        "signature": "self, ctx: Context, user: discord.Member, action: app_commands.Choice[str]",
        "sourceFile": "cogs/voicemaster/voicemaster.py",
        "sourceLine": 538,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/voicemaster/voicemaster.py#L538",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "voicemaster setup::VoiceMaster::cogs/voicemaster/voicemaster.py:59",
        "name": "voicemaster setup",
        "description": "Setup VoiceMaster with a category and join channel.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Setup VoiceMaster with a category and join channel.",
        "aliases": [],
        "usage": [
            ";voicemaster setup [category]",
            "/voicemaster setup [category:Optional[str]]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "category",
                "kind": "positional_or_keyword",
                "type": "Optional[str]",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "category": "The name of your category. (VoiceMaster by default)"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "VoiceMaster",
        "category": "VoiceMaster",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(category='The name of your category. (VoiceMaster by default)')",
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context, category: Optional[str]=None",
        "sourceFile": "cogs/voicemaster/voicemaster.py",
        "sourceLine": 59,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/voicemaster/voicemaster.py#L59",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "voicemaster staticrole::VoiceMaster::cogs/voicemaster/voicemaster.py:99",
        "name": "voicemaster staticrole",
        "description": "Set a staticrole for VoiceMaster (The role that all members get when they join the server).",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Set a staticrole for VoiceMaster (The role that all members get when they join the server).",
        "aliases": [],
        "usage": [
            ";voicemaster staticrole <role>",
            "/voicemaster staticrole role:discord.Role"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "role",
                "kind": "positional_or_keyword",
                "type": "discord.Role",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "VoiceMaster",
        "category": "VoiceMaster",
        "permissions": [
            "has_permissions(manage_guild=True)"
        ],
        "checks": [
            "has_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "has_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx: Context, role: discord.Role",
        "sourceFile": "cogs/voicemaster/voicemaster.py",
        "sourceLine": 99,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/voicemaster/voicemaster.py#L99",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "voicemaster transfer::VoiceMaster::cogs/voicemaster/voicemaster.py:479",
        "name": "voicemaster transfer",
        "description": "Transfer ownership of a VoiceMaster channel to another user.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Transfer ownership of a VoiceMaster channel to another user.",
        "aliases": [],
        "usage": [
            ";voicemaster transfer <user>",
            "/voicemaster transfer user:discord.User"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.User",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "VoiceMaster",
        "category": "VoiceMaster",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [
            "guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context, user: discord.User",
        "sourceFile": "cogs/voicemaster/voicemaster.py",
        "sourceLine": 479,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/voicemaster/voicemaster.py#L479",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "voicemaster unhide::VoiceMaster::cogs/voicemaster/voicemaster.py:336",
        "name": "voicemaster unhide",
        "description": "Unhide your VoiceMaster channel from the channel list.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Unhide your VoiceMaster channel from the channel list.",
        "aliases": [],
        "usage": [
            ";voicemaster unhide",
            "/voicemaster unhide"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "VoiceMaster",
        "category": "VoiceMaster",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [
            "guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/voicemaster/voicemaster.py",
        "sourceLine": 336,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/voicemaster/voicemaster.py#L336",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "voicemaster unlock::VoiceMaster::cogs/voicemaster/voicemaster.py:240",
        "name": "voicemaster unlock",
        "description": "Unlock your VoiceMaster channel to allow others to join.",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Unlock your VoiceMaster channel to allow others to join.",
        "aliases": [],
        "usage": [
            ";voicemaster unlock",
            "/voicemaster unlock"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "VoiceMaster",
        "category": "VoiceMaster",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [
            "guild_only()"
        ],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/voicemaster/voicemaster.py",
        "sourceLine": 240,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/voicemaster/voicemaster.py#L240",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "vortex::Information::cogs/information/information.py:1461",
        "name": "vortex",
        "description": "Pointless command, shows the song in which the bots name was inspired by.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";vortex"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 1461,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L1461",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "water::Fun::cogs/fun/fun.py:1945",
        "name": "water",
        "description": "Base command for water related commands",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";water <interaction>",
            "/water interaction:discord.Interaction"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "interaction",
                "kind": "positional_or_keyword",
                "type": "discord.Interaction",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_group",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [
            "app_commands.default_permissions(manage_guild=True)"
        ],
        "checks": [
            "app_commands.default_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.default_permissions(manage_guild=True)"
        ],
        "signature": "self, interaction: discord.Interaction",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 1945,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L1945",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "water add::Fun::cogs/fun/fun.py:2019",
        "name": "water add",
        "description": "Add a water reminder",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Add a water reminder with the specified interval in minutes.",
        "aliases": [],
        "usage": [
            ";water add <ctx_or_interaction> <channel> <delay>",
            "/water add ctx_or_interaction:Union[discord.Interaction, commands.Context] channel:discord.TextChannel delay:int"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx_or_interaction",
                "kind": "positional_or_keyword",
                "type": "Union[discord.Interaction, commands.Context]",
                "default": null,
                "required": true
            },
            {
                "name": "channel",
                "kind": "positional_or_keyword",
                "type": "discord.TextChannel",
                "default": null,
                "required": true
            },
            {
                "name": "delay",
                "kind": "positional_or_keyword",
                "type": "int",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {
            "channel": "The channel to send the reminder to",
            "delay": "The delay between reminders in minutes"
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [
            "app_commands.default_permissions(manage_guild=True)",
            "app_commands.default_permissions(manage_guild=True)"
        ],
        "checks": [
            "app_commands.default_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "app_commands.default_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.describe(channel='The channel to send the reminder to', delay='The delay between reminders in minutes')",
            "app_commands.default_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx_or_interaction: Union[discord.Interaction, commands.Context], channel: discord.TextChannel, delay: int",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 2019,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L2019",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "water remove::Fun::cogs/fun/fun.py:1951",
        "name": "water remove",
        "description": "Remove a water reminder",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Remove the water reminder for this server.",
        "aliases": [],
        "usage": [
            ";water remove <ctx_or_interaction>",
            "/water remove ctx_or_interaction:Union[discord.Interaction, commands.Context]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx_or_interaction",
                "kind": "positional_or_keyword",
                "type": "Union[discord.Interaction, commands.Context]",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [
            "app_commands.default_permissions(manage_guild=True)",
            "app_commands.default_permissions(manage_guild=True)"
        ],
        "checks": [
            "app_commands.default_permissions(manage_guild=True)"
        ],
        "inheritedGroupChecks": [
            "app_commands.default_permissions(manage_guild=True)"
        ],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.default_permissions(manage_guild=True)"
        ],
        "signature": "self, ctx_or_interaction: Union[discord.Interaction, commands.Context]",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 1951,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L1951",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "whois::Information::cogs/information/information.py:523",
        "name": "whois",
        "description": "Show basic information about a user not in a server by ID.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";whois [user]",
            "/whois [user:discord.User]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "user",
                "kind": "positional_or_keyword",
                "type": "discord.User",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {
            "user": "The user you want to look up."
        },
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix",
            "slash"
        ],
        "commandType": "hybrid",
        "kind": "hybrid_command",
        "cog": "Information",
        "category": "Information",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [
            "app_commands.allowed_installs(guilds=True, users=True)",
            "app_commands.allowed_contexts(guilds=True, dms=True, private_channels=True)",
            "app_commands.describe(user='The user you want to look up.')"
        ],
        "signature": "self, ctx, user: discord.User=None",
        "sourceFile": "cogs/information/information.py",
        "sourceLine": 523,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/information/information.py#L523",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "whoknows::LastFM::cogs/lastfm/lastfm.py:2470",
        "name": "whoknows",
        "description": "Shortcut for lastfm whoknows command",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shortcut for lastfm whoknows command",
        "aliases": [
            "wk"
        ],
        "usage": [
            ";whoknows [artist]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "artist",
                "kind": "keyword_only",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context, *, artist: str=None",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 2470,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L2470",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "wkalbum::LastFM::cogs/lastfm/lastfm.py:2488",
        "name": "wkalbum",
        "description": "Shortcut for lastfm whoknowsalbum command",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shortcut for lastfm whoknowsalbum command",
        "aliases": [
            "whoknowsalbum",
            "wka"
        ],
        "usage": [
            ";wkalbum [album]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "album",
                "kind": "keyword_only",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context, *, album: str=None",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 2488,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L2488",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "wktrack::LastFM::cogs/lastfm/lastfm.py:2479",
        "name": "wktrack",
        "description": "Shortcut for lastfm whoknowstrack command",
        "descriptionSource": "source",
        "help": null,
        "docstring": "Shortcut for lastfm whoknowstrack command",
        "aliases": [
            "whoknowstrack",
            "wkt"
        ],
        "usage": [
            ";wktrack [track]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "track",
                "kind": "keyword_only",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "LastFM",
        "category": "LastFM",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx: Context, *, track: str=None",
        "sourceFile": "cogs/lastfm/lastfm.py",
        "sourceLine": 2479,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/lastfm/lastfm.py#L2479",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "wolfram::Fun::cogs/fun/fun.py:177",
        "name": "wolfram",
        "description": "Ask Wolfram Alpha a question.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [
            "wolframalpha",
            "wr"
        ],
        "usage": [
            ";wolfram <question>"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": null,
                "default": null,
                "required": true
            },
            {
                "name": "question",
                "kind": "keyword_only",
                "type": "str",
                "default": null,
                "required": true
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": false,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Fun",
        "category": "Fun",
        "permissions": [],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": null,
        "otherDecorators": [],
        "signature": "self, ctx, *, question: str",
        "sourceFile": "cogs/fun/fun.py",
        "sourceLine": 177,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/fun/fun.py#L177",
        "metadata": {},
        "classCommandAttributes": {}
    },
    {
        "id": "перезагрузка::Owner::cogs/owner/owner.py:914",
        "name": "перезагрузка",
        "description": "Reloads the jishaku extension in Russian in case autotranslation is enabled.",
        "descriptionSource": "source",
        "help": null,
        "docstring": null,
        "aliases": [],
        "usage": [
            ";перезагрузка [command]"
        ],
        "customUsage": null,
        "arguments": [
            {
                "name": "ctx",
                "kind": "positional_or_keyword",
                "type": "Context",
                "default": null,
                "required": true
            },
            {
                "name": "command",
                "kind": "keyword_only",
                "type": "str",
                "default": "None",
                "required": false
            }
        ],
        "optionDescriptions": {},
        "enabled": true,
        "runtimeStatus": "registered_by_extension_setup",
        "hidden": true,
        "interfaces": [
            "prefix"
        ],
        "commandType": "prefix",
        "kind": "command",
        "cog": "Owner",
        "category": "Owner",
        "permissions": [
            "Only bot.owner_ids members pass this cog_check."
        ],
        "checks": [],
        "inheritedGroupChecks": [],
        "cogCheck": {
            "sourceFile": "cogs/owner/owner.py",
            "sourceLine": 78
        },
        "otherDecorators": [],
        "signature": "self, ctx: Context, *, command: str=None",
        "sourceFile": "cogs/owner/owner.py",
        "sourceLine": 914,
        "sourceUrl": "https://github.com/playfairs/vortex/blob/master/src/cogs/owner/owner.py#L914",
        "metadata": {},
        "classCommandAttributes": {
            "hidden": true
        }
    }
]

export default commandsData
