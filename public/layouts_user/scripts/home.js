// button prev and next in slide 
let slide = document.querySelector('.container .slide');
let items = document.querySelectorAll('.container .slide .item');
let dots = document.querySelectorAll('.container .container--dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function () {
    if (active + 1 > lengthItems)
        active = 0;
    else active += 1;
    reloadSlider();
}
prev.onclick = function () {
    if (active - 1 < 0)
        active = lengthItems;
    else active -= 1;
    reloadSlider();
}

let refreshSlider = setInterval(() => { next.click() }, 10000);
function reloadSlider() {
    let checkLeft = items[active].offsetLeft;

    // Calculate the percentage of the current slide's position relative to the container width
    let positionPercentage = (checkLeft / slide.clientWidth) * 100;

    slide.style.transform = `translateX(-${positionPercentage}%)`;

    let lastActiveDot = document.querySelector('.container .container--dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => { next.click() }, 10000);
}
dots.forEach((li, key) => {
    li.addEventListener('click', function () {
        active = key;
        reloadSlider();
    })
})

// button prev and next in product
let type = document.querySelector('#detail-types .type-product');
let contents = document.querySelectorAll('#detail-types .type-product .content-product');
let prevProduct = document.getElementById('prev-product');
let nextProduct = document.getElementById('next-product');

let activeProduct = 0;
let lengthProducts = contents.length - 1;

nextProduct.onclick = function () {
    if (activeProduct + 1 > lengthProducts)
        activeProduct = 0;
    else activeProduct += 1;
    reloadSlider2();
}
prevProduct.onclick = function () {
    if (activeProduct - 1 < 0)
        activeProduct = lengthProducts;
    else activeProduct -= 1;
    reloadSlider2();
}

function reloadSlider2() {
    let checkLeft = contents[activeProduct].offsetLeft;
    type.style.left = -checkLeft + 'px';
}

