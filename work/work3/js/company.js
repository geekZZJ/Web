$(function(){
	$(window).scroll(function() {
		console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 100) {
			$("#content3").css('display','block');
		}
	});
})
$(function(){
	$(window).scroll(function() {
		console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 300) {
			$("#content4").css('display','block');
		}
	});
})
$(function(){
	$(window).scroll(function() {
		console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 450) {
			$("#content5").css('display','block');
		}
	});
})
$(function(){
	$(window).scroll(function() {
		console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 600) {
			$("#content6").css('display','block');
		}
	});
})
$("#back").click(function(){
	$("html,body").animate({scrollTop:0},900);
});