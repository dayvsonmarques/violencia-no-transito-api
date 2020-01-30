const csvjson = require('csvjson');
const fs = require('fs');

const db = require('./config/db.js');
const acidentesRepository = require('./repository/acidentesRepository');


var data = fs.readFileSync(
  'acidentesREC2019_resume.csv', {
    encoding: 'utf8'
  });

var options = {
  delimiter: ';', // optional
  quote: '"' // optional
};

let dados = csvjson.toObject(data, options);

console.log(dados);
