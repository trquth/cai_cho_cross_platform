/**
 * Created by sts on 10/3/16.
 */

// Inject into Redux Store
export default class InjectedManager {

    constructor() {
        this.notifiedProperties = [];
    }

    registerPropertyChanged(pathName) {
        this.notifiedProperties.push(pathName);
    }

    checkProperyChanged(state) {
        for (let i = 0; i < this.notifiedProperties.length; i++) {
            const propPath = this.notifiedProperties[i];
            this.checkValue(propPath, this, state);
        }
    }

    checkValue(propPath, v1, v2) {
        var p1 = v1;
        var p2 = v2;
        const comps = propPath.split('.');
        try {
            for (var i = 0; i < comps.length; i++) {
                p1 = p1[comps[i]];
                p2 = p2[comps[i]];
            }
        } catch (error) {
            console.log('Something wrong with property path');
        } finally {
            if (p1 != p2 && i == comps.length)
                this.notifyPropertyChanged(propPath, p1, p2);
        }
    }

    notifyPropertyChanged(pathName, oldValue, newValue) {

    }

    static get instance() {
        return null;
    }

    storeChanged(state) {
        this.checkProperyChanged(state);
        const settingsReducer = state.settingsReducer;
        this.settingsReducer = {
            enableConnect: settingsReducer.enableConnect,
            logging: settingsReducer.logging,
            identity: settingsReducer.identity,
            deviceId: settingsReducer.deviceIdent,
            address: settingsReducer.address
        }
    }
}