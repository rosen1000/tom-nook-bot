const mongoose = require("mongoose");

const InventorySchema = mongoose.Schema({
    backpack: Array,
});

module.exports = mongoose.model("inventory", InventorySchema);
