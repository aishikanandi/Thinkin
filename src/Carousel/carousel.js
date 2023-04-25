import $ from 'jQuery';
$(".option").click(function(){
  $(".option").removeClass("active");
  $(this).addClass("active");
});
console.log("working");
