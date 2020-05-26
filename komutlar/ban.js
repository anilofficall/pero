const Discord = require('discord.js');  
exports.run = (client, message, args) => {
let çalanaselamlar = message.mentions.users.first();
let sebep = args.slice(1).join(' ');
if(!çalanaselamlar) return message.channel.send(new Discord.MessageEmbed()
.setColor("GRAY")
.setDescription("Banlamak İstediğiniz Kişiyi Etiketleyiniz."))
message.guild.members.ban(çalanaselamlar);
const selam = new Discord.MessageEmbed()
.setColor('GRAY')
.setDescription(`${çalanaselamlar} Adlı Kişi Sunucudan Yasaklandı.`)
message.channel.send(selam) 

}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};
exports.help = {
name: 'ban', 
};