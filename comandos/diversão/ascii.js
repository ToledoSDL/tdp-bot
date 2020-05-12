const ascii = require('ascii-art');

    module.exports.run = async (bot, message, args) => {
        
        if (!args.join(' ')) return message.reply('Por favor digite um texto para transformar para ascii');

        ascii.font(args.join(args), 'Doom', async txt => {
            message.channel.send(txt, {
                code: 'md'
            });
        });
};

module.exports.help = {
    name: 'ascii',
    aliases: []
}