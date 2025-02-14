const { SlashCommandBuilder } = require('discord.js');
const processWeather = require('../../utils/parseWeather.js');

module.exports = {
    // how long the user would have to wait (in seconds)
	cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('weather')
        .setDescription('Sends temperature and probability of rain according to the given city!')
        .addStringOption(option =>
            option.setName('city')
                .setDescription('City name for the weather forecast')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('day')
                .setDescription('Day of the week for the weather forecast (e.g., Monday, Tuesday)')
                .setRequired(false)
                .addChoices(
                    { name: 'Monday', value: 'Monday' },
                    { name: 'Tuesday', value: 'Tuesday' },
                    { name: 'Wednesday', value: 'Wednesday' },
                    { name: 'Thursday', value: 'Thursday' },
                    { name: 'Friday', value: 'Friday' },
                    { name: 'Saturday', value: 'Saturday' },
                    { name: 'Sunday', value: 'Sunday' }
                )
        ),
    async execute(interaction) {
        const city = interaction.options.getString('city'); 
        const day = interaction.options.getString('day') || 'today'; // Default to "today" if no day is chosen.
        
        const weatherMessage = await processWeather(city, day);
        await interaction.reply(weatherMessage);
    },
};
