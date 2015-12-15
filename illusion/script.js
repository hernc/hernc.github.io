//LETTER INTERACTION




//$(".lettera").click(function() {
//		$(".lettera").toggleClass("hidden");	$(".innerIllusion").toggleClass("innerIllusionhidden");
//
//	});


//$('.letters , .innerIllusion').on('click',function(){
//
//	if($(this).attr('data-click-state') ==1) {
//		$(this).attr('data-click-state', 0)
//		/*Change this to your own property / function - Click State 1*/
//		$(this).addClass("hidden");
//		blurElement(".letters", 8);
//		$(".innerIllusion").addClass("innerIllusionhidden");
//		/*Click State 1 finish*/
//	} else {
//		$(this).attr('data-click-state', 1)
//		/*Change this to your own property / function - Click State 2*/
//		$(this).removeClass("hidden");
//		blurElement(".letters", 8);
//		$(".innerIllusion").removeClass("innerIllusionhidden");
//		/*Click State 2 finish*/
//	}
//
//});

function blurElement(element, size){
            var filterVal = 'blur('+size+'px)';
            $(element)
              .css('filter',filterVal)
              .css('webkitFilter',filterVal);
        }



$('.letters').on('click', function (event) {
         $target = $(event.target);
            $target.toggleClass('hidden');	$(this).next().toggleClass("innerIllusionhidden");
					if($(this).attr('data-click-state') == 1) {
						$(this).attr('data-click-state', 0)
						blurElement(".letters", 0);
						/*Click State 1 finish*/
					} else {
						$(this).attr('data-click-state', 1)
						/*Change this to your own property / function - Click State 2*/
						blurElement(".letters", 8);
						/*Click State 2 finish*/
					}
});








