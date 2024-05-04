const express = require('express');
const router = express.Router();
var os = require('os');

router.get("/", (req, res) => {
    const teasers = [
        {
            title: 'Trainings & workshops',
            description: 'We hold worldwide product and technology trainings on a variety of machine vision topics!',
            image: 'layouts_user/image/csm_business-executives-discussing-with-their-colleagues-on-whiteboa.webp',
            redict_text: 'Discover more',
        },
        {
            title: 'Videos & tutorials',
            description: 'Find videos and tutorials about our products HALCON, MERLIC and the Deep Learning Tool.',
            image: 'layouts_user/image/csm_business-executives-discussing-with-their-colleagues-on-whiteboa.webp',
            redict_text: 'Watch now',
        }
    ]

    const products = [
        {
            logo: 'https://www.mvtec.com/fileadmin/Redaktion/05_mvtec_logos/halcon-mvtec-slogan-logo-white.png',
            version: 'HALCON 23.11 available now',
            description: 'The comprehensive standard software for machine vision with an integrated development environment (HDevelop) that is used worldwide.',
            redict_text: 'Learn more',
        },
        {
            logo: 'https://www.mvtec.com/fileadmin/Redaktion/05_mvtec_logos/merlic-mvtec-slogan-logo-white.png',
            version: '',
            description: 'The comprehensive standard software for machine vision with an integrated development environment (HDevelop) that is used worldwide.',
            redict_text: 'Discover more',
        },
        {
            logo: 'https://www.mvtec.com/fileadmin/Redaktion/05_mvtec_logos/deep-learning-tool-logo-slogan-white.png',
            version: '',
            description: 'The comprehensive standard software for machine vision with an integrated development environment (HDevelop) that is used worldwide.',
            redict_text: 'Try now',
        },
    ]

    const stories = [
        {
            image: 'https://www.mvtec.com/fileadmin/_processed_/6/1/csm_2023.11.09_success_story_mvtec_inndeo_1_adcb6aef14.webp',
            tag: ['Food & Beverages', 'Deep Learning', 'OCR OCV'],
            title: 'Machine vision and deep learning detect defects in the food industry',
            description: 'Automation specialist INNDEO has developed a sophisticated automation solution for quality control in the packaging industry. Thanks to machine vision and deep learning technologies, high speeds and defect detection rates are no longer a problem.',
        },
        {
            image: 'https://www.mvtec.com/fileadmin/_processed_/6/1/csm_2023.11.09_success_story_mvtec_inndeo_1_adcb6aef14.webp',
            tag: ['Food & Beverages', 'Deep Learning', 'OCR OCV'],
            title: 'Machine vision and deep learning detect defects in the food industry',
            description: 'Automation specialist INNDEO has developed a sophisticated automation solution for quality control in the packaging industry. Thanks to machine vision and deep learning technologies, high speeds and defect detection rates are no longer a problem.',
        },
        {
            image: 'https://www.mvtec.com/fileadmin/_processed_/6/1/csm_2023.11.09_success_story_mvtec_inndeo_1_adcb6aef14.webp',
            tag: ['Food & Beverages', 'Deep Learning', 'OCR OCV'],
            title: 'Machine vision and deep learning detect defects in the food industry',
            description: 'Automation specialist INNDEO has developed a sophisticated automation solution for quality control in the packaging industry. Thanks to machine vision and deep learning technologies, high speeds and defect detection rates are no longer a problem.',
        },
    ]

    const news = [
        {
            image: '/layouts_admin/image/AlgoritLogo.png',
            time: 'February 2, 2024',
            tag: 'HALCON, Certified Integration Partner',
            title: 'MVTec welcomes Vision On Line as a new partner',
            description: 'MVTec is pleased to collaborate with Vision On Line, a company specializing in automation solutions based on image processing. Together, they optimize production processes using advanced machine vision, robotics, and automation technologies.',
        },
        {
            image: '/layouts_admin/image/AlgoritLogo.png',
            time: 'February 2, 2024',
            tag: 'HALCON, Certified Integration Partner',
            title: 'MVTec welcomes Vision On Line as a new partner',
            description: 'MVTec is pleased to collaborate with Vision On Line, a company specializing in automation solutions based on image processing. Together, they optimize production processes using advanced machine vision, robotics, and automation technologies.',
        },
        {
            image: '/layouts_admin/image/AlgoritLogo.png',
            time: 'February 2, 2024',
            tag: 'HALCON, Certified Integration Partner',
            title: 'MVTec welcomes Vision On Line as a new partner',
            description: 'MVTec is pleased to collaborate with Vision On Line, a company specializing in automation solutions based on image processing. Together, they optimize production processes using advanced machine vision, robotics, and automation technologies.',
        },
    ]

    const events = [
        {
            time: 'March 20, 2024',
            tag: 'MERLIC, Webinar',
            title: 'MERLIC 5.5 Webinar - learn all about new features',
            description: 'Learn how to use the new features of the easy-to-use software MERLIC with hands-on technical demonstrations. Join the webinar on the release day of MERLIC 5.5!',
        },
        {
            time: 'March 20, 2024',
            tag: 'MERLIC, Webinar',
            title: 'MERLIC 5.5 Webinar - learn all about new features',
            description: 'Learn how to use the new features of the easy-to-use software MERLIC with hands-on technical demonstrations. Join the webinar on the release day of MERLIC 5.5!',
        },
        {
            time: 'March 20, 2024',
            tag: 'MERLIC, Webinar',
            title: 'MERLIC 5.5 Webinar - learn all about new features',
            description: 'Learn how to use the new features of the easy-to-use software MERLIC with hands-on technical demonstrations. Join the webinar on the release day of MERLIC 5.5!',
        },
        {
            time: 'March 20, 2024',
            tag: 'MERLIC, Webinar',
            title: 'MERLIC 5.5 Webinar - learn all about new features',
            description: 'Learn how to use the new features of the easy-to-use software MERLIC with hands-on technical demonstrations. Join the webinar on the release day of MERLIC 5.5!',
        },
    ]
    res.render('home/pages/home', { title: 'Algorit Technology', teasers: teasers, products: products, stories: stories, news: news, events: events });
});

module.exports = router;
