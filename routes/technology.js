const express = require('express');
const path = require('path');
const router = express.Router();

router.get("/", (req, res) => {

    res.render('home/pages/technology', { title: 'Technologies' });
});

module.exports = router;
