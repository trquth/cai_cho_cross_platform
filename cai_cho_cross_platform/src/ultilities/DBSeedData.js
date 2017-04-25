import SQLite from 'react-native-sqlite-storage';

let instance = null;

export default class DBSeeData {
    constructor() {
        if (instance) {
            instance = this;
        }
    }

    static get instance() {
        return new DBSeeData();
    }

    openDatabase() {
        return SQLite.openDatabase("cai_cho_database_mobile.db", "1.0", () => { }, () => { });
    }

    createDatabase(db) {
        db.executeSql('DROP TABLE IF EXISTS product;');

        let cmd_product = `CREATE TABLE IF NOT EXISTS product(
            id TEXT PRIMARY KEY NOT NULL,
            product_name TEXT NOT NULL,
            price FLOAT TEXT NOT NULL,
            image_url TEXT,
            description TEXT
        )`;

        db.executeSql(cmd_product)
    }
}