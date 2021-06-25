const express = require('express');
const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');

const router = express.Router();

router.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
router.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

router.get('/room/:room', (req, res) => res.render("room"))

router.post('/question/:room/:question/:action', QuestionController.index)
router.post('/create-room', RoomController.create)

module.exports = router;