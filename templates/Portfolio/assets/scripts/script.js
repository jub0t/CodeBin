//Hamburger and mobile menu
function toggleMenu(flag) {
  let value = document.getElementById("menu");
  if (flag) {
    value.classList.remove("hidden");
  } else {
    value.classList.add("hidden");
  }
}
function animate(elem, style, unit, from, to, time, prop) {
  if (!elem) {
    return;
  }
  var start = new Date().getTime(),
    timer = setInterval(function () {
      var step = Math.min(1, (new Date().getTime() - start) / time);
      if (prop) {
        elem[style] = from + step * (to - from) + unit;
      } else {
        elem.style[style] = from + step * (to - from) + unit;
      }
      if (step === 1) {
        clearInterval(timer);
      }
    }, 25);
  if (prop) {
    elem[style] = from + unit;
  } else {
    elem.style[style] = from + unit;
  }
}

document.getElementById("goDown").onclick = function () {
  var target = document.getElementById("products");
  animate(
    document.scrollingElement || document.documentElement,
    "scrollTop",
    "",
    0,
    target.offsetTop,
    2000,
    true
  );
};
