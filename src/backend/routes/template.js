const express = require('express');
const path = require('path');
const { title } = require('process');
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

    productItems = [
        {
            title: "Product Title",
            description: "Product Description: This is a template product card with a title, description, and image. You can use it to showcase your products or services. It about 50-100 words long.",
            imageRed: "/template/temas/img/trade_red.svg",
            imageWhite: "/template/temas/img/trade_white.svg"
        },
        {
            title: "Product Title",
            description: "Product Description: This is a template product card with a title, description, and image. You can use it to showcase your products or services. It about 50-100 words long.",
            imageRed: "/template/temas/img/trade_red.svg",
            imageWhite: "/template/temas/img/trade_white.svg"
        },
        {
            title: "Product Title",
            description: "Product Description: This is a template product card with a title, description, and image. You can use it to showcase your products or services. It about 50-100 words long.",
            imageRed: "/template/temas/img/trade_red.svg",
            imageWhite: "/template/temas/img/trade_white.svg"
        }
    ]

    partnerItems = [
        {
            img: "/layouts_admin/image/AlgoritLogo.png",
            brand: "brand1"
        },
        {
            img: "/layouts_admin/image/AlgoritLogoDark.png",
            brand: "brand2"
        },
        {
            img: "/layouts_admin/image/AlgoritLogo.png",
            brand: "brand3"
        },
        {
            img: "/layouts_admin/image/AlgoritLogoDark.png",
            brand: "brand4"
        },
        {
            img: "/layouts_admin/image/AlgoritLogo.png",
            brand: "brand5"
        },
        {
            img: "/layouts_admin/image/AlgoritLogoDark.png",
            brand: "brand6"
        },
        {
            img: "/layouts_admin/image/AlgoritLogo.png",
            brand: "brand7"
        },
        {
            img: "/layouts_admin/image/AlgoritLogoDark.png",
            brand: "brand8"
        },
        {
            img: "/layouts_admin/image/AlgoritLogo.png",
            brand: "brand9"
        },
        {
            img: "/layouts_admin/image/AlgoritLogoDark.png",
            brand: "brand10"
        },
        {
            img: "/layouts_admin/image/AlgoritLogo.png",
            brand: "brand11"
        },
        {
            img: "/layouts_admin/image/AlgoritLogoDark.png",
            brand: "brand12"
        },
        {
            img: "/layouts_admin/image/AlgoritLogo.png",
            brand: "brand13"
        },
        {
            img: "/layouts_admin/image/AlgoritLogoDark.png",
            brand: "brand14"
        },
        {
            img: "/layouts_admin/image/AlgoritLogo.png",
            brand: "brand15"
        }
    ]

    res.render('template/temas/home/pages/home', { title: 'Temas', serviceItems: serviceItems, productItems: productItems, partnerItems: partnerItems });
});

router.get("/thegioiic", (req, res) => {
    const newProducts = [
        {
            image: '/template/thegioiic/img/product.webp',
            title: "Vinasemi 8858-I Hand Held Hot Air Gun 700W, 220VAC, 100-480ºC",
            price: '$39.474',
            unit: 'PC',
            stock: '38'
        }
    ]
    const typeProducts = [
        {
            name: 'ICs',
            details: ['Processors MPU & Microcontrollers MCU', 'Programmable Logic Circuits',
                'Memory ICs', 'Power Management ICs', 'Interface ICs'],
            products: [
                {
                    image: '/template/thegioiic/img/ics_product.webp',
                    title: "ATMEGA168PA-AU, 8bit AVR Microcontroller, 20MHz, 16kB Flash, 32 Pin TQFP",
                    price: '$39.474',
                    unit: 'PC',
                    stock: '38'
                }
            ]
        },
        {
            name: 'Boards, Modules, Debuggers',
            details: ['GPS, GSM, GPRS Modules', 'Programmer, Debugger',
                'RF, WiFi, Bluetooth Modules', 'Power Management ICs'],
            products: [
                {
                    image: '/template/thegioiic/img/boards_product.webp',
                    title: "STM32F103C8T6 Board",
                    price: '$39.474',
                    unit: 'PC',
                    stock: '38'
                }
            ]
        },
        {
            name: 'Connectors, Sockets',
            details: ['Headers & Wire Housings', 'IC Sockets', 'Terminal Blocks'],
            products: [
                {
                    image: '/template/thegioiic/img/connectors_product.webp',
                    title: "9 Pin D-sub Connector Male 2 Row Solder Wire",
                    price: '$39.474',
                    unit: 'PC',
                    stock: '38'
                }
            ]
        }
    ]
    res.render('template/thegioiic/home/pages/home', { title: 'Thegioiic', newProducts: newProducts, typeProducts: typeProducts });
});

router.get("/lips", (req, res) => {
    const typeProducts = [
        {
            name: 'Active Stereo Camera',
            products: [
                {
                    title: 'LIPSedge™ AE400',
                    image: '/template/lips/img/product1.png',
                    description: 'Ruggedized Industrial 3D Depth Camera',
                    FOV: '87° x 58° x 95°',
                    shutter: 'Global Shutter / IMU',
                    range: '0.52 ~ 10+m'
                },
                {
                    title: 'LIPSedge™ AE430',
                    image: '/template/lips/img/product2.png',
                    description: 'Ruggedized Industrial 3D Depth Camera',
                    FOV: '87° x 58° x 95°',
                    shutter: 'Global Shutter / IMU',
                    range: '0.52 ~ 10+m'
                },
                {
                    title: 'LIPSedge™ AE450',
                    image: '/template/lips/img/product3.png',
                    description: 'Ruggedized Industrial 3D Depth Camera',
                    FOV: '87° x 58° x 95°',
                    shutter: 'Global Shutter / IMU',
                    range: '0.52 ~ 10+m'
                }
            ]
        },
        {
            name: 'Time-of-Flight Camera',
            products: [
                {

                }
            ]
        },
        {
            name: 'Structured-Light Camera',
            products: [
                {

                }
            ]
        },
        {
            name: 'Edge Accelerator',
            products: [
                {

                }
            ]
        },
        {
            name: 'Multiple Dimensioning',
            products: [
                {

                }
            ]
        },
        {
            name: 'Facial Recognition',
            product: [
                {

                }
            ]
        }
    ]
    res.render('template/lips/home/pages/home', { title: 'LIPS', typeProducts: typeProducts });
});

module.exports = router;
