import commandsData from './commands.js'

export type ImportedArgument = {
  name: string
  kind: string
  type: string | null
  default: string | null
  required: boolean
}

export type ImportedCommand = {
  id: string
  name: string
  description: string
  aliases: string[]
  usage: string[]
  customUsage: string | null
  arguments: ImportedArgument[]
  optionDescriptions: Record<string, string>
  enabled: boolean
  runtimeStatus: string
  interfaces: string[]
  commandType: string
  kind: string
  signature: string | null
  cog: string
  permissions: string[]
  checks: string[]
  inheritedGroupChecks: string[]
  cogCheck: string | { sourceFile: string; sourceLine: number } | null
  hidden: boolean
  otherDecorators: string[]
  metadata: Record<string, unknown>
  classCommandAttributes: Record<string, unknown>
  sourceFile: string
  sourceLine: number
  sourceUrl: string | null
  descriptionSource: "source" | "inferred"
}

const commands: ImportedCommand[] = commandsData
export default commands