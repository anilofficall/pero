const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

const embed = new Discord.MessageEmbed()
    
.setColor('BLACK') 
.addField(`:white_check_mark: Darknes Gif Bot Altyapısı :white_check_mark:`,
              
`-**gif-ara** Yazdığınız Kelime Hakkında Gif Aratır!
-**man-gif** Rastgele Erkek Gifi Atar!
-**woman-gif** Rastgele Kadın Gifi Atar!
-**couple-gif** Rastgele Sevgili Gifi Atar!
-**baby-gif** Rastgele Bebek Gifi Atar!
-**animal-gif** Rastgele Hayvan Gifi Atar!

:white_check_mark: **Ekstra** :white_check_mark:

-**yardım-kullanıcı** Kullanıcı Komutlarını Gösterir!

:white_check_mark: **Dikkat** :white_check_mark:

:white_check_mark: **Linkler** :white_check_mark:

[Botun Destek Sunucusuna Gitmek İçin Tıkla](ttps://discord.com/oauth2/authorize?client_id=830886746085392425&permissions=268790848&scope=bot)    
[Botu Eklemek İçin Tıkla](ttps://discord.com/oauth2/authorize?client_id=830886746085392425&permissions=268790848&scope=bot)`)
    
message.channel.send({embed});
}

exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['help'],
permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Astral Team',
  usage: 'yardım'
};