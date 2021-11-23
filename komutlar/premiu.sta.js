const Discord = require(`discord.js`);
const db = require(`quick.db`)

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`*NO*!`);
let kişi = message.mentions.users.first()
if(!args[0]) {
    const abonestats = await db.fetch(`aboneistatistik${message.author.id}.${message.guild.id}`)
    const ukqzn1 = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL())
    .setTimestamp()
    .setFooter(`${message.author.tag} requested by.`)
    .setDescription(`**${message.author} total record of the official named!**
    **Total \`${abonestats ? abonestats : '0'}\` gave a premium.**`)
    message.channel.send(ukqzn1)}
if(kişi) {
    const abonestats2 = await db.fetch(`aboneistatistik${kişi.id}.${message.guild.id}`)
    const ukqzn = new Discord.MessageEmbed()
    .setAuthor(kişi.username, kişi.avatarURL)
    .setThumbnail(message.mentions.users.first().avatarURL())
    .setTimestamp()
    .setFooter(`${message.author.tag} requested by.`)
    .setDescription(`**Official's Information**
    **Total \`${abonestats2 ? abonestats2 : '0'}\` gave a premium .**`)
    message.channel.send(ukqzn)}  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["abone-istatistik","abone-stats","abonestats"],
 permLevel: 0,
};
exports.help = {
 name: 'premiumsta'
};