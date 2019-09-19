const chai = require('chai')
const dirtyChai = require('dirty-chai')
const expect = chai.expect
const sinon = require('sinon')
const inquirer = require('inquirer')
const ConfigManager = require('../lib/config-manager')

chai.use(dirtyChai)

describe('Configuration Manager', () => {
    let creds
    before(() => {
        creds = new ConfigManager('citools-test')
    })
    context('without credentials', () => {
        it('should prompt the user to enter CI API Key', async () => {
            sinon.stub(inquirer,'prompt').resolves({circleCIKey: 'babsv'})
            let [circleCIKey] = await creds.getCredentials()
            expect(circleCIKey).to.equal('babsv')
            expect(inquirer.prompt.calledOnce).to.be.true()
            inquirer.prompt.restoreDefaultPrompts()
        })
    })
    context('with credentials', () => {
        it('should return the credentials', async () => {
          let [circleCIKey] = await creds.getCredentials()
          expect(circleCIKey).to.equal('babsv')
        })
    })
    after(() => {
      creds.removeCredentials('circleCIKey')
    })
})

