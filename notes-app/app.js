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

const validator = require('validator');
console.log(validator.isEmail('imam@gmail.com'))
console.log(validator.isURL('http://www.google.co'));

const chalk = require('chalk');
console.log(chalk.bold.bgWhite.red.underline.dim.italic.inverse.strikethrough.dim('error!'));