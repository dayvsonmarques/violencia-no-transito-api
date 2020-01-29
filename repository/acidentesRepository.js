var mongoose = require('mongoose');
AcidentesSchema = require('../models/acidentes');

var Acidentes = mongoose.model('acidentes', AcidentesSchema);
module.exports = Acidentes;
