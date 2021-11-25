const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');

process.setMaxListeners(0);

require("moment-duration-format");

exports.run = async (bot, message, args) => {
  
  const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  
  const istatistikler = new Discord.MessageEmbed()
  
  .setColor('BLACK')
  
  .setFooter('Bot İsmi', bot.user.avatarURL)
  
  .addField("» **Bot Owner**", "<@751717933700349972>")
  .addField("» **Memory**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("» **Uptime**", seksizaman)
  .addField("» **Users**" , bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» **Discord.JS version**", "v"+Discord.version, true)
  .addField("» **Node.JS version**", `${process.version}`, true)
  .addField("» **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("» **Bit**", `\`${os.arch()}\``, true)
  .addField("» **OS**", `\`\`${os.platform()}\`\``) 
  
  
  return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "statistics",
  description: "Astral Team",
  usage: "istatistik"
};