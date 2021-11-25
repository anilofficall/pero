const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
let talkedRecently = new Set();

module.exports = message => {
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
	setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 2500);
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  
  if (message.author.bot) return;
        if (!message.content.startsWith(ayarlar.prefix)) return;
        if (!client.commands.has(command)) {
            if (client.aliases.has(command)) {
                return false;
            } else {
                const cs= new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`Unfortunately I couldn't find a command named \`${command}\` in the bot. Can you try again? \n\n**.yardım** `)
                .setFooter('Pero')
                message.channel.send(cs)
              
              
  }
        }
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};
