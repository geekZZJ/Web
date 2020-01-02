$("#back").click(function(){
	$("html,body").animate({scrollTop:0},1000);
});
$("#back").mouseover(function(){
	$("#backImg").attr('src','images/08.png');
})
$("#back").mouseout(function(){
	$("#backImg").attr('src','images/07.png');
})
$("#con1").mouseover(function(){
	$("#con1").attr('src','images/72.jpg');
})
$("#con2").mouseover(function(){
	$("#con2").attr('src','images/73.jpg');
})
$("#con3").mouseover(function(){
	$("#con3").attr('src','images/74.jpg');
})
$("#con4").mouseover(function(){
	$("#con4").attr('src','images/75.jpg');
})
$("#con1").mouseout(function(){
	$("#con1").attr('src','images/76.jpg');
})
$("#con2").mouseout(function(){
	$("#con2").attr('src','images/77.jpg');
})
$("#con3").mouseout(function(){
	$("#con3").attr('src','images/78.jpg');
})
$("#con4").mouseout(function(){
	$("#con4").attr('src','images/79.jpg');
})

$(function(){
	$(window).scroll(function() {
		console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 1300) {
			$("#brand1").css('display','block');
			$("#brand2").css('display','block');
			$("#brand4").css('display','block');
			$("#brand5").css('display','block');
			$("#brand7").css('display','block');
			$("#brand8").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 1500) {
			$("#brand3").css('display','block');
			$("#brand6").css('display','block');
			$("#brand9").css('display','block');
		}
	});
})