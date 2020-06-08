const Discord = require('discord.js');
const databot = require('../data.json');
const bot = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {
    const response = ([databot.okitapic[Math.floor(Math.random() * databot.okitapic.length)]])
    message.channel.send(response);

}

module.exports.help = {
	name: 'selfie'
}