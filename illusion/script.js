//LETTER INTERACTION

//$('.lettera').click(function(){
//	$('.lettera').not(this).find('.innerIllusion').hide();
//	$(this).find('.innerIllusion').toggle();
//	$('lettera').fadeOut("slow",function(){
//      $(this).css('scale','5');
//		});
//
//});

//$(".lettera").click(function() {
//        var el = $(this);
//        el.before( el.clone(true) ).remove();
//    });


 function blurElement(element, size){
            var filterVal = 'blur('+size+'px)';
            $(element)
              .css('filter',filterVal)
              .css('webkitFilter',filterVal);
        }


$(".lettera").click(function() {
		$(".lettera").toggleClass("hidden");	$(".innerIllusion").toggleClass("innerIllusionhidden");
        blurElement(".letters", 8);
	});
