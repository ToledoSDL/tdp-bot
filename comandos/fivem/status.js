const cheerio = require("cheerio");
const Discord = require("discord.js");
const rp = require("request-promise");

const URL = "https://www.trackyserver.com/server/brz-roleplay-513299";
module.exports.run = async (bot, message, args) => {
    const headerObj = {
        uri: URL
    };
    rp(headerObj)
        .then(html => {
            var $ = cheerio.load(html);

            const players = $("#general > table > tbody > tr:nth-child(5) > td:nth-child(2) > strong").text()
            const status = $("#general > table > tbody > tr:nth-child(4) > td:nth-child(2)").text()
            const embed = new Discord.RichEmbed()
                .setTitle("Hawk RolePlay 🦅")
                .setThumbnail("https://i.imgur.com/yQBcarl.png")
                .setDescription(` **IP:** jogar.hawkrp.com\n**Players: **${players}\n**Status**: ${status}`)
                .setColor("#8904B1")
                message.channel.send(embed)
        })
}
module.exports.help = {
    name: "status"
}