const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});
const botconfig = require('./config.json');
const databot = require('./data.json');
const fs = require('fs');
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop()=="js")
    if(jsfile.length <= 0){
        console.log("Couldn't find commands.");
        return;
    }

    jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
        
    });
});

bot.login(botconfig.token);
bot.on('ready', () => {
	console.log('I am ready!');
	bot.user.setActivity('Master! use ?help');

});
bot.on("message", async message =>{
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix =botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args =messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);


})

bot.on('message', message=> {
    if (message.mentions.has(bot.user))
    {
    message.reply("I'm in good condition, Master, yes, as good as ever!");
    }
});