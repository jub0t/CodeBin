// Top menu
const MenuHandler = (flag) => {
    if (flag) {
        document.getElementById("list").classList.add("top-100");
        document.getElementById("list").classList.remove("hidden");
        document.getElementById("close").classList.remove("hidden");
        document.getElementById("open").classList.add("hidden");
    } else {
        document.getElementById("list").classList.remove("top-100");
        document.getElementById("list").classList.add("hidden");
        document.getElementById("close").classList.add("hidden");
        document.getElementById("open").classList.remove("hidden");
    }
};
// slider js starts

// Health tips carousel mobile
let slides = document.querySelectorAll(".slide-ana>div");
let slideSayisi = slides.length;
let current = 1;
let currentSlide = document.getElementById("current");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
for (let index = 0; index < slides.length; index++) {
    const element = slides[index];
    element.style.transform = "translateX(" + 100 * index + "%)";
}
let loop = 0 + 1000 * slideSayisi;

function goNext() {
    if (current < slideSayisi) {
        current = current + 1;
    } else {
        current = 1;
    }
    currentSlide.innerHTML = "0" + current;
    loop++;
    for (let index = 0; index < slides.length; index++) {
        const element = slides[index];
        element.style.transform = "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
    }
}

function goPrev() {
    if (current > 1) {
        current = current - 1;
    } else {
        current = slideSayisi;
    }
    currentSlide.innerHTML = "0" + current;
    loop--;
    for (let index = 0; index < slides.length; index++) {
        const element = slides[index];
        element.style.transform = "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
    }
}

next.addEventListener("click", goNext);
prev.addEventListener("click", goPrev);

// Testimonial carousel
let slides2 = document.querySelectorAll(".slide-ana2>div");
let slideSayisi2 = slides2.length;
let prev2 = document.getElementById("prev2");
let next2 = document.getElementById("next2");
for (let index = 0; index < slides2.length; index++) {
    const element = slides2[index];
    element.style.transform = "translateX(" + 100 * index + "%)";
}
let loop2 = 0 + 1000 * slideSayisi2;

function goNext2() {
    loop2++;
    for (let index = 0; index < slides2.length; index++) {
        const element = slides2[index];
        element.style.transform = "translateX(" + 100 * (index - (loop2 % slideSayisi2)) + "%)";
    }
}

function goPrev2() {
    loop2--;
    for (let index = 0; index < slides2.length; index++) {
        const element = slides2[index];
        element.style.transform = "translateX(" + 100 * (index - (loop2 % slideSayisi2)) + "%)";
    }
}

next2.addEventListener("click", goNext2);
prev2.addEventListener("click", goPrev2);

// Health tips carousel desktop
let slides3 = document.querySelectorAll(".slide-ana3>div");
let slideSayisi3 = slides3.length;
let current3 = 1;
let currentSlide3 = document.getElementById("current3");
let prev3 = document.getElementById("prev3");
let next3 = document.getElementById("next3");
for (let index = 0; index < slides3.length; index++) {
    const element = slides3[index];
    element.style.transform = "translateX(" + 100 * index + "%)";
}
let loop3 = 0 + 1000 * slideSayisi3;

function goNext3() {
    if (current3 < slideSayisi3) {
        current3 = current3 + 1;
    } else {
        current3 = 1;
    }
    currentSlide3.innerHTML = "0" + current3;
    loop3++;
    for (let index = 0; index < slides3.length; index++) {
        const element = slides3[index];
        element.style.transform = "translateX(" + 100 * (index - (loop3 % slideSayisi3)) + "%)";
    }
}

function goPrev3() {
    if (current3 > 1) {
        current3 = current3 - 1;
    } else {
        current3 = slideSayisi3;
    }
    currentSlide3.innerHTML = "0" + current3;
    loop3--;
    for (let index = 0; index < slides3.length; index++) {
        const element = slides3[index];
        element.style.transform = "translateX(" + 100 * (index - (loop3 % slideSayisi3)) + "%)";
    }
}

next3.addEventListener("click", goNext3);
prev3.addEventListener("click", goPrev3);
