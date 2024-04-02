const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
// const partials = require("express-partials");
// const cookieParser = require("cookie-parser");
// const ejs = require('ejs');
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");

const postController = require("./controller/post");

const app = express();
const port = 3000;
const http = require('http');
const server = http.createServer(app);


mongoose
	.connect(
		"mongodb+srv://nguyenphilongit123:Long10092003@cluster0.pbxpwii.mongodb.net/blog"
	)
	.then(() => {
		app.listen(port);
	})
	.catch((err) => {
		console.log(err);
	});

app.get("/test/:postID", postController.getPostByID, async (req, res, next) => {
	const post = req.post;
});

app.set("views", path.join(__dirname, "views"));
console.log(
	"🚀 ~ path.join(__dirname, 'views'):",
	path.join(__dirname, "views")
);
app.set("view engine", "ejs");
// app.use(partials());

app.use(express.json());
// app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "ckeditor5", "build")));
app.use(fileUpload());

// app.use("/middleware", require("./middleware/login"));
// Setup router
app.use('/', require('./routes/home'));
// app.use("/blog", require("./routes/blog"));
app.use("/product", require("./routes/product"));
app.use("/services-support", require("./routes/service_support"));
app.use("/application-areas", require("./routes/application_area"));
app.use("/technologies", require("./routes/technology"));
app.use("/company", require("./routes/company"));
app.use("/template", require("./routes/template"));
app.use("/admin", require("./routes/admin"));
app.use("/talk", require("./middleware/talk"));
