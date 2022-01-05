const { createItem, createLootTable } = require("drop-loot");

// Fruits
let fruits = createLootTable("fruits");
fruits.add(createItem("Cherry"));

// Resources
let resources = createLootTable("resources");
resources.add(createItem("Stone"));
resources.add(createItem("Tree branch"));

let exploreTable = createLootTable("island", 5);
// exploreTable.add(resources, { isAlways: true, isUnique: true, minStack: 5, maxStack: 12 });
exploreTable.add(createItem("test1"), { minStack: 5, maxStack: 20 });
exploreTable.add(resources, { minStack: 5, maxStack: 20 });
module.exports = {
    explore: exploreTable,
};
