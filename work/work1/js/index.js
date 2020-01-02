$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 800) {
			$("#aboutImg").css('display','block');
			$("#aboutText").css('display','block');
			// $("#four").addClass("bounceInLeft");
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 1152) {
			$("#one").css('display','block');
		}
	});
})

$("#oneImg").mouseover(function(){
	$("#oneImg").attr('src','images/08.jpg')
})
$("#oneImg").mouseout(function(){
	$("#oneImg").attr('src','images/07.jpg')
})
$("#twoImg").mouseover(function(){
	$("#twoImg").attr('src','images/06.jpg')
})
$("#twoImg").mouseout(function(){
	$("#twoImg").attr('src','images/05.jpg')
})
$("#threeImg").mouseover(function(){
	$("#threeImg").attr('src','images/11.jpg')
})
$("#threeImg").mouseout(function(){
	$("#threeImg").attr('src','images/10.jpg')
})
$("#fiveImg").mouseover(function(){
	$("#fiveImg").attr('src','images/15.jpg')
})
$("#fiveImg").mouseout(function(){
	$("#fiveImg").attr('src','images/14.jpg')
})
$("#sixImg").mouseover(function(){
	$("#sixImg").attr('src','images/13.jpg')
})
$("#sixImg").mouseout(function(){
	$("#sixImg").attr('src','images/12.jpg')
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 1500) {
			$("#two").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 1900) {
			$("#three").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 2800) {
			$("#conSpan").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 2952) {
			$("#conDetail").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 3052) {
			$("#conBtn").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 3850) {
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
		if (top >= 4140) {
			$("#brand3").css('display','block');
			$("#brand6").css('display','block');
			$("#brand9").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 4610) {
			$("#idea1").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 4830) {
			$("#idea2").css('display','block');
		}
	});
})

$(function(){
	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		var top = $(window).scrollTop();
		if (top >= 4930) {
			$("#idea3").css('display','block');
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