const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('#0317ff') 
.setDescription(`

**Bot Owner**: 

**Economy**:
\`money\` , \`robbery\` , \`dailymoney\` , \`cf\` , \`slots(soons)\`

**General**:
\`avatar\` , \`statistics\` , \`ping\`

**Moderation**:
\`serverinfo\` ,

**Gif**:
\`woman\` , \`man\` , \`couple\` , \`anime\` , \`animal\`




`)
    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'],
permLevel: 0
};

exports.help = {
  name: 'gif-yardım',
  description: 'qWxnted Gif Asistan',
  usage: 'gif-yardım'
};