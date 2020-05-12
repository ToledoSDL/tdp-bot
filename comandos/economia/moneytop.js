const Database = require("../../database.js");
const Discord = require('discord.js');
const colours = require("../colours.json")

exports.run = (client, message) => {

  Database.Users.find().sort([
    ['coins', 'descending']
  ]).exec((err, res, user, username) => {
    if (err) console.log(err);
    let i = 0;
    let embed = new Discord.RichEmbed()
      .setTitle("Top **10** - Money")
      .setDescription('Use `!daily` para coletar coins diariamente.')
      .setThumbnail(client.user.avatarURL)
      .setFooter(message.author.tag, message.author.avatarURL)
      .setTimestamp()
    if (res.length === 0) { //se o resultado for igual a 0
      embed.setColor(colours.red_light);
      embed.addField("Nenhum usuario no banco de dados encontrado", "Colete coins para aparecer aqui.")
    } else if (res.length < 10) { // se o resultado menor q 5
      embed.setColor(colours.gold);
      for (i = 0; i < res.length; i++) {
        let member = client.users.get(res[i]._id)
        if (member) {
          embed.addField(`**Money**: ${res[i].coins}`, `**${i + 1}**. ${member}`);
        } else {
          embed.addField(`**Money**: ${res[i].coins}`, `**${i + 1}**. ${member}`);
        }
      }
    } else {
      embed.setColor(colours.gold);
      for (i = 0; i < 5; i++) {
        let member = client.users.get(res[i]._id)
        embed.addField(`**Money**: ${res[i].coins}`, `**${i + 1}**. ${member}`); //adicionamos na embed o nome e os coins do usuario
      }
    }
    message.channel.send(embed)
  })
}
exports.help = {
  name: "cointop",
  aliases: ["topcoins", "topmoney", "moneytop"]
}