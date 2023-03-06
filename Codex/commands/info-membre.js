const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, User, Role  } = require('discord.js');




module.exports = {
	data: new SlashCommandBuilder()
		.setName('info-membre')
		.setDescription('Information de votre compte'),
		
	async execute(interaction) {
		const EmbedBuild = new EmbedBuilder()
		.setTitle(`informations membres`)
		.setDescription(`
		Nom : ${interaction.user}
		\nID : ${interaction.user.id}
		\nCréation du compte : ${interaction.user.createdAt.toLocaleString()}`)
		.setFooter({
			text: `Paraxe Paradise 2022`,
			iconURL: 'https://media.discordapp.net/attachments/741728178938314874/1076570075034820648/ParaxeParadise_Logo.png?width=634&height=634',
		})
		.setColor('#1900ff')
		

		return interaction.reply({ embeds: [EmbedBuild]});
	
		
	},
};
