const Discord = require("discord.js")
const bot = new Discord.Client();
const PREFIX = ("Sf!")

client.on('ready', () => {
     console.log("Bot Connecté avec succès!")
     client.user.setStatus("dnd")
     client.user.setActivity("Admire son magnifique créateur")
});

bot.login(process.env.TOKEN);
