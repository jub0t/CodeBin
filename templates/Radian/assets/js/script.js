const MenuHandler = (flag) => {
    if(flag){
        document.getElementById("list").classList.add("top-100");
        document.getElementById("list").classList.remove("hidden");
        document.getElementById("close").classList.remove("hidden")
        document.getElementById("open").classList.add("hidden")
    }else{
        document.getElementById("list").classList.remove("top-100");
        document.getElementById("list").classList.add("hidden");
        document.getElementById("close").classList.add("hidden")
        document.getElementById("open").classList.remove("hidden")
    }
};