const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, ActivityType , MessageReaction, reac} = require('discord.js');
const { token } = require('./config.json');
const { EmbedBuilder  } = require('discord.js');


const client = new Client({ 
	intents: [
		GatewayIntentBits.Guilds, 
		GatewayIntentBits.GuildMembers,],
 });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}




client.once(Events.ClientReady, () => {
	//Set activities and status
	client.user.setPresence({
		activities: [{ name: `/help`, type: ActivityType.Playing }],
		status: 'online',
	  });
	//Console when bot is online
	console.log('Codex bot en ligne!');
    
});
//code for slash command and for catching error 
client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;
	const command = client.commands.get(interaction.commandName);
	if (!command) return;
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Il y a eu une erreur en exécutant le programme. Vous pouvez signalez la panne sur https://discord.gg/DcHAnjBqW7', ephemeral: true });
	}
});

client.login(token);