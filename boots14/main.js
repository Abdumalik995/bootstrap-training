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
	/*$('.brt').click(function() {
		$(this).css('transform','rotate(180deg)')
	});
*/
	$('[data-toggle="popover"]').popover();

	$('#close').click(function() {
		$('#glav').css('display','none');
	});
	$('#card').click(function() {
		$('#glav').css('max-width','768px')
	})
	$('#card').dblclick(function() {
		$('#glav').css('max-width','1150px')
	}); 
	$('#green').click(function() {
		$('#glav').fadeOut('slow')
	});
	$('body, html').dblclick(function() {
		$('#glav').fadeIn();
	})
})
