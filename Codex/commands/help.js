const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder  } = require('discord.js');




module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Affiche les commandes'),
		
	async execute(interaction) {
		const EmbedBuild = new EmbedBuilder()
        .setColor('#006fe6')
        .setTitle("Commandes :")
        .setDescription("`/help : `Affiche les commandes\n`/ban : `Ban la personne ping (only admin)\n`/kick : `Kick la personne ping (only admin)\n`/warn : `Warn la personne ping (only admin)\n`/info-membre : `Donne des informations sur la personne ping\n`/session-meet : `Organise un meeting pour le serveur (only admin)\n")
        .setFooter({
			text: `Paraxe Paradise 2022`,
			iconURL: 'https://media.discordapp.net/attachments/741728178938314874/1076570075034820648/ParaxeParadise_Logo.png?width=634&height=634',
		})

		return interaction.reply({ embeds: [EmbedBuild]});
	
		
	},
};
