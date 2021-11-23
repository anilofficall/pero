const Discord = require('discord.js'),
      db = require('quick.db'),
      ms = require('ms');

exports.run = async (bot, message, args) => {
    let cooldown = 1.726e+8, // 24 Часа
        amount = Math.floor(Math.random() * 600) + 1;      

    let lastDaily = await db.fetch(`lastDaily_${message.author.id}`);
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily));
        

        const embed = new Discord.MessageEmbed()
        .setTitle('Daily Reward!')
        .setColor('#FFBA4A')
        .setDescription(`You've already collected this, please wait!`)
        message.channel.send(embed);
        return
    } else {
  
 
  
        let meslekA = await db.fetch(`meslekA_${message.author.id}`);
        let meslek = await db.fetch(`meslek_${message.author.id}`);
        
      
   
        const Durum = await db.fetch(`bonus_${message.author.id}`);
      
        var tbns = ''
     
    //   if (tplnB == '1' || tplnB == '2' || tplnB == '3' || tplnB == '4' || tplnB === null || tplnB == '0') { var tbns = `0` }
      
  
        const embed = new Discord.MessageEmbed()
        .addField(' you collected!', `Daily Reward: **${amount} $**`)
      

        .setColor('#59FF4A')
        message.channel.send(embed);

        db.set(`lastDaily_${message.author.id}`, Date.now());

        db.add(`paracık_${message.author.id}`, amount);
  
        db.add(`paracık_${message.author.id}`, meslek === null  ? "0" : meslek);
      
    }
     

    
    
    
    
    
  
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dailymoney','para-çek', 'günlüködül', 'günlük-ödül','hediye','günlük-hediye'],
  permLevel: 0,
  kategori: "profil"
};

exports.help = {
  name: 'daily',
  description: 'Günlük maaşınızı verir.',
  usage: 'günlük',
   
};