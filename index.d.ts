declare namespace NodeJS {
    export interface ProcessEnv {
        TOKEN: String;
        DB: String;
    }
}

declare interface User {
    _id: string;
    nickname: string;
}

declare interface Inventory {
    backpack: Array<Item>;
    save(): Promise<Inventory>;
}

declare interface Item {
    name: string;
    count: number;
}

declare class DB {
    user: {
        create(name: string, id: string): 0;
        get(id: string): null | User;
    };
    inventory: {
        get(id: string): null | User;
        addItem(id: string, item: string): null | 0;
        removeItem(id: string, item: string): null | 0;
    };
}
