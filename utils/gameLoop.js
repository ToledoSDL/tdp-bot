const Client = require('discord.js').Client;

let currentPresence = 0;
/**
 * 
 * @param {Client} client 
 */
async function run(client) {
    let presence = presences[currentPresence];
    if(typeof presence === 'function') {
        presence = presence(client);
    }

    console.log(`Updating presence to '${presence.name}'`);
    client.user.setPresence({
        game: presence,
        status: 'online'
    });

    currentPresence++;
    if (currentPresence >= presences.length) {
        currentPresence = 0;
    }

    setTimeout(() => run(client), 60000);
}

/**
 * @type {(DiscordRichPresenceGame|DiscordRichPresenceSupplier)[]}
 */
const presences = [
    {
        name: 'Faça parte da minha equipe!',
        url: 'https://discord.gg/dUSKhsp',
        type: 1
    }, {
        name: 'Para saber meus comandos digite !ajuda',
        type: 0
    }, 
    (client) => ({
        name: `${client.users.size} usuários nesta comunidade! YAY`,
        type: 3
    }), {
        name: 'Sendo feliz com o meu criador! :)',
        type: 3
    }, {
        name: 'Meu criador é o ToledoSDL#0001',
        url: 'https://twitch.tv/toledosdl',
        type: 1
    }
];

/**
 * @callback DiscordRichPresenceSupplier
 * @param {Client} client
 * @returns {DiscordRichPresenceGame}
 */

/**
 * @typedef DiscordRichPresence
 * @type {object}
 * @property {DiscordRichPresenceGame} game - The game presence.
 */

/**
 * @typedef DiscordRichPresenceGame
 * @type {object}
 * @property {string} name - The game name.
 * @property {string} [url] - The url.
 * @property {number} type - The type of the game.
 */

 module.exports.run = run;
