$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 100) {
			$("#storyT").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 200) {
			$("#storyTxt").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 480) {
			$("#storyImg").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 770) {
			$("#storyBtn").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 1000) {
			$("#usLeft").css('display','block');
			$("#usRight").css('display','block');
		}
	});
})
$("#back").click(function(){
	$("html,body").animate({scrollTop:0},900);
});