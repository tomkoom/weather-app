const request = require("postman-request");
require("dotenv").config();

// apikey
const weatherstackAPIKey = process.env.WEATHERSTACK_APIKEY;

// const url = `http://api.weatherstack.com/current?access_key=${weatherstackAPIKey}&query=37.8267,-122.4233`;
// const url = `http://api.weatherstack.com/current?access_key=${weatherstackAPIKey}&query=New%20York`;

const forecast = (latitude, longitude, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=${weatherstackAPIKey}&query=${
		latitude + "," + longitude
	}&units=m`; // &units=m - celsius
	request({ url: url, json: true }, (error, response) => {
		if (error) {
			callback("Unable to connect to weather service.", undefined);
		} else if (response.body.error) {
			callback("Unable to find location.", undefined);
		} else {
			const data = response.body;
			const dataCurr = data.current;
			callback(
				undefined,
				"It is currently " + dataCurr.temperature + " degrees out. There is a " + dataCurr.precip + "% chance of rain."
			);
		}
	});
};

module.exports = forecast;
