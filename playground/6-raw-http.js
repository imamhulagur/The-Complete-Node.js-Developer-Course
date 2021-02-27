

const http = require('http');
const url = 'http://api.weatherstack.com/current?access_key=500202960a4016659e6ac115053018b4&query=45, -75&units=f';

const request = http.request(url, (response)=> {
    let data = '';
    response.on('data', (chunk)=> {//data is a event of http which gives back a response
        data = data + chunk.toString();
        //console.log(chunk);
    });

    response.on('end', ()=> {// end event listening
        // console.log(data);
        const body = JSON.parse(data);
        console.log(body);
    })

    request.on('error', (error)=> {// error event listening
        console.log('An error '+error);
    })
})

request.end();