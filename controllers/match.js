var Match = require('../models/match.js');
var matchController = {

    create: function (requete, callback) {
        var match = requete.body; 
        Match.create(match, function (error, match) {
            callback(200, match);
        });
    },

    findByUserID: function (requete, callback) {
        var Id_user = requete.params.id;
        Match.find({
            id_user: Id_user
        }, function (error, users) {
            callback(200, users);
        });
    }
}
module.exports = matchController;
