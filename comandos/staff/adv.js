const Discord = require("discord.js")
const colours = require("../colours.json")
const client = new Discord.Client();
const bot = new Discord.Client();


module.exports.run = async (bot, message, args) => {


    if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Você não tem permissão para executar este comando!")

    let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[1])
    if(!rMember) return message.channel.send("Mencione um usuário para aprovar!")

    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Não tenho permissão para executar este comando.")
    
    
    let aviso1 = message.guild.roles.find(r => r.name === "Aviso 1/2");
    let mandar1 = new Discord.RichEmbed()
	.setColor(colours.green_light)
	.setTitle('Advertência 1/2!')
    .setAuthor('A advertência foi gerada por quebra de conduta do RP de acordo com as regras.')
	.setThumbnail('https://i.imgur.com/oKKN2FD.png')
	.addField("Moderação:", "Advertencia")
    .addField("Advertido:", rMember.user.username)
    .addField("Staff:", message.author.username)
	.addField("Data:", message.createdAt.toLocaleString())
	.setTimestamp()
    .setFooter('ToledoSDL CopyRight');
    
    if(rMember.roles.has(aviso1.id)) {
//        return message.channel.send(`${rMember.displayName},já está na whitelist!!`)
            let aviso2 = message.guild.roles.find(r => r.name === "Aviso 2/2");
            let mandar2 = new Discord.RichEmbed()
            .setColor(colours.green_light)
            .setTitle('Advertência 2/2!')
            .setAuthor('A advertência foi gerada por quebra de conduta do RP de acordo com as regras.')
            .setThumbnail('https://i.imgur.com/oKKN2FD.png')
            .addField("Moderação:", "Advertencia")
            .addField("Advertido:", rMember.user.username)
            .addField("Staff:", message.author.username)
            .addField("Data:", message.createdAt.toLocaleString())
            .setTimestamp()
            .setFooter('ToledoSDL CopyRight');

        if(rMember.roles.has(aviso2.id)) {
            let banido = message.guild.roles.find(r => r.name === "BANIDO┇🚫");
            let mandar3 = new Discord.RichEmbed()
            .setColor(colours.green_light)
            .setTitle('Banido!')
            .setAuthor('O banimento foi gerada por quebra de conduta do RP de acordo com as regras.')
            .setThumbnail('https://i.imgur.com/oKKN2FD.png')
            .addField("Moderação:", "Banimento")
            .addField("Banido:", rMember.user.username)
            .addField("Staff:", message.author.username)
            .addField("Data:", message.createdAt.toLocaleString())
            .setTimestamp()
            .setFooter('ToledoSDL CopyRight');

            await rMember.addRole(banido.id).catch(e => console.log(e.message))
                    bot.channels.get('706550886830440508').send(mandar3);

        } else {
                    await rMember.addRole(aviso2.id).catch(e => console.log(e.message))
                    bot.channels.get('706550886108889118').send(mandar2);
        }

    } else {
        await rMember.addRole(aviso1.id).catch(e => console.log(e.message))
        bot.channels.get('706550886108889118').send(mandar1);
    }
}


//        let canalaprovado = client.channels.get('706550838914580531')
//        canalaprovado.send(aprovado)
//    let embed = new Discord.RichEmbed()
//    .setColor(colours.redlight)
//    .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
//    .addField("Moderação:", "Whitelist")
//    .addField("Mutee:", rMember.user.username)
//    .addField("Staff:", message.author.username)
//    .addField("Rasão:", reason)
//    .addField("Data:", message.createdAt.toLocaleString())
//        
//        let sChannel = message.guild.channels.find(c => c.name === "「✅」aprovados")
//        sChannel.send(embed)


exports.help = {
    name: "adv",
    aliases: [
        "advertencia",
        "advertir"
    ]
}
