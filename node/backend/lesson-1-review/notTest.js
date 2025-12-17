const argv = require('process').argv; 

const args = process.argv.slice(2);

if(args.length > 0) {
    console.log(`hello ${args[0]}!`)
}