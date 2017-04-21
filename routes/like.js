var express = require('express');
var router = express.Router();
var likeController = require('../controllers/like.js');

router.get('/match-liker/:id', function (requete, response) {
    likeController.findUserLiker(requete, function (status, json) {
        response.status(status).json(json);
    });

});

router.get('/match-liked/:id', function (requete, response) {
    likeController.findUserLiked(requete, function (status, json) {
        response.status(status).json(json);


    });
});

router.post('/', function (requete, response) {
    likeController.create(requete, function (status, json) {
        response.status(status).json(json);
    });

});   

module.exports = router;
