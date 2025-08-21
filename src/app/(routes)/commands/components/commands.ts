import commandsData from './commands.js'

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

const commands: ImportedCommand[] = (commandsData as any).default.body[0].commands
export default commands