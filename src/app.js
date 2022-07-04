const request = require("postman-request");
require("dotenv").config();

const weatherstackAPIKey = process.env.WEATHERSTACK_APIKEY;
const url = `http://api.weatherstack.com/current?access_key=${weatherstackAPIKey}&query=New%20York`;

request({ url: url, json: true }, (error, response) => {
	const data = response.body;
	console.log(data.current);
});
