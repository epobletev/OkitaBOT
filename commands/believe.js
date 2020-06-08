const Discord = require('discord.js');
const databot = require('../data.json');
module.exports.run = async (bot, message, args) => {
	var response = databot.meme [Math.floor(Math.random()*databot.meme .length)];
	message.channel.send(response).then().catch(console.error);
}

module.exports.help = {
	name: 'believe'
}