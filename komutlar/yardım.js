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

       <:owner:912770111025340437> **Bot Owner**: <@751717933700349972>

💸 **Economy**:
\`money\` , \`robbery\` , \`dailymoney\` , \`cf\` , \`send\` , \`slots(soons)\`

🤪 **Fun**:
\`hangman(soons)\` , \`goal\` , \`police\`  , \`fbi\`

<:895719196183367740:912769684305240084> **General**:
\`avatar\` , \`statistics\` , \`ping\`

<:895719126528557086:912769684250701825> **Moderation**:
\`serverinfo\` , \`emojiinfo\` , \`autotag\` , \`ban\`

<:895719185253031976:912769684384915477> **Gif**:
\`woman\` , \`man\` , \`couple\` , \`anime\` , \`animal\`

<:dev:912778238802141205> **Developer**:
\`reboot\`

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
  name: 'help',
  description: 'qWxnted Gif Asistan',
  usage: 'gif-yardım'
};