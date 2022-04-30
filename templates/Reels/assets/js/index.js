let sideBar = document.getElementById("mobile-nav");
let menu = document.getElementById("menu");
let cross = document.getElementById("cross");
const sidebarHandler = (check) => {
    if (check) {
        sideBar.style.transform = "translateX(-0px)";
    } else {
        sideBar.style.transform = "translateX(-500px)";
    }
};
let myFlag = true;
const MenuHandler3 = () => {
    if (myFlag) {
        document.getElementById("list2").classList.remove("hidden");
        document.getElementById("close2").classList.remove("hidden");
        document.getElementById("open2").classList.add("hidden");
        myFlag = false;
    } else {
        document.getElementById("list2").classList.add("hidden");
        document.getElementById("close2").classList.add("hidden");
        document.getElementById("open2").classList.remove("hidden");
        myFlag = true;
    }
};

// Grids
$(".grid").isotope({
    itemSelector: ".grid-item",
    percentPosition: true,
    masonry: {
        columnWidth: ".grid-sizer",
        horizontalOrder: true,
    },
});
