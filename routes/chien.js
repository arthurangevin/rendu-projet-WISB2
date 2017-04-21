var express = require('express');
var router = express.Router();
var chienController = require('../controllers/chien.js');

/* GET chiens listing. */
router.get('/', function (requete, response) {
    chienController.findAll(function (status, json) {
        response.status(status).json(json);
    });
});
router.get('/:chienname', function (requete, response) {
    chienController.findBychienname(requete, function (status, json) {
        response.status(status).json(json);
    });
})
router.post('/', function (requete, response) {
    chienController.create(requete, function (status, json) {
        response.status(status).json(json);
    });
});
router.delete('/:id', function (requete, response){
    chienController.delete(requete, function(status, json){
        response.status(status).json(json);
    });
});
    
    router.put('/', function (requete, response){
    chienController.update(requete, function(status, json){
        response.status(status).json(json);
    });
});
module.exports = router;