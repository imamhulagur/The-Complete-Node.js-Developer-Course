// console.log('Starting');

// setTimeout(()=>{
//     console.log('2 second timer')
// }, 2000)

// setTimeout(()=>{
//     console.log('0 sec timer')
// }, 2)
// console.log('Stopping');

// const request = require('postman-request');

// const url = 'http://api.weatherstack.com/current?access_key=500202960a4016659e6ac115053018b4&query=37.8267,-122.4233&units=f';

// request(
//         {
//             url: url,
//             json: true            
//         }, function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// //   console.log('body:', body); // Print the HTML for the Google homepage.
// //   const data = JSON.parse(body);
// //   console.log(data.current);
//     // console.log(response.body.current);
//     console.log(response.body.current.weather_descriptions[0]+'. It is currently '+ response.body.current.temperature+' degrees out. It is feels like '+response.body.current.feelslike+' degrees out.');
// });

//mail box api hands on

// const geoCodeUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaW1hbWh1bGFndXIiLCJhIjoiY2tsZ3owanZzMDE1bzJwcWlqZzFoenRydiJ9.rZyDJFwe3r5j4AdSSHpG1w"


// request({url : geoCodeUrl,json: true,limit:1}, function (error, response, body) {
//     if(error){
//         console.log('Low level error like network issue');
//     }else if(response.body.error) {
//         console.log('unable to find location')
//     }else{
//         //   let data=JSON.parse(body);
//         console.log('longitude :'+body.features[0].center[0],
//                       'latitude :'+body.features[0].center[1]); // Print the HTML for the Google homepage.
//     }
// });

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// console.log(process.argv);
const address = process.argv[2];
if(!address) {
    console.log('please provide an address!')
} else{
    // geocode('Boston',(error, data)=>{
    // geocode(address,(error, data)=>{
    geocode(address,(error, {latitude, longitude, location} = { })=>{
    
        if(error) {
            return console.log(error);
        }
        // console.log('Error '+error);
        // console.log('Data '+data.latitude, data.longitude, data.location);
        // forecast(data.latitude, data.longitude, (error, forecastData)=>{
        forecast(latitude, longitude, (error, forecastData)=>{
            if(error){
                return console.log(error);
            }
            console.log(location);
            console.log(forecastData);
    
            // console.log('Error '+ error);
            // console.log('Data '+response)
        });
    })
}



