$(function(){
	$(window).scroll(function() {
		console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 300) {
			$("#pic1").css('display','block');
			$("#pic2").css('display','block');
			$("#pic3").css('display','block');
		}
	});
})
$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 650) {
			$("#pic4").css('display','block');
			$("#pic5").css('display','block');
		}
	});
})

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
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 1200) {
			$("#ph1").css('display','block');
			$("#ph2").css('display','block');
			$("#ph3").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 1400) {
			$("#ph4").css('display','block');
			$("#ph5").css('display','block');
			$("#ph6").css('display','block');
		}
	});
})

$("#btn2").mouseover(function(){
	$("#photo1").css('display', 'block');
	$("#photo2").css('display', 'none');
	$("#photo3").css('display', 'none');
})
$("#btn3").mouseover(function(){
	$("#photo2").css('display', 'block');
	$("#photo1").css('display', 'none');
	$("#photo3").css('display', 'none');
})
$("#btn4").mouseover(function(){
	$("#photo3").css('display', 'block');
	$("#photo1").css('display', 'none');
	$("#photo2").css('display', 'none');
})
