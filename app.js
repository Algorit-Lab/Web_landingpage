const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require('cookie-parser')
// const partials = require("express-partials");
// const cookieParser = require("cookie-parser");
// const ejs = require('ejs');
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");

const postController = require("./src/backend/controller/post");

const app = express();
const port = 3000;
// const http = require('http');
// const server = http.createServer(app);


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

app.set("views", path.join(__dirname, "src", "frontend", "views"));
app.set("view engine", "ejs");
// app.use(partials());

app.use(express.json());
// app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "src", "frontend", "public")));
app.use(fileUpload());

app.use('/', require('./src/backend/routes/home'));
// app.use("/blog", require("./routes/blog"));
app.use("/product", require("./src/backend/routes/product"));
app.use("/services-support", require("./src/backend/routes/service_support"));
app.use("/application-areas", require("./src/backend/routes/application_area"));
app.use("/technologies", require("./src/backend/routes/technology"));
app.use("/company", require("./src/backend/routes/company"));
app.use("/template", require("./src/backend/routes/template"));
app.use("/admin", require("./src/backend/routes/admin"));
app.use("/error", (req, res) => {
    res.render("home/pages/error", { title: "Error" })
})
