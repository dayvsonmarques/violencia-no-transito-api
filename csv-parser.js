const db = require('./config/db.js');
const acidentesRepository = require('./repository/acidentesRepository');

const csv = require('csv-parser');
const fs = require('fs');

fs.createReadStream('./acidentesREC2019.csv')
  .pipe(csv({
    separator: ';'
  }))
  .on('data', (row) => {
    console.log(row);
    acidentesRepository.create(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed.');
  });
