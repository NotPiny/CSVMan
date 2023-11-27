class CSVData {
    /**
     * @type {CSVDataMetaRow[]}
    */
    metadata = [];

    /**
     * @type {CSVDataRow[]}
    */
    data = [];

    /**
     * @type {CSVDataColumn[]}
    */
    columns = [];

    /**
     * @param {string} columnName
    */
    getColumnData(columnName) {
        return this.columns.find(c => c.name === columnName);
    }
}

class CSVDataMetaRow {
    /**
     * @type {string}
    */
    name = "";
}

class CSVDataRow {
    /**
     * @type {any}
    */
    value = "";
}

class CSVDataColumn {
    /**
     * @type {CSVDataMetaRow}
    */
    name = null;

    /**
     * @type {CSVDataRow[]}
    */
    data = [];
}

module.exports = {
    CSVData,
    CSVDataMetaRow,
    CSVDataRow
};