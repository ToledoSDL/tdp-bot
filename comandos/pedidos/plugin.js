const Discord = require('discord.js')
const c = require('../config.json')
exports.run = async (client, message, args) => {
    await message.author.createDM

    const ok = client.emojis.find(emoji => emoji.name === "✅")
    const nao = client.emojis.find(emoji => emoji.name === "❌")
    message.delete()
    message.channel.send(`${message.author}, informações do seu pedido foi enviada a sua DM.`).then(msg => msg.delete(5000))

    const embed = new Discord.RichEmbed()
        .setColor(c.cor)
        .setAuthor("ToledoSDL - Pedidos", client.user.avatarURL)
        .setDescription("⠀\nDigite o nome do seu projeto. ``` ```")
        .setFooter("© ToledoSDL", message.author.avatarURL)


    message.author.send(embed).catch(err => message.channel.send(`${message.author}, não consegui enviar mensagem a você, ative sua DM e tente novamente.`)).then(async msg => {

        var collector = message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id, {
            time: 1000 * 50,
            max: 1
        })
        collector.on('collect', a => {
            var nome = a.content

            const embeda = new Discord.RichEmbed()
                .setColor(c.cor)
                .setAuthor("ToledoSDL - Pedidos", client.user.avatarURL)
                .setDescription("⠀\nDigite as dependências do projeto. ``` ```")
                .addField("Pedido em progresso.", `
\`📡\` Nome do projeto: ${nome}`)
                .setFooter("© ToledoSDL", message.author.avatarURL)
            msg.edit(embeda)
            var collector = message.author.dmChannel.createMessageCollector(b => b.author.id == message.author.id, {
                time: 1000 * 50,
                max: 1
            })
            collector.on('collect', b => {
                var depend = b.content

                const embedb = new Discord.RichEmbed()
                    .setColor(c.cor)
                    .setAuthor("ToledoSDL - Pedidos", client.user.avatarURL)
                    .setDescription("⠀\nDigite o resumo do seu projeto. ``` ```")
                    .addField("Pedido em progresso.", `
\`📡\` Nome do projeto: ${nome}
\`💎\` Dependência do projeto: ${depend}`)
                    .setFooter("© ToledoSDL", message.author.avatarURL)
                msg.edit(embedb)
                var collector = message.author.dmChannel.createMessageCollector(c => c.author.id == message.author.id, {
                    time: 1000 * 50,
                    max: 1
                })
                collector.on('collect', c => {
                    var resumo = c.content

                    const embedc = new Discord.RichEmbed()
                        .setColor(c.cor)
                        .setAuthor("ToledoSDL - Pedidos", client.user.avatarURL)
                        .setDescription("⠀\nDigite um valor estimado que você deseja pagar pelo projeto.. ``` ```")
                        .addField("Pedido em progresso.", `
\`📡\` Nome do projeto: ${nome}
\`💎\` Dependência do projeto: ${depend}
\`💡\` Resumo do projeto: ${resumo}`)
                        .setFooter("© ToledoSDL", message.author.avatarURL)
                    msg.edit(embedc)

                    var collector = message.author.dmChannel.createMessageCollector(d => d.author.id == message.author.id, {
                        time: 1000 * 50,
                        max: 1
                    })
                    collector.on('collect', d => {
                        var valor = d.content

                        const embToledoSDL = new Discord.RichEmbed()
                            .setColor(c.cor)
                            .setAuthor("ToledoSDL - Pedidos", client.user.avatarURL)
                            .setDescription("⠀\nConfirme seu pedido. ``` ```")
                            .addField("Pedido em confirmação.", `
\`📡\` Nome do projeto: ${nome}
\`💎\` Dependência do projeto: ${depend}
\`💡\` Resumo do projeto: ${resumo}
\`📪\` Valor do projeto: R$${valor}`)
                            .setFooter("© ToledoSDL", message.author.avatarURL)
                        msg.edit(embToledoSDL).then(async r => {
                            await msg.react("✅")
                            await msg.react("❌")

                            let s = (r, u) => r.emoji.name === ok.name && u.id == message.author.id
                            let n = (r, u) => r.emoji.name === nao.name && u.id == message.author.id

                            let sL = msg.createReactionCollector(s, {
                                time: 120000
                            })
                            let nL = msg.createReactionCollector(n, {
                                time: 120000
                            })



                            sL.on('collect', async r => {
                                msg.reactions.map(re => re.remove(client.user))
                                const act = new Discord.RichEmbed()
                                    .setColor(c.cor)
                                    .setAuthor("ToledoSDL - Pedidos", client.user.avatarURL)
                                    .setDescription("⠀\nSeu pedido foi confirmado... ``` ```")
                                    .addField("Pedido confirmado.", `
\`📡\` Nome do projeto: ${nome}
\`💎\` Dependência do projeto: ${depend}
\`💡\` Resumo do projeto: ${resumo}
\`📪\` Valor do projeto: R$${valor}`)
                                    .setFooter("© ToledoSDL", message.author.avatarURL)
                                msg.edit(act)

                                const pedido = new Discord.RichEmbed()
                                    .setColor(c.cor)
                                    .setAuthor("ToledoSDL - Pedidos", client.user.avatarURL)
                                    .setDescription(`⠀\nPedido de: \`${message.author.tag}\` \`\`\` \`\`\``)
                                    .addField("Informações do pedido.", `
\`📡\` Nome do projeto: ${nome}
\`💎\` Dependência do projeto: ${depend}
\`💡\` Resumo do projeto: ${resumo}
\`📪\` Valor do projeto: R$${valor}`)
                                    .setFooter("Quer fazer um pedido em PLUGIN? Use `!plugin` na sala `#🤖 comandos` © ToledoSDL", message.author.avatarURL)
                                client.channels.get("699649230217805985").send(pedido)

                            })

                            nL.on('collect', async r => {
                                msg.reactions.map(re => re.remove(client.user))
                                const act = new Discord.RichEmbed()
                                    .setColor(c.cor)
                                    .setAuthor("ToledoSDL - Pedidos", client.user.avatarURL)
                                    .setDescription("⠀\nSeu pedido foi cancelado... ``` ```")
                                    .setFooter("© ToledoSDL", message.author.avatarURL)
                                msg.edit(act)
                            })
                        })
                    })
                })
            })
        })
    })
}

exports.help = {
    name: "plugin",
    aliases: [
        'pl'
    ]
}