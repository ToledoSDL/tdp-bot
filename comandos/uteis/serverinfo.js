const Discord = require('discord.js')
const c = require('../config.json')
const moment = require ('moment')
exports.run = (client, message, args) => {

    const online = client.emojis.get('708292803364388966')
    const ocupado = client.emojis.get('707726119243088003')
    const ausente = client.emojis.get('708295177340715018')
    const offline = client.emojis.get('708296162985115649')


    function checkBots(guild) {
        let botCount = 0;
        guild.members.forEach(member => {
            if (member.user.bot) botCount++;
        });
        return botCount;
    }

    function checkMembers(guild) {
        let memberCount = 0;
        guild.members.forEach(member => {
            if (!member.user.bot) memberCount++;
        });
        return memberCount;
    }

    function checkOnlineUsers(guild) {
        let onlineCount = 0;
        guild.members.forEach(member => {
            if (member.user.presence.status === "online")
                onlineCount++;
        });
        return onlineCount;
    }

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
        .setAuthor(`${message.guild.name} - Informações`, message.guild.iconURL)
        .setColor("#15f153")
        .addField("🧾 Nome do servidor", message.guild.name)
        .addField('👑 Criador do servidor', message.guild.owner, true)
        .addField('🌎 Região do servidor', message.guild.region.charAt(0).toUpperCase() + message.guild.region.slice(1), true)
        .setThumbnail(sicon)
        .addField('🔹 Nível de boost', message.guild.verificationLevel, true)
        .addField('💬 Total de salas', message.guild.channels.size, true)
        .addField(`🙋‍ Membros (${message.guild.members.size})`, 
         `${offline} **Offline:** ${message.guild.members.filter(m => m.user.presence.status === 'offline').size} `, true)
        
         .addField(`🙋‍ Membros (${message.guild.members.size})`,
        `${online} **Online:** ${message.guild.members.filter(m => m.user.presence.status === 'online').size}`, true)

        .addField('Usuários', checkMembers(message.guild), true)
        
        .addField(`🙋‍ Membros (${message.guild.members.size})`,
        `${ocupado} **Ocupado:** ${message.guild.members.filter(m => m.user.presence.status === 'dnd').size}`, true)
        
        .addField(`🙋‍ Membros (${message.guild.members.size})`,
        `${ausente} **Ausente:** ${message.guild.members.filter(m => m.user.presence.status === 'idle').size}`, true)
        
        
        .addField('Bots', checkBots(message.guild), true)
        .addField('\n \n 📅 Servidor criado em', moment(message.guild.createdAt).format("D MMMM YYYY, h:mm:ss"))

    return message.channel.send(serverembed);
}

exports.help = {
    name: 'serverinfo',
    description: 'Verifica as informações do servidor',
    usage: 'serverinfo',
    aliases: ['server']
};