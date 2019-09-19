const program = require('commander')
const package = require('../package.json')
const configure = require('../commands/configure')
const ConfigManager = require('../lib/config-manager')
program.version(package.version)

program
  .command('project')
  .arguments('<project>', 'The project path or repository url')
  .description('Initializes a CI setup for the given project')
  .action(async (project) => {
    const config = new ConfigManager(package)
    let [circleCIKey]   = await config.getCredentials()

    configure.project(project)
  })

program.parse(process.argv)

if(!process.argv.slice(2).length) { program.outputHelp() }
