const Discord = require('discord.js');
const databot = require('../data.json');
module.exports.run = async (bot, message, args) => {
    var answer = databot.answerball [Math.floor(Math.random()*databot.answerball .length)];
    message.channel.send(answer);
}

module.exports.help = {
	name: '8ball'
}