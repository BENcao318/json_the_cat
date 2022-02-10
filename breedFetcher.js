const request = require("request");

const url = `https://api.thecatapi.com/v1/breeds/search?q=`;

const fetchBreedDescription = function(breedName, callback) {
  request(url + breedName, (error, response, body) => {
    // console.log('statusCode:', response && response.statusCode);
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (!data.length) {
        callback("Breed not found", null);
      } else {
        callback(null, data[0].description);
      }
      
    }
  });
};

module.exports = {
  fetchBreedDescription,
};

