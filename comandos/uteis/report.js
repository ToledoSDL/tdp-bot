const discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (bot, message, args) => {

    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).slice(-2)[0]
    let idsv = args.slice(' ').slice(-2)[0]
    let provas = args.slice(' ').slice(-1)[0]
    let reports = message.guild.channels.find('name', config.reportsChannel);
    if (!target) return message.reply('`Por favor escolha um usuário para reportar!');
    if (!reason) return message.reply('Por favor especifique o motivo da denuncia!');
    if (!provas) return message.reply('Por favor mostre a prova da denunciaa! (Link de um video)');
    if (!idsv) return message.reply('Por favor coloque o id do cidadão! (Se você não souber id digite "Não sei o id")');
    if (!reports) return message.reply(`Por favor crie um canal chamado ${config.reportsChannel} para armazenar as denuncias!`);
    if (target.user.bot) {
        return message.channel.send(new discord.RichEmbed()
            .setTitle('Permissões insuficientes')
            .setDescription("Você não pode reportar um **bot**.")
            .setColor('RANDOM'));
    }
//    !report @_MønzeEr4DGK´𝐹𝑃𝑆#8982 gado dmais 1 https://link.com

    if (target.id == message.author.id) return message.reply('você não pode reportar a si mesmo!');
    let embed = new discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Sistema de reports BrZ RP')
        .setThumbnail('https://i.imgur.com/Hsnnuiq.png')
        .addField('Membro Reportado:', `${target.user.username}`)
        .addField('Pelo membro:', `${message.author.username}`)
        .addField('ID do cidadão reportado:', `${idsv}`)
        .addField('Provas:', `${provas}`)
        .setDescription(`**Motivo dado pelo autor: ${reason}**`)
        .setTimestamp(message.createdAt)
        .setFooter('Informações do usuário reportado', target.user.displayAvatarURL);

    message.channel.send(`${target} foi reportado por ${message.author} por **${reason}** com sucesso!`).then(msg => msg.delete(2000));
    reports.send(embed);

};

module.exports.help = {
    name: 'report',
    aliases: ['denunciar']
};