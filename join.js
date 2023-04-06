var $sportAll = $("#sportAll");
$sportAll.change(function() {
  var $this = $(this);
  var checked = $this.prop("checked"); // checked 문자열 참조(true, false)
  // console.log(checked);
  $('input[name="sports"]').prop("checked", checked);
});

var boxes = $('input[name="sports"]');
boxes.change(function() {
  // 첫 번째 방법
  /* var selectAll = true;
          var count = boxes.length;
          var i = 0;
          for (; i < count; i++) {
            if (!boxes[i].checked) {
              selectAll = false;
              break;
            }
          } */
  // 두 번째 방법
  var boxLength = boxes.length;
  // 체크된 체크박스 갯수를 확인하기 위해 :checked 필터를 사용하여 체크박스만 선택한 후 length 프로퍼티를 확인
  var checkedLength = $('input[name="sports"]:checked').length;
  var selectAll = boxLength == checkedLength;
  $sportAll.prop("checked", selectAll);
});

// top button
$(document).ready(function() {
  $("a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });
});

//birth
$(function() {
  var now = new Date();
  var year = now.getFullYear();
  var mon =
    now.getMonth() + 1 > 9
      ? "" + (now.getMonth() + 1)
      : "0" + (now.getMonth() + 1);
  var day = now.getDate() > 9 ? "" + now.getDate() : "0" + now.getDate();
  //년도 selectbox만들기
  for (var i = 1915; i <= year; i++) {
    $("#year").append('<option value="' + i + '">' + i + "</option>");
  }

  // 월별 selectbox 만들기
  for (var i = 1; i <= 12; i++) {
    var mm = i > 9 ? i : "0" + i;
    $("#month").append('<option value="' + mm + '">' + mm + "</option>");
  }

  // 일별 selectbox 만들기
  for (var i = 1; i <= 31; i++) {
    var dd = i > 9 ? i : "0" + i;
    $("#day").append('<option value="' + dd + '">' + dd + "</option>");
  }
  $("#year  > option[value=" + year + "]").attr("selected", "true");
  $("#month  > option[value=" + mon + "]").attr("selected", "true");
  $("#day  > option[value=" + day + "]").attr("selected", "true");
});
