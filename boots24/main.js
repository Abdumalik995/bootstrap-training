$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip();

	 $('#no').click(function() {
        $('#modal1').toggleClass("block");
        console.log('boss');
    });
	 $(".close").click(function() {
	 	$(this).parents("#modal1").css('display','none');
	 })
})

	