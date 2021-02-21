// const fs = require('fs');

// //js string object
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// //creating JSON object
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

//data buffer because we wont get data as we see them instead we are gng get buffer data
//<Buffer 7b 22 74 69 74 6c 65 22 3a 22 45 67 6f 20 69 73 20 74 68 65 20 45 6e 65 6d 79 22 2c 22 61 75 74 68 6f 72 22 3a 22 52 79 61 6e 20 48 6f 6c 69 64 61 79 ... 2 more bytes>
//to get string back we need to use toSting()
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toLocaleString();
// console.log(dataJSON);
// const data = JSON.parse(dataJSON);
// console.log(data);
// console.log(data.title);
// console.log(dataBuffer);
// console.log(dataBuffer.toString());

// //since fs node core module only know to work with string data we need to convert js JSON object to string object using stringify
// const bookStringify = JSON.stringify(book);
// console.log(book);
// console.log(bookStringify);
// //we cant be able to access the data using properties in string data
// console.log(bookStringify.author);

// //conversely we can convert string object to  js JSON object using JSON.parse()
// const bookJSON = JSON.parse(bookStringify);
// //we can access data using property
// console.log(bookJSON.author)

const fs= require('fs');
const dataBuffer = fs.readFileSync('1-json.json');
//convert buffer into JSON string
const dataJSON = dataBuffer.toString();
console.log('Old data' +dataJSON);

//convert JSON string to JS object to override and alter property names. 
const user = JSON.parse(dataJSON);
user.name = 'imamChanged';
user.age = 23;

//override the original data back to file.
const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON);
console.log('New data' +userJSON);
