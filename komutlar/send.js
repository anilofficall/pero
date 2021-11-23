const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

 
  let x = /(-)/
  
  let user = message.mentions.users.first();

  if (!user) return message.reply(':x: I need to be tagged, my friend, to whom I will send money!');
  if (user.bot === true) return message.reply(':x:  Dude, if you send the money to a boat, you,ll get hurt.');
  
  let mesaj = args.slice(1).join(' ');
  if (!mesaj) return message.reply(':x: You need to write the amount to send!');

  if (user.id === message.author.id) return message.reply(`${client.emojis.cache.get(client.emojiler.kendineParaYollama)} Are you seriously going to send money to yourself?`);


if (isNaN(args[1])) return message.channel.send(":x:  Please enter an amount.")
if (mesaj.match(x)) return message.reply(':x:  You,re the only one smart!');
    
    

  let elmas = await db.fetch(`elmascıklar_${message.author.id}`);
  let altın = await db.fetch(`altıncıklar_${message.author.id}`);
  let para = await db.fetch(`paracık_${message.author.id}`);


  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;

 

  if (para < mesaj) {
    let bulunanP = await db.fetch(`paracık_${message.author.id}`)
    message.channel.send(`:x: You don't have enough money,  money you have:  ${bulunanP === null  ? "0" : `${bulunanP}`}`)
} else if  (para > mesaj) {

  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(`:money_with_wings:  ${user} Sent to, amount sent: ${mesaj}`)
  message.channel.send(embed)
  db.add(`paracık_${user.id}`, mesaj)
  db.add(`paracık_${message.author.id}`, -mesaj)
  

}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['para-ver', 'parayolla'],
  permLevel: 0,
  kategori: "profil"
};

exports.help = {
  name: 'send',
  description: 'İstediğiniz kişiye para yollayabilirsiniz.',
  usage: 'para-yolla <@üye> <miktar>'
};