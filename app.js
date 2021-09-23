const yargs = require("yargs")
//const chalk = require("chalk")
//const add = require("./utils.js")
//const validator = require("validator");
//const yargs = require("yargs");
//yargs.version("1.1.0")
//const log = console.log;
yargs.parse()
yargs.command({
  command: 'add',
  describe:'add a new note',
  handler: function(){
    console.log("adding a note")
  }
})

