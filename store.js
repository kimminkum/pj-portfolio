let visual = document.getElementById("image-container");
function change_img(image) {
  visual.src = image.src;
}

let visual1 = document.getElementById("image_con");
function change_img1(image) {
  visual1.src = image.src;
}
let visual2 = document.getElementById("image_con2");
function change_img2(image) {
  visual2.src = image.src;
}
let visual3 = document.getElementById("image_con3");
function change_img3(image) {
  visual3.src = image.src;
}
let visual4 = document.getElementById("image_con4");
function change_img4(image) {
  visual4.src = image.src;
}

//

document.querySelector("#open_nav_con").addEventListener("click", function() {
  document.querySelector(".nav_side_menu").classList.add("act");
  document.querySelector("#top").classList.add("act");
});

document.querySelector("#nav_side_close").addEventListener("click", function() {
  document.querySelector(".nav_side_menu").classList.remove("act");
  document.querySelector("#top").classList.remove("act");
});

let marks = [];
marks = document.querySelectorAll(".mark_up");

for (let i = 0; i < marks.length; i++) {
  marks[i].addEventListener("click", () => marks_click(i));
}

function marks_click(i) {
  marks[i].classList.toggle("act");
}
