const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
var embedA = new Discord.RichEmbed() 
.setDescription('Todos os pacotes vips, foram enviados para o teu privado.')
.setColor([113, 149, 68])
.setFooter("" + message.author.tag, message.author.avatarURL)
.setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://cdn.discordapp.com/attachments/693954927491416064/693963555191652472/png.png")
.setTimestamp()
    

    message.delete().catch(O_o=>{});
    message.channel.send(embedA).then(() => {

var embedB = new Discord.RichEmbed()

      .setColor([113, 149, 68])
      .setAuthor("**PACOTES VIPS**", client.user.avatarURL)
      .addField("NATIVO CARIOCA", "Reage 👑", true)
      .addField("CARIOCA", "Reage 👓", true)
      .addField("DIAMANTE", "Reage 💎", true)
      .addField("OURO", "Reage 💰", true)
           .addField("PRATA", "Reage 💴", true)
      .addField("BRONZE", "Reage 📠", true)
      .setFooter("" + message.author.tag, message.author.avatarURL)
      .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://cdn.discordapp.com/attachments/693954927491416064/693963555191652472/png.png")
      .setTimestamp();

message.author.send(embedB).then( async (c) => {
   
   await c.react('👑').then(() => {
    }); 
    await c.react('👓').then(() => {

    });
   await c.react('💎').then(() => {
    }); 
    
  

    await c.react('💰').then(() => {

    });

    await c.react('💴').then(() => {

    });

    
    await c.react('📠').then(() => {

    });

    await c.react('🔙').then(() => {

    }); //Emoji Voltar

        let lowfilter = (r, u) => r.emoji.name === '👑' && u.id == message.author.id;
        let low = c.createReactionCollector(lowfilter, { time: 120000});
		
        let rubyfilter = (r, u) => r.emoji.name === '👓' && u.id == message.author.id;
        let ruby = c.createReactionCollector(rubyfilter, { time: 120000});

        let diafilter = (r, u) => r.emoji.name === '💎' && u.id == message.author.id;
        let dia = c.createReactionCollector(diafilter, { time: 120000});


        let oufilter = (r, u) => r.emoji.name === '💰' && u.id == message.author.id;
        let ou = c.createReactionCollector(oufilter, { time: 120000});


        let bronfilter = (r, u) => r.emoji.name === '💴' && u.id == message.author.id;
        let bron = c.createReactionCollector(bronfilter, { time: 120000});

        

        let prafilter = (r, u) => r.emoji.name === '📠' && u.id == message.author.id;
        let pra = c.createReactionCollector(prafilter, { time: 120000});
		
		
        let voltarfilter = (r, u) => r.emoji.name === '🔙' && u.id == message.author.id;
        let voltar = c.createReactionCollector(voltarfilter, { time: 120000});
  
        low.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setTitle('*𝓑𝓻𝓩* - 230R$**')
            .setDescription('Para comprar o vip, deve chamar o !ʜɗ ToledoSDL#0001  ou o _MønzeEr4DGK´𝐹𝑃𝑆#8982 ()')
		      			  .addField("**2KK DE BONUS**")
		      			  .addField("**22k A CADA 30(MIN)**")
		      			  .addField("**PRIORIDADE MÁXIMA NA FILA**")
		      			  .addField("**HELICOPTERO VOLATUS**")
		      			  .addField("** 2 CARROS A SUA ESCOLHA DOS CARROS VIP**")
		      			  .addField("**COMANDO /DV (DELETAR VEICULO)**")
		      			  .addField("**2 MANSÕES DE SUA ESCOLHA **")
		      			  .addField("**MOCHILA PERMANENTE**")
                            .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://cdn.discordapp.com/attachments/693954927491416064/693963555191652472/png.png")
            .setTimestamp()
            .setColor([208, 0, 0])
            .setFooter(message.client.user.username, message.client.user.avatarURL)
            c.edit(a)
        });

ruby.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setTitle('**Platina - 160R$**')
            .setDescription('Para comprar o vip, deve chamar o !ʜɗ ToledoSDL#0001  ou o _MønzeEr4DGK´𝐹𝑃𝑆#8982 ()')
            .addField("**1KK DE BONUS**")
            .addField("**18k A CADA 30(MIN)**")
            .addField("**PRIORIDADE MÁXIMA NA FILA**")
            .addField("**1 CARRO VIP DE ATE 5KK**")
            .addField("**COMANDO /DV (DELETAR VEICULO)**")
            .addField("**1 MANSÃO DE SUA ESCOLHA **")
            .addField("**MOCHILA PERMANENTE**")
            .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://cdn.discordapp.com/attachments/693954927491416064/693963555191652472/png.png")
            .setTimestamp()
            .setColor([208, 0, 0])
            .setFooter(message.client.user.username, message.client.user.avatarURL)
            c.edit(a)
        });

        dia.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setTitle('**Ouro - 100R$**')
            .setDescription('Para comprar o vip, deve chamar o !ʜɗ ToledoSDL#0001  ou o _MønzeEr4DGK´𝐹𝑃𝑆#8982 ()')
            .addField("**500K DE BONUS**")
            .addField("**13k A CADA 30(MIN)**")
            .addField("**PRIORIDADE 100% NA FILA**")
            .addField("**2 CARRO VIP DE ATE 2KK**")
            .addField("**1 MANSÕES DE SUA ESCOLHA **")
            .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://cdn.discordapp.com/attachments/693954927491416064/693963555191652472/png.png")
            .setTimestamp()
            .setColor([208, 0, 0])
            .setFooter(message.client.user.username, message.client.user.avatarURL)
            c.edit(a)
        });
        
        ou.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setTitle('**Vip Prata - 40R$**')
			.setDescription('Para comprar o vip, deve chamar o !ʜɗ ToledoSDL#0001  ou o _MønzeEr4DGK´𝐹𝑃𝑆#8982 ()')
            .addField("**GANHARÁ 300K BUNUS**")
            .addField("**1 CASA ATE DE 500K**")
            .addField("**PRIORIDADE MÁXIMA NA FILA**")
            .addField("**7K A CADA 30(MIN)**")
            .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://cdn.discordapp.com/attachments/693954927491416064/693963555191652472/png.png")
            .setTimestamp()
            .setColor([208, 0, 0])
            .setFooter(message.client.user.username, message.client.user.avatarURL)
            c.edit(a)
        });

        pra.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setTitle('**Vip Bronze - 25R$**')
            .setDescription('Para comprar o vip, deve chamar o !ʜɗ ToledoSDL#0001  ou o _MønzeEr4DGK´𝐹𝑃𝑆#8982 ()')
            .addField("**GANHARÁ 200K BUNUS**")
            .addField("**+6 ESPAÇOS NA GARAGEM**")
            .addField("**PRIORIDADE 50% NA FILA**")
            .addField("**5K A CADA 30(MIN)**")
            .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://cdn.discordapp.com/attachments/693954927491416064/693963555191652472/png.png")
            .setTimestamp()
            .setColor([208, 0, 0])
            .setFooter(message.client.user.username, message.client.user.avatarURL)
            c.edit(a)
        });

        bron.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setTitle('**Criador de conteudo - Gravar ao menos 2 videos no servidor semanalmente...**')
            .setDescription('Para requisitar o vip, deve chamar o !ʜɗ ToledoSDL#0001  ou o _MønzeEr4DGK´𝐹𝑃𝑆#8982 ()')
            .addField("**GANHARÁ 300K BUNUS**")
            .addField("**+6 ESPAÇOS NA GARAGEM**")
            .addField("**PRIORIDADE 50% NA FILA**")
            .addField("**4K A CADA 30(MIN)**")
            .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://cdn.discordapp.com/attachments/693954927491416064/693963555191652472/png.png")
            .setTimestamp()
            .setColor([208, 0, 0])
            .setFooter(message.client.user.username, message.client.user.avatarURL)
            c.edit(a)
        });
    voltar.on('collect', async _ => {
            c.edit(embedB)
        });
    })
})
}
exports.help = {
    name: "vips",
    aliases: [
        'vip'
    ]
}