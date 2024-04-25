// Partner slider
$(document).ready(function () {
    $slider = $('.partner-slider-items');
    $slider.slick({
        dots: false,
        slidesToShow: 5,
        infinite: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: false, // Hide default previous arrow
        nextArrow: false,
        responsive: [{
            breakpoint: 968,
            settings: {
                slidesToShow: 4
            }
        }]
    });

    var $dotsContainer = $('.partner-slider-controller .row');
    function setDots() {
        var slidesCount = $slider.slick('getSlick').slideCount;
        var cardPerRow = ($(window).width() >= 950) ? 5 : 4;
        $dotsContainer.empty();

        for (var i = 0; i < slidesCount; i += cardPerRow) {
            var $dot = $('<div class="partner-slider-controller-button"></div>');
            $dotsContainer.append($dot);
        }

        // Update the active dot when the slider changes 5 times
        $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            var activeButtonIndex = Math.floor(nextSlide / cardPerRow); // Calculate the index of the active button based on the nextSlide index
            $dotsContainer.find('.partner-slider-controller-button').removeClass('active');
            $dotsContainer.find('.partner-slider-controller-button').eq(activeButtonIndex).addClass('active');
        });

        // Initialize the active dot
        $dotsContainer.find('.partner-slider-controller-button').first().addClass('active');

        // Handle click on dots to navigate to slides
        $dotsContainer.on('click', '.partner-slider-controller-button', function () {
            var index = $(this).index() * cardPerRow;
            $slider.slick('slickGoTo', index);
        });
    }
    setDots();
    $(window).resize(setDots);
});


// highlight blog
$(document).ready(function () {
    $slider = $('.hlBlog-items .row');
    $slider.slick({
        dots: false,
        slidesToShow: 3,
        infinite: false,
        prevArrow: false, // Hide default previous arrow
        nextArrow: false,
        responsive: [{
            breakpoint: 950,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 720,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    var $dotsContainer = $('.hlBlog-slider-controller .row');
    function setDots() {
        var slidesCount = $slider.slick('getSlick').slideCount;
        var cardPerRow = ($(window).width() <= 720) ? 1 : ($(window).width() < 950) ? 2 : 3;
        $dotsContainer.empty();
        for (var i = 0; i < slidesCount; i += cardPerRow) {
            var $dot = $('<div class="hlBlog-slider-controller-button"></div>');
            $dotsContainer.append($dot);
        }

        $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $dotsContainer.find('.hlBlog-slider-controller-button').removeClass('active');
            $dotsContainer.find('.hlBlog-slider-controller-button').eq(nextSlide).addClass('active');
        });

        // Initialize the active dot
        $dotsContainer.find('.hlBlog-slider-controller-button').first().addClass('active');

        // Handle click on dots to navigate to slides
        $dotsContainer.on('click', '.hlBlog-slider-controller-button', function () {
            var index = $(this).index();
            $slider.slick('slickGoTo', index);
        });
    }
    setDots();
    $(window).resize(setDots);
});
