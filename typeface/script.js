
//RESTART ANIMATION ON CLICK


$(".letter-a").click(function () {
	$(".la").toggleClass("animateLa");
	$(".ca").toggleClass("animateCa");
	$(".ra").toggleClass("animateRa");

});



//HIDE & SHOW PHRASES AND SONGS

$(".riverroad").hide();
$(".pson").show();
stopRiver();

    $(".home, .song1").bind("click", function () {

      $(".pson, .riverroad").hide();

      if ($(this).attr("class") == "home")
      {
        $(".pson").show();
				startHome();
				stopRiver();

      }
      else
      {
        $(".riverroad").show();
				stopHome();
				startRiver();

				preventDefault();
      }
	});


// HOME SOUND CODE

$(".homesong").prop('volume', 0.6);

function stopHome(){
  //pause playing
  $(".homesong").trigger('pause');
  //set play time to 0
  $(".homesong").prop("currentTime",0);
}


function startHome(){
  //start playing
  $(".homesong").trigger('play');
}

// RIVERROAD SOUND CODE

function stopRiver(){
  //pause playing
  $(".river1").trigger('pause');
  //set play time to 0
  $(".river1").prop("currentTime",0);
}


function startRiver(){
  //start playing
  $(".river1").trigger('play');
}












