const Discord = require('discord.js')
exports.run = (client, message) => {
let embed = new Discord.MessageEmbed()
.setColor('RED')
.setTitle('İşte Avatarın ;')
.setDescription(`${message.author.avatarURL()}`)
message.channel.send(codepackembed)
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
