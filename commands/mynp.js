const Discord = require('discord.js');
const databot = require('../data.json');
const cooldownNP = new Set();
module.exports.run = async (bot, message, args) => {
	if (message.author.bot) return;
    {
    if (cooldownNP.has(message.author.id))
    {
      message.channel.send("Master! you can only send this command every 5 minutes,why don't you join me for  some dango? ")
    }
    else
    {
    var useravatar = message.author.displayAvatarURL()
    var name = message.author.username;
    var npname1 = databot.randomnpname [Math.floor(Math.random()*databot.randomnpname .length)];
    var npname2 = databot.randomnpname [Math.floor(Math.random()*databot.randomnpname .length)];
    var typenp =  databot.nptype [Math.floor(Math.random()*databot.nptype .length)];
    var damagenp = databot.npdamage [Math.floor(Math.random()*databot.npdamage .length)];
    var cardtype = databot.fgocards [Math.floor(Math.random()*databot.fgocards .length)];
    var ranknp = databot.nprank [Math.floor(Math.random()*databot.nprank .length)];
    var resultnp = new Discord.MessageEmbed()
    .addField("Your Noble Phantasm",`**${name}** your Noble Phantasm is **${npname1} ${npname2}** `)
    .setThumbnail(useravatar)
    .addField("Classification", `**${typenp}**`)
    .addField("Type",  `**${cardtype}**`)
    .addField("Damage", `**${damagenp}**`)
    .addField("Rank", `**${ranknp}**`)
    .setColor(0x00FFFF)
    message.channel.send(resultnp);
  }
  cooldownNP.add(message.author.id);
  setTimeout(() => {cooldownNP.delete(message.author.id);}, 300000);
  }
}

module.exports.help = {
	name: 'mynp'
}