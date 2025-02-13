const { api_key } = require('../../config.json');

function getWeather(city) {
  const encodedCity = encodeURIComponent(city);
  const url = `https://api.tomorrow.io/v4/weather/forecast?location=${encodedCity}&timesteps=1d&apikey=${api_key}`;

  return fetch(url)
    .then(res => res.json())
    .catch(err => {
      console.error('Error when looking for the weather', err);
      return null;
    });
}

module.exports = getWeather;
