const express = require('express')
const mongoose = require("mongoose");
const app = express()
const port = 3005
const Admin = require('./src/backend/models/blog/admin');
const jwt_generate = require('./src/backend/util/jwt_generate');
app.use(express.json());

app.use(express.urlencoded({ extended: true }))

mongoose
    .connect(
        "mongodb+srv://nguyenphilongit123:Long10092003@cluster0.pbxpwii.mongodb.net/blog"
    )
    .then(() => {
        console.log("Server listen in port: ", port)
        app.listen(port);
    })
    .catch((err) => {
        console.log(err);
    });

app.post('/api/auth/login', async (req, res) => {
    try {
        const { email, password } = await req.body;
        const adminData = await Admin.findOne({ email: email });
        if (adminData) {
            if (adminData.is_admin == true) {
                if (password && password === adminData.password) {
                    const torken = jwt_generate(adminData.secretKey, adminData.username);
                    res.json({
                        name: adminData.name,
                        user_id: adminData.id,
                        torken: torken
                    })
                } else {
                    res.status(402).json({
                        message: "Password is incorrect!"
                    })
                }
            } else {
                res.status(400).json({ message: "You don't have permission to access this! Contact at admin@gmail.com for help." });
            }
        } else {
            res.status(401).json({ message: "Email not found!" });
        }
    } catch (error) {
        console.log(error.message);
    }
})

app.post('/api/auth/logout', async (req, res) => {
    try {
        res.json({
            name: '',
            user_id: '',
            torken: ''
        })

    } catch (error) {
        console.log(error.message);
    }
})
