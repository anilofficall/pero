const Discord = require('discord.js')
exports.run = (client, message) => {
const embed = message.mentions.users.first()
let user;
if (message.mentions.users.first())  {user = message.mentions.users.first();}
 else {user = message.author;}
return message.channel.send(new Discord.MessageEmbed())
.setFooter('İşte Avatarın;')
.setColor(`RED`)
                            
}
exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'avatar'
  };
