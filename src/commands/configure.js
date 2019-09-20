const Utils = require('../utils/utils')
const inquirer = require('inquirer')

const configure = {

   async __checkTemplateRepo () {

      let template = Utils.getTemplatesRepoUrl()

      if(!template) {
        let answers = await inquirer.prompt([
          {type: 'input', name: 'templateRepo', message: 'Enter your CI Temmplaes repository:'},
      ])
        await this.__setTemplateRepo(answers.templateRepo)
      }
    },
    async __setTemplateRepo (templatesRepo) {
      Utils.setTemplatesRepoUrl(templatesRepo)
    },

    //Sub-commands
    project (name) {
      let repo = Utils.isGitUrl(name)

      console.log(repo)

      switch(repo) {
        case true:
         this.__checkTemplateRepo()
          break
        case false:
            console.log('Path is a directory ?')
            break
      }
    }
}

module.exports = configure
