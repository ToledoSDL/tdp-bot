const Discord = require('discord.js')
const colours = require 
const c = require('../config.json')
exports.run = async (client, message, args) => {
    if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Não tenho permissão de gerenciar canais')
    if (message.guild.channels.find(ch => ch.name.includes(message.member.displayName))) return message.reply('Já existe um canal criado pra você 🐒')
    
    let channel 
    try {
        channel = await message.guild 
            .createChannel(`Whitelist ${message.member.displayName}•${message.author.discriminator}`,
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
    

    await message.author.createDM

    const vv = client.emojis.find("name", "yes")
    const xx = client.emojis.find("name", "no")
    message.delete()
    channel.send(`${message.author}, Whitelist iniciada!!.`).then(msg => msg.delete(5000))

    const embed = new Discord.RichEmbed()
        .setColor('#ff6f00')
        .setAuthor("ToledoSDL© - Whitelist", client.user.avatarURL)
        .setTitle("⠀\nQual é a sua idade real?. ```Para responder, digite a resposta e envie```")
        .setFooter("ToledoSDL©", message.author.avatarURL)


    channel.send(embed).catch(err => message.channel.send(`${message.author}, não consegui enviar mensagem a você, ative sua DM e tente novamente.`)).then(async msg => {

        var collector = channel.createMessageCollector(a => a.author.id == message.author.id, {
            time: 1000 * 50,
            max: 1
        })
        collector.on('collect', a => {
            var idade = a.content
            message.delete()
            const embeda = new Discord.RichEmbed()
                .setColor('#ff6f00')
                .setAuthor("ToledoSDL© - Whitelist", client.user.avatarURL)
                .setTitle("⠀\nDigite a descrição do seu personagem.\n _Cite as caracteristicas, nome, idade, anseios, qualidades, defeitos..._ ```Para responder, digite a resposta e envie```")
                .addField("**___Informações de conhecimento___**", `
\`📡\` Idade do membro: ${idade}`)
                .setFooter("ToledoSDL©", message.author.avatarURL)
                msg.edit(embeda)
            
            
            var collector = channel.createMessageCollector(b => b.author.id == message.author.id, {
                time: 1000 * 50,
                max: 1
            })
            collector.on('collect', b => {
                var caracteristica = b.content
                message.delete()
                const embedb = new Discord.RichEmbed()
                    .setColor('#ff6f00')
                    .setAuthor("ToledoSDL© - Whitelist", client.user.avatarURL)
                    .setTitle("⠀\nO que é VDM e RDM?.\n ```Para responder, digite a resposta e envie```")
                    .setDescription(`\`💎\` História do personagem: ${caracteristica}`)
                    .addField("**___Informações de conhecimento___**", `
\`📡\` Idade do membro: ${idade}`)
                    .setFooter("ToledoSDL©", message.author.avatarURL)
                    msg.edit(embedb)
                
                
                
                
                
                var collector = channel.createMessageCollector(c => c.author.id == message.author.id, {
                    time: 1000 * 50,
                    max: 1
                })
                collector.on('collect', c => {
                    var vdmrdm = c.content
                    message.delete()
                    const embedc = new Discord.RichEmbed()
                        .setColor('#ff6f00')
                        .setAuthor("ToledoSDL© - Whitelist", client.user.avatarURL)
                        .setTitle("⠀\nO que é Combat Logging?.\n ```Para responder, digite a resposta e envie```")
                        .setDescription(`\`💎\` História do personagem: ${caracteristica}`)
                        .addField("**___Informações de conhecimento___**", `
\`📡\` Idade do membro: ${idade}
\`💡\` O que é VDM e RDM: ${vdmrdm}`)
                        .setFooter("ToledoSDL©", message.author.avatarURL)
                        msg.edit(embedc)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

                    var collector = channel.createMessageCollector(d => d.author.id == message.author.id, {
                        time: 1000 * 50,
                        max: 1
                    })
                    collector.on('collect', d => {
                        var combatlog = d.content
                        message.delete()
const embedd = new Discord.RichEmbed()
.setColor('#ff6f00')
.setAuthor("ToledoSDL© - Whitelist", client.user.avatarURL)
.setTitle("⠀\nOque é Dark RP?.\n ```Para responder, digite a resposta e envie```")
.setDescription(`\`💎\` História do personagem: ${caracteristica}`)                          
.addField("**___Informações de conhecimento___**", `
\`📡\` Idade do membro: ${idade}
\`💡\` O que é VDM e RDM: ${vdmrdm}
\`📪\` O que é Combat Logging: ${combatlog}`)
.setFooter("ToledoSDL©", message.author.avatarURL)
msg.edit(embedd)
                    
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var collector = channel.createMessageCollector(e => e.author.id == message.author.id, {
    time: 1000 * 50,
    max: 1
})
collector.on('collect', e => {
    var darkrp = e.content

const embede = new Discord.RichEmbed()
.setColor('#ff6f00')
.setAuthor("ToledoSDL© - Whitelist", client.user.avatarURL)
.setTitle("⠀\nO que é Meta Gaming e Power Gaming?.\n ```Para responder, digite a resposta e envie```")
.setDescription(`\`💎\` História do personagem: ${caracteristica}`)                     
.addField("**___Informações de conhecimento___**", `
\`📡\` Idade do membro: ${idade}
\`💡\` O que é VDM e RDM: ${vdmrdm}
\`📪\` O que é Combat Logging: ${combatlog}
\`📪\` O que é DarkRP: ${darkrp}`)
.setFooter("ToledoSDL©", message.author.avatarURL)
msg.edit(embede)
                    
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var collector = channel.createMessageCollector(f => f.author.id == message.author.id, {
    time: 1000 * 50,
    max: 1
})
collector.on('collect', f => {
    var powermeta = f.content

const embedf = new Discord.RichEmbed()
.setColor('#ff6f00')
.setAuthor("ToledoSDL© - Whitelist", client.user.avatarURL)
.setTitle(`⠀\nConfirme sua Whitelist! (Caso você ache que tenha errado alguma questão, tudo bem! Apenas aperte o emoji <:unchecked:707702927288041480> ).`)                          
.setDescription(`\`💎\` História do personagem: ${caracteristica}`)
.addField("**___Informações de conhecimento___**", `
\`📡\` Idade do membro: ${idade}
\`💡\` O que é VDM e RDM: ${vdmrdm}
\`📪\` O que é Combat Logging: ${combatlog}
\`📪\` O que é DarkRP: ${darkrp}
\`📪\` O que é Power Gaming e Meta Gaming: ${powermeta}`)
.setFooter("ToledoSDL©", message.author.avatarURL)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                            
//////////////////////////////////////////////        VAI ADICIONAR A REAÇÃO      /////////////////////////////////////////////////////////////                        
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                        
                        
                            msg.edit(embedf).then(async r => {
                            await msg.react(vv)
                            await msg.react(xx)

                            let s = (r, u) => r.emoji.name === vv.name && u.id == message.author.id
                            let n = (r, u) => r.emoji.name === xx.name && u.id == message.author.id

                            let sL = msg.createReactionCollector(s, {
                                time: 120000
                            })
                            let nL = msg.createReactionCollector(n, {
                                time: 120000
                            })



                            sL.on('collect', async r => {
                                msg.reactions.map(re => re.remove(client.user))
                                const act = new Discord.RichEmbed()
                                    .setColor('#ff6f00')
                                    .setAuthor("ToledoSDL© - Whitelist", client.user.avatarURL)
                                    .setTitle("⠀\nSua whitelist foi enviada para os staffs, favor aguardar, e boa sorte..")
                                    .setDescription(`\`💎\` História do personagem: ${caracteristica}`)
                                    .addField("**___Informações de conhecimento___**.", `
                                    \`📡\` Idade do membro: ${idade}
                                    \`💡\` O que é VDM e RDM: ${vdmrdm}
                                    \`📪\` O que é Combat Logging: ${combatlog}
                                    \`📪\` O que é DarkRP: ${darkrp}
                                    \`📪\` O que é Power Gaming e Meta Gaming: ${powermeta}`)
                                    .setImage("https://i.imgur.com/Gq2LwzO.png")
                                    .setFooter("ToledoSDL©", message.author.avatarURL)
                                    message.author.send(act)
                                {
                                const aceitar = new Discord.RichEmbed()
                                    .setColor('#ff6f00')
                                    .setAuthor("ToledoSDL© - Whitelist", client.user.avatarURL)
                                    .setDescription(`**Formulario Whitelist enviada por: ${message.author}** \`💎\` História do personagem: ${caracteristica}`)
                                    .addField("**___Informações de conhecimento___**", `
                                    \`📡\` Idade do membro: ${idade}
                                    \`💡\` O que é VDM e RDM: ${vdmrdm}
                                    \`📪\` O que é Combat Logging: ${combatlog}
                                    \`📪\` O que é DarkRP: ${darkrp}
                                    \`📪\` O que é Power Gaming e Meta Gaming: ${powermeta}`)
                                    .addField('\u200B', `**___Caso queira aceitar a whitelist digite !aprovar <ID> <Mencione o membro>___**`)
                                    .addField("**Comando para aprovar:**", `!aprovar 157 @rogerin_cabeçadepika`, true)
                                    .setThumbnail("https://i.imgur.com/dHV6wUP.png")
                                    .setFooter("Quer fazer WhiteList? Use `!wl` na sala `<#706550836842594321>` ToledoSDL©", message.author.avatarURL)
                                client.channels.get("707952774960119858").send(aceitar)
                                msg.channel.delete()
                                }
                            })

                            nL.on('collect', async r => {
                                msg.reactions.map(re => re.remove(client.user))
                                const act = new Discord.RichEmbed()
                                    .setColor('#ff0303')
                                    .setAuthor("ToledoSDL© - Whitelist", client.user.avatarURL)
                                    .setTitle("⠀\nSua Whitelist foi cancelada...")
                                    .setFooter("ToledoSDL©", message.author.avatarURL)
                                msg.edit(act)
                                message.author.send(act)
                                msg.channel.delete() 
                            })
                        })
                    })
                })
            })
        })
    })
})
    })
};

exports.help = {
    name: "wl",
    aliases: [
        'whitelist'
    ]
}