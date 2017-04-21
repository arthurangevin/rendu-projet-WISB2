var express = require('express');
var router = express.Router();
var matchController = require('../controllers/match.js');

router.get('/:id', function (requete, response) {
    console.log(matchController);
    matchController.findByUserID(requete, function (status, json){
        response.status(status).json(json);
    });
});

module.exports = router;