'use strict';

const PORT = 3000;
app.listen(PORT, () => console.log(`App is running on Server on port: ${PORT}`));

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/location', handleLocation);

app.get('/weather', handleWeather);

function handleLocation(request, response) {
    const getlocation = require('./data/location.json');
    const city = request.query.city;
    console.log('the city name is ', city);
    let obj = {
        name: getlocation[0].display_name,
        formatted_query: city,
        city: city,
        latitude: getlocation[0].lat,
        longitude: getlocation[0].lon,
    };
    response.send(obj);
};



function handleWeather(request, response) {
    const getWeather = require('./data/weather.json');
    const weathers = data.weather;
    let weatherRes = [];
    weathers.forEach(item => {
        const current = item.weather;
        weatherRes.push({
            weather: current.city,
        });
    });
    response.send(weatherRes);
}