const express = require('express');
const path = require('path');
const router = express.Router();

router.get("/", (req, res) => {

    res.render('home/pages/service_support', { title: 'Services & Support' });
});

module.exports = router;
