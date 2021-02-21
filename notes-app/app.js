// const fs = require('fs');
// fs.writeFileSync('notes.txt', 'This file was created by Node.js');

// fs.appendFileSync('notes.txt', '. This is appended by imam.');
// require('./relative path fo file')
// const test = require('./utils.js');

// const add = require('./utils.js');
// const sum = add(4, -2);
// console.log(sum);

// const getNotes = require('./notes');
// const msg = getNotes();
// console.log(msg);


// No ES6
// var validator = require('validator');

// validator.isEmail('foo@bar.com'); //=> true

// ES6
// import validator from 'validator';
// Or, import only a subset of the library:

// import isEmail from 'validator/lib/isEmail';

// const validator = require('validator');
// console.log(validator.isEmail('imam@gmail.com'))
// console.log(validator.isURL('http://www.google.co'));

// const chalk = require('chalk');
// console.log(chalk.bold.bgWhite.red.underline.dim.italic.inverse.strikethrough.dim('error!'));


//Getting Input from Users
// const getNotes = require('./notes');
const notes = require('./notes');
const yargs=require('yargs');
// const msg= notes.getNotes();
// const command = process.argv[2];
// console.log(process.argv);
// if(command === 'add') {
//     console.log('Adding notes!');
// } else if(command === 'remove') {
//     console.log('Removing notes!');
// }


//16. Argument Parsing with Yargs: Part I
//17. Argument Parsing with Yargs: Part II
//customize yargs version
yargs.version('1.1.0');
//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe:'Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log('Adding a news note!', argv)
        // console.log('Title: '+argv.title+'\nBody: '+argv.body);
        notes.addNotes(argv.title, argv.body);
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe:'Remove a node',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv) {
        // console.log('Removing a note!')
        notes.removeNote(argv.title);
    }
})

//list command
yargs.command({
    command:'list',
    describe:'List your note',
    handler() {
        // console.log('Listing out all notes!')
        notes.listNotes();
    }
})
//read command
yargs.command({
    command:'read',
    describe:'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // console.log('Reading a note!')
        notes.readNote(argv.title);
    }
})

// console.log(yargs.argv);
yargs.parse();


