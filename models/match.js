var mongoose = require('mongoose')
var matchSchema = mongoose.Schema({
    id_User_liker: String,
    id_User_liked: String,
    id_like_a: String,
    id_like_b: String
    
});
var match = mongoose.model('match', matchSchema);
module.exports = match;
