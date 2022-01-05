const Discord = require("discord.js");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
require("./handlers/commandLoader").load(bot);

let env = require("dotenv").config({
    path: ".env",
}).parsed;

bot.on("ready", () => {
    console.log(
        `${bot.user.username} is ready to serve in ${bot.guilds.cache.size} servers!`
    );
});

bot.on("message", async (message) => {
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;

    let prefix = "~";
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLocaleLowerCase();

    if (message.content.startsWith(prefix)) {
        let commandFile = bot.commands.get(cmd);
        if (!commandFile) commandFile = bot.commands.get(bot.aliases.get(cmd));
        if (commandFile) commandFile.run(bot, message, args);
    }
});

bot.login(env.TOKEN);
