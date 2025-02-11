const getWeather = require('./weather');

async function processWeather(city) {
  const data = await getWeather(city);

  if (!data || !data.timelines) {
    return 'Forecast data unavailable.';
  }

  const forecast = data.timelines.daily[0].values;
  return `Weather in ${city}: Minimum temperature of ${forecast.temperatureMin}°C, maximum temperature of ${forecast.temperatureMax}°C and chance of rain of ${forecast.precipitationProbability}`;
}

module.exports = processWeather;
