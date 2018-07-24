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
		// console.log($(window).scrollTop());
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

var count = 0;
$('#carousel-example-generic').on('slide.bs.carousel', function(){
	// console.log(count);
	if (count%2 == 0) {
		$(".name2").css('display','block');
		$(".name1").css('display','none');
	}
	else{
		$(".name2").css('display','none');
		$(".name1").css('display','block');	
	}
	count++;
});

$(function(){
	$(window).scroll(function() {
		console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 1000) {
			$("#cultureT").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 1200) {
			$("#cultureImg").css('display','block');
			$("#cultureTxt").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 1626) {
			$("#classicT").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 1926) {
			$("#classicImg").css('display','flex');
			$("#classicTxt").css('display','flex');
		}
	});
})

$("#back").click(function(){
	$("html,body").animate({scrollTop:0},900);
});