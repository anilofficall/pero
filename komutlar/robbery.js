const Discord = require('discord.js');
const frenzydb = require("quick.db")
const frenzyms = require('ms')
exports.run = async(client, message, args) => { 
let balance = await frenzydb.fetch(`paracık_${message.author.id}`)
let polisler = ['var', 'yok']
let frenzycode = polisler[Math.floor(Math.random() * polisler.length)];
let kazanlıacak = Math.floor(Math.random() * 578);
  
let fc = await frenzydb.fetch(`DateNowFCsoygun_${message.author.id}`)
if (fc !== null && 600000 - (Date.now() - fc) > 0) {
let time = frenzyms(600000 - (Date.now() - fc));


message.reply(`:shield:  Before the robbery ${time.minutes} minute, ${time.seconds} you have to wait a second!`) 
return
}
  
let frenzyuser = message.mentions.users.first()
if(!frenzyuser) return message.reply(':x: Tag the person you want to rob!')
if(frenzyuser.id === message.author.id) return message.reply(':x: You can,t undress yourself.')
if(frenzyuser.bot) return message.reply(':x: You can,t peel the boots')
  
let para = await frenzydb.fetch(`balance${frenzyuser.id}`)
  

if(balance === null || balance === undefined || !balance) {
frenzydb.add(`paracık_${message.author.id}`, -150) 
frenzydb.add(`paracık_${frenzyuser.id}`, 150) 
frenzydb.set(`DateNowFCsoygun_${message.author.id}`, Date.now()) 
  
message.reply(`:money_with_wings:  Dude you have no money to rob anyone and you wanted to rob him and you will immediately get excited by this accident. You had to pay him 150 $ so he wouldn't give you to the police.
Your money has been reduced by 150 $. Be very careful next time! Send the rest: ${balance}`)
return
}

  
if(frenzycode === 'var') {
let mefta = balance / 10

frenzydb.add(`paracık_${message.author.id}`, -mefta)
frenzydb.set(`DateNowFCsoygun_${message.author.id}`, Date.now()) 

message.reply(`:man_police_officer:  Dude, you got caught by the cops. The cops are asking for bribes or they will put you in jail. So your money ${mefta} how much has been.`) 
return
}
 
if(frenzycode === 'yok') {

frenzydb.add(`paracık_${message.author.id}`, kazanlıacak)
frenzydb.add(`paracık_${frenzyuser.id}`,-kazanlıacak) 
frenzydb.set(`DateNowFCsoygun_${message.author.id}`, Date.now()) 

message.reply(`:money_with_wings:  CongratulaYour friend robbery was successful. to your account ${kazanlıacak} money has been sent.`) 
return
}
};
exports.conf = {
  enabled: false,  
  guildOnly: false, 
  aliases: ['soygunyap','rob'], 
  permLevel: 0
};

exports.help = {
  name: 'robbery'
};
