/**
 * Created by tuan.lam on 9/13/2016.
 */
import { Platform, NativeModules, AsyncStorage } from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';
import Utils from './Utils';
import InjectedManager from './InjectedManager';
import * as constants from '../assets/constant/constant';
var IPSNativeModules = NativeModules.IPSNativeModules;

let instance = null;

export default class DownloadFileManager {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance;
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
            RNFetchBlob.fs.exists(dbPath + fileName).then((result) => {
                flag = result;
                callback(flag);
            }).catch(() => {
                callback(flag)
            });
        })

    }

    deleteFile(fileName) {
        this.getDbPath((dbPath) => {
            RNFetchBlob.fs.unlink(dbPath + fileName)
                .then(() => { })
                .catch((err) => { })
        });
    }

    downloadFile(fileName = 'tmpDownload.sqlite', complete) {
        var returnMess = {
            status: constants.RETURN_STATUS_ERROR,
            result: ""
        }
        this.getDbPath((dbPath) => {
            RNFetchBlob.config({
                fileCache: true,
                path: dbPath + fileName
            }).fetch('POST', `http://52.221.252.250:11001/StockControl/json/GetFile`, {
                'Content-Type': 'application/json'
            },
                JSON.stringify({
                    Code: `OA34X7-p6jkv3y0qk2W5ujRRG`
                })).then((res) => {
                    console.log('path', res.path());
                    returnMess.status = constants.RETURN_STATUS_SUCCESS
                    complete(returnMess);
                }).catch((err) => {
                    returnMess.status = constants.RETURN_STATUS_ERROR;
                    returnMess.result = err
                    complete(returnMess)
                })
                ;
        });
    }
}