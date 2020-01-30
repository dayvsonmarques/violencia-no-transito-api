var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AcidentesSchema = new Schema({
  tipo: String,
  situacao: String,
  data: String,
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
  ciclista: Number,
  pedestre: Number,
  onibus: Number,
  caminhao: Number,
  viatura: Number,
  outros: Number,
  vitimas: Number,
  vitimasfatais: Number
});

module.exports = AcidentesSchema;
