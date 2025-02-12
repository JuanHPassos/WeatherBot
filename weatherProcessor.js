const getWeather = require('./weather');

async function processWeather(city) {
  const data = await getWeather(city);

  if (!data || !data.timelines) {
    return 'Forecast data unavailable.';
  }

  const forecast = data.timelines.daily[0].values;
  return `Weather in ${city}: temperature is ${forecast.temperatureAvg}, minimum temperature of ${forecast.temperatureMin}°C, maximum temperature of ${forecast.temperatureMax}°C`;
}

module.exports = processWeather;
