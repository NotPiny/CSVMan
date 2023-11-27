const { CSVData } = require('../classes/csvData');

/**
 * @param {string} input
 * @param {string} seperator
 * @returns {Promise<CSVData>}
*/
module.exports = async function (input, seperator) {
    const csvData = new CSVData();

    const lines = input.split('\n');

    /**
     * [0] = meta data ("Type 1", "Type 2", "Type 3"... etc)
     * [1..n] = data (1, 2, 3... etc)
    */
    const metaData = lines[0].split(seperator);
    const data = lines.slice(1);

    csvData.metadata = metaData;
    csvData.data = data;
    csvData.columns = metaData.map((metaDataName, index) => {
        return {
            name: metaDataName,
            data: [
                ...data.map((dataRow) => {
                    return dataRow.split(seperator)[index];
                })
            ]
        }
    })

    return csvData;
}