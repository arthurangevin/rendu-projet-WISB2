var Chien = require('../models/chien.js');
var chienController = {
    findAll: function (callback) {
        Chien.find({}, function (error, chiens) {
            callback(200, chiens);
        });
    },
    findByChienname: function (requete, callback) {
        var Chienname = requete.params.chienname;
        Chien.find({
            chienname: chienname
        }, function (error, chiens) {
            callback(200, chiens);
        });
    },
    create: function (requete, callback) {
        var chien = requete.body; 
        Chien.create(chien, function (error, chien) {
            callback(200, chien);
        });
    },
    delete: function (requete,callback){
        var chienId = requete.params.id;
        Chien.remove({_id: chienId}, function(error, chien) {
            callback(200, chien);
            
        });
        
    },
    update: function (requete, callback){
        var chienUpdate = requete.body;
        Chien.findBychienUpdate(chienUpdate._id, chienUpdate, function (error, chienUpdated) {
        callback(200, chienUpdated);
    });

}
}
module.exports = chienController;