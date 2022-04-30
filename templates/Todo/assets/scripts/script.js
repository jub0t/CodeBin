// Inbox script starts
let elements = document.querySelectorAll("[data-menu]");
for (let i = 0; i < elements.length; i++) {
    let main = elements[i];
    main.addEventListener("click", function () {
        let element = main.parentElement.parentElement;
        let andicators = main.querySelectorAll("svg");
        let child = element.querySelector("ul");
        child.classList.toggle("hidden");
        if (child.classList[1] !== "hidden") {
            andicators[1].style.display = "block";
            andicators[0].style.display = "none";
        } else {
            andicators[1].style.display = "none";
            andicators[0].style.display = "block";
        }
    });
}
//Inbox script ends

// Notebook script starts
function dropdownFunction(element) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    let list = element.parentElement.parentElement.getElementsByClassName("dropdown-content")[0];
    for (i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.add("hidden");
    }
    list.classList.toggle("hidden");
}
window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            openDropdown.classList.add("hidden");
        }
    }
};
let flag = true;
function checkAll() {
    if (flag) {
        document.querySelectorAll('input[type="checkbox"]').forEach((el) => {
            el.nextElementSibling.classList.remove("hidden");
        });
        flag = false;
    } else {
        document.querySelectorAll('input[type="checkbox"]').forEach((el) => {
            el.nextElementSibling.classList.add("hidden");
        });
        flag = true;
    }
}
// Reroute
goToNotes = () => {
    window.location.href = "./notes.html";
};
goToTodos = () => {
    window.location.href = "./todos.html";
};
// Notebook script ends
openSidebar = (flag) => {
    let sidebar = document.getElementById("sidebar");
    flag ? sidebar.classList.add("hidden") : sidebar.classList.remove("hidden");
};
//popup

const Popup = (flag) => {
    if (flag) {
        document.getElementById("popup").classList.add("right-100");
        document.getElementById("popup").classList.remove("hidden");
    } else {
        document.getElementById("popup").classList.add("hidden");
    }
};
const Popup_review = (flag) => {
    if (flag) {
        document.getElementById("popup").classList.add("hidden");
        document.getElementById("popup_review").classList.remove("hidden");
    } else {
        document.getElementById("popup_review").classList.add("hidden");
    }
};

const selection = (flag) => {
    if (flag) {
        document.getElementById("check").classList.add("md:flex");
        document.getElementById("check").classList.remove("hidden");
    } else {
        document.getElementById("check").classList.remove("md:flex");
        document.getElementById("check").classList.add("hidden");
    }
};
