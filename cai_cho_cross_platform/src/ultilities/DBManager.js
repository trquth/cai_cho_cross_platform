/**
 * Created by sts on 9/15/16.
 */
import { NativeModules } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import Utils from './Utils';
import DownloadFileManager from './DownloadFileManager';
var IPSNativeModules = NativeModules.IPSNativeModules;

let instance = null;

export default class DBManager {

    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
    }

    static get instance() {
        return new DBManager();
    }

    init() {
        let location = Utils.isIOS() ? 'LocalDatabase' : 'databases';
        IPSNativeModules.copyDemoDB('', location, (error) => {
            console.log(error);
        });
    }

    createMissingTables() {
        const cmds = ['CREATE TABLE IF NOT EXISTS BarcodeEntry ( ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, Code TEXT, StockItemID INTEGER NOT NULL);',
            'CREATE UNIQUE INDEX BarcodeEntry_Code ON BarcodeEntry (Code ASC);',
            'CREATE TABLE IF NOT EXISTS TransferEntry (ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, toLocationID INTEGER NULL, fromLocationID INTEGER NULL, Reference TEXT NOT NULL);',
            'CREATE TABLE IF NOT EXISTS TransferItemEntry (TransferID INTEGER NOT NULL, Line INTEGER NOT NULL, StockItemID INTEGER NOT NULL, Quantity REAL NOT NULL, PRIMARY KEY (TransferID, Line));',
            'CREATE TABLE IF NOT EXISTS ReceiveEntry (ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL);',
            'CREATE TABLE IF NOT EXISTS ReceiveItemEntry (ReceiveID INTEGER NOT NULL, Line INTEGER NOT NULL, StockItemID INTEGER NOT NULL, Quantity REAL NOT NULL, Value REAL NOT NULL, PRIMARY KEY (ReceiveID, Line));',
            'CREATE TABLE IF NOT EXISTS ReceiveEntryDetail (ReceiveID INTEGER PRIMARY KEY  NOT NULL  UNIQUE , invoicedate DATETIME, invoicenumber TEXT, locationid INTEGER, supplierid INTEGER, details TEXT);',
            'CREATE TABLE IF NOT EXISTS IdealVersion (Version integer NOT NULL UNIQUE, DateUpdated DATETIME NOT NULL UNIQUE );',
            'CREATE TABLE IF NOT EXISTS StockTakeEntry (ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL UNIQUE, StockItemID INTEGER NOT NULL , LocationID integer NOT NULL , Quantity REAL NOT NULL );'];

        for (let i = 0; i < cmds.length; i++) {
            const cmd = cmds[i];
            this.executeSql(cmd, err => {
                if (err)
                    console.log(err);
            })
        }
    }

    openDB(isRealDB, complete) {
        var dbName = isRealDB ? 'database.sqlite' : 'demo.sqlite';

        this.db = SQLite.openDatabase({ name: dbName }, () => {
            this.createMissingTables();
            if (complete)
                complete();
        }, err => {
            if (complete)
                complete(err);
            console.log("Open SQL Error: " + err);
        });
        return this.db;
    }

    openDatabase(complete) {
        if (true) {
            DownloadFileManager.instance.checkFileExist("database.sqlite", (result) => {
                console.log("openDatabasecheckFile: ", result)
                if (result) {
                    this.openDB(true, complete);
                } else {
                    complete();
                }
            })
        } else {
            this.openDB(false, complete);
        }

    }

    closeDatabase(complete) {
        if (this.db) {
            this.db.close(() => {
                this.db = null;
                if (complete)
                    complete();
            }, err => {
                if (complete)
                    complete(err);
            });
        }
        else
            complete();
    }

    executeSql(query, complete) {
        console.log('executeSql ', query)
        this.executeUpdateSql(query, (results, err) => {
            if (err) {
                complete(null, err);
            }
            else {
                let rows = results.rows.raw();
                console.log('result', results);
                complete(rows);
            }
        });
    }

    executeUpdateSql(query, complete) {
        if (!this.db) {
            this.openDatabase(() => {
                console.log("after openDatabase")
                if (this.db) {
                    let error = null;
                    this.db.transaction((tx) => {
                        tx.executeSql(query, [], (tx, results) => {
                            complete(results);
                        }, err => {
                            error = { executeSql: err };
                        });
                    }, err => {
                        error = { ...error, transaction: err };
                        console.log(error);
                        complete(null, error);
                    });
                } else {
                    complete(null, "coincard");
                }
            });
        }
        else {
            let error = null;
            this.db.transaction((tx) => {
                tx.executeSql(query, [], (tx, results) => {
                    complete(results);
                }, err => {
                    error = { executeSql: err };
                });
            }, err => {
                error = { ...error, transaction: err };
                console.log(error);
                complete(null, error);
            });
        }
    }
}