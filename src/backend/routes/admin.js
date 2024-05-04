const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const config = require('../config/config');
const auth = require('../middleware/authLogin');
const postController = require('../controller/post');
const adminController = require('../controller/admin');
const admin_route = express.Router();

admin_route.use(session({
	secret: config.sessionSecret,
	resave: true,
	saveUninitialized: true
}));

admin_route.use((req, res, next) => {
	const userAgent = req.headers['user-agent'];

	if (/Mobile|Android|iPhone|iPad/i.test(userAgent)) {
		res.redirect("/error")
	} else {
		next();
	}
})

admin_route.get('/login', auth.isLogout, adminController.loadLogin);
admin_route.post('/login', adminController.verifyLogin);

admin_route.get('/logout', auth.isLogin, adminController.logout);
admin_route.post('/logout', adminController.verifyLogin);

admin_route.use('/dashboard', require('./dashboard'));

module.exports = admin_route;
