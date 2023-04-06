// tab

let faqs = document.querySelectorAll(".faq_tab_btn");
let faq_boxs = document.querySelectorAll(".faq_box");
let faq_nums = document.querySelectorAll(".faq_num");

for (let i = 0; i < faqs.length; i++) {
  faqs[i].addEventListener("click", () => change_faq(i));
}

function change_faq(i) {
  for (let j = 0; j < faqs.length; j++) {
    faqs[j].classList.remove("checked");
  }
  for (let k = 0; k < faq_boxs.length; k++) {
    faq_boxs[k].style.display = "none";
  }

  if (i > 1) {
    for (let i = 1; i < 5; i++) {
      faq_nums[i].style.display = "none";
    }
  } else {
    for (let i = 1; i < 5; i++) {
      faq_nums[i].style.display = "block";
    }
  }
  faqs[i].classList.add("checked");
  faq_boxs[i].style.display = "block";
}

for (let i = 0; i < faq_nums.length; i++) {
  faq_nums[i].addEventListener("click", () => change_faq_num(i));
}

function change_faq_num(i) {
  for (let j = 0; j < faq_nums.length; j++) {
    faq_nums[j].classList.remove("check");
  }
  faq_nums[i].classList.add("check");
}

function faqkey() {
  if (window.event.keyCode == 13) {
    const element = document.querySelector("#faq_tt");

    element.value = "검색 결과가 없습니다.";
  }
}
function faqkey2() {
  const element = document.querySelector("#faq_tt");

  element.value = "검색 결과가 없습니다.";
}
