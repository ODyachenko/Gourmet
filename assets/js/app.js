$(document).ready(function () {

/*Burgers slider https://kenwheeler.github.io/slick/*/
$(".burger-slides").slick({
        centerMode: true
        , centerPadding: '60px'
        , slidesToShow: 3
        , responsive: [{
            breakpoint: 990
            , settings: {
                arrows: false
                , centerMode: true
                , centerPadding: '40px'
                , slidesToShow: 3
                }
            },
            {
            breakpoint: 770
            , settings: {
                arrows: false
                , centerMode: true
                , centerPadding: '40px'
                , slidesToShow: 2
                }
            },
            {
            breakpoint: 576
            , settings: {
                arrows: false
                , centerMode: true
                , centerPadding: '40px'
                , slidesToShow: 1
                }
            }]
    });

    /*Recipes slider https://kenwheeler.github.io/slick/*/
    $('#recipes-slide').slick({
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1,
        responsive: [
        {
            breakpoint: 990,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '5px',
            slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
            }
        }
    ]
});
});


