const Discord = require("discord.js");

const codare1 = require("quick.db");

exports.run = (client, message, args) => {

if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`NO!`)

  let codare = args.slice(0).join(" ");

  if (!codare)

    return message.channel.send("Enter your tag!")

  codare1.set(`ototag.${message.guild.id}`, 'tag');

  message.channel.send(`Auto tag \`${codare}\` set as. \nNote: If your tag is larger than 5 characters, our bot may fail.!`);

}

exports.conf = {

   enabled: true,

   guildOnly: false,

   aliases: [],

   permlevel: 0

}

exports.help = {

  name: "autotag",

  description: 'Sunucuya katılan kullanıcılara oto tag verebilirsiniz.',

  usage: 'ototag <tag>'

}