const express = require("express");
const session = require('express-session');
const auth = require('../middleware/authLogin');
const adminController = require('../controller/admin');
const admin_route = express.Router();

const sessionSecret = Date.now().toString();

admin_route.use(session({
	secret: sessionSecret,
	resave: false,
	saveUninitialized: true,
}));

admin_route.use((req, res, next) => {
	const userAgent = req.headers['user-agent'];
	if (/Mobile|Android|iPhone|iPad/i.test(userAgent)) {
		res.redirect("/error")
		return
	} else {
		next()
	}
});


admin_route.get('/login', adminController.loadLogin);
admin_route.post('/login', adminController.verifyLogin);

admin_route.get('/logout', adminController.logout);
admin_route.post('/logout', adminController.verifyLogin);

admin_route.use('/dashboard', require('./dashboard'));

module.exports = admin_route;
