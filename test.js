const project = require('./lib/project-types');
const CFonts = require('cfonts');
const ora = require('ora');
const spinner = ora('Loading unicorns').start();

CFonts.say('Cli-Tools', {
    font: 'simple3d',
    background: 'transparent'

});

setTimeout(() => {
    
    spinner.text = 'Loading'
},1000)


project.types.map((e) => {
    console.log(e.type)
})

