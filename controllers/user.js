var User = require('../models/user.js');
var UserController = {
    findAll: function (callback) {
        User.find({}, function (error, users) {
            callback(200, users);
        });
    },
    findByUsername: function (requete, callback) {
        var Username = requete.params.username;
        User.find({
            Username: Username
        }, function (error, users) {
            callback(200, users);
        });
    },
    create: function (requete, callback) {
        var user = requete.body; 
        User.create(user, function (error, user) {
            callback(200, user);
        });
    },
    delete: function (requete,callback){
        var userId = requete.params.id;
        User.remove({_id: userId}, function(error, user) {
            callback(200, user);
            
        });
        
    },
    update: function (requete, callback){
        var UserUpdate = requete.body;
        User.findByUserUpdate(UserUpdate._id, UserUpdate, function (error, UserUpdated) {
        callback(200, UserUpdated);
    });

}
}
module.exports = UserController;
