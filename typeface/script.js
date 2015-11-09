//RESTART ANIMATION ON CLICK


$(".letter-a").click(function(){
	$(".la").toggleClass("animateLa");
	$(".ca").toggleClass("animateCa");
	$(".ra").toggleClass("animateRa");

});

//ATTEMPT 2


//$(".home").click(function(){
//    $(".pson").toggle();
//});
//
//$(".song1").click(function(){
//		$("nav li").removeClass("phrase");
//    $(".riverroad").toggle();
//
//});


//ATTEMPT 3

$(".riverroad").hide();

    $(".home, .song1").bind("click", function () {

      $(".pson, .riverroad").hide();

      if ($(this).attr("class") == "home")
      {
        $(".pson").show();
      }
      else
      {
        $(".riverroad").show();
				preventDefault();
      }
    });
















