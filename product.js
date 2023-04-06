let tab_boxs = document.querySelectorAll(".tabs");
let pickers = document.querySelectorAll(".picker");
let car_title = document.querySelector("#car_title");
let car_img = document.querySelector("#car_image");
let car_model = document.querySelector("#model");
let car_chip = document.querySelector("#price");
let seatboxs = document.querySelectorAll(".seat_box");
let optboxs = document.querySelectorAll(".seat_box2");

for (let i = 0; i < tab_boxs.length; i++) {
  tab_boxs[i].addEventListener("click", () => change_box(i));
}

for (let i = 0; i < pickers.length; i++) {
  pickers[i].addEventListener("click", () => colorpick(i));
}

function change_box(i) {
  console.log("hi");
  switch (i) {
    case 0:
      picker_reset();
      tab_boxs[0].classList.add("checked");
      tab_boxs[1].classList.remove("checked");
      tab_boxs[2].classList.remove("checked");
      pickers[0].classList.add("check");
      car_title.innerHTML = "718 Cayman";
      car_img.src = "./image/pro_718_1.jpg";
      car_model.value = "718 Cayman";
      car_chip.value = "91,600,000 KRW";
      document.querySelector(".color_gray").style.display = "block";
      document.querySelector(".color_sky").style.display = "none";
      document.querySelector(".color_beige").style.display = "none";
      colorpick(i);
      break;

    case 1:
      picker_reset();
      tab_boxs[0].classList.remove("checked");
      tab_boxs[1].classList.add("checked");
      tab_boxs[2].classList.remove("checked");
      pickers[0].classList.add("check");
      car_title.innerHTML = "911 Carrera";
      car_img.src = "./image/pro_911_1.jpg";
      car_model.value = "911 Carerra";
      car_chip.value = "171,100,000 KRW";
      document.querySelector(".color_gray").style.display = "block";
      document.querySelector(".color_sky").style.display = "none";
      document.querySelector(".color_beige").style.display = "none";
      for (let i = 0; i < pickers.length; i++) {
        pickers[i].addEventListener("click", () => colorpick1(i));
      }
      break;

    case 2:
      picker_reset();
      tab_boxs[0].classList.remove("checked");
      tab_boxs[1].classList.remove("checked");
      tab_boxs[2].classList.add("checked");
      pickers[0].classList.add("check");
      car_title.innerHTML = "Taycan";
      car_img.src = "./image/pro_tay_1.jpg";
      car_model.value = "Taycan";
      car_chip.value = "129,900,000 KRW";
      document.querySelector(".color_gray").style.display = "none";
      document.querySelector(".color_sky").style.display = "block";
      document.querySelector(".color_beige").style.display = "block";
      for (let i = 0; i < pickers.length; i++) {
        pickers[i].addEventListener("click", () => colorpick2(i));
      }
      break;
  }
}

function picker_reset() {
  for (let i = 0; i < pickers.length; i++) {
    pickers[i].classList.remove("check");
  }
}

function colorpick(i) {
  picker_reset();
  pickers[i].classList.add("check");

  switch (i) {
    case 0:
      car_img.src = "./image/pro_718_1.jpg";
      break;
    case 1:
      car_img.src = "./image/pro_718_2.jpg";
      break;
    case 2:
      car_img.src = "./image/pro_718_3.jpg";
      break;
    case 3:
      car_img.src = "./image/pro_718_4.jpg";
      break;
    case 4:
      break;
    case 5:
      break;
  }
}

function colorpick1(i) {
  picker_reset();
  pickers[i].classList.add("check");

  switch (i) {
    case 0:
      car_img.src = "./image/pro_911_1.jpg";
      break;
    case 1:
      car_img.src = "./image/pro_911_2.jpg";
      break;
    case 2:
      car_img.src = "./image/pro_911_3.jpg";
      break;
    case 3:
      car_img.src = "./image/pro_911_4.jpg";
      break;
    case 4:
      break;
    case 5:
      break;
  }
}

function colorpick2(i) {
  picker_reset();
  pickers[i].classList.add("check");

  switch (i) {
    case 0:
      car_img.src = "./image/pro_tay_1.jpg";
      break;
    case 1:
      car_img.src = "./image/pro_tay_2.jpg";
      break;
    case 2:
      car_img.src = "./image/pro_tay_3.jpg";
      break;
    case 3:
      break;
    case 4:
      car_img.src = "./image/pro_tay_4.jpg";
      break;
    case 5:
      car_img.src = "./image/pro_tay_5.jpg";
      break;
  }
}

for (let i = 0; i < seatboxs.length; i++) {
  seatboxs[i].addEventListener("click", function() {
    seatboxs[0].classList.remove("act");
    seatboxs[1].classList.remove("act");
    seatboxs[2].classList.remove("act");
    seatboxs[3].classList.remove("act");

    this.classList.add("act");
  });
}

for (let i = 0; i < optboxs.length; i++) {
  optboxs[i].addEventListener("click", function() {
    this.classList.toggle("act");
  });
}

function popup() {
  document.querySelector("#thank_pop").classList.add("act");
}
