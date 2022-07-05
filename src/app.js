const request = require("postman-request");
require("dotenv").config();

const weatherstackAPIKey = process.env.WEATHERSTACK_APIKEY;
const mapboxAPIKey = process.env.MAPBOX_APIKEY;
const weatherstackURL = `http://api.weatherstack.com/current?access_key=${weatherstackAPIKey}&query=New%20York`;
const mapboxURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${mapboxAPIKey}&limit=1`;

request({ url: weatherstackURL, json: true }, (error, response) => {
	const data = response.body;
	console.log(data.current);
});

// geocode request
request({ url: mapboxURL, json: true }, (error, response) => {
	const data = response.body;
	const latitude = data.features[0].center[1];
	const longitude = data.features[0].center[0];
	console.log(latitude, longitude);
});
