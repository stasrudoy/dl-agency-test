document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.getElementById('burger-menu');
    const menuLinks = document.querySelector('.menu-nav');

    // burger menu
    burgerMenu?.addEventListener('click', function () {
        burgerMenu.classList.toggle('active');
        menuLinks?.classList.toggle('active');
    });

    // fullPage.js
    const fullPageEl = document.getElementById('fullpage');
    if (window.innerWidth > 768 && fullPageEl) {
        new fullpage('#fullpage', {
            autoScrolling: true,
            scrollHorizontally: false,
            scrollingSpeed: 700,
            responsiveWidth: 768,
            scrollOverflow: false,
            normalScrollElements: '#section-write_form, #section-write_form textarea',
            onLeave(origin, destination, direction) {
                console.log(`Moving from ${origin.index} to ${destination.index}`);
            }
        });

        const downButton = document.getElementById('section-main_down');
        downButton?.addEventListener('click', function (e) {
            e.preventDefault();
            fullpage_api.moveSectionDown();
        });
    }

    // scroll resize
    window.addEventListener('resize', function () {
        if (typeof fullpage_api !== 'undefined') {
            fullpage_api.setAutoScrolling(window.innerWidth > 768);
        }
    });

    // gifts
    const gifts = document.querySelectorAll('.gift');
    const giftImage = document.querySelector('.section-gifts_img img');
    const giftTitle = document.querySelector('.section-gifts_img_description p');
    const giftText = document.querySelector('.section-gifts_img_description span');

    gifts.forEach(gift => {
        gift.addEventListener('click', () => {
            gifts.forEach(g => g.classList.remove('active'));
            gift.classList.add('active');

            giftImage.src = gift.dataset.img;
            giftTitle.textContent = gift.dataset.title;
            giftText.textContent = gift.dataset.text;
        });
    });
});
