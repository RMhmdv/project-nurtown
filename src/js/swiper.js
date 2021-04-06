document.addEventListener("DOMContentLoaded", function () {

    const swiper = new Swiper('.swiper-container', {
        loop: true,
        loopedSlides: '1',
        slidesPerView: 1,
        // autoplay: {
        //     delay: 4000,
        // },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            renderFraction: function (currentClass, totalClass) {
                return '<div class="pagination">' +
                    '<span class="' + currentClass + '"></span>' +
                    '<img src="../img/line.svg">' +
                    '<span class="' + totalClass + '"></span>' + '</div>';
            }
        },
        navigation: {
            nextEl: '.right',
            prevEl: '.left',
        },


    });

})