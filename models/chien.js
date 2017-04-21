var mongoose = require('mongoose')
var chienSchema = mongoose.Schema({
    name: String,
    color: String,
    race: String,
    size: Number,
    age: Number,
    sex: String
});
var chien = mongoose.model('chien', chienSchema);
module.exports = chien;
