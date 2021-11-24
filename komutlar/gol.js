const Discord = require("discord.js")


exports.run = async (client, message, args) => {
  
  const fbi = new Discord.MessageEmbed()
  .setColor("RED")
  .setImage("https://media3.giphy.com/media/dw9XUOW6ydZCjUyOM8/200.gif")
  .setTitle("GOAL!")
  message.channel.send(fbi)
}


exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['fbi-gif'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: "goal",
  description: "FBi gif atar",
  usage:"!fbi"
}