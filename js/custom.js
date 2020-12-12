$(function() {
    // ======= Manubar toggle
    $('.navbar-toggler').on('click', function() {
        $('.navbar-toggler').toggleClass("active");
    });


    //$('.jobs').on('click', function() {
    //    $('.jobs').toggleClass("active");
    //});

    $('#myModal').modal('toggle')

    $('.navbar_toggler').click(function() {
        $('.toggle_navbar').toggleClass("show")
    });

    $('.quick_search_btn').click(function() {
        $('.quick_search_form').toggleClass("show")
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            992: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })





});