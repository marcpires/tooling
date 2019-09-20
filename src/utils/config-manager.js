/**
 * @author Marcelo Pires
 */
const inquirer = require('inquirer')
const keytar = require('keytar')
const Configstore = require('configstore')

//Must be a singleton
class ConfigManager {
  constructor (name) {
    if(!this.singletonInstance) {
      this.singletonInstance = this
      this.conf = new Configstore(name)
      this.service = name
    }
    return this.singletonInstance
  }

  async removeCredentials(credential) {
    await keytar.deletePassword(this.service, 'citools', credential)
  }

  async setCredentials() {
    let answers = await inquirer.prompt([
        {type: 'password', name: 'circleCIKey', message: 'Enter your Circle CI Personal API Key:'},
    ])
    await keytar.setPassword(this.service, 'citools', answers.circleCIKey)
    
    return [answers.circleCIKey, answers.repositoryType]
  }

  async getCredentials() {
      let circleCIKey = await keytar.getPassword(this.service, 'citools', 'circleCIKey')
      
      if (circleCIKey) {
          return [circleCIKey]
      } else {
          return await this.setCredentials()
      }
  }

  async setTemplatesRepo(templatesRepo) {
    let repo = await this.conf.set('templates.repo', templatesRepo)

  }
    
}

module.exports = ConfigManager