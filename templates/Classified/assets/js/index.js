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
// Filter

let elements = document.querySelectorAll("[data-menu]");
for (let i = 0; i < elements.length; i++) {
    let main = elements[i];
    main.addEventListener("click", function () {
        let list = document.getElementById("listHolder");
        let open = document.getElementById("andicators");
        let close = document.getElementById("andicators1");
        list.classList.toggle("hidden");
        if (list.classList.value.indexOf("hidden") === -1) {
            open.classList.add("hidden");
            close.classList.remove("hidden");
        } else {
            open.classList.remove("hidden");
            close.classList.add("hidden");
        }
    });
}
// Category

let elements1 = document.querySelectorAll("[data-menu1]");
for (let i = 0; i < elements1.length; i++) {
    let main = elements1[i];
    main.addEventListener("click", function () {
        let list1 = document.getElementById("listHolder1");
        let open = document.getElementById("andicators2");
        let close = document.getElementById("andicators3");
        list1.classList.toggle("hidden");
        if (list1.classList.value.indexOf("hidden") === -1) {
            open.classList.add("hidden");
            close.classList.remove("hidden");
        } else {
            open.classList.remove("hidden");
            close.classList.add("hidden");
        }
    });
}
// search category

let elements2 = document.querySelectorAll("[data-menu2]");
for (let i = 0; i < elements2.length; i++) {
    let main = elements2[i];
    main.addEventListener("click", function () {
        let list2 = document.getElementById("listHolder2");
        let open = document.getElementById("andicators4");
        let close = document.getElementById("andicators5");
        list2.classList.toggle("hidden");
        if (list2.classList.value.indexOf("hidden") === -1) {
            open.classList.add("hidden");
            close.classList.remove("hidden");
        } else {
            open.classList.remove("hidden");
            close.classList.add("hidden");
        }
    });
}
// // profile

let elements3 = document.querySelectorAll("[data-menu3]");
for (let i = 0; i < elements3.length; i++) {
    let main = elements3[i];
    main.addEventListener("click", function () {
        let list3 = document.getElementById("listHolder3");
        let open = document.getElementById("andicators6");
        let close = document.getElementById("andicators7");
        list3.classList.toggle("hidden");
        if (list3.classList.value.indexOf("hidden") === -1) {
            open.classList.add("hidden");
            close.classList.remove("hidden");
        } else {
            open.classList.remove("hidden");
            close.classList.add("hidden");
        }
    });
}
// // Chats

let elements4 = document.querySelectorAll("[data-menu4]");
for (let i = 0; i < elements4.length; i++) {
    let main = elements4[i];
    main.addEventListener("click", function () {
        let list4 = document.getElementById("listHolder4");
        let open = document.getElementById("andicators8");
        let close = document.getElementById("andicators9");
        list4.classList.toggle("hidden");
        if (list3.classList.value.indexOf("hidden") === -1) {
            open.classList.add("hidden");
            close.classList.remove("hidden");
        } else {
            open.classList.remove("hidden");
            close.classList.add("hidden");
        }
    });
}
//  Slider Desktop
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
