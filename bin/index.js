#!/usr/bin/env node
const program = require('commander')
const package = require('../package.json')

program
  .version(package.version)
  .command('configure', 'Initialize CI for a given project')
  .parse(process.argv)
