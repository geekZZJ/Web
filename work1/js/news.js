$("#back").click(function(){
	$("html,body").animate({scrollTop:0},1000);
});
$("#back").mouseover(function(){
	$("#backImg").attr('src','images/08.png');
})
$("#back").mouseout(function(){
	$("#backImg").attr('src','images/07.png');
})

$(function(){
	$(window).scroll(function() {
		console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 300) {
			$("#look").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 600) {
			$("#hotThing").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 900) {
			$("#item1").css('display','block');
			$("#hr1").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 1000) {
			$("#item2").css('display','block');
			$("#hr2").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 1200) {
			$("#item3").css('display','block');
			$("#hr3").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 1400) {
			$("#item4").css('display','block');
			$("#hr4").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 1500) {
			$("#item5").css('display','block');
			$("#hr5").css('display','block');
		}
	});
})