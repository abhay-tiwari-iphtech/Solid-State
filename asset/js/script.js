let header = document.getElementById("header");
let webName = document.getElementById("web-name");

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    header.classList.add("onTop");
    webName.innerText = "SOLID STATE";
  } else {
    header.classList.remove("onTop");
    webName.innerText = "";
  }
});
