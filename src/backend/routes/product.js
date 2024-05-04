const express = require('express');
const path = require('path');
const router = express.Router();

router.get("/", (req, res) => {
    
    const softwares = [
        {
            image : 'https://www.mvtec.com/fileadmin/Redaktion/07_software_boxes/halcon_runnder_softwarebox_with-background_2.jpg',
            title: 'MVTEC HALCON',
            description: 'A comprehensive toolbox with a large machine vision library to develop the most complex applications',
        },
        {
            image : 'https://www.mvtec.com/fileadmin/_processed_/b/2/csm_merlic_software_box_with_a_boat_in_the_background_deda4ea19e.jpg',
            title: 'MVTEC MERLIC',
            description: 'An easy-to-use software product for quickly building machine vision applications without programming',
        },
        {
            image : 'https://www.mvtec.com/fileadmin/_processed_/3/7/csm_dlt_softwarebox_rgb_right_with_background_594cd8c990.jpg',
            title: 'DEEP LEARNING TOOL',
            description: 'An intuitive tool for quickly labeling and evaluating your deep learning training data',
        },
    ]

    res.render('home/pages/product', { title: 'Product', softwares: softwares });
});

module.exports = router;
