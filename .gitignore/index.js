const Discord = require("discord.js")
const bot = new Discord.Client();
const PREFIX = ("Sf!")

client.on('message', msg => {
  if(msg.content[0] === PREFIX) {
   if(msg.content === PREFIX + 'info'){
     var embed = new Discord.RichEmbed()
     .setTitle("**__Informations:__**")
     .setDescription("Voici quelques informations à propos de moi")
     .addField( "**En couple avec Shirounet**","Shirounet est à moi <3", true)
     .addField( "**Préfix**","Le préfix du bot est " + PREFIX, true)
     .addField("Serveur support","[**Voici mon serveur de support**](https://discord.gg/KGR5Mbb)")
     .addField("Mon lien d'invitation","[**Cliquez ici**](https://discordapp.com/api/oauth2/authorize?client_id=662301255665713162&permissions=8&scope=bot)",true)
     .setColor("000000")
     .setFooter("Créé par Zowtopy")
  msg.author.sendEmbed(embed);
  msg.channel.send("**Va voir en message privé, tu trouveras quelques informations à propos de moi.**")
   }
  }
});

bot.login(process.env.TOKEN);
