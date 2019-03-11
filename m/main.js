$(document).ready(function() {
	$('#targ div').click(function() {
		let bos = $(this).attr("data-target");
		console.log('ishla');

		if(bos == "#post1") {
			$('#fikr #post1').css('display','block');
			$('#fikr #post1').siblings().css('display','none');
			$('#targ .add').removeClass('add');
			$(this).addClass('add');
		} else if (bos == "#post2") {
			$('#fikr #post2').css('display','block');
			$('#fikr #post2').siblings().css('display','none');
			$('#targ .add').removeClass('add');
			$(this).addClass('add');
		} else if (bos == "#post3") {
			$('#fikr #post3').css('display','block');
			$('#fikr #post3').siblings().css('display','none');
			$('#targ .add').removeClass('add');
			$(this).addClass('add');
			//$(this).css('background','orange');
		} else if (bos == "#post4") {
			$('#fikr #post4').css('display','block');
			$('#fikr #post4').siblings().css('display','none');
			$('#targ .add').removeClass('add');
			$(this).addClass('add');
		} else if (bos == "#post5") {
			$('#fikr #post5').css('display','block');
			$('#fikr #post5').siblings().css('display','none');
			$('#targ .add').removeClass('add');
			$(this).addClass('add');
		} else {}
	})
	
});
$("#icn ul li").click(function() {
        var forc = $(this).attr("class");
        console.log("ishlaey");
        if (forc == "a") {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
        } else if (forc == "b") {
            $('html, body').animate({
                scrollTop: 700
            }, 500);
        } else if (forc == "c") {
            $('html, body').animate({
                scrollTop: 1330
            }, 700);
        } else if (forc == "d") {
            $('html, body').animate({
                scrollTop: 2050
            }, 900)
        } else if (forc == "e") {
            $('html, body').animate({
                scrollTop: 3350
            }, 1000);
        } else {}
    });
	