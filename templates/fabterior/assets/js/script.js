// Menu
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

// Slider Mobile
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

// Slider Desktop
let slides = document.querySelectorAll(".slide-ana>div");
let slideSayisi = slides.length;
let prev = document.getElementById("prev");
let next = document.getElementById("next");
for (let index = 0; index < slides.length; index++) {
    const element = slides[index];
    element.style.transform = "translateX(" + 100 * index + "%)";
}
let loop = 0 + 1000 * slideSayisi;

function goNext() {
    loop++;
    for (let index = 0; index < slides.length; index++) {
        const element = slides[index];
        element.style.transform = "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
    }
}

function goPrev() {
    loop--;
    for (let index = 0; index < slides.length; index++) {
        const element = slides[index];
        element.style.transform = "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
    }
}

next.addEventListener("click", goNext);
prev.addEventListener("click", goPrev);
