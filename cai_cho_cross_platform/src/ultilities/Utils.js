/**
 * Created by sts on 9/8/16.
 */
import { Platform, NativeModules } from 'react-native';

var IPSNativeModules = NativeModules.IPSNativeModules;


export default class Utils {

    static isIOS() {
        if (Platform.OS === 'ios')
            return true;
        else
            return false;
    }

    static hex2ASCII(str1) {
        console.log('hex2ASCII: ', str1);
        var hex = str1;
        var str = '';
        for (var n = 0; n < hex.length; n += 2) {
            str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
        }
        return str;
    }


    static ALPHA_SORT = false;

    static getNewFontSize(rowId) {
        var fontSize = 15;
        var length = Math.ceil(rowId.toString().length / 2);
        if (length > 1) {
            // console.warn("length", length);
            fontSize = fontSize - length;
        }
        return fontSize;
    }
}