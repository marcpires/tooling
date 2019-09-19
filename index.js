#!/usr/bin/env node
const program = require('commander')
const package = require('./package.json')
const updateNofitier = require('update-notifier')

updateNofitier({ pkg }).notify({ isGlobal : true })

program
  .version(package.version)
  .command('init', 'Initialize CI for a given project')
  .parse(process.argv)
