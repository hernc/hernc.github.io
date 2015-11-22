//$(".letter-a").click(function () {
//	$(".la").toggleClass("animateLa");
//	$(".ca").toggleClass("animateCa");
//	$(".ra").toggleClass("animateRa");
//
//});



$(".letter-a").click(function(){
    $(".la").animate({  textIndent: 15 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)');
    },
    duration:'500'
},'linear');
	$(".ra").animate({  textIndent: -15 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)');
    },
    duration:'500'
},'linear');
	$(".ca").animate({  textIndent: -90 }, {
    step: function(now,fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)');
    },
    duration:'500'
},'linear');
});



//BRANDON'S SUGGESTION
//var source = '<div class="source"></div>';
//$("button").click(function() {
//  $(".target").append(source);
//});


var moreletter = function () {

    var letter = $('.letter-a').clone(Math.random *5);
    var i = 0;
    letter.click(function() {
//        $(this).addClass('letter-a');
    });

    letter.prependTo('.alphabet-b');

}

$('.letter-a').click(function(){
    moreletter();
})

//TRANSFORM RAMDOMLY
	//create an array of properties to animate randomly
var properties = ["height", "width" ]
	//on click animate letter using random values

	//duplicate letter with different animation














