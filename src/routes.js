const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.render("index"))
router.get('/room', (req, res) => res.render("room"))
router.get('/create-pass', (req, res) => res.render("create-pass"))

module.exports = router;