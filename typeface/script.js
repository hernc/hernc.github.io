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


$('.v-button').click(function(event) {
	event.preventDefault();

	var target   = $(this).data('target'),
			y_offset = $(target).offset().top;

	$('body, html').animate({ scrollTop: y_offset - 20 });
})



// RIVERROAD SCROLL SOUND CODE
//$(window).scroll(function() {
//  choose_song_to_play();
//});
//
//
//function choose_song_to_play() {
//	var y = $(window).scrollTop();
//	//starting position
//	if (y < 789) {
//		$("#river1").trigger('play');
//		$("#river2").trigger('pause');
//		$("#river3").trigger('pause');
//		//second position
//	} else if (y >= 790 && y < 1509) {
//		$("#river2").trigger('play');
//		$("#river1").trigger('pause');
//		$("#river3").trigger('pause');
//		//third position
//	} else if (y >= 1510 && y < 2500) {
//		$("#river3").trigger('play');
//		$("#river2").trigger('pause');
//		$("#river1").trigger('pause');
//	}
//}



// UNATTACHED PROGRESS BAR

//function progress(percent, $element) {
//    var progressBarWidth = percent * $element.width() / 100;
//    $element.find('.progressfill').animate({ width: progressBarWidth },99930);
//}
//progress(100, $('.progressbar'));



//PLAY ON CLICK

//var playjowell = $(".lightlyrow2")[0];
//$(".play")
//	.click(function() {
//		playjowell.play();
//		progress(100, $('.progressbar'));
//	});


//RIVER ROAD 1 PLAY TOGGLE ON CLICK
$('#riverroad').find('.play:eq(0)').click(function () {
    if ($(".river1")[0].paused == false) {
        $(".river1").trigger('pause')

    } else {
        $(".river1").trigger('play')

    }
});
//RIVER ROAD 1 ATTACHED TO AUDIO PROGRESS BAR
$(".river1").bind('timeupdate', function(){

         var track_length = $(".river1")[0].duration;
         var secs = $(".river1")[0].currentTime;
         var progress = (secs/track_length) * 100;

         $('#riverroad').find('.progressfill:eq(0)').css({'width' : progress + "%"});


 });

//RIVER ROAD 2 PLAY TOGGLE ON CLICK
$('#riverroad').find('.play:eq(1)').click(function () {
    if ($(".river2")[0].paused == false) {
        $(".river2").trigger('pause')

    } else {
        $(".river2").trigger('play')

    }
});
//RIVER ROAD 2 ATTACHED TO AUDIO PROGRESS BAR
$(".river2").bind('timeupdate', function(){

         var track_length = $(".river2")[0].duration;
         var secs = $(".river2")[0].currentTime;
         var progress = (secs/track_length) * 100;

         $('#riverroad').find('.progressfill:eq(1)').css({'width' : progress + "%"});


 });

//RIVER ROAD 3 PLAY TOGGLE ON CLICK
$('#riverroad').find('.play:eq(2)').click(function () {
    if ($(".river3")[0].paused == false) {
        $(".river3").trigger('pause')

    } else {
        $(".river3").trigger('play')

    }
});
//RIVER ROAD 3 ATTACHED TO AUDIO PROGRESS BAR
$(".river3").bind('timeupdate', function(){

         var track_length = $(".river3")[0].duration;
         var secs = $(".river2")[0].currentTime;
         var progress = (secs/track_length) * 100;

         $('#riverroad').find('.progressfill:eq(2)').css({'width' : progress + "%"});


 });

///////////////////////////////////

//THIS LAND 1 PLAY TOGGLE ON CLICK
$('#thisland').find('.play:eq(0)').click(function () {
    if ($(".thisland1")[0].paused == false) {
        $(".thisland1").trigger('pause')

    } else {
        $(".thisland1").trigger('play')

    }
});
//THIS LAND 1 ATTACHED TO AUDIO PROGRESS BAR
$(".thisland1").bind('timeupdate', function(){

         var track_length = $(".thisland1")[0].duration;
         var secs = $(".thisland1")[0].currentTime;
         var progress = (secs/track_length) * 100;

         $('#thisland').find('.progressfill:eq(0)').css({'width' : progress + "%"});


 });

//THIS LAND 2 PLAY TOGGLE ON CLICK
$('#thisland').find('.play:eq(1)').click(function () {
    if ($(".thisland2")[0].paused == false) {
        $(".thisland2").trigger('pause')

    } else {
        $(".thisland2").trigger('play')

    }
});
//THIS LAND 2 ATTACHED TO AUDIO PROGRESS BAR
$(".thisland2").bind('timeupdate', function(){

         var track_length = $(".thisland2")[0].duration;
         var secs = $(".thisland2")[0].currentTime;
         var progress = (secs/track_length) * 100;

         $('#thisland').find('.progressfill:eq(1)').css({'width' : progress + "%"});


 });

//THIS LAND 3 PLAY TOGGLE ON CLICK
$('#thisland').find('.play:eq(2)').click(function () {
    if ($(".thisland3")[0].paused == false) {
        $(".thisland3").trigger('pause')

    } else {
        $(".thisland3").trigger('play')

    }
});
//THIS LAND 3 ATTACHED TO AUDIO PROGRESS BAR
$(".thisland3").bind('timeupdate', function(){

         var track_length = $(".thisland3")[0].duration;
         var secs = $(".thisland3")[0].currentTime;
         var progress = (secs/track_length) * 100;

         $('#thisland').find('.progressfill:eq(2)').css({'width' : progress + "%"});


 });




//LIGHTLY ROW 2 PLAY TOGGLE ON CLICK
$('.lightlyrow').find('.play').click(function () {
    if ($(".lightlyrow2")[0].paused == false) {
        $(".lightlyrow2").trigger('pause')

    } else {
        $(".lightlyrow2").trigger('play')

    }
});
//LIGHTLY ROW ATTACHED TO AUDIO PROGRESS BAR
$(".lightlyrow2").bind('timeupdate', function(){

         var track_length = $(".lightlyrow2")[0].duration;
         var secs = $(".lightlyrow2")[0].currentTime;
         var progress = (secs/track_length) * 100;

         $('.lightlyrow').find('.progressfill').css({'width' : progress + "%"});


 });






