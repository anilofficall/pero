const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => {
  
  const ukqzn = await db.fetch(`abonek_${message.guild.id}`)
  
  if(ukqzn == null) return message.channel.send('');
  if (message.channel.id !== ukqzn) return message.channel.send(`This command only <#${ukqzn}> You can use it on your channel!`);
  if (ukqzn == true) return; 
  if (ukqzn == false) return message.channel.send(`system off.`);
  
 if(!message.member.roles.cache.has(db.fetch(`aboneyetkilisi_${message.guild.id}`))) {
    return message.channel.send("**NO**!");
 }
  let user = message.mentions.members.first()
   if (!user) return message.reply('Who would I give premium to?').catch(console.error);
   if (user.roles.cache.has(db.fetch(`abonerolü_${message.guild.id}`))) return message.channel.send("It already has premium!")
  user.roles.add(db.fetch(`abonerolü_${message.guild.id}`))
  const embed = new Discord.MessageEmbed()
  .setColor('RED')
  .setTimestamp()
  .setFooter('Give premium.')
  .addField(`Premium user;`, `${user}`,true)
  .addField(`Premium issuer;`,`${message.author}`,true)
      message.channel.send(embed)
  db.add(`aboneistatistik${message.author.id}.${message.guild.id}`, 1)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['pre']
};

exports.help = {
  name: "premium",
  description: "Abone Rolü Verir!",
  usage: "abone"
};