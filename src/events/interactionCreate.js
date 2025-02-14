const { Events, MessageFlags, Collection } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
    // holds event logic, which will be called by the event handler whenever the event emits
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		const { cooldowns } = interaction.client;

		if (!cooldowns.has(command.data.name)) {
			cooldowns.set(command.data.name, new Collection());
		}

		//  The current timestamp.
		const now = Date.now();
		// A reference to the Collection of user ids and timestamp key/value pairs for the triggered command.
		const timestamps = cooldowns.get(command.data.name);
		const defaultCooldownDuration = 3;
		//  The specified cooldown for the command, converted to milliseconds for straightforward calculation. If none is specified, this defaults to three seconds.
		const cooldownAmount = (command.cooldown ?? defaultCooldownDuration) * 1_000;

		//  inform the user of the amount of time they need to wait before using this command again
		if (timestamps.has(interaction.user.id)) {
			const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;

			if (now < expirationTime) {
				const expiredTimestamp = Math.round(expirationTime / 1_000);
				return interaction.reply({ content: `Please wait, you are on a cooldown for \`${command.data.name}\`. You can use it again <t:${expiredTimestamp}:R>.`, flags: MessageFlags.Ephemeral });
			}
		}
		
		// This line causes the entry for the user under the specified command to be deleted after the command's cooldown time has expired for them.
		timestamps.set(interaction.user.id, now);
		setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
			} else {
				await interaction.reply({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
			}
		}
	},
};