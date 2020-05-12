const Discord = require("discord.js")
const colours = require("../colours.json")
const client = new Discord.Client();
const bot = new Discord.Client();


module.exports.run = async (bot, message, args) => {


    if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Você não tem permissão para executar este comando!")

    let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[1])
    if(!rMember) return message.channel.send("Mencione um usuário para aprovar!")

    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Não tenho permissão para executar este comando.")
    
    
    let role = message.guild.roles.find(r => r.name === "Cidadão┇🎫");
    let aprovado = new Discord.RichEmbed()
	.setColor(colours.green_light)
	.setTitle('Aprovado!')
    .setAuthor('Parabens, agora você pode entrar no servidor')
	.setDescription('```Ip: Em construção```')
	.setThumbnail('https://www.santacarmem.mt.leg.br/aprovado.png/image_preview')
	.addField("Moderação:", "Whitelist")
    .addField("Aprovado:", rMember.user.username)
    .addField("Staff:", message.author.username)
	.addField("Data:", message.createdAt.toLocaleString())
	.setTimestamp()
    .setFooter('ToledoSDL CopyRight');
    
    if(rMember.roles.has(role.id)) {
        return message.channel.send(`${rMember.displayName},já está na whitelist!!`)
    } else {
        await rMember.addRole(role.id).catch(e => console.log(e.message))
        bot.channels.get('706550838914580531').send(aprovado);
//        let canalaprovado = client.channels.get('706550838914580531')
//        canalaprovado.send(aprovado)
    }

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
}

exports.help = {
    name: "Aprova124312r",
    aliases: [
        "apro14212a",
        "apro142124var"
    ]
}
