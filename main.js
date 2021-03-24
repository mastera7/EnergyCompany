$(document).ready(function () {


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

});
$("button").click(function() {
  if(($("h4").css("color")==="rgb(0, 128, 0)")===true)
  {
    $("h4").css("color", "#ECEED7");
  }
  else{
$("h4").css("color", "green");
}
});
/*
for(var = i;i<3;i++){
  document.querySelectorAll("button"[i].addEventListener("click") function() {

    document.querySelector("h1").style.color = "red";


  });
}
*/
