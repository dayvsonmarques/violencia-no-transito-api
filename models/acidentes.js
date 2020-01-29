var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AcidentesSchema = new Schema({
  tipo: String,
  situacao: String,
  data: Date,
  hora: String,
  bairro: String,
  endereco: String,
  numero: String,
  complemento: String, 
  natureza: String,
  descricao: String,
  auto: Number,
  moto: Number,
  ciclom: Number,
  pedestre: Number,
  onibus: Number,
  caminhao: Number,
  viatura: Number,
  outros: Number,
  vitimas: Number,
  vitimasFatais: Number
});

module.exports = AcidentesSchema;
