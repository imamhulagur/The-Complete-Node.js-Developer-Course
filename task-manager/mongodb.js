// CRUD create read update delete

// //import mongo db
// const mongodb = require('mongodb')

// //provide necessary function to connect and perform on mongo db
// const MongoClient = mongodb.MongoClient

// const objectId = mongodb.ObjectID

//destructuring above code
const { MongoClient, ObjectID, ObjectId } = require('mongodb')

//we are using there protocol
const connectionURL = 'mongodb://127.0.0.1:27017' //dont use localhost instead of 127.0.0.1, causes the issue, slow down the application.
const databaseName = 'task-manager'

//generate id
// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())

//since old ur is deprecated
MongoClient.connect(connectionURL, { useNewUrlParser : true, useUnifiedTopology: true }, (error, client)=> {
    //connecting to db is not a synchronous operation, it takes time.
    if(error) {
        return console.log('Unable to connect to Database')
    }

    console.log('Connected!')

    //inserting one of document
    const db = client.db(databaseName)


//DELETE
    //deleteMany()
        // db.collection('users').deleteMany(
        //     {
        //         age: 24
        //     }
        // )
        // .then((result)=>{
        //     console.log(result)
        // })
        // .catch((error)=> {
        //     console.log(error)
        // })

    //deleteOne()
        db.collection('tasks').deleteOne(
            {
                description: "Renew inspection"
            }
        )
        .then((result)=>{
            console.log(result)
        })
        .catch((error)=> {
            console.log(error)
        })



//UPDATE
    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID('6044d9b0798c94404045731e')
    // }, {
    //     $set: {
    //         name: 'Vikrant'
    //     }
    // })

    // updatePromise
    // .then((result)=>{
    //     console.log(result)
    // })
    // .catch((error)=> {
    //     console.log(error)
    // })

    //direct listening without creating variable, most commonly used
    // db.collection('users').updateOne({
    //     _id: new ObjectID('6044d9b0798c94404045731e')
    // }, {
    //     $set: {
    //         name: 'Vikrant'
    //     }
    // })
    // .then((result)=>{
    //     console.log(result)
    // })
    // .catch((error)=> {
    //     console.log(error)
    // })

    //$inc: {} ->increment vikrant age from 26 to 27
    // db.collection('users').updateOne({
    //     _id: new ObjectID('6044d9b0798c94404045731e')
    // }, {
    //     $inc: {
    //         age: 1//field: amount
    //     }
    // })
    // .then((result)=>{
    //     console.log(result)
    // })
    // .catch((error)=> {
    //     console.log(error)
    // })


    // //updateMany
    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //        completed: true
    //     }
    // })
    // .then((result)=>{
    //     console.log(result.modifiedCount)
    // })
    // .catch((error)=> {
    //     console.log(error)
    // })



//READ
    // db.collection('users').findOne({
    //     _id: new ObjectID('6044d9b0798c94404045731e')
    // }, (error, user) =>{
    //     if(error) {
    //        return console.log('User not found')
    //     }
    //     console.log(user)
    // })


    // db.collection('users').find({ age: 26}).toArray((error, users)=>{
    //     console.log(users)
    // })
    // db.collection('users').find({ age: 26}).count((error, count)=>{
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({
    //     _id: new ObjectID('6044bf4bd93b34042c16e81c')
    // }, (error, task)=>{
    //     if(error) {
    //         return console.log('task not found')
    //     }
    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false}).toArray((error, count)=> {
    //     if(error) {
    //         return console.log('task not found')
    //     }

    //     console.log(count);
    // })

//INSERT
    // db.collection('users').insertOne({
    //     _id : id,
    //     name : 'Vikram',
    //     age: 26
    // }, (error, result)=> {
    //     if(error) {
    //         return console.log('Inable to insert User')
    //     }
    //     console.log(result.ops)
    // })


    //insert many
    // db.collection('users').insertMany([
    //     {
    //         name: 'imam1',
    //         age: 25 
    //     },
    //     {
    //         name: 'imam2',
    //         age: 26 
    //     }

    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('task').insertMany([
    //     {
    //        description: "Clean the house",
    //        completed: true
    //     },
    //     {
    //        description: "Renew inspection",
    //        completed: false
    //     },
    //     {
    //        description: "Pot plants",
    //        completed: false
    //     }
       
    // ], (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })


})
