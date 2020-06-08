const Discord = require('discord.js');
const databot = require('../data.json');
const cooldownGrail =new Set();
module.exports.run = async (bot, message, args) => {
    if (message.author.bot) return;
    {
      if (cooldownGrail.has(message.author.id))
      {
        message.channel.send("Master! you can only send this command every 5 minutes,why don't you join me for  some dango? ")
      }
      else
      {
           var chance = Math.random() * 100;
           var rate = databot.ratefgo;
           var id = "0";
           var name = message.author.username;
           var useravatar = message.author.displayAvatarURL()
           var finalresultwar = databot.resultwar [Math.floor(Math.random()*databot.resultwar .length)];
           var randomsummontext = databot.randomtextgrail [Math.floor(Math.random()*databot.randomtextgrail .length)];

           if (chance <= rate[0]) chance = "5";
           else if (chance <= rate[1]) chance = "4";
           else if (chance <= rate[2]) chance = "3";
           else chance = "3";

              if(chance === "3")
                   {
                   var id = databot.servantid3 [Math.floor(Math.random()*databot.servantid3 .length)];
                   }
              if(chance === "4")
                  {
                  var id = databot.servantid4 [Math.floor(Math.random()*databot.servantid4 .length)];
                  }
             if(chance === "5")
                 {
                 var id = databot.servantid5 [Math.floor(Math.random()*databot.servantid5 .length)];
                 }

        var resultgrailwar = new Discord.MessageEmbed()
            .setColor(0x00FFFF)
            .addField("Servant Summoned",`**${name}** has summoned a Servant! ${randomsummontext} `)
            .addField("Result", `And in the end ${finalresultwar}`)
            .setThumbnail(useravatar)
            .setImage(`https://fate-go.cirnopedia.org/icons/servant_card/${id}4.jpg`)
            
            message.channel.send(resultgrailwar);
      }
           cooldownGrail.add(message.author.id);
           setTimeout(() => {cooldownGrail.delete(message.author.id);}, 300000);
   }
}

module.exports.help = {
	name: 'grailwar'
}