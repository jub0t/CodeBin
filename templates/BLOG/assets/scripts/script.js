//Hamburger and mobile menu
function toggleMenu(flag) {
  let value = document.getElementById("menu");
  if (flag) {
    value.classList.remove("hidden");
  } else {
    value.classList.add("hidden");
  }
}
// Tab handler starts
toggleContent = (source, target) => {
  let exploreContent = document.getElementById("explore");
  let businessContent = document.getElementById("business");
  let techContent = document.getElementById("tech");
  let lifestyleContent = document.getElementById("lifestyle");
  let siblings = source.parentNode.querySelectorAll("li");
  for (let item of siblings) {
    item.classList.remove("border-b-2", "border-yellow-500", "text-yellow-500");
    item.classList.add("text-gray-600", "cursor-pointer");
  }
  source.classList.remove("text-gray-600", "cursor-pointer");
  source.classList.add("border-b-2", "border-yellow-500", "text-yellow-500");
  switch (target) {
    case 1:
      exploreContent.classList.remove("hidden");
      businessContent.classList.add("hidden");
      techContent.classList.add("hidden");
      lifestyleContent.classList.add("hidden");
      break;
    case 2:
      exploreContent.classList.add("hidden");
      businessContent.classList.remove("hidden");
      techContent.classList.add("hidden");
      lifestyleContent.classList.add("hidden");
      break;
    case 3:
      exploreContent.classList.add("hidden");
      businessContent.classList.add("hidden");
      techContent.classList.remove("hidden");
      lifestyleContent.classList.add("hidden");
      break;
    case 4:
      exploreContent.classList.add("hidden");
      businessContent.classList.add("hidden");
      techContent.classList.add("hidden");
      lifestyleContent.classList.remove("hidden");
      break;
  }
};
// Tab handler ends
