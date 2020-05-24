const Discord = require('discord.js')
exports.conf = {
	enabled:false,
	guildOnly: false,
	aliases: [],
	permLevel: 0,
}

exports.help = {
	name: 'komutlar',
	description: '',
	usage: ''
}
// Ben CaptainMami Nasıl Kullanırsanız Öyle Düzenleyin Benim Düzen Bu
exports.run = async (client, message, args) => {
      let embed = new Discord.MessageEmbed()
            .setImage(message.member.AvatarURL)
            .setColor(`RED`)
            message.channel.send(embed)
  
}
 