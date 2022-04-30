// Sidebar script starts here
function dropdownHandler(element) {
    let single = element.getElementsByTagName("ul")[0];
    single.classList.toggle("hidden");
}
var sideBar = document.getElementById("mobile-nav");
function sidebarHandler() {
    sideBar.classList.toggle("hidden");
}
// Sidebar script ends here

// FAQ script starts here
let elements = document.querySelectorAll("[data-menu]");
for (let i = 0; i < elements.length; i++) {
    let main = elements[i];
    main.addEventListener("click", function () {
        let element = main.parentElement.parentElement;
        let andicators = main.querySelectorAll("svg");
        let child = element.querySelector("p");
        child.classList.toggle("hidden");
        if (child.classList.contains("hidden")) {
            andicators[0].style.display = "block";
            andicators[1].style.display = "none";
        } else {
            andicators[0].style.display = "none";
            andicators[1].style.display = "block";
        }
    });
}
// FAQ script ends here

// Tabs script starts here
function activeTab(element) {
    console.log("Element is here", element);
    let siblings = element.parentNode.querySelectorAll("li");
    for (let item of siblings) {
        item.classList.add("text-gray-600");
        item.classList.add("bg-white");
        item.classList.remove("bg-gray-100");
        item.classList.remove("text-blue-500");
    }
    element.classList.remove("text-gray-600");
    element.classList.remove("bg-white");
    element.classList.add("bg-gray-100");
    element.classList.add("text-blue-500");
}
// Tabs script ends here
