const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || message.author;
  let boksE = await db.fetch(`boksE_${user.id}`);
  let kalem = await db.fetch(`kalem_${user.id}`);
  let kapışC = await db.fetch(`kapışC_${user.id}`);
  let rozet = await db.fetch(`memberBadge6_${user.id}`);
   let u = message.mentions.users.first() || message.author;

    let balance = await db.fetch(`paracık_${u.id}`);

  let altin = await db.fetch(`altıncıklar_${u.id}`);
  let altinim;
  if (altin == null) altinim = '0'
  else altinim = ''+ altin +''

let elmas = await db.fetch(`elmascıklar_${u.id}`);
let maaş = await db.fetch(`meslek_${u.id}`);
let meslekA = await db.fetch(`meslekA_${u.id}`);
let pref = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;

  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setThumbnail(message.author.avatarURL({dynamic:true}))
  .addField(':money_with_wings:  P:', `${balance === null ? "0" : `${balance} TL`}`, true)
  
  
message.channel.send(embed)
    
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["profil","para"],
  permLevel: 0,
  kategori: "profil"
};

exports.help = {
  name: 'money',
  description: 'Aldığınız eşyaları gösterir.',
  usage: 'çanta'
};