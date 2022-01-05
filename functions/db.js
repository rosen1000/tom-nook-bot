const mongoose = require("mongoose");

const UserModel = require("../models/users");
const InventoryModel = require("../models/users"); // TODO: create inventory model

module.exports = {
    user: {
        create(name, id) {
            let user = new UserModel({
                _id: id,
                name,
            });
            user.save().catch((e) => {
                if (e) console.log(e);
            });
            return 0;
        },
        get(id) {
            UserModel.findById(id, (e, user) => {
                if (e) return null;
                return user;
            });
        },
    },
    inventory: {
        get(id) {
            InventoryModel.findById(id, (e, inv) => {
                if (e) return null;
                return inv;
            });
        },
        addItem(id, item) {
            InventoryModel.findById(
                id,
                /** @param {Inventory} inv */ (e, inv) => {
                    if (e) return null;
                    inv.backpack.push(item);
                    inv.save();
                    return 0;
                }
            );
        },
        removeItem(id, item) {
            InventoryModel.findById(
                id,
                /** @param {Inventory} inv */ (e, inv) => {
                    if (e) return null;
                }
            );
        },
    },
};
let env = require("dotenv").config({
    path: require("path").join(__dirname, "..", ".env"),
}).parsed;
mongoose.connect(env.DB, { useNewUrlParser: true, useUnifiedTopology: true });
