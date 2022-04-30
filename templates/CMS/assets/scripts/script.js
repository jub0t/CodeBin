// Sidebar script starts here
var sideBar = document.getElementById("mobile-nav");
var toggler = document.getElementById("mobile-toggler");
sideBar.style.transform = "translateX(-225px)";
let moved = true;

function sidebarHandler() {
    if (moved) {
        sideBar.style.transform = "translateX(0px)";
        moved = false;
    } else {
        sideBar.style.transform = "translateX(-225px)";
        moved = true;
    }
}
// Sidebar script ends here

// Tabs script starts here
function activeTab(element, flag) {
    let siblings = element.parentNode.querySelectorAll("li");
    let imgContent = document.getElementById("images_content");
    let vidContent = document.getElementById("videos_content");
    let docContent = document.getElementById("docs_content");
    let sharedContent = document.getElementById("shared_content");
    let mainButton = document.getElementById("btn_text");
    let addIcon = document.getElementById("add_icon");
    let shareIcon = document.getElementById("share_icon");
    for (let item of siblings) {
        item.classList.add("text-gray-600");
        item.classList.remove("text-gray-800");
        item.classList.remove("bg-white");
    }
    element.classList.remove("text-gray-600");
    element.classList.add("text-gray-800");
    element.classList.add("bg-white");
    switch (flag) {
        case 1:
            imgContent.classList.remove("hidden");
            vidContent.classList.add("hidden");
            docContent.classList.add("hidden");
            sharedContent.classList.add("hidden");
            shareIcon.classList.add("hidden");
            addIcon.classList.remove("hidden");
            mainButton.innerHTML = "Add Images";
            break;
        case 2:
            vidContent.classList.remove("hidden");
            imgContent.classList.add("hidden");
            docContent.classList.add("hidden");
            sharedContent.classList.add("hidden");
            shareIcon.classList.add("hidden");
            addIcon.classList.remove("hidden");
            mainButton.innerHTML = "Add Videos";
            break;
        case 3:
            docContent.classList.remove("hidden");
            vidContent.classList.add("hidden");
            imgContent.classList.add("hidden");
            sharedContent.classList.add("hidden");
            shareIcon.classList.add("hidden");
            addIcon.classList.remove("hidden");
            mainButton.innerHTML = "Add Documents";
            break;
        case 4:
            sharedContent.classList.remove("hidden");
            vidContent.classList.add("hidden");
            docContent.classList.add("hidden");
            imgContent.classList.add("hidden");
            shareIcon.classList.remove("hidden");
            addIcon.classList.add("hidden");
            mainButton.innerHTML = "Share Now";
            break;
    }
}
// Tabs script ends here

// Table interactions script starts here
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
function checkAll(element) {
    let rows = element.parentElement.parentElement.parentElement.nextElementSibling.children;
    for (var i = 0; i < rows.length; i++) {
        if (element.checked) {
            rows[i].classList.add("bg-gray-100");
            let checkbox = rows[i].getElementsByTagName("input")[0];
            if (checkbox) {
                checkbox.checked = true;
            }
        } else {
            rows[i].classList.remove("bg-gray-100");
            let checkbox = rows[i].getElementsByTagName("input")[0];
            if (checkbox) {
                checkbox.checked = false;
            }
        }
    }
}
function tableInteract(element) {
    var single = element.parentElement.parentElement;
    single.classList.toggle("bg-gray-100");
}
let temp = 0;
function pageView(val) {
    let text = document.getElementById("page-view");
    if (val) {
        if (temp === 2) {
            temp = 0;
        } else {
            temp = temp + 1;
        }
    } else if (temp !== 0) {
        temp = temp - 1;
    }
    switch (temp) {
        case 0:
            text.innerHTML = "Viewing 1 - 20 of 60";
            break;
        case 1:
            text.innerHTML = "Viewing 21 - 40 of 60";
            break;
        case 2:
            text.innerHTML = "Viewing 41 - 60 of 60";
        default:
    }
}
// Table interactions script ends here

// Tooltip script starts here
function showTooltip(flag) {
    let tooltip = document.getElementById("tooltip");
    if (flag) {
        tooltip.classList.remove("opacity-0");
    } else {
        tooltip.classList.add("opacity-0");
    }
}
// Tooltip script ends here

// Form submission script starts here
let form = document.getElementById("form");
form.addEventListener(
    "submit",
    function (event) {
        event.preventDefault();
        let elements = form.elements;
        let payload = {};
        for (let i = 0; i < elements.length; i++) {
            let item = elements.item(i);
            switch (item.type) {
                case "checkbox":
                    payload[item.name] = item.checked;
                    break;
                case "submit":
                    break;
                default:
                    payload[item.name] = item.value;
                    break;
            }
        }
        // Place your API call here to submit your payload.
        // console.log("payload", payload);
    },
    true
);
// Form submission script ends here

// Settings steps script starts here
function handleSteps(flag) {
    let step1 = document.getElementById("step_1");
    let step2 = document.getElementById("step_2");
    let step3 = document.getElementById("step_3");
    let tooltip = document.getElementById("tooltip");
    let progressBar = document.getElementById("progress_bar");
    let marks = progressBar.querySelectorAll("span");
    let checks = progressBar.querySelectorAll("svg");
    switch (flag) {
        case 1:
            step2.classList.remove("hidden");
            step1.classList.add("hidden");
            step3.classList.add("hidden");
            tooltip.classList.remove("hidden");
            progressBar.children[0].children[0].classList.add("bg-blue-500");
            progressBar.children[0].children[1].classList.remove("bg-blue-500");
            progressBar.children[0].classList.add("bg-blue-500");
            progressBar.querySelectorAll("span")[1].classList.remove("hidden");
            marks[0].classList.add("hidden");
            marks[1].classList.remove("hidden");
            checks[0].classList.remove("hidden");
            checks[1].classList.add("hidden");
            marks[2].classList.add("hidden");
            break;
        case 2:
            step3.classList.remove("hidden");
            step2.classList.add("hidden");
            step1.classList.add("hidden");
            tooltip.classList.add("hidden");
            progressBar.children[0].children[1].classList.add("bg-blue-500");
            marks[1].classList.add("hidden");
            checks[1].classList.remove("hidden");
            marks[2].classList.remove("hidden");
            break;
        case 3:
            step1.classList.remove("hidden");
            step2.classList.add("hidden");
            step3.classList.add("hidden");
            tooltip.classList.add("hidden");
            progressBar.children[0].children[0].classList.remove("bg-blue-500");
            progressBar.children[0].classList.remove("bg-blue-500");
            marks[1].classList.add("hidden");
            checks[0].classList.add("hidden");
            marks[0].classList.remove("hidden");
            break;
    }
}
// Settings steps script ends here

// Dropdown handler script starts here
let elements = document.querySelectorAll("[data-menu]");
for (let i = 0; i < elements.length; i++) {
    let main = elements[i];
    main.addEventListener("click", function () {
        let element = main.parentElement.parentElement;
        let andicators = main.querySelectorAll("svg");
        let child = element.querySelector("ul");
        if (child.classList.contains("opacity-0")) {
            child.classList.remove("invisible");
            child.classList.add("visible");
            child.classList.add("opacity-100");
            child.classList.remove("opacity-0");
            andicators[0].style.display = "block";
            andicators[1].style.display = "none";
        } else {
            child.classList.add("invisible");
            child.classList.remove("visible");
            child.classList.remove("opacity-100");
            child.classList.add("opacity-0");
            andicators[0].style.display = "none";
            andicators[1].style.display = "block";
        }
    });
}
// Dropdown handler script ends here
