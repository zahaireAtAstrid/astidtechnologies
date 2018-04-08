

$("#collaborative").hover(function () {
  $desc_div = $(this).attr("id");
  $("#culture_container > div").addClass("hidden");
  $($desc_div).removeClass("hidden");
}, function(){
  $("#culture_container > div").addClass("hidden");
  $("#def").removeClass("hidden");
});