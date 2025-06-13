#!/usr/bin/node
/*const request = require('request');
const movieId = process.argv[2];
const options = {
  url: 'https://swapi-api.hbtn.io/api/films/' + movieId,
  method: 'GET'
};

request(options, function (error, response, body) {
  if (!error) {
    const characters = JSON.parse(body).characters;
    printCharacters(characters, 0);
  }
});

function printCharacters (characters, index) {
  request(characters[index], function (error, response, body) {
    if (!error) {
      console.log(JSON.parse(body).name);
      if (index + 1 < characters.length) {
        printCharacters(characters, index + 1);
      }
    }
  });
}*/

#!/usr/bin/node
const request = require('request');

const movieId = process.argv[2];
if (!movieId) {
  console.error('Usage: ./0-starwars_characters.js <movie_id>');
  process.exit(1);
}

const filmUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(filmUrl, (err, res, body) => {
  if (err || res.statusCode !== 200) {
    console.error('Error fetching film:', err || `Status ${res.statusCode}`);
    return;
  }

  const characters = JSON.parse(body).characters;
  fetchCharacters(characters, 0);
});

function fetchCharacters(characters, index) {
  if (index >= characters.length) return;

  request(characters[index], (err, res, body) => {
    if (!err && res.statusCode === 200) {
      console.log(JSON.parse(body).name);
      fetchCharacters(characters, index + 1);
    } else {
      console.error('Error fetching character');
    }
  });
}
