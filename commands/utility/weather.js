const { SlashCommandBuilder } = require('discord.js');
const processWeather = require('../../weatherProcessor.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('weather')
        .setDescription('Sends temperature and probability of rain according to the given city!')
        .addStringOption(option =>
            option.setName('city')
                .setDescription('City name for the weather forecast')
                .setRequired(true)
        ),
    async execute(interaction) {
        const city = interaction.options.getString('city'); // Get the city in command line.
        const weatherMessage = await processWeather(city);
        await interaction.reply(weatherMessage);
    },
};

async function main() {
    const city = 'São Carlos';
    const weatherMessage = await processWeather(city);
    return weatherMessage;
}
  

  
