const express = require('express');
const path = require('path');
const router = express.Router();

router.get("/", (req, res) => {

    res.render('home/pages/application_area', { title: 'Application Areas' });
});

module.exports = router;
