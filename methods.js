const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://forecast9.p.rapidapi.com/status/',
  headers: {
    'X-RapidAPI-Key': 'cd636672demsh288f2093d232388p137931jsn21216d2ad9f4',
    'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}