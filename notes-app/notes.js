const fs = require('fs');
const chalk = require('chalk');
const getNotes = ()=>{
    return "your notes..."
}
const addNotes = (title, body)=> {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter(note=>note.title === title);
    const duplicateNote = notes.find(note=>note.title === title)
    // const duplicateNotes = notes.filter(function(note) {
    //     return note.title === title;
    // });
    //if(duplicateNotes.length === 0) {
        debugger
    if(!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New node added'));
    } else {
        console.log(chalk.red.inverse('Note title taken'));
    }
    
}

const removeNote = (title)=> {
    // console.log(title);
    const notes = loadNotes();
    const notesToKeep = notes.filter(note=>note.title !== title);

    if(notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Notes removed!'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('No notes found!'));  
    }
    
}

const listNotes= ()=>{
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes'));
    notes.forEach(note => {
        console.log(note.title);
    });
}

const readNote= (title)=> {
    const notes = loadNotes();
    const note = notes.find(note=> note.title === title);
    if(note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red('Note not found'));
    }
}

const saveNotes = (notes)=> {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = ()=> {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        const parsedData = JSON.parse(dataJSON);
        return parsedData;
    }catch(e) {
        return [];
    }
}
// module.exports = getNotes;
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}