// Interactions for page one starts

// Method for pricing toggle
var homepricingCheck = false;
$('document').ready(function () {
    $('#Bill-toggler').click(function () {
        if (homepricingCheck) {
            homepricingCheck = false
            $(this).switchClass('mr-6', 'mr-1');
            $("#billMonthly").removeClass('text-gray-800');
            $("#billMonthly").addClass('text-gray-600');
            $("#billAnually").removeClass('text-gray-600');
            $("#billAnually").addClass('text-gray-800');
        }
        else {
            homepricingCheck = true
            $(this).switchClass('mr-1', 'mr-6');
            $("#billMonthly").addClass('text-gray-800');
            $("#billMonthly").removeClass('text-gray-600');
            $("#billAnually").addClass('text-gray-600');
            $("#billAnually").removeClass('text-gray-800');
        }
    });
    // Method for pricing toggle ends
    // Method for homePage Testimonial slider
    $('.home-test-slider').flickity({
        adaptiveHeight: true,
    });

    // previous
    $('.prev-slide').on('click', function () {
        $('.home-test-slider').flickity('previous');
    });
// previous wrapped
    $('.next-slide').on('click', function () {
        $('.home-test-slider').flickity('previous', true);
    });

    $("#faq-2,#faq-3,#faq-4,#faq-5").fadeOut()
    $("#icon-1").click(function () {
        if ($(this).hasClass("minus-faq")) {
            $(this).switchClass('minus-faq', 'plus-faq');
            $(this).attr('src', 'images/new-plusCircle.svg')
            $("#faq-1").fadeOut()
        }
        else {
            $("#faq-1").fadeIn()
            $(this).switchClass(' plus-faq','minus-faq');
            $(this).attr('src', 'images/new-MinusCircle.svg')
        }
    })
    $("#icon-2").click(function () {
        if ($(this).hasClass("minus-faq")) {
            $(this).switchClass('minus-faq', 'plus-faq');
            $(this).attr('src', 'images/new-plusCircle.svg')
            $("#faq-2").fadeOut()
        }
        else {
            $("#faq-2").fadeIn()
            $(this).switchClass(' plus-faq','minus-faq');
            $(this).attr('src', 'images/new-MinusCircle.svg')
        }
    })
    $("#icon-3").click(function () {
        if ($(this).hasClass("minus-faq")) {
            $(this).switchClass('minus-faq', 'plus-faq');
            $(this).attr('src', 'images/new-plusCircle.svg')
            $("#faq-3").fadeOut()
        }
        else {
            $("#faq-3").fadeIn()
            $(this).switchClass(' plus-faq','minus-faq');
            $(this).attr('src', 'images/new-MinusCircle.svg')
        }
    })
    $("#icon-4").click(function () {
        if ($(this).hasClass("minus-faq")) {
            $(this).switchClass('minus-faq', 'plus-faq');
            $(this).attr('src', 'images/new-plusCircle.svg')
            $("#faq-4").fadeOut()
        }
        else {
            $("#faq-4").fadeIn()
            $(this).switchClass(' plus-faq','minus-faq');
            $(this).attr('src', 'images/new-MinusCircle.svg')
        }
    })
    $("#icon-5").click(function () {
        if ($(this).hasClass("minus-faq")) {
            $(this).switchClass('minus-faq', 'plus-faq');
            $(this).attr('src', 'images/new-plusCircle.svg')
            $("#faq-5").fadeOut()
        }
        else {
            $("#faq-5").fadeIn()
            $(this).switchClass('plus-faq','minus-faq');
            $(this).attr('src', 'images/new-MinusCircle.svg')
        }
    })


    // Interactions for page one starts ends
    // Interactions for page two starts
    $("#pricing-toggle-1").click(function () {
        if ($(this).hasClass("ml-1")) {
            $(this).switchClass('ml-1', 'mr-1');
            $("#pricing-tg-bg-1").switchClass('bg-gray-200', 'bg-indigo-700');
        } else {
            $("#pricing-tg-bg-1").switchClass('bg-indigo-700', 'bg-gray-200');
            $(this).switchClass('mr-1', 'ml-1');
        }
    })
    $("#pricing-toggle-2").click(function () {
        if ($(this).hasClass("ml-1")) {
            $(this).switchClass('ml-1', 'mr-1');
            $("#pricing-tg-bg-2").switchClass('bg-gray-200', 'bg-indigo-700');
            $("#pro-price").html("40")
        } else {
            $("#pricing-tg-bg-2").switchClass('bg-indigo-700', 'bg-gray-200');
            $(this).switchClass('mr-1', 'ml-1');
            $("#pro-price").html("49")
        }
    })
    $("#pricing-toggle-3").click(function () {
        if ($(this).hasClass("ml-1")) {
            $(this).switchClass('ml-1', 'mr-1');
            $("#starter-price").html("15")
            $("#pricing-tg-bg-3").switchClass('bg-gray-200', 'bg-indigo-700');
        } else {
            $("#pricing-tg-bg-3").switchClass('bg-indigo-700', 'bg-gray-200');
            $(this).switchClass('mr-1', 'ml-1');
            $("#starter-price").html("19")

        }
    })
    // Interactions for page two ends

    // Interaction for page three start
    $('.strip-slider').flickity({
        adaptiveHeight: true,
        wrapAround: true
    });
// previous wrapped
    $('.next-strip-button').on('click', function () {
        $('.strip-slider').flickity('next', true);
    });
    // Interaction for page three ends
})


