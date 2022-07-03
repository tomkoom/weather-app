const request = require("postman-request");
require("dotenv").config();

const weatherstackAPIKey = process.env.WEATHERSTACK_APIKEY;
const url = `http://api.weatherstack.com/current?access_key=${weatherstackAPIKey}&query=New%20York`;

request({ url: url }, (error, response) => {
	console.log(weatherstackAPIKey);
	const data = JSON.parse(response.body);
	console.log(data);
});
