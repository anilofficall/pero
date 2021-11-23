const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let aboneyetkilisi = message.mentions.roles.first()
  if (!aboneyetkilisi) return message.channel.send('Can you tag the role.')
   
  db.set(`aboneyetkilisi_${message.guild.id}`, aboneyetkilisi.id)
  message.channel.send(`Authorized role set ; **${aboneyetkilisi}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'premiumaut',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kayıt-rol <@rol>'
};