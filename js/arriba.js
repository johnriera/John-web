$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		},300 );
	});

	$(window).scroll(function(){
		if ($(this).scrollTop() > 0){
            $('.ir-arriba').slideDown();
		} else {
			$('.ir-arriba').slideUp();
		};
	});
    
});