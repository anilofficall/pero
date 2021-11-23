const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('#0317ff') 
.setDescription(`

[Support Server](https://discord.gg/eE3W4DKksF)
[Bot İnvite](https://discord.com/oauth2/authorize?client_id=846263076068392960&scope=bot&permissions=1099511627775)
Commands Count: ${client.commands.size}

<owner:896100434069028974> **Bot Owner**: <@751717933700349972>

💸 **Economy**:
\`money\` , \`robbery\` , \`dailymoney\` , \`cf\` , \`slots(soons)\`

<a:895719196183367740:895719196183367740> **General**:
\`avatar\` , \`statistics\` , \`ping\`

<a:895719126528557086:895719126528557086> **Moderation**:
\`serverinfo\` ,

<a:895719185253031976:895719185253031976>**Gif**:
\`woman\` , \`man\` , \`couple\` , \`anime\` , \`animal\`




`)

.setImage('https://cdn.discordapp.com/attachments/904765929664176221/912766699114209370/standard_3.gif')
    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'],
permLevel: 0
};

exports.help = {
  name: '',
  description: 'qWxnted Gif Asistan',
  usage: 'gif-yardım'
};