const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
	console.log("Please provide an address");
} else {
	geocode(address, (error, { latitude, longitude, location } = {}) => {
		// default is emty object

		if (error) {
			return console.log(error);
		}
		// first latitude
		// second longitude
		forecast(latitude, longitude, (error, forecastData) => {
			if (error) {
				return console.log(error);
			}

			console.log(location);
			console.log(forecastData);
		});
	});
}
