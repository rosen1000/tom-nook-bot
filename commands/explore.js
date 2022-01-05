const Discord = require("discord.js");
const DropTable = require("../droptable/droptable");

module.exports = {
    name: "explore",
    category: null,
    description: "Explore the island!",
    use: "explore",
    enabled: true,
    /**
     * @param {Discord.Client} bot
     * @param {Discord.Message} message
     * @param {string[]} args
     */
    run: async (bot, message, args) => {
        DropTable.explore.dropLoot().then((drop) => {
            message.channel.send(JSON.stringify(drop));
            console.log(DropTable.explore);
        });
    },
};
