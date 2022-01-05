const fs = require("fs");
const ascii = require("ascii-table");
const table = new ascii("Commands", "Status");
const path = require("path");

function load(bot) {
    fs.readdirSync(path.join(__dirname, "..", "commands"))
        .filter((f) => f.endsWith(".js"))
        .forEach((file) => {
            let pull = require(path.join(__dirname, "..", "commands", file));
            if (pull.name && pull.enabled) {
                bot.commands.set(pull.name, pull);
                if (pull.aliases && Array.isArray(pull.aliases)) {
                    pull.aliases.forEach((al) =>
                        bot.aliases.set(al, pull.name)
                    );
                }
                table.addRow(file, "✅");
            } else {
                table.addRow(file, "❌");
            }
        });
}

module.exports = { load };
