//STICKY NAV

$(function(){
    $(window).scroll(function() {
        if ($(this).scrollTop() >=1) {
            $('.nav').addClass('stickytop');

        }
        else {
            $('.nav').removeClass('stickytop');
						$('.wrapper').css('padding-top', '0');
        }
    });
});


//RESTART ANIMATION ON CLICK

$(".letter-a").click(function () {
	$(".la").toggleClass("animateLa");
	$(".ca").toggleClass("animateCa");
	$(".ra").toggleClass("animateRa");

});




// HOME SOUND CODE


$(".homesong").prop('volume', 0.5);


// RIVERROAD HIDE/SHOW SOUND CODE

//function stopRiver(){
  //pause playing
//  $(".river1").trigger('pause');
  //set play time to 0
//  $(".river1").prop("currentTime",0);
//}


//function startRiver(){
//  //start playing
//  $(".river1").trigger('play');
//}



$('.v-button').click(function(event) {
	event.preventDefault();

	var target   = $(this).data('target'),
			y_offset = $(target).offset().top;

	$('body, html').animate({ scrollTop: y_offset - 20 });
})



// RIVERROAD SCROLL SOUND CODE
$(window).scroll(function() {
  choose_song_to_play();
});


function choose_song_to_play() {
	var y = $(window).scrollTop();
	//starting position
	if (y < 789) {
		$("#river1").trigger('play');
		$("#river2").trigger('pause');
		$("#river3").trigger('pause');
		//second position
	} else if (y >= 790 && y < 1509) {
		$("#river2").trigger('play');
		$("#river1").trigger('pause');
		$("#river3").trigger('pause');
		//third position
	} else if (y >= 1510 && y < 2500) {
		$("#river3").trigger('play');
		$("#river2").trigger('pause');
		$("#river1").trigger('pause');
	}
}



// PROGRESS BAR

function progress(percent, $element) {
    var progressBarWidth = percent * $element.width() / 100;
    $element.find('.progressfill').animate({ width: progressBarWidth }, 60);
}

progress(100, $('.progressbar'));



//PLAY ON CLICK







