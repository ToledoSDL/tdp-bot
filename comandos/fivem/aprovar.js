const Discord = require('discord.js'); 
exports.run = async (client, message, args) => {

      const mysql = require('mysql'); 
      message.delete({timeout: 1000});
      //Entrando na mysql
      const connection = mysql.createConnection({ //Info da database, para conectar
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'vrp'
      });
      connection.connect((err) => {
      });


      let erroden = new Discord.RichEmbed()
          .setTitle("𝓣𝓓𝓟 | Erro ao aprovar  ")
          .setDescription(`**Para aprovar alguem na whitelist digite o comando abaixo!**`)
          .setColor('#ff0000')
          .addField("Comando:", `!aprovar "id" "Menção do usuario"`, true)
          .addField("Exemplo", `!aprovar 157 @rogerin_cabeçadepika`, true)
          .setTimestamp(new Date())
          .setThumbnail('https://oenem.com.br/blog/wp-content/uploads/2018/01/Dicas-para-a-reta-final-de-estudos-para-o-Enem.png')
          .setFooter("Erro ao aprovar Whitelist", message.author.displayAvatarURL); //Texto do rodapé e imagem

    let role = message.guild.roles.get("706550764163694752");
    let role1 = message.guild.roles.get("706550764570411029");
      const sayMessage = args.slice(1).join(" ");
      const id = args[0]

        setInterval(function () {
          connection.query('SELECT 1');
        }, 5000);
    
      
          connection.query(`UPDATE vrp_users SET whitelisted = '1' WHERE id = '${id}'`, (err, rows) => { //atualizando a whitelist do servidor
            if (!message.member.hasPermission("MANAGE_ROLES")) return util.bad(`<@${message.author.id}>, você não tem permissão para utilizar este comando! Caso queira ser aprovador de Whitelist contate o Monzeer4.`);
            let user = message.mentions.members.first() || message.guild.members.get(args[0])
            if(!user) return message.channel.send(erroden)
            
            user.addRole(role)
            user.removeRole(role1)
            user.setNickname(`${user.user.username} | ${id} `)

            
  
          let usuario = new Discord.RichEmbed()
          .setTitle("𝓣𝓓𝓟 | 𝐀𝐩𝐫𝐨𝐯𝐚𝐝𝐨  ")
          .setDescription(` ID **${id}** ||  **${sayMessage}**𝒇𝒐𝒊 𝒂𝒑𝒓𝒐𝒗𝒂𝒅𝒐 𝒏𝒂 **𝑾𝑯𝑰𝑻𝑬𝑳𝑰𝑺𝑻** 𝒄𝒐𝒎 𝒔𝒖𝒄𝒆𝒔𝒔𝒐\n 𝑷𝒆𝒍𝒐 𝒔𝒕𝒂𝒇𝒇 **${message.author.username}!**`)
          .setColor('#00FF00')
          .setTimestamp(new Date())
          .setThumbnail('https://cdn.discordapp.com/icons/693202263434592386/de87c5c18e9ab5d4ecf948b0a845f6d0.jpg')
          .setFooter("𝗦𝗲𝗷𝗮 𝗕𝗲𝗺 𝗩𝗶𝗻𝗱𝗼 𝗮 𝗖𝗶𝗱𝗮𝗱𝗲 𝗧𝗲𝗻𝗵𝗮 𝘂𝗺 𝗕𝗼𝗺 𝗥𝗣", message.author.displayAvatarURL); //Texto do rodapé e imagem
          client.guilds.get('693202263434592386').channels.get('706550838914580531').send(usuario); //id do servidor/canal

        })

          console.log (`adc to whitelisted ID: ${id}`)
      }

      exports.help = {
        name: "aprovar",
        aliases: [
            'apwl'
        ]
    }