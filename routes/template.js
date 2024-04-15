const express = require('express');
const path = require('path');
const router = express.Router();

router.get("/", (req, res) => {

    const pick = [
        {
            image: '/image/t1.png',
            title: 'Automation Solution',
            type: 'Business',
        },
        {
            image: '/image/t2.png',
            title: 'Electronic components',
            type: 'Product & Business',
        },
        {
            image: '/image/t3.png',
            title: 'Camera and Robot',
            type: 'Solution & Blog',
        },
        {
            image: '/image/t4.png',
            title: 'Startups Solution',
            type: 'Business',
        },
        {
            image: '/image/t5.png',
            title: 'Dev Book',
            type: 'Review',
        },
        {
            image: '/image/t6.png',
            title: 'Dev Conf',
            type: 'Conferences & Events',
        },
    ]

    res.render('home/pages/template', { title: 'Template', pick: pick });
});

router.get("/temas", (req, res) => {
    serviceItems = [
        {
            image: '/template/temas/img/01_Giai_phap_robot.webp',
            title: "Robot solution",
            description: "Provide full solutions related to industrial robots, desktop robots, cartesian, scara, 6-axis interactive robots.",
            redirct_text: "Consulting solutions"
        },
        {
            image: '/template/temas/img/01_Giai_phap_robot.webp',
            title: "Robot solution",
            description: "Provide full solutions related to industrial robots, desktop robots, cartesian, scara, 6-axis interactive robots.",
            redirct_text: "Consulting solutions"
        },
        {
            image: '/template/temas/img/01_Giai_phap_robot.webp',
            title: "Robot solution",
            description: "Provide full solutions related to industrial robots, desktop robots, cartesian, scara, 6-axis interactive robots.",
            redirct_text: "Consulting solutions"
        },
        {
            image: '/template/temas/img/01_Giai_phap_robot.webp',
            title: "Robot solution",
            description: "Provide full solutions related to industrial robots, desktop robots, cartesian, scara, 6-axis interactive robots.",
            redirct_text: "Consulting solutions"
        }
    ]
    if (serviceItems.length > 4) {
        serviceItems = serviceItems.slice(0, 4);
    }
    res.render('template/temas/home/pages/home', { title: 'Temas', serviceItems: serviceItems });
});

router.get("/thegioiic", (req, res) => {
    res.render('template/thegioiic/home/pages/home', { title: 'Thegioiic' });
});

router.get("/lips", (req, res) => {
    res.render('template/lips/home/pages/home', { title: 'LIPS' });
});

module.exports = router;
