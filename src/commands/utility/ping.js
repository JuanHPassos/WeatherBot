const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	// how long the user would have to wait (in seconds)
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};
