const request = require('request');
const args = process.argv.slice(2);
const url = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;

request(url, (error, response, body) => {
  console.log('statusCode:', response && response.statusCode);
  if(error) {
    console.log('error: ', error);
  } else {
    const data = JSON.parse(body);
    console.log(typeof data);
    if(!data.length) {
      console.log('Breed not found');
    } else{
      console.log(data);
    }
  }
})