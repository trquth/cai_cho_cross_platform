/**
 * Created by tuan.lam on 9/13/2016.
 */
import { Platform, NativeModules, AsyncStorage } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';
import Utils from './Utils';
import InjectedManager from './InjectedManager';
import * as constants from '../assets/constant/constant';
var RNFS = require('react-native-fs');
var IPSNativeModules = NativeModules.IPSNativeModules;

let instance = null;

export default class DownloadFileManager extends InjectedManager {

    constructor() {
        super();
        if (!instance) {
            instance = this;
            this.registerPropertyChanged('settingsReducer.address');
        }
        return instance;
    }

    notifyPropertyChanged(pathName, oldValue, newValue) {
    }

    static get instance() {
        return new DownloadFileManager();
    }

    getDbPath(callBack) {
        let location = Utils.isIOS() ? 'LocalDatabase' : 'databases';
        IPSNativeModules.getDbPath(location, (dbPath) => {
            callBack(dbPath);
        });
    }

    checkFileExist(fileName, callback) {
        var flag = false

        this.getDbPath((dbPath) => {
            RNFS.exists(dbPath + fileName).then((result) => {
                //File checkFileExist')
                flag = result
                callback(flag)
            }
            ).catch((err) => {
                console.log(err)
                callback(flag)
            }
                )

        })

    }

    deleteFile(fileName) {
        console.log("deleteFile")
        this.getDbPath((dbPath) => {
            RNFS.unlink(dbPath + fileName).then(() =>
                console.log('File deleted')
            ).catch((err) =>
                console.log(err))
        });
    }

    downloadFile(fileName = 'tmpDownload.sqlite', complete) {
        var returnMess = {
            status: constants.RETURN_STATUS_ERROR,
            result: ""
        }
        this.getDbPath((dbPath) => {
            console.log('tesst tesst', dbPath)
            RNFetchBlob.config({
                fileCache: true,
                path: dbPath + fileName
            }).fetch('POST', `http://52.221.252.250:11001/StockControl/json/GetFile`, {
                'Content-Type': 'application/json'
            },
                JSON.stringify({
                    //Name: this.settingsReducer.deviceIdent,
                    Code: `OA34X7-p6jkv3y0qk2W5ujRRG` // 54.179.168.225
                    // Code: 'M1XMu0QtRjGX3R+EqCBfOw==' Code for local POSServer
                })).progress((received, total) => {
                    console.log(`received: ${received} -- total: ${total} -- progress: ${received / total}`);
                }).then((res) => {
                    // res.flush();
                    console.log('xdfdsafs', res.path());
                    returnMess.status = constants.RETURN_STATUS_SUCCESS
                    complete(returnMess);
                }).catch((err) => {
                    returnMess.status = constants.RETURN_STATUS_ERROR;
                    returnMess.result = err
                    complete(returnMess)
                }
                )
                ;
        });
    }
}