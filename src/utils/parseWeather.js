const getWeather = require('./fetchWeather.js');

async function processWeather(city, day = 'today') {
  const data = await getWeather(city);

  if (!data || !data.timelines) {
    return 'Forecast data unavailable.';
  }

  const dailyForecasts = data.timelines.daily;

  // Maps the days of the week to relative indices starting today
  const daysMap = {
    'Sunday': 0, 'Monday': 1, 'Tuesday': 2, 'Wednesday': 3,
    'Thursday': 4,'Friday': 5, 'Saturday': 6
  };

  let selectedForecast;

  if (day === 'today') {
    selectedForecast = dailyForecasts[0].values;
  } else {
    // Get today's date and fetch the forecast for the corresponding day
    const todayIndex = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const requestedIndex = (daysMap[day] - todayIndex + 7) % 7; // Adjusts to find the correct day
    selectedForecast = dailyForecasts[requestedIndex]?.values;

    if (!selectedForecast) {
      return `No forecast available for ${day}.`;
    }
  }

  return `Weather in ${city} on ${day}:\n
  Temperature: ${selectedForecast.temperatureAvg}°C
  Min/Max: ${selectedForecast.temperatureMin}°C / ${selectedForecast.temperatureMax}°C
  Temperature apparent: ${selectedForecast.temperatureApparentAvg}°C
  Humidity: ${selectedForecast.humidityAvg}%
  Wind speed: ${selectedForecast.windSpeedAvg}m/s`;
}

module.exports = processWeather;
