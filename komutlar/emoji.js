const Discord = require('discord.js');

exports.run = (client, message, args) => {
  
    let eben = args[0];
    const eben2 = (message.guild.emojis.cache.find(eben3 => eben3.name == `${eben}`))
    if (!eben) return message.channel.send("Emoji name pls!")
    const embed = new Discord.MessageEmbed()
    .addField("Emoji Name", `${eben}`)
    .addField("Emoji ID", `${eben2.id}`)
    .addField("URL", `${eben2.url}`)
    message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["emoji-bilgi","eb"],
    permLevel: 0

}
exports.help = {
    name: 'emojiinfo',
}