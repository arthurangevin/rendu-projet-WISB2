var Like = require('../models/like.js');
var likeController = {

    create: function (requete, callback) {
        var like = requete.body; 
        Like.create(like, function (error, like) {
            callback(200, like);
        });
    },
      findUserLiked: function (requete, callback) {
        var Id_liked = requete.params.id;
        Like.find({
            id_liked: Id_liked
        }, function (error, likes) {
            callback(200, likes);
        });
    },
     findUserLiker: function (requete, callback) {
        var Id_liker = requete.params.id;
        Like.find({
            id_liker: Id_liker
        }, function (error, likes) {
            callback(200, likes);
        });
    }
}

module.exports = likeController;
