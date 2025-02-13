const { Events } = require('discord.js');

module.exports = {
	//  property states which event this file is for
    name: Events.ClientReady,
	// property holds a boolean value that specifies if the event should run only once
    once: true,
    execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};