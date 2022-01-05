const Discord = require("discord.js");
/** @type {DB} db */
const db = require("../functions/db");

module.exports = {
    name: "start",
    category: null,
    description: "Start your adventure!",
    use: "start",
    enabled: true,
    /**
     * @param {Discord.Client} bot
     * @param {Discord.Message} message
     * @param {string[]} args
     */
    run: async (bot, message, args) => {
        let nickname = args.join(" ");
        db.user.create(
            nickname != "" ? nickname : message.author.nickname,
            message.author.id
        );
        message.channel.send("Created your profile!");
    },
};
