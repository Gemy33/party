const sidebar = $(".sidebar");
const homeContent = $(".home-content");
const allSinger = $(".slidDown h3");
$(".fa-close").click(function () {
  sidebar.animate({ width: "0px" }, 500).fadeOut(0);
  homeContent.animate({ marginLeft: "0px" }, 500);
});
$(".show-side").on("click", function () {
  sidebar.fadeIn(0, function () {
    sidebar.animate({ width: "250px" }, 500);
  });
  homeContent.animate({ marginLeft: "250px" }, 500);
});
allSinger.click(function (e) {
  const currentpara = $(this).next();
  $(e.target).next().slideToggle(500);
  allSinger.next().not($(currentpara)).slideUp(500);
});
let DatFromPastToFuture = new Date(2026, 0, 1, 12, 10, 50).getTime(); // from 1970 to 2026 ==> maliseconde
let x = setInterval(function () {
  let DatFromPastToNow = new Date().getTime(); // from 1970 to new  ==> maliseconde
  let distance = DatFromPastToFuture - DatFromPastToNow; // from now to future ==> maliseconde
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  $("#day").html(days + " D");
  $("#hour").html(hours + " H");
  $("#minute").html(minutes + " M");
  $("#second").html(seconds + " S");
}, 1000);
let arr = [];
arr.length = 100;
$(".area").on("keydown", function (e) {
  if (e.code == "Backspace") {
    if (arr.length < 100) {
      arr.length++;
    }
  } else {
    if (arr.length > 0) arr.pop();
  }

  if (arr.length > 0) $(".length").html(arr.length);
  else $(".length").html("your available character finished");
});

$('.sidebar a').on('click',function(e){
  const offsetHeight=($(e.target).attr('href'));
  const offsetSection=$(offsetHeight).offset().top;
  $('body,html').animate({scrollTop:offsetSection},500)
})
