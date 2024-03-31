const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const config = require('../config/config');
const auth = require('../middleware/authLogin');
const postController = require('../controller/post');
const adminController = require('../controller/admin');
const admin_route = express();

// admin_route.set("views", path.join(__dirname, 'views'));
// admin_route.set("view engine", 'ejs');
// admin_route.use(express.json());
// admin_route.use(bodyParser.urlencoded({ extended: false }));
// admin_route.use(express.static(path.join(__dirname, 'public')));
admin_route.use(session({
	secret:config.sessionSecret,
	resave:true,
	saveUninitialized:true
}));

admin_route.get('/login', auth.isLogout, adminController.loadLogin);
admin_route.post('/login', adminController.verifyLogin);

admin_route.get('/logout', auth.isLogin, adminController.logout);
admin_route.post('/logout', adminController.verifyLogin);

admin_route.use('/dashboard', require('./dashboard'));

module.exports = admin_route;