const csvman = require('../index.js');
const fs = require('fs');

// Main
(async () => {
    // Read the CSV file
    const csvFile = fs.readFileSync('./test.csv', 'utf8');

    console.log(`Input: ${csvFile}`);

    const csvData = await csvman.tools.csvBuilder(csvFile, ',');

    fs.writeFileSync('./output.json', JSON.stringify(csvData, null, 4));

    console.log(csvData.getColumnData('Meta row 1'))
    console.log(csvData.columns.map(c => c.name))
})();