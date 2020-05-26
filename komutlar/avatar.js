const Discord = require("discord.js");
exports.run = function(client, message, args) {
let user;  
if (message.mentions.users.first()) {
user = message.mentions.users.first();
    } else {
        user = message.author;}
return message.channel.send(new Discord.MessageEmbed()
.setColor(`RANDOM`)
.setDescription(`**${user.tag}** İşte Avatarın;`)
.setImage(user.avatarURL()))
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};
exports.help = {
  name: 'avatar'
};