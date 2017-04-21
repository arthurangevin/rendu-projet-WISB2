var mongoose = require('mongoose')
var likeSchema = mongoose.Schema({
    id_liker: String,
    id_liked: String
});
var like = mongoose.model('like', likeSchema);
module.exports = like;

