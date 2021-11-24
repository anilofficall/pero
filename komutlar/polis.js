const Discord = require("discord.js")


exports.run = async (client, message, args) => {
  
  const fbi = new Discord.MessageEmbed()
  .setColor("RED")
  .setImage("https://c.tenor.com/fgmiy4IUH3MAAAAC/police-cars-police.gif")
  .setTitle("POLİCE!")
  message.channel.send(fbi)
}


exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [''],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: "police",
  description: "FBi gif atar",
  usage:"!fbi"
}