 const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  
const embed = new Discord.MessageEmbed()
        
.setTitle(`${client.user.username}`) 

.addField("Yapımcılarım ", " <@616393521359880202>")

.setDescription(`**Botun Davet Linki ;** [TIKLA](https://discord.com/oauth2/authorize?client_id=830886746085392425&permissions=268790848&scope=bot) \n**Destek Sunucusu ;** [TIKLA](https://discord.com/oauth2/authorize?client_id=830886746085392425&permissions=268790848&scope=bot)`) 
.setThumbnail(client.user.avatarURL)
.setFooter(`${message.author.username} Başarıyla Davet Sistemi Kullandı!`, message.author.avatarURL)
.setColor(`BLACK`)

return message.channel.send(embed)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet','davet-et','botu-ekle'],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: 'Astral Team',
  usage: 'davet'
}; 