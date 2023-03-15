const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder, Message, MessageReaction, ReactionEmoji  } = require('discord.js');




module.exports = {
	data: new SlashCommandBuilder()
		.setName('session-meet')
		.setDescription('Crée un message de session (seulement administrateur)')
		.addStringOption((option) => option.setName('psn').setDescription('Ton PSN').setRequired(true))
		.addStringOption((option) => option.setName('heure').setDescription('heure du meeting formats hh:mm exemple 07:45').setRequired(true))
		.addStringOption((option) => option.setName('theme').setDescription('theme du meeting').setRequired(true)),
		
	async execute(interaction) {
		const EmbedBuild = new EmbedBuilder()
		.setTitle("Session Meet")
		.setDescription(`
		┏━┅┅┄┄⟞⟦✮⟧⟝┄┄┉┉━┓
		<:8415_playstation:1078721340384747541>┊➞ 𝗣𝘀𝗻 : ${interaction.options.getString('psn')} 
		⏱️┊➞ 𝗛𝗲𝘂𝗿𝗲 : ${interaction.options.getString('heure')} 
		🎟️┊➞ 𝗧𝗵𝗲̀𝗺𝗲 : ${interaction.options.getString('theme')} 
		<:3606playingcardspadesace:1078730002343936090>┊➞ 𝗣𝗹𝗮𝘁𝗲𝗳𝗼𝗿𝗺𝗲 : PS4
		━┅┉┄┄⟞˗ˋ ୨୧ ˊ˗⟝┄┄┉┉━

		📨 ┊➞ <#1053186364595773470>

		━┅┉┄┄⟞˗ˋ ୨୧ ˊ˗⟝┄┄┉┉━
		<:5878pepewow:1078729984971116554> ┊➞ Est-ce que tu seras présent ?

		<:2990_yes:1078750332206731334> ┊➞ Oui

		<:3820slashcommanddark:1078750365870207008>  ┊➞ En retard

		<:7685_no:1078750349092982935> ┊➞ Non
		┗━┅┅┄┄⟞⟦✮⟧⟝┄┄┉┉━┛ 

		`)
		.setFooter({
			text: `Paraxe Paradise 2022`,
			iconURL: 'https://media.discordapp.net/attachments/741728178938314874/1076570075034820648/ParaxeParadise_Logo.png?width=634&height=634',
		})
		.setColor('#1900ff')
		const message = await interaction.reply({embeds: [EmbedBuild], fetchReply: true});
		message.react('<:2990_yes:1078750332206731334>')
		message.react('<:3820slashcommanddark:1078750365870207008>')
		message.react('<:7685_no:1078750349092982935>')
		
	},
};
