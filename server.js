const express = require('express')
const mongoose = require("mongoose");
const app = express()
const port = 3005
const Admin = require('./src/backend/models/blog/admin');
const jwt_generate = require('./src/backend/util/jwt_generate');

const accessService = require('./src/backend/services/access');
const locationService = require('./src/backend/services/location');
const deviceService = require('./src/backend/services/devices');
// const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
// Configure CORS
// app.use(cors({
//     origin: 'http://localhost:2509', // Replace with your frontend's origin
//     methods: ['POST', 'GET'], // Specify allowed HTTP methods
//     allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
//     maxAge: 600, // Set preflight cache time (in seconds)
// }));
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

app.post('/auth/login', async (req, res) => {
    try {
        console.log("getiing logging")
        const { email, password } = await req.body;
        if (!email || !password) res.status(400).json({ message: "Missing email or password!" });
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

app.post('/auth/logout', async (req, res) => {
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

app.post("/userdata", async (req, res) => {
    try {
        const access = await accessService.createAccess({
            ip: req.body.ipAddress,
            browser: req.body.browser,
            browserVersion: req.body.browserVersion,
        });

        const location = await locationService.createLocation({
            ip: req.body.ipAddress,
            country: req.body.countryCode,
            countryName: req.body.countryName,
            region: req.body.region,
            regionName: req.body.city,
            location: req.body.cityLatLong
        });

        const device = await deviceService.createDevice({
            ip: req.body.ipAddress,
            device: req.body.os,
            deviceBrand: req.body.deviceBrand,
            deviceModel: req.body.deviceModel,
            deviceOSVersion: req.body.osVersion
        });

        res.json({ message: 'Data received', access, location, device });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
});
