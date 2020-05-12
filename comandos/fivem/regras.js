const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
var embedA = new Discord.RichEmbed()
.setTitle("Regras")
.setDescription('As regras foram enviadas no seu privado!')
.setColor("#000000")
.setFooter("" + message.author.tag, message.author.avatarURL)
.setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://i.imgur.com/6FdvWdc.png")
.setTimestamp();
 message.delete(5000)

    message.channel.send(embedA).then(msg => msg.delete(6000));


var embedB = new Discord.RichEmbed()

      .setColor("#5F04B4")
      .setAuthor("♕ 𝓑𝓻𝓩 ♕ Ⓡ - REGRAS", client.user.avatarURL)
      .addField("#1 – Gerais", "Reage 📔", true)
      .addField("#2 – Discord", "Reage 📓", true)
      .addField("#3 – Policia", "Reage 📘", true)
      .addField("#4 – Ems", "Reage 📗", true)
      .addField("#5 - Facções", "Reage 📕", true)
      .addField("#6 – Ações", "Reage 📙", true)
      .addField("#7 - Safe Zones", "Reage 🌐", true)
      .addField("#8 - Chamados", "Reage 📞", true)
      .addField("#9 – CNH", "Reage 🎫", true)
      .addField("#10 - RolePlay", "Reage 📡", true)
      .setFooter("" + message.author.tag, message.author.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://i.imgur.com/6FdvWdc.png")
      .setTimestamp();

message.author.send(embedB).then( async (c) => {
   
   await c.react('📔').then(() => {
    }); //Emoji POWER GAMING
	
	   await c.react('📓').then(() => {
    }); //
	   await c.react('📘').then(() => {
    }); //
	   await c.react('📗').then(() => {
    }); //
	   await c.react('📕').then(() => {
    }); //
	   await c.react('📙').then(() => {
    }); //
	   await c.react('🌐').then(() => {
    }); //
	   await c.react('📞').then(() => {
    }); //
	   await c.react('🎫').then(() => {
    }); //
       await c.react('📡').then(() => {
    }); //

    await c.react('⏪').then(() => {

    }); //Emoji Voltar

        let powerfilter = (r, u) => r.emoji.name === '📔' && u.id == message.author.id;
        let power = c.createReactionCollector(powerfilter, { time: 120000});
		
		  let painfilter = (r, u) => r.emoji.name === '📓' && u.id == message.author.id;
        let pain = c.createReactionCollector(painfilter, { time: 120000});
		
		  let fearfilter = (r, u) => r.emoji.name === '📘' && u.id == message.author.id;
        let fear = c.createReactionCollector(fearfilter, { time: 120000});
		
		  let utfilter = (r, u) => r.emoji.name === '📗' && u.id == message.author.id;
        let ut = c.createReactionCollector(utfilter, { time: 120000});
		
		  let safefilter = (r, u) => r.emoji.name === '📕' && u.id == message.author.id;
        let safe = c.createReactionCollector(safefilter, { time: 120000});
		
		
		  let solfilter = (r, u) => r.emoji.name === '📙' && u.id == message.author.id;
        let sol = c.createReactionCollector(solfilter, { time: 120000});
		
		  let roubfilter = (r, u) => r.emoji.name === '🌐' && u.id == message.author.id;
        let roub = c.createReactionCollector(roubfilter, { time: 120000});
		
		
		  let pbfilter = (r, u) => r.emoji.name === '📞' && u.id == message.author.id;
        let pb = c.createReactionCollector(pbfilter, { time: 120000});
		
		  let pb2filter = (r, u) => r.emoji.name === '🎫' && u.id == message.author.id;
        let pb2 = c.createReactionCollector(pb2filter, { time: 120000});
		
		
		  let pb3filter = (r, u) => r.emoji.name === '📡' && u.id == message.author.id;
        let pb3 = c.createReactionCollector(pb3filter, { time: 120000});
		
		
		  let pb4filter = (r, u) => r.emoji.name === '📡' && u.id == message.author.id;
        let pb4 = c.createReactionCollector(pb4filter, { time: 120000});
		
		
		
      let usfilter = (r, u) => r.emoji.name === '💓' && u.id == message.author.id;
        let us = c.createReactionCollector(usfilter, { time: 120000});
		
		
		
		  let resfilter = (r, u) => r.emoji.name === '🔮' && u.id == message.author.id;
        let res = c.createReactionCollector(resfilter, { time: 120000});
		
		
		  let chffilter = (r, u) => r.emoji.name === '💗' && u.id == message.author.id;
        let chf = c.createReactionCollector(chffilter, { time: 120000});

        let brfilter = (r, u) => r.emoji.name === '🕹' && u.id == message.author.id;
        let br = c.createReactionCollector(brfilter, { time: 120000});
        let polfilter = (r, u) => r.emoji.name === '📽' && u.id == message.author.id;
        let pol = c.createReactionCollector(polfilter, { time: 120000});
        let samfilter = (r, u) => r.emoji.name === '⛏' && u.id == message.author.id;
        let sam = c.createReactionCollector(samfilter, { time: 120000});
		
        let voltarfilter = (r, u) => r.emoji.name === '⏪' && u.id == message.author.id;
        let voltar = c.createReactionCollector(voltarfilter, { time: 120000});
  
        power.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setTitle('Regras Gerais')
                  .addField("1.1", "Obrigatório o uso de Headset/Microfone para comunicação com outros jogadores. Utilize a tecla ''N'' para falar no jogo.", false)
		      	  .addField("1.2", "Proibido sair do personagem, ou falar ''Fora do RP''. Quer falar sobre fora rp, temos chat dedicados no servidor do discord.", false)
		          .addField("1.3", "Extremamente  PROIBIDO criança - minecraft - ou qualquer outro apelido que tenha referência a idade da pessoa na vida real.", false)
		      	  .addField("1.4", "Proibido utilização de bugs/glitchs.", false)
		    	  .addField("1.5", "chat aberto serve para conversar FORA DO RP. Não abuse.", false)
                  .addField("1.6", "Qualquer denúncia deve ser feita na sala de #denúncias do Discord. E evitar conversar no chat de denúncias.", false)
                  .addField("1.7", "Se foi banido e achou injusto, solicite uma revisão de banimento.", false)
                  .addField("1.8", "Se você foi banido por um STAFF, não fale com outro STAFF para te desbanir, solicite uma revisão de banimento e aguarde ser analisada.", false)
                  .addField("1.9", "Quando você renascer, você não se lembrará de nada que aconteceu na ação antecedente ao qual veio a falecer seu personagem. (não poderá mais voltar para a ação de RP).", false)
                  .addField("2.0", "Se crashar no meio do RP, deverá voltar, avisar no canal de crash  e prosseguir com o mesmo.", false)
                  .addField("2.1", "Ao entrar no servidor o jogador é obrigado à fazer RG e trocar a sua roupa.", false)
                  .addField("2.2", "É proibido permanecer com a roupa padrão inicial do servidor.", false)
                  .addField("2.3", "Cortes de cabelo, mudança de pele ou algo do gênero não descaracterizam a identidade do jogador.", false)
                  .addField("2.4", "Não é permitido andar com fardas militares se você é um civil.", false)
                  .addField("2.5", "policial fora de serviço poderá agir caso testemunhe algum crime.", false)
                  .addField("2.6", "É proibido chamar qualquer profissão (seja ela legal ou ilegal) como isca para roubos/sequestros. Não chame com a finalidade de cometer crime, troca de tiro, etc.", false)
                  .addField("2.7", "Respeitar a todos os administradores e membros da staff do servidor.", false)
                  .addField("2.8", "Administradores sempre terão a última palavra.", false)
                  .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://i.imgur.com/6FdvWdc.png")
            .setTimestamp()
            .setColor("#F5DA81")
            .setFooter(message.client.user.username, message.client.user.avatarURL)
            c.edit(a)
        });
		 pain.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setTitle('Regras Discord')
            .addField("1.1", "Proibido qualquer tipo de linguagem ofensiva, grosseira ou racista. Proibida a publicação de materiais caluniosos, abusivos ou que invada a privacidade de alguém.", false)
            .addField("1.2", "Evitar chamar membros da staff no privado por motivos fúteis, utilize sempre que possível as salas dedicadas para perguntas no servidor.", false)
            .addField("1.3", "Proibida a divulgação de outros servidores tanto em chats quanto em privados. (Ban permanente sem avisos prévios).", false)
            .addField("1.4", "Não perturbe outros jogadores.", false)
            .addField("1.5", "Evite menções, utilize a mesma somente quando necessário.", false)
            .addField("1.6", "Não utilize everyone para assuntos/problemas pessoais.", false)
            .addField("1.7", "Não entre em salas cujo você não é autorizado.", false)
            .addField("1.8", "Criadores de conteúdo que desejarem anunciar suas lives, deverão usar o canal ''divulgação de live'', usar outro é totalmente proibido.", false)
            .addField("1.9", "Qualquer tipo de ofensa a administração, moderação, ou a qualquer pessoa que faça parte desta comunidade é extremamente proibida. (Caso seja algo muito forte estará sujeito a advertência, em outros casos até a ban).", false)
            .addField("2.0", "Qualquer tipo de publicação pornográfica, ou com o intuito de promover o Nazismo ou Comunismo está extremamente proibida. (Sujeito a ban).", false)
            .addField("2.1", "No caso de Policiais, os mesmos devem estar no seu respectivo servidor, se não, estarão sujeitos as mesmas penalidades listadas anteriormente. (O mesmo serve para os bandidos).", false)
            .addField("2.2", "Canais ''Instagram'' e ''olx'' são totalmente dentro do RP.", false)
            .addField("2.3", "Ter o ID ao lado do nome. Ex: Juan Diaz | 28", false)
            .addField("2.4", "As salas de SUPORTE não são Bate-papo, são exclusivas para atendimento com staff, o mau uso dessa sala é plausível de punição.", false)  
            .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://i.imgur.com/6FdvWdc.png")
            .setTimestamp()
            .setColor("#000000")
            .setFooter(message.client.user.username, message.client.user.avatarURL)
            c.edit(a)
        });
		 fear.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setTitle('Regras Policia')
            .addField("1.2", "Se você for sequestrado ou rendido, você deve não citar seu discord e não passar informações via COPOM;", false)
            .addField("1.3", "Se você morrer, não pode passar nenhuma informação até ser atendido por um médico;", false)
            .addField("1.4", "Ao abordar um civil que cometeu um crime, o policial é obrigado a dar voz de prisão antes de levá-lo para delegacia;", false)
            .addField("1.5", "Ao levar o suspeito para delegacia, sempre avisar: (O senhor tem o direito de permanecer calado e tudo que disser, poderá e será usado contra o senhor no tribunal); ", false)
            .addField("1.6", "Só pode efetuar a prisão após levá-lo para a DP e ter colocado-o dentro da cela;", false)
            .addField("1.7", "Obrigatório avisar para cidade constantemente quantos policiais estão em patrulhamento;", false)
            .addField("1.8", "A polícia não lê /ilegal;", false)
            .addField("1.9", "Seguir o RP, sempre falar que o cidadão está algemado, que retirou a comunicação dele, que a cela está trancada, que você está revistando-o, solicitando RG, solicitando CNH;", false)
            .addField("2.0", "MANTER A FICHA CRIMINAL SEMPRE ATUALIZADA (TIRAR FOTO COM RG A MOSTRA E POSTAR NESTA ABA DO XCODE)", false)
            .addField("2.1", "É permitido o mínimo de 2 PM para iniciar a PTR.", false)
            .addField("2.2", "É proibido estar com equipamentos militares enquanto estiver fora de serviço; (Somente o uso de pistola com 50 munições.)", false)
            .addField("2.3", "É proibido cometer crimes enquanto estiver fora de serviço; (Se for pego será exonerado IMEDIATAMENTE.)", false)
            .addField("2.4", "Sempre seguir as leis a partir do Código Penal. Multa pode ser aplicada no local de abordagem, fiança apenas na DP;", false)
            .addField("2.5", "Só é considerado abordagem, quando o policial dar sinal de parada, pedir para descer ou encostar o veículo e levantar as mãos, caso contrário, poderá seguir normalmente;", false)
            .addField("2.6", "É proibido fazer emboscada para polícia;", false)
            .addField("2.7", "Quando estiver efetuando uma prisão sempre oferecer um advogado ao cidadão que esta sendo preso (Se tiver algum Advogado On);", false)
            .addField("2.8", "Qualquer policial esta autorizado abater individuo portando armas de grosso calibre em vias públicas", false)
            .addField("2.9", "É proibido sequestrar PM quando ele esta em PTR.", false)
            .addField("3.0", "O BOPE tem a prioridade em ações, podendo aceitar reforço de PM, PRF, PC.", false)
            .addField("3.1", "Somente o BOPE pode fazer PTR em favelas, em caso de trocação de tiro poderá solicitar reforço da PM e PC.", false)
            .addField("3.2", "NÃO SERÁ TOLERADO DE FORMA ALGUMA O RP DE PM CORRUPTO, SUJEITO A BAN.", false)
            .addField("3.3", "CAPACETE BALÍSTICO PROIBIDO", false)
                  .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://i.imgur.com/6FdvWdc.png")
            .setTimestamp()
            .setColor("#0101DF")
            .setFooter(message.client.user.username, message.client.user.avatarURL)
            c.edit(a)
        });
		 ut.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setTitle('Regras Ems')
            .addField("1.0", "É proibido a reanimar sem uniforme;", false)
            .addField("1.1", "É proibido o uso de veículos comum com uniforme durante o horário de serviço;", false)
            .addField("1.2", "É proibido o uso de veículos do SAMU sem estar fardado;", false)
            .addField("1.3", "Para melhor atendimento, deve-se sempre perguntar o que aconteceu e você irá decidir oque melhor fazer com o paciente;", false)
            .addField("1.4", "É obrigatório portar remédios e kit;", false)
            .addField("1.5", "Sempre que estiver fardado, é necessário manter o respeito e ética;", false)
            .addField("1.6", "Em caso de resistência ou ameaças, deve-se chamar imediatamente a polícia, descrevendo a ocorrência;", false)
            .addField("1.7", "Não hesite em usar a arma taser sempre que houver qualquer tipo de ameaça a sua vida;", false)
            .addField("1.8", "Em uma ação, espere o término de longe para fazer seu atendimento. Ao chegar no local, é obrigatório perguntar no chat se a mesma terminou;", false)
            .addField("1.9", "Para comunicação via chat, é necessário utilizar /192;", false)
            .addField("2.0", "O paramédico que ficar AFK para farmar salário sofrerá punições;", false)
            .addField("2.1", "Para fazer um chamado a UNIMED, é necessário informar no campo de mensagem a causa;", false)
            .addField("2.2", "Lembrando que o Ems decide quem vive, quem morre ou quem vai para o hospital;", false)
            .addField("2.3", "A Ems não pode portar armas ou cometer crimes enquanto estiver de farda e de serviço;", false)
            .addField("2.4", "A Ems não pode ser assaltado/sequestrado/morto quando estiver em trabalho;", false)
            .addField("2.5", "Somente poderá tirar folga com no mínimo 2 Samu em plantão;", false)
            .addField("2.6", "Totalmente proibido Samu ser corrupto, passível de BAN", false)
            .addField("2.7", "Só aceitar chamados quando os players colocarem seu id no chamado (Ex: Sofri um acidente de carro ID 371);", false)
            .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://i.imgur.com/6FdvWdc.png")
            .setTimestamp()
            .setColor("#04B431")
            .setFooter(message.client.user.username, message.client.user.avatarURL)
            c.edit(a)
        });
		 safe.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setTitle('Regras Facções')
                  .addField("1.0", "Mínimo de 3 e máximo de 10 de membros para assumir uma facção.", false)
                  .addField("1.1", "Extremamente proibido fazer alianças para ações de rua.", false)
                  .addField("1.2", "Permitido união de organização e gangues, apenas para negociações é permitida a aliança entre ambos os lados.", false)
                  .addField("1.3", "Se algum membro sair da organização ou gangue deve esquecer tudo que viu, presenciou ou conviveu.", false)
                  .addField("1.4", "Caso saia de alguma Organização ou Facção, terá Blacklist de 3 dias.", false)
                  .addField("1.5", "Deverá esperar 3 dias para se envolver em outra Organização/Facção ou Órgãos Públicos.", false)
                  .addField("1.6", "Caso fique ausente por mais de 3 dias, poderá ser removido com a autorização do líder.", false)
                  .addField("1.7", "Caso a organização ou facção fique inativa durante 3 dias (todos os membros), será removida ou substituída pelos membros ativos", false)
                  .addField("1.8", "Permitido PVP entre facções em encontros pré-marcados ou favelas (Armamento liberado).", false)
                  .addField("1.9", "Assalto somente com armas de fogo ou armas branca (Caso o indivíduo tente assaltar apenas com arma branca, pode tentar fugir).", false)
                  .addField("2.0", "Obrigatório pelo menos uma peça de roupa com a cor da facção (Ex: bonés ou bermudas e etc).", false)
                  .addField("2.1", "Obrigatório máscaras para cometer crimes, vendas de drogas ou ações.", false)
                  .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://i.imgur.com/6FdvWdc.png")
            .setTimestamp()
            .setColor("#FF0000")
            .setFooter(message.client.user.username, message.client.user.avatarURL)
            c.edit(a)
        });
		 sol.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setTitle('Regras de Ações')
		      			  .addField("1.1", "Utilizar informações fora do RP, para benefício. Ex: Olhar ID de Policiais Civis no discord e levar para o RP, lembrar de ações em que você veio a óbito...", false)
                  .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://i.imgur.com/6FdvWdc.png")
            .setTimestamp()
            .setColor("#FF8000")
            .setFooter(message.client.user.username, message.client.user.avatarURL)
            c.edit(a)
        });
		 roub.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setTitle('Safe Zones')
                            .addField("Safes", "Todos os Departamentos de Polícia;\nHospital;\nConcessionárias;\nLoja de Roupas;\nAeroporto;\nGaragem principal e Garagem atrás da praça\nCabelereiro;\nMecânica;\nFarms legais, entregas e vendas (distância de 500m). ", false)
                  .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://i.imgur.com/6FdvWdc.png")
            .setTimestamp()
            .setColor("#00FFFF")
            .setFooter(message.client.user.username, message.client.user.avatarURL)
            c.edit(a)
        });
		 pb.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setTitle('Chamados')
                            .addField("1.0", "Proibido fazer chamados com intenção de roubar/sequestrar", false)      
                            .addField("1.1", "Todos os chamados devem conter uma descrição detalhada do ocorrido, caso contrário não serão atendidos.", false)                     
                            .addField("1.3", "Chamados de “DEUS” somente em casos extremos de quebra de regra.", false)
                  .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://i.imgur.com/6FdvWdc.png")
            .setTimestamp()
            .setColor("#FF0000")
            .setFooter(message.client.user.username, message.client.user.avatarURL)
            c.edit(a)
        });
		 pb2.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setTitle('Carteira Nacional de Habilitação')
		      			  .addField("CNH", "Para retirar sua habilitação devera ir no DETRAN!", false)
                  .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://i.imgur.com/6FdvWdc.png")
            .setTimestamp()
            .setColor("#FF00BF")
            .setFooter(message.client.user.username, message.client.user.avatarURL)
            c.edit(a)
        });
		 pb3.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setTitle('RolePlay')
		      			  .addField("2.7 Se vingar de qualquer pessoa que estava presente em uma ação vc foi dado como morto. Como por exemplo , participei de um sequestro , e fui finalizado e meu amigo não , então ele vai e te lembra do ocorrido e vc vai atrás dos sequestradores para se vingar")
                  .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://i.imgur.com/6FdvWdc.png")
            .setTimestamp()
            .setColor([208, 0, 0])
            .setFooter(message.client.user.username, message.client.user.avatarURL)
            c.edit(a)
        });
		 pb4.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setTitle('RolePlay')
		      			  .addField("Random Deathmatch (RDM)", "Matar sem motivo", false)
                          .addField("Vehicle Deathmatch (VDM)", "Usar veículo como arma", false)
                          .addField("MetaGaming", "Se beneficiar de informações obtidas fora do RP", false)  
		      			  .addField("PowerGaming", "Abusar da mecânica do jogo")
		      			  .addField("CombatLogging", "Deslogar durante uma ação", false)
		      			  .addField("DARK RP", "Estupro, Racismo, Assédio, Homofobia e Preconceito", false)
                          .addField("Forçar RP/Power RP", "Chamar a pessoa de preto branco exatamente essa pessoa era tomar ban por racismo", false)
                          .addField("Spawn Kill", "Esperar um jogador spawnar para matar", false)
                  .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://i.imgur.com/6FdvWdc.png")
            .setTimestamp()
            .setColor([208, 0, 0])
            .setFooter(message.client.user.username, message.client.user.avatarURL)
            c.edit(a)
        });
		 us.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setTitle('**#12 – CNH**')
		      			  .addField("1.1  Agora habilitação é obrigada para quem tem veiculo, para retirada da mesma será na Prefeitura. Valor R$ 15.000,00. Se a policia pegar sem a carteira terá o veículo apreendido. Se questionar o policial, poderá ser preso.")
                  .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://i.imgur.com/6FdvWdc.png")
            .setTimestamp()
            .setColor([208, 0, 0])
            .setFooter(message.client.user.username, message.client.user.avatarURL)
            c.edit(a)
        });
		res.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setTitle('**#13 – REGRAS DISCORD**')
		      			  .addField("1.1 Proibido qualquer tipo de linguagem ofensiva, grosseira ou racista. Proibida a publicação de materiais caluniosos, abusivos ou que invada a privacidade de alguém.")
		      			  .addField("1.2 Evitar chamar membros da staff no privado por motivos fúteis, utilize sempre que possível as salas dedicadas para perguntas no servidor.")
		      			  .addField("1.3 Proibida a divulgação de outros servidores tanto em chats quanto em privados. (Ban permanente sem avisos prévios).")
		      			  .addField("1.4 Não perturbe outros jogadores.")
		      			  .addField("1.5 Evite menções, utilize a mesma somente quando necessário.")
                  .addField("1.6 Não utilize everyone para assuntos/problemas pessoais.")
                     .addField("1.7 Não entre em salas cujo você não é autorizado.")
                    .addField("1.8 Criadores de conteúdo que desejarem anunciar suas lives, deverão usar o canal ''divulgação de live'', usar outro é totalmente proibido.")
                  .addField("1.9 Qualquer tipo de ofensa a administração, moderação, ou a qualquer pessoa que faça parte desta comunidade é extremamente proibida. (Caso seja algo muito forte estará sujeito a advertência, em outros casos até a ban).")
                  .addField("2.0 Qualquer tipo de publicação pornográfica, ou com o intuito de promover o Nazismo ou Comunismo está extremamente proibida. (Sujeito a ban).")
                  .addField("2.1 No caso de Policiais, os mesmos devem estar no seu respectivo servidor, se não, estarão sujeitos as mesmas penalidades listadas anteriormente. (O mesmo serve para os bandidos).")
                  .addField("2.2 Canais ''Instagram'' e ''olx'' são totalmente dentro do RP.")
                 .addField("2.3 Ter o ID ao lado do nome. Ex: NeymaTombando | 01")
                   .addField("2.4 As salas de SUPORTE não são Bate-papo, são exclusivas para atendimento com staff, o mau uso dessa sala é plausível de punição.")  

                   .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://i.imgur.com/6FdvWdc.png")
            .setTimestamp()
            .setColor([208, 0, 0])
            .setFooter(message.client.user.username, message.client.user.avatarURL)
            c.edit(a)
        });
		 chf.on('collect', async _ => {
            var a = new Discord.RichEmbed()
            .setTitle('**#14 – BOPE**')
		      			  .addField("1 - SOMENTE O BOPE PODE UTILIZAR A ARMA REMINGTON (NÃO LETAL) EM AÇÕES DE LOJINHAS/JOALHERIAS/BANCO ETC… ")
		      			  .addField("2 - A PRIORIDADE EM AÇÕES É DO BOPE;")
		      			  .addField("3 - ABORDAGENS DE ROTINA E COMUNS SERÁ PRIORIDADE DA PMERJ;")
		      			  .addField("4 - O BOPE SERÁ A ÚNICA GUARNIÇÃO QUE PODERÁ UTILIZAR ARMAMENTOS DE GROSSO CALIBRE NA RUA, OU SEJA EM AÇÕES DE RUA PODE SE UTILIZAR OUTRO ARMAMENTO ALÉM DE PISTOLA, (AÇÕES DE LOJINHAS SOMENTE PISTOLA);")
		      		.addField("5 - BOPE PODE PATRULHAR OU PACIFICAR FAVELAS SEM AVISO PRÉVIO ; ")
 .addField("6 - A PMERJ RÁDIO PATRULHA, CONTINUA COM AS REGRAS COMUM, ESSAS EXCEÇÕES APENAS : BOPE - OPERAÇÕES ESPECIAIS ")
                		      	 .addField("7 - BOPE AGORA PODE PATRULHAR NO NORTE COM A PF")
                             .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://i.imgur.com/6FdvWdc.png")
            .setTimestamp()
            .setColor([208, 0, 0])
            .setFooter(message.client.user.username, message.client.user.avatarURL)
            c.edit(a)
        });
        br.on('collect', async _ => {
          var a = new Discord.RichEmbed()
          .setTitle('**#15 – EXÉRCITO BRASILEIRO**')
                .addField("8 - PROIBÍDO PATRULHAR NA CIDADE SEM NECESSIDADE, APENAS QUANDO FOR SOLICITADO;")
                .addField("9 - SÓ PATRULHAR FAVELAS SE FOR NECESSÁRIO APOIO DE OUTRA GUARNIÇÃO QUANDO FOR SOLICITADA;")
                .addField("10 - O FOCO DO EB É SEMPRE AS FRONTEIRAS E COLÔMBIA, RP MAIS VOLTADO COMO NA REALIDADE:")
                .addField("11 - SE FOREM PEGOS PATRULHANDO NA CIDADE DO RJ SEM QUE HÁ ALGUMA OPERAÇÃO NO QUAL O EB FOI SOLICITADO, CABÍVEIS DE PUNIÇÕES SEVERAS;")
                .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://i.imgur.com/6FdvWdc.png")
          .setTimestamp()
          .setColor([208, 0, 0])
          .setFooter(message.client.user.username, message.client.user.avatarURL)
          c.edit(a)
      });
      pol.on('collect', async _ => {
        var a = new Discord.RichEmbed()
        .setTitle('**#16 – REGRAS DA POLÍCIA**')
              .addField("1. Utilizar do Código Q em todas as situações possíveis;")
              .addField("2. Se você for sequestrado ou rendido, você deve citar seu discord e não passar informações via COPOM;")
              .addField("3. Se você morrer, não pode passar nenhuma informação até ser atendido por um médico;")
              .addField("4. Ao abordar um civil que cometeu um crime, o policial é obrigado a dar voz de prisão antes de levá-lo para delegacia;")
          .addField("5. Ao levar o suspeito para delegacia, sempre avisar: (O senhor tem o direito de permanecer calado e tudo que disser, poderá e será usado contra o senhor no tribunal); ")
      .addField("6. Só pode efetuar a prisão após levá-lo para a DP e ter colocado-o dentro da cela;")
                         .addField("7. Só ficar no rádio da Polícia (COPOM/Discord) quem estiver patrulhando/entrando;")
                         .addField("8. Obrigatório avisar para cidade constantemente quantos policiais estão em patrulhamento;")
                         .addField("9. A polícia não lê /ilegal a não ser a PF;")
                         .addField("10. Seguir o RP, sempre falar que o cidadão está algemado, que retirou a comunicação dele, que a cela está trancada, que você está revistando-o, solicitando RG, solicitando CNH;")
                         .addField("11. MANTER A FICHA CRIMINAL SEMPRE ATUALIZADA (TIRAR FOTO COM RG A MOSTRA E POSTAR NESTA ABA DO XCODE)")
                         .addField("12. Se for ficar ausente da cidade por mais de 4 dias, deve avisar seu Comandante (caso contrário, possível de punição);")
                         .addField("13. É permitido o mínimo de 2 PM para iniciar a PTR.")
                         .addField("14. Proibido alterações da viatura na oficina;")
                         .addField("15. É proibido estar com equipamentos militares enquanto estiver fora de serviço; (Somente o uso de pistola com 50 munições.)")
                         .addField("16. É proibido cometer crimes enquanto estiver fora de serviço; (Se for pego será exonerado IMEDIATAMENTE.)")
                         .addField("17. É necessário entrar no COPOM quando for patrulhar, e quando não estiver em patrulha, é necessário deixar o mesmo;")
                         .addField("18. Sempre seguir as leis a partir do Código Penal. Multa pode ser aplicada no local de abordagem, fiança apenas na DP;")
                         .addField("19. Só é considerado abordagem, quando o policial dar sinal de parada, pedir para descer ou encostar o veículo e levantar as mãos, caso contrário, poderá seguir normalmente;")
                         .addField("20. É proibido fazer emboscada para polícia;")
                         .addField("21. Sempre anunciar no /190 quando forem entrar patrulha (Ex: 3 PM em PTR), e se algum outro PM for se juntar a patrulha atualizar o numero de PM de em PTR;")
                         .addField("22. Quando estiver efetuando uma prisão sempre oferecer um advogado ao cidadão que esta sendo preso (Se tiver algum Advogado On);")
                         .addField("23. A PM de forma nenhuma pode destruir ou alterar o lugar do veiculo dos assaltantes no meio de ação, somente pode atirar no pneu do mesmo.")
                         .addField("24. Somente o BOPE pode pegar o caveirão e dirigir o mesmo, se um PM for pego dirigindo-o, sujeito a punições.")
                         .addField("25. Qualquer policial esta autorizado abater individuo portando armas de grosso calibre em vias públicas")
                         .addField("26. É proibido sequestrar PM quando ele esta em PTR.")
                         .addField("27. O BOPE tem a prioridade em ações, podendo aceitar reforço de PM, PF, EB.")
                         .addField("28. Somente o BOPE pode fazer PTR em favelas, em caso de trocação de tiro poderá solicitar reforço da PM e PF.")
                         .addField("29. Respeitar sempre as hierarquias.")
                         .addField("30. NÃO SERÁ TOLERADO DE FORMA ALGUMA O RP DE PM CORRUPTO, SUJEITO A EXONERAÇÕES E ADVERTÊNCIA.")
                         .addField("31. CAPACETE BALÍSTICO PROIBIDO")
      
                         .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://i.imgur.com/6FdvWdc.png")
        .setTimestamp()
        .setColor([208, 0, 0])
        .setFooter(message.client.user.username, message.client.user.avatarURL)
        c.edit(a)
      });
      sam.on('collect', async _ => {
      var a = new Discord.RichEmbed()
      .setTitle('**#14 – REGRAS DA SAMU**')
      .addField("1. É proibido a reanimar sem uniforme;")
      .addField("2. É proibido o uso de veículos comum com uniforme durante o horário de serviço;")
      .addField("3. É proibido o uso de veículos do SAMU sem estar fardado;")
      .addField("5. Para melhor atendimento, deve-se sempre perguntar o que aconteceu e você irá decidir oque melhor fazer com o paciente;")
      .addField("6. É obrigatório portar remédios e kit;")
      .addField("7. Sempre que estiver fardado, é necessário manter o respeito e ética;")
                 .addField("8. Em caso de resistência ou ameaças, deve-se chamar imediatamente a polícia, descrevendo a ocorrência;")
                 .addField("9. Não hesite em usar a arma taser sempre que houver qualquer tipo de ameaça a sua vida;")
                 .addField("10. Em uma ação, espere o término de longe para fazer seu atendimento. Ao chegar no local, é obrigatório perguntar no chat se a mesma terminou;")
                 .addField("12. Para comunicação via chat, é necessário utilizar /192;")
                 .addField("13. É proibido deixar veículos abandonados nas ruas, nesse caso é liberado o /dv;")
                 .addField("14. O paramédico que ficar AFK para farmar salário sofrerá punições;")
                 .addField("15. Para fazer um chamado ao SAMU, é necessário informar no campo de mensagem a causa de sua morte;")
                 .addField("16. Lembrando que o samu decide quem vive, quem morre ou quem vai para o hospital;")
                 .addField("17. O SAMU não pode portar armas ou cometer crimes enquanto estiver de farda e de serviço;")
                 .addField("18. O SAMU não pode ser assaltado/sequestrado/morto quando estiver em trabalho;")
                 .addField("19. O SAMU não lê /ilegal;")
                 .addField("20. Somente poderá tirar folga com no mínimo 2 Samu em plantão;")
                 .addField("21. Totalmente proibido Samu ser corrupto, passível de BAN")
                 .addField("22. Só aceitar chamados quando os players colocarem seu id no chamado (Ex: Sofri um acidente de carro ID 371);")
                 .addField("23. SAMU NÃO DECIDE SE A PESSOA MORRE;")
                 .setFooter("♕ 𝓑𝓻𝓩 ♕ Ⓡ", "https://i.imgur.com/6FdvWdc.png")
      .setTimestamp()
      .setColor([208, 0, 0])
      .setFooter(message.client.user.username, message.client.user.avatarURL)
      c.edit(a)
      });	 
    voltar.on('collect', async _ => {
            c.edit(embedB)
        });
    })
};

exports.help = {
    name: "regras"
  }