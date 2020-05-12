const config = require('../config');
const Discord = require('discord.js')

let greetingChannel;

module.exports = [
    {
        name: "ready",
        run: (client) => {
            greetingChannel = client.channels.get(config.channel.greeting);
        }
    }, 

	{
        name: 'guildMemberAdd',
        run: (client, member) => {
            if (greetingChannel) {
              var role = member.guild.roles.find(role => role.name === "Visitante・✈️");
              member.addRole(role)
                greetingChannel.send({embed: {
                    color: 3447003,
                    author: {
                      name: client.user.username,
                      icon_url: client.user.avatarURL
                    },
                    title: "Bem Vindo!! Sua presença é muito importante para o servidor!",
                    url: "http://google.com",
                    description: `${member}, para ter acesso aos outros canais vá em <#706550836842594321>, e leia as regras com cuidado!`,
                    fields: [{
                        name: "Regras",
                        value: "<#706550854152355911>"
                      },
                      {
                        name: "Mande o seu id!",
                        value: "<#706550836842594321>"
                      },
                      {
                        name: "IP do servidor:",
                        value: "```Em construção```"
                      }
                    ],
                    image: {
                        url: 'https://im.ezgif.com/tmp/ezgif-1-0796f286a8d7.gif',
                    },
                    timestamp: new Date(),
                    footer: {
                      icon_url: client.user.avatarURL,
                      text: "2020 ©ToledoSDL"
                    }
                    
                  }
                });
            }
        }
    },
	
	
	{
        name: 'guildMemberRemove',
        run: (client, member) => {
            if (greetingChannel) {
                greetingChannel.send({embed: {
                    color: 3447003,
                    author: {
                      name: client.user.username,
                      icon_url: client.user.avatarURL
                    },
                    title: "Triste...",
                    description: `${member}, acabou de ir embora do servidor... espero que volte um dia!`,
                    image: {
                        url: 'https://osegredo.com.br/wp-content/uploads/2017/06/Em-algum-momento-da-vida-teremos-que-dizer-ADEUS-para-coisas-e-pessoas.-830x450.jpg',
                    },
                    timestamp: new Date(),
                    footer: {
                      icon_url: client.user.avatarURL,
                      text: "2020 ©ToledoSDL"
                    }
                  }
                });
            }
        }
    }
	
];
