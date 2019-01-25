$(document).ready(function() {
	$('.carousel').carousel({
		interval: 500,
		pause: 'hover',
	});
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();
	$('body').scrollspy({target: '#my'})
})