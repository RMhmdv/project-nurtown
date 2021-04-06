document.addEventListener("DOMContentLoaded", function () {
  let header = document.getElementById("menu");
  let btns = header.getElementsByClassName("list-item");
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }
})