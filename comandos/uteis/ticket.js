const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Não tenho permissão de gerenciar canais')
    if (message.guild.channels.find(ch => ch.name.includes(message.member.displayName))) return message.reply('Já existe um canal criado pra você 🐒')
    
    let channel 
    try {
        channel = await message.guild 
            .createChannel(`Ticket ${message.member.displayName}•${message.author.discriminator}`,
                {permissionOverwrites: [{
                    id: message.guild.id,
                    deny: ['READ_MESSAGES'],
                },
                {
                    id: message.author.id,
                    allow: ['READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_CHANNELS']
                }]
            })
        }
    catch(err) {
        console.log(error);
    }

    channel.setTopic('Apenas os staffs e você podem ver este canal!')

    const msgapa = new Discord.RichEmbed()
    .setAuthor(`Ticket do ${message.member.displayName}`)
    .setDescription('Ticket aberto com sucesso, caso queira encerrar o ticket, delete o canal por si mesmo ou marque um admin e espere um admin deletar o canal')
    .setThumbnail('https://image.freepik.com/free-vector/ticket-icon-circle_1063-73.jpg')
    .setFooter('ToledoSDL©', 'https://cdn.discordapp.com/avatars/505140298888904716/949a6d9a95fb8410f156b8d64b936781.png?size=2048')

    channel.send(msgapa)
    

        let timeout = await channel.send(`<@${message.author.id}>`)
            .catch(err => message.channel.send('Erro: ' + err.message))
        timeout.delete(5000)
        setTimeout(() => channel.delete()
            .then(c => message.channel.send(`Canal \`${c.name}\` de <@${message.author.id}> foi deletado!`)), 1000 * 60) 
}

exports.help = {
    name: 'ticket',
    aliases: ['tickets']
}