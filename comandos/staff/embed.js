const Discord = require('discord.js')
const c = require('../config.json')
const colours = require('../colours.json')
exports.run = async (client, message, args) => {
    await message.delete()
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${message.author}, você não possui permissão para executar esse comando.`).then(msg=> msg.delete(8000))
    
    let mensg = args.join(' ')
    if(!mensg) {
        message.channel.send(`${message.author}, digite uma mensagem para inserir.`)
    return undefined;
    }

        const embed = new Discord.RichEmbed()
    .setDescription(`${mensg}`)
    .setColor(colours.green_light)
    .setAuthor('𝓣𝓓𝓟 Anuncia ♕ Ⓡ')
    .setThumbnail('https://i.imgur.com/d4sTe2C.png')
    .setTimestamp()
    .setFooter(`Publicado por: ${message.author.username}`, message.author.avatarURL)
        message.channel.send(embed)
}

exports.help = {
    name: "embed"
}