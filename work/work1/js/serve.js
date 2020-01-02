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
		if (top >= 100) {
			$("#item1").css('display','block');
			$("#item2").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 650) {
			$("#item3").css('display','block');
			$("#item4").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 1100) {
			$("#item5").css('display','block');
			$("#item6").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 1550) {
			$("#item7").css('display','block');
			$("#item8").css('display','block');
		}
	});
})