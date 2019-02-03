$(document).ready(function() {
	$('#jbtn').click(function() {
		$('.lastdiv').css('display','block')
	});
	/*$('#jbtn').dblclick(function() {
		$('.lastdiv').css('display','none')
	});*/
	$('.lastdiv').mouseleave(function() {
		$(this).css('display','none')
	});
	$('.jsimg').hover(function() {
		$('.lastdiv1').css('display','block')
	});
	$('.lastdiv1').mouseleave(function() {
		$(this).css('display','none')
	});

	$('[data-toggle="popover"]').popover();
})