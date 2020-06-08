const Discord = require('discord.js');
const databot = require('../data.json');
const bot = new Discord.Client({disableEveryone: true});

module.exports.run = async (bot, message, args) => {
                    var embed = new Discord.MessageEmbed()
                    .setThumbnail('https://i.imgur.com/bJlIsG7.jpg')
                    .setTitle("Shinsengumi's first unit's captain, Okita Sōji arrives!",)
                    .addField("Commands", "`?believe` `?shittaste` `?selfie` `?grailwar` `?mynp` ")
                    .setColor(0x00FFFF)
                    message.channel.send(embed);
}

module.exports.help = {
	name: 'help'
}