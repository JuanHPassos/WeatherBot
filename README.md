![WeatherBot](https://capsule-render.vercel.app/api?type=waving&color=timeAuto&height=300&section=header&text=WeatherBot&fontSize=90)

<h3 align="center">WeatherBot</h3>

<p align="center">The WeatherBot is a bot on Discord that aims to inform the weather of the region chosen by the user and on the day of the week selected by them; this option is not necessary, and if left blank, it returns the current day.</p>

## 📝 》Requirements

- latest LTS version of [Node.js](https://nodejs.org/pt)
- Discord Token. Get it from [Discord Developers Portal](https://discord.com/developers/applications)
- ClientID `for loading slash commands`. [Discord Developers Portal](https://discord.com/developers/applications)
- Tomorrow.io API KEY `for get information about weather`. [Tomorrow.io](https://www.tomorrow.io/)

## 📖 》Installation Guide

### Installing via [NPM](https://www.npmjs.com/)

Clone the repo by running
```
git clone https://github.com/JuanHPassos/WeatherBot 
```
After cloning fill all requirement in config.json (rename configexample.json to config.json), then run
```
npm install
```
To start your bot
```
node src/index.js
```

## 💻 》How to use

Just type the command '/weather' and write the desired city. The day option is not mandatory, and if it is not chosen, the current day is chosen.

![ExampleofUse](https://github.com/JuanHPassos/WeatherBot/blob/main/img/WeatherBotImage.png)

![ExampleofResponse](https://github.com/JuanHPassos/WeatherBot/blob/main/img/WeatherBotResponse.png)

# References

1. [Inspiration](https://zerotomastery-io.translate.goog/blog/node-js-projects-for-beginners-and-above/?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt&_x_tr_pto=tc)
2. [Project Organization](https://awari.com.br/como-criar-um-projeto-de-backend-com-node-js-guia-completo/)
3. [Discord Guide](https://discordjs.guide/#before-you-begin)
4. [OpenWeather](https://openweathermap.org/)
5. [Tomorrow.io](https://www.tomorrow.io/weather-api/)
6. [API Decision](https://www.tomorrow.io/blog/tomorrow-vs-openweathermap/)
7. [Github Reference](https://github.com/CorwinDev/Discord-Bot)
