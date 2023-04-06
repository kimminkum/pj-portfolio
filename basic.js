function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/

          // nav con onoff
          document.querySelector("#side_con").addEventListener("click", e => {
            document.querySelector("#side_bar").classList.add("act");
            document.querySelector("#top").classList.add("act");
            setTimeout(onlight1, 10);
          });
          document
            .querySelector("#side_close")
            .addEventListener("click", function() {
              document.querySelector("#side_bar").classList.remove("act");
              document.querySelector("#top").classList.remove("act");
              setTimeout(onblack1, 10);
            });

          document
            .querySelector("#search_con")
            .addEventListener("click", function() {
              document.querySelector("#search_hash").classList.add("act");
              document.querySelector("#top").classList.add("act");
              setTimeout(onlight, 10);
            });
          document
            .querySelector("#search_close")
            .addEventListener("click", function() {
              document.querySelector("#search_hash").classList.remove("act");
              document.querySelector("#top").classList.remove("act");
              setTimeout(onblack, 10);
            });

          // opacity 등장효과
          function onlight() {
            document.querySelector("#search_hash").style.opacity = "1";
          }
          function onblack() {
            document.querySelector("#search_hash").style.opacity = "0";
          }
          function onlight1() {
            document.querySelector("#side_bar").style.opacity = "1";
          }
          function onblack1() {
            document.querySelector("#side_bar").style.opacity = "0";
          }

          // 아코디언
          var acc = document.getElementsByClassName("accodion_btn");
          var i;

          for (i = 0; i < acc.length; i++) {
            acc[i].onclick = function() {
              var panel = this.nextElementSibling;
              var coursePanel = document.getElementsByClassName("course-panel");
              var courseAccordionActive = document.getElementsByClassName(
                "accodion_btn active"
              );

              if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                this.classList.remove("active");
              } else {
                for (var ii = 0; ii < courseAccordionActive.length; ii++) {
                  courseAccordionActive[ii].classList.remove("active");
                }
                for (var iii = 0; iii < coursePanel.length; iii++) {
                  this.classList.remove("active");
                  coursePanel[iii].style.maxHeight = null;
                }
                panel.style.maxHeight = panel.scrollHeight + "px";
                this.classList.add("active");
              }
            };
          }
          //   위칸안에 넣기
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}

// 텍스트 옮기기

function statusChange(statusItem) {
  var strText = $(statusItem).text();

  // strText 에 전체 문자열이 입력된다.
  $("#tt").val(strText);
}

// 추가삭제

function appendDiv() {
  const element = document.getElementById("tt");
  if (element.value === "") {
    return;
  }

  // new div 생성
  let newBtn = document.createElement("button");

  const tagby = document.querySelector(".wordtag");

  // new div에 style 추가
  newBtn.classList.add("hashtag");

  // new div에 추가할 text node 생성
  const newText = document.createTextNode(element.value);

  // text node를 new div에 추가
  newBtn.appendChild(newText);

  // new div를 기존 div에 추가
  tagby.appendChild(newBtn);

  newBtn.addEventListener("click", () => statusChange(this));
}

function stopping() {
  alert("준비중입니다.");
}

// top btn

$("#top_btn").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 400);
  return false;
});

// 엔터키 이벤트
function enterkey() {
  if (window.event.keyCode == 13) {
    appendDiv();
  }
}

let choices = [];
let ops = [];
let opon = false;
choices = document.querySelectorAll(".choice");
ops = document.querySelectorAll(".options");

for (let i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", () => selectdiv(i));
}

function selectdiv(i) {
  ops[i].classList.add("act");
  opon = true;

  console.log(opon);
}

// text change

function offop() {
  for (let i = 0; i < ops.length; i++) {
    ops[i].classList.remove("act");
  }
}

// 특정 영역
document.addEventListener("click", function(e) {
  if (opon == false) {
    return;
  } else {
    if (e.target.className != ops) {
      let tgEl = e.target;
      let opDiv = tgEl.closest(".choice");
      console.log("hi");

      if (!opDiv) {
        offop();
        return (opon = false);
      }
    }
  }
});
