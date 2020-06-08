const Discord = require('discord.js');
const databot = require('../data.json');
const bot = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {
	var response = databot.relevant [Math.floor(Math.random()*databot.relevant .length)];
     message.channel.send(`Obviously the shittiest taste is from **${response}**`).then().catch(console.error);
}

module.exports.help = {
	name: 'shittaste'
}