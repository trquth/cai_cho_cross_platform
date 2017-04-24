import DBManager from '../../ultilities/DBManager';
import Utils from '../../ultilities/Utils';

export default class StockDao {
    static getAllStockItems(pageSize, pageIdx, complete) {
        const rowOffset = pageSize * pageIdx;
        let cmd = `SELECT * FROM StockItems
                   Where Code != 'Deleted'
                   ${Utils.ALPHA_SORT ? "ORDER BY description" : ""} 
                   LIMIT ${pageSize} OFFSET ${rowOffset}
                   `;
        DBManager.instance.executeSql(cmd, complete)
    }
}