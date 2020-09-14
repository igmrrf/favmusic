const {Command, flags} = require('@oclif/command')

const Weight = require('../api/weight')

const weight = new Weight()

class AddCommand extends Command {
  async run() {
    const {args} = this.parse(AddCommand)
    const newWeight = args.weight
    weight.add(newWeight)
    this.log(`New Weight of ${weight} kg was added`)
  }
}

AddCommand.description = 'Add a new recode or weight'

AddCommand.args = [{
  name: 'weight',
  description: 'current weight in kilograms; insert only the value, omit kg',
  required: true,
}]

AddCommand.flags = {
  name: flags.string({char: 'n', description: 'name to print'}),
}

module.exports = AddCommand
