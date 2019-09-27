const router =require('express').Router();
const playerController = require('../controller/player.controller');

router.get('/',playerController.getPlayers);

module.exports= router;