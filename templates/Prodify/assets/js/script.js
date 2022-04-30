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

let elements1 = document.querySelectorAll("[data-menuc2]");
for (let i = 0; i < elements1.length; i++) {
    let main = elements1[i];
    main.addEventListener("click", function () {
        let list1 = document.getElementById("listHolder1");
        let open = document.getElementById("andicatorsOpen");
        let close = document.getElementById("andicatorClose");
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

let elements2 = document.querySelectorAll("[data-menu2]");
for (let i = 0; i < elements2.length; i++) {
    let main = elements2[i];
    main.addEventListener("click", function () {
        let list2 = document.getElementById("listHolder2");
        let open = document.getElementById("andicatorsOpen2");
        let close = document.getElementById("andicatorClose2");
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
