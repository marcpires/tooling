const ConfigManager = require('../lib/config-manager')
const package = require('../package.json')

const config = new ConfigManager(package.name)

class Utils {

    static getTemplatesRepoUrl () {
        return ''
    }

     static setTemplatesRepoUrl (templatesRepo) {
        config.setTemplatesRepo(templatesRepo)
    }

    static isGitUrl (str) { 
        let regex = /(?:git|ssh|https?|git@[-\w.]+):(\/\/)?(.*?)(\.git)(\/?|\#[-\d\w._]+?)$/
        //let rg_test = /((git|ssh|http(s)?)|(git@[\w\.]+))(:(//)?)([\w\.@\:/\-~]+)(\.git)(/)?/
        let repo = /(\w+)(?:.git)$/

        let org = /:\w+/
        
        
        let result = {
            'result': regex.test(str),
            'components': {
              'repo_name': repo.exec(str)[1],
              'organization': org.exec(str)
            } 
            
        }

        return result
    }
}
    
module.exports = Utils
