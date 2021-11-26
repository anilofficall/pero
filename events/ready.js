const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const snekfetch = require('snekfetch');

var prefix = ayarlar.prefix;

module.exports = async client => {
  
  client.appInfo = await client.fetchApplication();
setInterval( async () => {
      client.appInfo = await client.fetchApplication();
    }, 60000);
  require("../util/dashboard.js")(client);
console.log('Oynuyor Kısmı Güncellendi! | Asreaper');
  
console.log('Bota Giriş Yapıldı! | Asreaper');
console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
    var Games = [
        "anilofficall by developer!",
      ".help",
      "PeroBOT"
    ];
  
  setInterval(function() {
    var random = Math.floor(Math.random()*(Games.length-0+1)+0);
    client.user.setActivity(Games[random], { type: "STREAMING", url: "https://www.twitch.tv/mbasreaper" } );
  }, 2 * 2000);

};