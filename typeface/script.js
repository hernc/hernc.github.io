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


$(".homesong").prop('volume', 0.8);


$('.v-button').click(function(event) {
	event.preventDefault();

	var target   = $(this).data('target'),
			y_offset = $(target).offset().top;

	$('body, html').animate({ scrollTop: y_offset - 25 });
})



/////TOGGLE & PROGRESS BAR///////////////


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
         var secs = $(".river3")[0].currentTime;
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


///////////////////////////////////

//LONDON BRIDGES 1 PLAY TOGGLE ON CLICK
$('#londonbridges').find('.play:eq(0)').click(function () {
    if ($(".londonbridges1")[0].paused == false) {
        $(".londonbridges1").trigger('pause')

    } else {
        $(".londonbridges1").trigger('play')

    }
});
//LONDON BRIDGES 1 ATTACHED TO AUDIO PROGRESS BAR
$(".londonbridges1").bind('timeupdate', function(){

         var track_length = $(".londonbridges1")[0].duration;
         var secs = $(".londonbridges1")[0].currentTime;
         var progress = (secs/track_length) * 100;

         $('#londonbridges').find('.progressfill:eq(0)').css({'width' : progress + "%"});


 });

//LONDON BRIDGES 2 PLAY TOGGLE ON CLICK
$('#londonbridges').find('.play:eq(1)').click(function () {
    if ($(".londonbridges2")[0].paused == false) {
        $(".londonbridges2").trigger('pause')

    } else {
        $(".londonbridges2").trigger('play')

    }
});
//LONDON BRIDGES 2 ATTACHED TO AUDIO PROGRESS BAR
$(".londonbridges2").bind('timeupdate', function(){

         var track_length = $(".londonbridges2")[0].duration;
         var secs = $(".londonbridges2")[0].currentTime;
         var progress = (secs/track_length) * 100;

         $('#londonbridges').find('.progressfill:eq(1)').css({'width' : progress + "%"});


 });

//LONDON BRIDGES 3 PLAY TOGGLE ON CLICK
$('#londonbridges').find('.play:eq(2)').click(function () {
    if ($(".londonbridges3")[0].paused == false) {
        $(".londonbridges3").trigger('pause')

    } else {
        $(".londonbridges3").trigger('play')

    }
});
//LONDON BRIDGES 3 ATTACHED TO AUDIO PROGRESS BAR
$(".londonbridges3").bind('timeupdate', function(){

         var track_length = $(".londonbridges3")[0].duration;
         var secs = $(".londonbridges3")[0].currentTime;
         var progress = (secs/track_length) * 100;

         $('#londonbridges').find('.progressfill:eq(2)').css({'width' : progress + "%"});


 });

///////////////////////////////////

//LIGHTLY ROW 1 PLAY TOGGLE ON CLICK
$('#lightlyrow').find('.play:eq(0)').click(function () {
    if ($(".lightlyrow1")[0].paused == false) {
        $(".lightlyrow1").trigger('pause')

    } else {
        $(".lightlyrow1").trigger('play')

    }
});
//LIGHTLY ROW 1 ATTACHED TO AUDIO PROGRESS BAR
$(".lightlyrow1").bind('timeupdate', function(){

         var track_length = $(".lightlyrow1")[0].duration;
         var secs = $(".lightlyrow1")[0].currentTime;
         var progress = (secs/track_length) * 100;

         $('#lightlyrow').find('.progressfill:eq(0)').css({'width' : progress + "%"});


 });

//LIGHTLY ROW 2 PLAY TOGGLE ON CLICK
$('#lightlyrow').find('.play:eq(1)').click(function () {
    if ($(".lightlyrow2")[0].paused == false) {
        $(".lightlyrow2").trigger('pause')

    } else {
        $(".lightlyrow2").trigger('play')

    }
});
//LIGHTLY ROW 2 ATTACHED TO AUDIO PROGRESS BAR
$(".lightlyrow2").bind('timeupdate', function(){

         var track_length = $(".lightlyrow2")[0].duration;
         var secs = $(".lightlyrow2")[0].currentTime;
         var progress = (secs/track_length) * 100;

         $('#lightlyrow').find('.progressfill:eq(1)').css({'width' : progress + "%"});


 });

//LIGHTLY ROW 3 PLAY TOGGLE ON CLICK
$('#lightlyrow').find('.play:eq(2)').click(function () {
    if ($(".lightlyrow3")[0].paused == false) {
        $(".lightlyrow3").trigger('pause')

    } else {
        $(".lightlyrow3").trigger('play')

    }
});
//LIGHTLY ROW 3 ATTACHED TO AUDIO PROGRESS BAR
$(".lightlyrow3").bind('timeupdate', function(){

         var track_length = $(".lightlyrow3")[0].duration;
         var secs = $(".lightlyrow3")[0].currentTime;
         var progress = (secs/track_length) * 100;

         $('#lightlyrow').find('.progressfill:eq(2)').css({'width' : progress + "%"});


 });


///////////////////////////////////

//BOOM BOOM PLAY TOGGLE ON CLICK
$('#boomboom').find('.play:eq(0)').click(function () {
    if ($(".boomboom1")[0].paused == false) {
        $(".boomboom1").trigger('pause')

    } else {
        $(".boomboom1").trigger('play')

    }
});
//BOOM BOOM ATTACHED TO AUDIO PROGRESS BAR
$(".boomboom1").bind('timeupdate', function(){

         var track_length = $(".boomboom1")[0].duration;
         var secs = $(".boomboom1")[0].currentTime;
         var progress = (secs/track_length) * 100;

         $('#boomboom').find('.progressfill:eq(0)').css({'width' : progress + "%"});


 });

//BOOM BOOM PLAY TOGGLE ON CLICK
$('#boomboom').find('.play:eq(1)').click(function () {
    if ($(".boomboom2")[0].paused == false) {
        $(".boomboom2").trigger('pause')

    } else {
        $(".boomboom2").trigger('play')

    }
});
//BOOM BOOM ATTACHED TO AUDIO PROGRESS BAR
$(".boomboom2").bind('timeupdate', function(){

         var track_length = $(".boomboom2")[0].duration;
         var secs = $(".boomboom2")[0].currentTime;
         var progress = (secs/track_length) * 100;

         $('#boomboom').find('.progressfill:eq(1)').css({'width' : progress + "%"});


 });

//BOOM BOOM PLAY TOGGLE ON CLICK
$('#boomboom').find('.play:eq(2)').click(function () {
    if ($(".boomboom3")[0].paused == false) {
        $(".boomboom3").trigger('pause')

    } else {
        $(".boomboom3").trigger('play')

    }
});
//BOOM BOOM ATTACHED TO AUDIO PROGRESS BAR
$(".boomboom3").bind('timeupdate', function(){

         var track_length = $(".boomboom3")[0].duration;
         var secs = $(".boomboom3")[0].currentTime;
         var progress = (secs/track_length) * 100;

         $('#boomboom').find('.progressfill:eq(2)').css({'width' : progress + "%"});


 });


///////////////////////////////////

//MERRILY PLAY TOGGLE ON CLICK
$('#merrily').find('.play:eq(0)').click(function () {
    if ($(".merrily1")[0].paused == false) {
        $(".merrily1").trigger('pause')

    } else {
        $(".merrily1").trigger('play')

    }
});
//MERRILY ATTACHED TO AUDIO PROGRESS BAR
$(".merrily1").bind('timeupdate', function(){

         var track_length = $(".merrily1")[0].duration;
         var secs = $(".merrily1")[0].currentTime;
         var progress = (secs/track_length) * 100;

         $('#merrily').find('.progressfill:eq(0)').css({'width' : progress + "%"});


 });

//MERRILY PLAY TOGGLE ON CLICK
$('#merrily').find('.play:eq(1)').click(function () {
    if ($(".merrily2")[0].paused == false) {
        $(".merrily2").trigger('pause')

    } else {
        $(".merrily2").trigger('play')

    }
});
//MERRILY ATTACHED TO AUDIO PROGRESS BAR
$(".merrily2").bind('timeupdate', function(){

         var track_length = $(".merrily2")[0].duration;
         var secs = $(".merrily2")[0].currentTime;
         var progress = (secs/track_length) * 100;

         $('#merrily').find('.progressfill:eq(1)').css({'width' : progress + "%"});


 });

//MERRILY PLAY TOGGLE ON CLICK
$('#merrily').find('.play:eq(2)').click(function () {
    if ($(".merrily3")[0].paused == false) {
        $(".merrily3").trigger('pause')

    } else {
        $(".merrily3").trigger('play')

    }
});
//MERRILY ATTACHED TO AUDIO PROGRESS BAR
$(".merrily3").bind('timeupdate', function(){

         var track_length = $(".merrily3")[0].duration;
         var secs = $(".merrily3")[0].currentTime;
         var progress = (secs/track_length) * 100;

         $('#merrily').find('.progressfill:eq(2)').css({'width' : progress + "%"});


 });






