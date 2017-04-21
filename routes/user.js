var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user.js');

/* GET users listing. */
router.get('/', function (requete, response) {
    UserController.findAll(function (status, json) {
        response.status(status).json(json);
    });
});
router.get('/:username', function (requete, response) {
    UserController.findByUsername(requete, function (status, json) {
        response.status(status).json(json);
    });
})
router.post('/', function (requete, response) {
    UserController.create(requete, function (status, json) {
        response.status(status).json(json);
    });
});
router.delete('/:id', function (requete, response){
    UserController.delete(requete, function(status, json){
        response.status(status).json(json);
    });
});
    router.put('/', function (requete, response){
    UserController.update(requete, function(status, json){
        response.status(status).json(json);
    });
});
module.exports = router;