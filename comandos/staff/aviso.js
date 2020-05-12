    const Discord = require('discord.js')
    const c = require('../config.json')
    const colours = require("../colours.json")

    exports.run = async (client, message, args) => {
        await message.delete()
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`${message.author}, você não possui permissão para executar esse comando.`).then(msg => msg.delete(8000))

        let mensg = args.join(' ')
        if (!mensg) {
            message.channel.send(`${message.author}, digite uma mensagem para anunciar. :mailbox_with_no_mail:`)
            return undefined;
        }

        const embed = new Discord.RichEmbed()
            .setAuthor('Equipe ♕ 𝓑𝓻𝓩 ♕ Ⓡ anucia...')
            .setDescription(`${mensg}`)
            .setColor(colours.aqua)
            .setThumbnail('https://cdn.discordapp.com/attachments/681296218898432050/707260953330319430/Logo_96x96.png')
            .setTimestamp()
            .setFooter(`Publicado por: ${message.author.username}`, message.author.avatarURL)
        client.channels.get(c.newsChannel).send('a').then(msg => msg.delete(2000))
        client.channels.get(c.newsChannel).send(embed)
    }

    exports.help = {
        name: "aviso",
        aliases: [
            "anuncio",
            "anunciar"
        ]
    }