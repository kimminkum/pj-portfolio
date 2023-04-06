const swiper = new Swiper(".first", {
  infinite: true,
  slidesPerView: 1,
  debugger: true,
  speed: "2000",
  autoplay: {
    delay: 2300,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

$(".swiper-slide").on("click", function() {
  swiper.autoplay.stop();
});

const best_swiper1 = new Swiper(".second", {
  infinite: true,
  slidesPerView: 1,
  debugger: true,
  speed: "2000",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    780: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

const best_swiper2 = new Swiper(".three", {
  infinite: true,
  slidesPerView: 1,
  debugger: true,
  speed: "2000",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    780: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

const best_swiper3 = new Swiper(".four", {
  infinite: true,
  slidesPerView: 1,
  debugger: true,
  speed: "2000",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    780: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

const best_swiper4 = new Swiper(".five", {
  infinite: true,
  slidesPerView: 1,
  debugger: true,
  speed: "2000",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    680: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    1366: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

const used_swiper = new Swiper(".center", {
  infinite: true,
  loop: true,
  slidesPerView: 1,
  speed: "1000",
  slidesPerView: "auto",
  spaceBetween: -100,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination"
  },
  breakpoints: {
    1366: {
      spaceBetween: -200
    }
  }
});

// tab img

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
// tab

let bestTabs = [];
let eTabs = [];
let tab_serch = [];
let colsecs = [];
let ones = [];
bestTabs = document.querySelectorAll(".bestTab");
eTabs = document.querySelectorAll(".eTab");
tab_serch = document.querySelectorAll(".tab1");
colsecs = document.querySelectorAll(".colsec");
ones = document.querySelectorAll(".one");

for (let i = 0; i < bestTabs.length; i++) {
  bestTabs[i].addEventListener("click", () => tabschange(i));
}
for (let i = 0; i < eTabs.length; i++) {
  eTabs[i].addEventListener("click", () => tabschange1(i));
}
for (let i = 0; i < tab_serch.length; i++) {
  tab_serch[i].addEventListener("click", () => tabonoff(i));
}
for (let i = 0; i < colsecs.length; i++) {
  colsecs[i].addEventListener("click", () => fonsiup(i));
}

function tabonoff(i) {
  tab_serch[i].classList.toggle("check");
}

function fonsiup(i) {
  ones[i].classList.toggle("check");
}

function tabschange(i) {
  for (let j = 0; j < bestTabs.length; j++) {
    bestTabs[j].classList.remove("checked");
  }
  document.querySelector("#second").style.display = "none";
  document.querySelector("#three").style.display = "none";
  document.querySelector("#four").style.display = "none";
  document.querySelector("#five").style.display = "none";

  bestTabs[i].classList.add("checked");
  switch (i) {
    case 0:
      document.querySelector("#second").style.display = "block";
      break;
    case 1:
      document.querySelector("#three").style.display = "block";
      break;
    case 2:
      document.querySelector("#four").style.display = "block";
      break;
    case 3:
      document.querySelector("#five").style.display = "block";
      break;
  }
}

let thplus = window.matchMedia("screen and (min-width:1366px");

function tabschange1(i) {
  for (let j = 0; j < eTabs.length; j++) {
    eTabs[j].classList.remove("checked");
  }
  document.querySelector("#cani").style.display = "none";
  document.querySelector("#ssona").style.display = "none";
  document.querySelector("#spo").style.display = "none";
  document.querySelector("#moha").style.display = "none";

  eTabs[i].classList.add("checked");
  switch (i) {
    case 0:
      document.querySelector("#cani").style.display = "flex";
      break;
    case 1:
      document.querySelector("#ssona").style.display = "flex";
      break;
    case 2:
      document.querySelector("#spo").style.display = "flex";
      break;
    case 3:
      document.querySelector("#moha").style.display = "flex";
      break;
  }
}

// 숫자 올리기 + 태그가 보여져야 작동하는 것.

let isVisible = false;

$(window).on("scroll", function() {
  if (checkVisible($(".nums")) && !isVisible) {
    $(".nums").each(function() {
      const $this = $(this),
        countTo = $this.attr("data-count");

      $({
        countNum: $this.text()
      }).animate(
        {
          countNum: countTo
        },
        {
          duration: 4000,
          easing: "linear",
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(
              this.countNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            );
            //3자리 마다 콤마 표시 적용
          }
        }
      );
    });
    isVisible = true;
  }
});

let isVisible2 = false;

$(window).on("scroll", function() {
  if (checkVisible($(".nums2")) && !isVisible2) {
    $(".nums2").each(function() {
      const $this = $(this),
        countTo = $this.attr("data-count");

      $({
        countNum: $this.text()
      }).animate(
        {
          countNum: countTo
        },
        {
          duration: 4000,
          easing: "linear",
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(
              this.countNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            );
            //3자리 마다 콤마 표시 적용
          }
        }
      );
    });
    isVisible2 = true;
  }
});

// input lange 채우기

function checkVisible(elm, eval) {
  eval = eval || "object visible";
  var viewportHeight = $(window).height(), // Viewport Height
    scrolltop = $(window).scrollTop(), // Scroll Top
    y = $(elm).offset().top,
    elementHeight = $(elm).height();

  if (eval == "object visible")
    return y < viewportHeight + scrolltop && y > scrolltop - elementHeight;
  if (eval == "above") return y < viewportHeight + scrolltop;
}

document
  .querySelector(".rangeMoney")
  .addEventListener("input", function(event) {
    var gradient_value = 100 / event.target.attributes.max.value;
    event.target.style.background =
      "linear-gradient(to right, #FFE283 0%, #FFE283 " +
      gradient_value * event.target.value +
      "%, rgb(236, 236, 236) " +
      gradient_value * event.target.value +
      "%, rgb(236, 236, 236) 100%)";
  });

document
  .querySelector(".rangeMonth")
  .addEventListener("input", function(event) {
    var gradient_value = 100 / event.target.attributes.max.value;
    event.target.style.background =
      "linear-gradient(to right, #FFE283 0%, #FFE283 " +
      gradient_value * event.target.value +
      "%, rgb(236, 236, 236) " +
      gradient_value * event.target.value +
      "%, rgb(236, 236, 236) 100%)";
  });

document
  .querySelector(".rangeMoney1")
  .addEventListener("input", function(event) {
    var gradient_value = 100 / event.target.attributes.max.value;
    event.target.style.background =
      "linear-gradient(to right, #FFE283 0%, #FFE283 " +
      gradient_value * event.target.value +
      "%, rgb(236, 236, 236) " +
      gradient_value * event.target.value +
      "%, rgb(236, 236, 236) 100%)";
  });

document
  .querySelector(".rangeMonth1")
  .addEventListener("input", function(event) {
    var gradient_value = 100 / event.target.attributes.max.value;
    event.target.style.background =
      "linear-gradient(to right, #FFE283 0%, #FFE283 " +
      gradient_value * event.target.value +
      "%, rgb(236, 236, 236) " +
      gradient_value * event.target.value +
      "%, rgb(236, 236, 236) 100%)";
  });

document
  .querySelector(".rangeMoney2")
  .addEventListener("input", function(event) {
    var gradient_value = 100 / event.target.attributes.max.value;
    event.target.style.background =
      "linear-gradient(to right, #FFE283 0%, #FFE283 " +
      gradient_value * event.target.value +
      "%, rgb(236, 236, 236) " +
      gradient_value * event.target.value +
      "%, rgb(236, 236, 236) 100%)";
  });

document
  .querySelector(".rangeMonth2")
  .addEventListener("input", function(event) {
    var gradient_value = 100 / event.target.attributes.max.value;
    event.target.style.background =
      "linear-gradient(to right, #FFE283 0%, #FFE283 " +
      gradient_value * event.target.value +
      "%, rgb(236, 236, 236) " +
      gradient_value * event.target.value +
      "%, rgb(236, 236, 236) 100%)";
  });

document
  .querySelector(".rangeMoney3")
  .addEventListener("input", function(event) {
    var gradient_value = 100 / event.target.attributes.max.value;
    event.target.style.background =
      "linear-gradient(to right, #FFE283 0%, #FFE283 " +
      gradient_value * event.target.value +
      "%, rgb(236, 236, 236) " +
      gradient_value * event.target.value +
      "%, rgb(236, 236, 236) 100%)";
  });

document
  .querySelector(".rangeMonth3")
  .addEventListener("input", function(event) {
    var gradient_value = 100 / event.target.attributes.max.value;
    event.target.style.background =
      "linear-gradient(to right, #FFE283 0%, #FFE283 " +
      gradient_value * event.target.value +
      "%, rgb(236, 236, 236) " +
      gradient_value * event.target.value +
      "%, rgb(236, 236, 236) 100%)";
  });

// 셀렉터 옵션스

// range 옮기면 텍스트 바꾸기

let paymentRange = document.querySelector(".rangeMoney");
let advanceTotal = document.querySelector(".rangeRead");
let advanceTotalValue = Number(paymentRange.value);
let Cayman718Price = Number(95000000);
let advancePaymentValue = Cayman718Price - advanceTotalValue;

let periodRange = document.querySelector(".rangeMonth");
let installmentTotal = document.querySelector(".rangeSeb");
let rangeSteps = [3, 12, 24, 36, 48, 60];
let installmentTotalValue = Number(rangeSteps[periodRange.value]);

let monthlyPaymentValue = advancePaymentValue / installmentTotalValue;

paymentRange.oninput = function() {
  advanceTotalValue = Number(this.value);
  advanceTotal.value = advanceTotalValue
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  advancePaymentValue = Cayman718Price - advanceTotalValue;
  advancePayment.innerHTML = advancePaymentValue.toLocaleString("ko-KR");
  monthlyPaymentValue = advancePaymentValue / installmentTotalValue;
  monthlyPaymentValue = Math.floor(monthlyPaymentValue);
  monthlyPayment.innerHTML = monthlyPaymentValue.toLocaleString("ko-KR");
};

//함부 기간

periodRange.oninput = function() {
  installmentTotalValue = Number(rangeSteps[this.value]);
  installmentTotal.value = installmentTotalValue.toLocaleString("ko-KR");
  monthlyPaymentValue = Math.floor(monthlyPaymentValue);
  monthlyPaymentValue = advancePaymentValue / installmentTotalValue;
  monthlyPayment.innerHTML = monthlyPaymentValue.toLocaleString("ko-KR");
};

let paymentRange1 = document.querySelector(".rangeMoney1");
let advanceTotal1 = document.querySelector(".rangeRead1");
let advanceTotalValue1 = Number(paymentRange1.value);
let Cayman718Price1 = Number(3660);
let advancePaymentValue1 = Cayman718Price1 - advanceTotalValue1;

let periodRange1 = document.querySelector(".rangeMonth1");
let installmentTotal1 = document.querySelector(".rangeSeb1");
let rangeSteps1 = [3, 12, 24, 36, 48, 60];
let installmentTotalValue1 = Number(rangeSteps1[periodRange1.value]);

let monthlyPaymentValue1 = advancePaymentValue1 / installmentTotalValue1;

paymentRange1.oninput = function() {
  advanceTotalValue1 = Number(this.value);
  advanceTotal1.value = advanceTotalValue1
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  advancePaymentValue1 = Cayman718Price1 - advanceTotalValue1;
  advancePayment1.innerHTML = advancePaymentValue1.toLocaleString("ko-KR");
  monthlyPaymentValue1 = advancePaymentValue1 / installmentTotalValue1;
  monthlyPaymentValue1 = Math.floor(monthlyPaymentValue1);
  monthlyPayment1.innerHTML = monthlyPaymentValue1.toLocaleString("ko-KR");
};

//함부 기간

periodRange1.oninput = function() {
  installmentTotalValue1 = Number(rangeSteps1[this.value]);
  installmentTotal1.value = installmentTotalValue1.toLocaleString("ko-KR");
  monthlyPaymentValue1 = Math.floor(monthlyPaymentValue1);
  monthlyPaymentValue1 = advancePaymentValue1 / installmentTotalValue1;
  monthlyPayment1.innerHTML = monthlyPaymentValue1.toLocaleString("ko-KR");
};

let paymentRange2 = document.querySelector(".rangeMoney2");
let advanceTotal2 = document.querySelector(".rangeRead2");
let advanceTotalValue2 = Number(paymentRange2.value);
let Cayman718Price2 = Number(4780);
let advancePaymentValue2 = Cayman718Price2 - advanceTotalValue2;

let periodRange2 = document.querySelector(".rangeMonth2");
let installmentTotal2 = document.querySelector(".rangeSeb2");
let rangeSteps2 = [3, 12, 24, 36, 48, 60];
let installmentTotalValue2 = Number(rangeSteps2[periodRange2.value]);

let monthlyPaymentValue2 = advancePaymentValue2 / installmentTotalValue2;

paymentRange2.oninput = function() {
  advanceTotalValue2 = Number(this.value);
  advanceTotal2.value = advanceTotalValue2
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  advancePaymentValue2 = Cayman718Price2 - advanceTotalValue2;
  advancePayment2.innerHTML = advancePaymentValue2.toLocaleString("ko-KR");
  monthlyPaymentValue2 = advancePaymentValue2 / installmentTotalValue2;
  monthlyPaymentValue2 = Math.floor(monthlyPaymentValue2);
  monthlyPayment2.innerHTML = monthlyPaymentValue2.toLocaleString("ko-KR");
};

//함부 기간

periodRange2.oninput = function() {
  installmentTotalValue2 = Number(rangeSteps2[this.value]);
  installmentTotal2.value = installmentTotalValue2.toLocaleString("ko-KR");
  monthlyPaymentValue2 = Math.floor(monthlyPaymentValue2);
  monthlyPaymentValue2 = advancePaymentValue2 / installmentTotalValue2;
  monthlyPayment2.innerHTML = monthlyPaymentValue2.toLocaleString("ko-KR");
};

let paymentRange3 = document.querySelector(".rangeMoney3");
let advanceTotal3 = document.querySelector(".rangeRead3");
let advanceTotalValue3 = Number(paymentRange3.value);
let Cayman718Price3 = Number(5580);
let advancePaymentValue3 = Cayman718Price3 - advanceTotalValue3;

let periodRange3 = document.querySelector(".rangeMonth3");
let installmentTotal3 = document.querySelector(".rangeSeb3");
let rangeSteps3 = [3, 12, 24, 36, 48, 60];
let installmentTotalValue3 = Number(rangeSteps3[periodRange3.value]);

let monthlyPaymentValue3 = advancePaymentValue3 / installmentTotalValue3;

paymentRange3.oninput = function() {
  advanceTotalValue3 = Number(this.value);
  advanceTotal3.value = advanceTotalValue3
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  advancePaymentValue3 = Cayman718Price3 - advanceTotalValue3;
  advancePayment3.innerHTML = advancePaymentValue3.toLocaleString("ko-KR");
  monthlyPaymentValue3 = advancePaymentValue3 / installmentTotalValue3;
  monthlyPaymentValue3 = Math.floor(monthlyPaymentValue3);
  monthlyPayment3.innerHTML = monthlyPaymentValue3.toLocaleString("ko-KR");
};

//함부 기간

periodRange3.oninput = function() {
  installmentTotalValue3 = Number(rangeSteps3[this.value]);
  installmentTotal3.value = installmentTotalValue3.toLocaleString("ko-KR");
  monthlyPaymentValue3 = Math.floor(monthlyPaymentValue3);
  monthlyPaymentValue3 = advancePaymentValue3 / installmentTotalValue3;
  monthlyPayment3.innerHTML = monthlyPaymentValue3.toLocaleString("ko-KR");
};

document.querySelector("#ko1").addEventListener("click", function() {
  document.querySelector("#tex1").innerHTML = document.querySelector(
    "#ko1"
  ).innerHTML;
  offop();
});
document.querySelector("#en1").addEventListener("click", function() {
  document.querySelector("#tex1").innerHTML = document.querySelector(
    "#en1"
  ).innerHTML;
  offop();
});
document.querySelector("#jn1").addEventListener("click", function() {
  document.querySelector("#tex1").innerHTML = document.querySelector(
    "#jn1"
  ).innerHTML;
  offop();
});

document.querySelector("#k12").addEventListener("click", function() {
  document.querySelector("#mon1").innerHTML = document.querySelector(
    "#k12"
  ).innerHTML;
  offop();
});
document.querySelector("#k24").addEventListener("click", function() {
  document.querySelector("#mon1").innerHTML = document.querySelector(
    "#k24"
  ).innerHTML;
  offop();
});
document.querySelector("#k36").addEventListener("click", function() {
  document.querySelector("#mon1").innerHTML = document.querySelector(
    "#k36"
  ).innerHTML;
  offop();
});
document.querySelector("#k48").addEventListener("click", function() {
  document.querySelector("#mon1").innerHTML = document.querySelector(
    "#k48"
  ).innerHTML;
  offop();
});
document.querySelector("#k60").addEventListener("click", function() {
  document.querySelector("#mon1").innerHTML = document.querySelector(
    "#k60"
  ).innerHTML;
  offop();
});

document.querySelector("#ko2").addEventListener("click", function() {
  document.querySelector("#tex2").innerHTML = document.querySelector(
    "#ko2"
  ).innerHTML;
  offop();
});
document.querySelector("#en2").addEventListener("click", function() {
  document.querySelector("#tex2").innerHTML = document.querySelector(
    "#en2"
  ).innerHTML;
  offop();
});
document.querySelector("#jn2").addEventListener("click", function() {
  document.querySelector("#tex2").innerHTML = document.querySelector(
    "#jn2"
  ).innerHTML;
  offop();
});

document.querySelector("#i12").addEventListener("click", function() {
  document.querySelector("#mon2").innerHTML = document.querySelector(
    "#i12"
  ).innerHTML;
  offop();
});
document.querySelector("#i24").addEventListener("click", function() {
  document.querySelector("#mon2").innerHTML = document.querySelector(
    "#i24"
  ).innerHTML;
  offop();
});
document.querySelector("#i36").addEventListener("click", function() {
  document.querySelector("#mon2").innerHTML = document.querySelector(
    "#i36"
  ).innerHTML;
  offop();
});
document.querySelector("#i48").addEventListener("click", function() {
  document.querySelector("#mon2").innerHTML = document.querySelector(
    "#i48"
  ).innerHTML;
  offop();
});
document.querySelector("#i60").addEventListener("click", function() {
  document.querySelector("#mon2").innerHTML = document.querySelector(
    "#i60"
  ).innerHTML;
  offop();
});

document.querySelector("#ko3").addEventListener("click", function() {
  document.querySelector("#tex3").innerHTML = document.querySelector(
    "#ko3"
  ).innerHTML;
  offop();
});
document.querySelector("#en3").addEventListener("click", function() {
  document.querySelector("#tex3").innerHTML = document.querySelector(
    "#en3"
  ).innerHTML;
  offop();
});
document.querySelector("#jn3").addEventListener("click", function() {
  document.querySelector("#tex3").innerHTML = document.querySelector(
    "#jn3"
  ).innerHTML;
  offop();
});

document.querySelector("#j12").addEventListener("click", function() {
  document.querySelector("#mon3").innerHTML = document.querySelector(
    "#j12"
  ).innerHTML;
  offop();
});
document.querySelector("#j24").addEventListener("click", function() {
  document.querySelector("#mon3").innerHTML = document.querySelector(
    "#j24"
  ).innerHTML;
  offop();
});
document.querySelector("#j36").addEventListener("click", function() {
  document.querySelector("#mon3").innerHTML = document.querySelector(
    "#j36"
  ).innerHTML;
  offop();
});
document.querySelector("#j48").addEventListener("click", function() {
  document.querySelector("#mon3").innerHTML = document.querySelector(
    "#j48"
  ).innerHTML;
  offop();
});
document.querySelector("#j60").addEventListener("click", function() {
  document.querySelector("#mon3").innerHTML = document.querySelector(
    "#j60"
  ).innerHTML;
  offop();
});

document.querySelector("#ko4").addEventListener("click", function() {
  document.querySelector("#tex4").innerHTML = document.querySelector(
    "#ko4"
  ).innerHTML;
  offop();
});
document.querySelector("#en4").addEventListener("click", function() {
  document.querySelector("#tex4").innerHTML = document.querySelector(
    "#en4"
  ).innerHTML;
  offop();
});
document.querySelector("#jn4").addEventListener("click", function() {
  document.querySelector("#tex4").innerHTML = document.querySelector(
    "#jn4"
  ).innerHTML;
  offop();
});

document.querySelector("#l12").addEventListener("click", function() {
  document.querySelector("#mon4").innerHTML = document.querySelector(
    "#l12"
  ).innerHTML;
  offop();
});
document.querySelector("#l24").addEventListener("click", function() {
  document.querySelector("#mon4").innerHTML = document.querySelector(
    "#l24"
  ).innerHTML;
  offop();
});
document.querySelector("#l36").addEventListener("click", function() {
  document.querySelector("#mon4").innerHTML = document.querySelector(
    "#l36"
  ).innerHTML;
  offop();
});
document.querySelector("#l48").addEventListener("click", function() {
  document.querySelector("#mon4").innerHTML = document.querySelector(
    "#l48"
  ).innerHTML;
  offop();
});
document.querySelector("#l60").addEventListener("click", function() {
  document.querySelector("#mon4").innerHTML = document.querySelector(
    "#l60"
  ).innerHTML;
  offop();
});
