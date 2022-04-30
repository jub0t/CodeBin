function dropdownHandler(element) {
    let single = element.getElementsByTagName("ul")[0];
    single.classList.toggle("hidden");
}

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
document.addEventListener("keydown", function (e) {
    if (e.code === "ArrowRight") {
        goNext();
    } else if (e.code === "ArrowLeft") {
        goPrev();
    }
});
