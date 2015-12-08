//LETTER INTERACTION

$('.lettera').click(function(){
	$('.lettera').not(this).find('.innerIllusion').hide();
	$(this).find('.innerIllusion').toggle();
	$('lettera').fadeOut("fast",function(){
      $(this).css('z-index','10');
		});

});


