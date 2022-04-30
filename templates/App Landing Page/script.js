// Interactions for page one starts

// Method for pricing toggle
var homepricingCheck = false;
$("document").ready(function () {
    $("#openMenu").click(function () {
        $("#mobileMenu").animate({ top: 0 });
    });
    $("#Bill-toggler").click(function () {
        if (homepricingCheck) {
            homepricingCheck = false;
            $(this).switchClass("mr-6", "mr-1");
            $("#billMonthly").removeClass("text-gray-800");
            $("#billMonthly").addClass("text-gray-600");
            $("#billAnually").removeClass("text-gray-600");
            $("#billAnually").addClass("text-gray-800");
            $("#billCheckbox").addClass("bg-indigo-700");
            $("#billCheckbox").removeClass("bg-gray-300");
        } else {
            homepricingCheck = true;
            $(this).switchClass("mr-1", "mr-6");
            $("#billMonthly").addClass("text-gray-800");
            $("#billMonthly").removeClass("text-gray-600");
            $("#billMonthly").addClass("text-gray-800");
            $("#billCheckbox").removeClass("bg-indigo-700");
            $("#billCheckbox").addClass("bg-gray-300");
            $("#billAnually").removeClass("text-gray-800");
        }
    });
    // Method for pricing toggle ends
    // Method for homePage Testimonial slider
    $(".home-test-slider").flickity({
        adaptiveHeight: true,
    });

    // previous
    $(".prev-slide").on("click", function () {
        $(".home-test-slider").flickity("previous");
    });
    // previous wrapped
    $(".next-slide").on("click", function () {
        $(".home-test-slider").flickity("previous", true);
    });

    $("#faq-2,#faq-3,#faq-4,#faq-5").fadeOut();
    $("#icon-1").click(function () {
        if ($(this).hasClass("minus-faq")) {
            $(this).switchClass("minus-faq", "plus-faq");
            $(this).attr("src", "images/new-plusCircle.svg");
            $("#faq-1").fadeOut();
        } else {
            $("#faq-1").fadeIn();
            $(this).switchClass(" plus-faq", "minus-faq");
            $(this).attr("src", "images/new-MinusCircle.svg");
        }
    });
    $("#icon-2").click(function () {
        if ($(this).hasClass("minus-faq")) {
            $(this).switchClass("minus-faq", "plus-faq");
            $(this).attr("src", "images/new-plusCircle.svg");
            $("#faq-2").fadeOut();
        } else {
            $("#faq-2").fadeIn();
            $(this).switchClass(" plus-faq", "minus-faq");
            $(this).attr("src", "images/new-MinusCircle.svg");
        }
    });
    $("#icon-3").click(function () {
        if ($(this).hasClass("minus-faq")) {
            $(this).switchClass("minus-faq", "plus-faq");
            $(this).attr("src", "images/new-plusCircle.svg");
            $("#faq-3").fadeOut();
        } else {
            $("#faq-3").fadeIn();
            $(this).switchClass(" plus-faq", "minus-faq");
            $(this).attr("src", "images/new-MinusCircle.svg");
        }
    });
    $("#icon-4").click(function () {
        if ($(this).hasClass("minus-faq")) {
            $(this).switchClass("minus-faq", "plus-faq");
            $(this).attr("src", "images/new-plusCircle.svg");
            $("#faq-4").fadeOut();
        } else {
            $("#faq-4").fadeIn();
            $(this).switchClass(" plus-faq", "minus-faq");
            $(this).attr("src", "images/new-MinusCircle.svg");
        }
    });
    $("#icon-5").click(function () {
        if ($(this).hasClass("minus-faq")) {
            $(this).switchClass("minus-faq", "plus-faq");
            $(this).attr("src", "images/new-plusCircle.svg");
            $("#faq-5").fadeOut();
        } else {
            $("#faq-5").fadeIn();
            $(this).switchClass("plus-faq", "minus-faq");
            $(this).attr("src", "images/new-MinusCircle.svg");
        }
    });

    // Interactions for page one starts ends
    // Interactions for page two starts
    $("#pricing-toggle-1").click(function () {
        if ($(this).hasClass("ml-1")) {
            $(this).switchClass("ml-1", "mr-1");
            $("#pricing-tg-bg-1").switchClass("bg-gray-200", "bg-indigo-700");
        } else {
            $("#pricing-tg-bg-1").switchClass("bg-indigo-700", "bg-gray-200");
            $(this).switchClass("mr-1", "ml-1");
        }
    });
    $("#pricing-toggle-2").click(function () {
        if ($(this).hasClass("ml-1")) {
            $(this).switchClass("ml-1", "mr-1");
            $("#pricing-tg-bg-2").switchClass("bg-gray-200", "bg-indigo-700");
            $("#pro-price").html("40");
        } else {
            $("#pricing-tg-bg-2").switchClass("bg-indigo-700", "bg-gray-200");
            $(this).switchClass("mr-1", "ml-1");
            $("#pro-price").html("49");
        }
    });
    $("#pricing-toggle-3").click(function () {
        if ($(this).hasClass("ml-1")) {
            $(this).switchClass("ml-1", "mr-1");
            $("#starter-price").html("15");
            $("#pricing-tg-bg-3").switchClass("bg-gray-200", "bg-indigo-700");
        } else {
            $("#pricing-tg-bg-3").switchClass("bg-indigo-700", "bg-gray-200");
            $(this).switchClass("mr-1", "ml-1");
            $("#starter-price").html("19");
        }
    });
    // Interactions for page two ends

    // Interaction for page three start
    $(".strip-slider").flickity({
        adaptiveHeight: true,
        wrapAround: true,
    });
    // previous wrapped
    $(".next-strip-button").on("click", function () {
        $(".strip-slider").flickity("next", true);
    });
    // Interaction for page three ends
});
//Hamburger and mobile menu
function MenuHandler(el, val) {
    let MainList = el.parentElement.parentElement.getElementsByTagName("ul")[0];
    let closeIcon = el.parentElement.parentElement.getElementsByClassName("close-m-menu")[0];
    let showIcon = el.parentElement.parentElement.getElementsByClassName("show-m-menu")[0];
    if (val) {
        MainList.classList.remove("hidden");
        el.classList.add("hidden");
        closeIcon.classList.remove("hidden");
    } else {
        showIcon.classList.remove("hidden");
        MainList.classList.add("hidden");
        el.classList.add("hidden");
    }
}
// FAQ script below
let elements = document.querySelectorAll('[data-menu]');
for(let i=0;i<elements.length;i++){
    let main = elements[i];
    main.addEventListener("click", function () {
        let element = main.parentElement.parentElement;
        let andicators = main.querySelectorAll("svg");
        let child = element.querySelector("p");
        child.classList.toggle("hidden");
        if(child.classList.contains("hidden")){
            andicators[0].style.display = "block";
            andicators[1].style.display = "none";
        } else {
            andicators[0].style.display = "none";
            andicators[1].style.display = "block";
        }
    });
}