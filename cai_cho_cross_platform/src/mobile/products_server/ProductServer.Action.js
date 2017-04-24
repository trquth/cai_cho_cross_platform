const TYPE_PREFIX = "@@products_server/list_products/";
export const INITIALIZE_APP = TYPE_PREFIX + "INITIALIZE_APP";
import FetchHelper from '../../ultilities/FetchHelper';
import data from '../../assets/seed_data/data.json';
import * as constant from '../../assets/constant/constant';
import DownloadFileManager from '../../ultilities/DownloadFileManager';
import StockDao from '../dao/StockDao';


export function initializeApp() {
    downloadFile();
    return (dispatch, getState) => {

        return
        // return dispatch({
        //     type: INITIALIZE_APP,
        //     payload: FetchHelper.fetch(`http://${constant.ip}:11001/StockControl/json/GetFile`, {
        //         method: 'POST',
        //     })
        // })
    }
}

function downloadFile() {

    //DownloadFileManager.instance.deleteFile('database.sqlite')
    DownloadFileManager.instance.downloadFile('database.sqlite', (result) => {
        if (result.status === constant.RETURN_STATUS_SUCCESS) {
            console.log('RUN HERE A')
            resolve(result);

            DBManager.instance.closeDatabase(err => {
                if (!err) {
                    console.log('RUN HERE B')
                    DBManager.instance.openDatabase();
                }
            });
        } else {
            resolve(result)
        }
    });
}

export function loadAllStocktakeEntry(pageSize, pageIdx, complete) {
    return (dispatch) => {
        StockDao.getAllStockItems(pageSize, pageIdx, items => {
            const action = (data) => {
                return {
                    type: "STOCK_TAKE_LOAD_ALL_STOCK_ITEMS",
                    items: data,
                    pageIdx: pageIdx
                }
            };
            dispatch(action(items));
            complete();
        });
    }
}