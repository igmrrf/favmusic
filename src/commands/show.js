const {Command, flags} = require('@oclif/command')

class ShowCommand extends Command {
  async run() {
    const {flags} = this.parse(ShowCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from /home/igmrrf/Desktop/Code/Classes/music_list/src/commands/show.js`)
  }
}

ShowCommand.description = `Describe the command here
...
Extra documentation goes here
`

ShowCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = ShowCommand
