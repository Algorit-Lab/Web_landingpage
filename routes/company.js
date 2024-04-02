const express = require('express');
const path = require('path');
const router = express.Router();

router.get("/", (req, res) => {

    res.render('home/pages/company', { title: 'Company' });
});

module.exports = router;
