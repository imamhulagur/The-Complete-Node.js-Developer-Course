//usually we will not create promises, we will listen/consume promises. But its imp to know how can we create a promises

const doWorkPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve([7,4,1])
        reject('Things went wrong!')
        resolve([2,3,2])
    }, 2000)
})

doWorkPromise
.then((result)=>{
    console.log('Success!', result)
})
.catch((error)=>{
    console.log('Error!', error)
})
