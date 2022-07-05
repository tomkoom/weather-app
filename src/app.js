const request = require("postman-request");
require("dotenv").config();

// apis
const weatherstackAPIKey = process.env.WEATHERSTACK_APIKEY;
const mapboxAPIKey = process.env.MAPBOX_APIKEY;

const weatherstackURL = `http://api.weatherstack.com/current?access_key=${weatherstackAPIKey}&query=37.8267,-122.4233`;
// const weatherstackURL = `http://api.weatherstack.com/current?access_key=${weatherstackAPIKey}&query=New%20York`;

request({ url: weatherstackURL, json: true }, (error, response) => {
	// connection err
	if (error) {
		console.log("Unable to connect to weather service");

		// response err
	} else if (response.body.error) {
		console.log("Unable to find location (weatherstack)");
	} else {
		const data = response.body;
		console.log(data.current);
	}
});

const mapboxURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${mapboxAPIKey}&limit=1`;

// geocode request
request({ url: mapboxURL, json: true }, (error, response) => {
	if (error) {
		console.log("Unable to connect to geolocation service");
	} else if (response.body.features.length === 0) {
		console.log("Unable to find location (mapbox). Try another search");
	} else {
		const data = response.body;
		const latitude = data.features[0].center[1];
		const longitude = data.features[0].center[0];
		console.log(latitude, longitude);
	}
});
