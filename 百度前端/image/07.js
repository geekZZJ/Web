window.onload = function(){
	func();
	al();
}

// 下面是轮播图的js代码
function func(){
	var slider = document.getElementById("slider");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");


	var img = document.getElementById("image");
	var imgWidth = img.clientWidth;
	// console.log(imgWidth);


	function animate(offset){
		var newLeft = parseInt(slider.style.left)+offset;
		slider.style.left = newLeft+"px";
		console.log(slider.style.left);
		console.log(newLeft);
		if (newLeft<-(4*imgWidth)) {
			slider.style.left = -(imgWidth)+"px";
		}
		if (newLeft>0) {
			slider.style.left = -(3*imgWidth)+"px";
		}
	}

	prev.onclick = function(){
		// console.log(123456);
		animate(imgWidth);
	}
	next.onclick = function(){
		animate(-imgWidth);
	}


	var timer;
	function play(){
		timer = setInterval(function(){
			next.onclick();
		}, 3000)
	}
	play();
	var container = document.getElementById("container");
	function stop(){
		clearInterval(timer);
	}
	container.onmouseover = stop;
	container.onmouseout = play;

	var buttons = document.getElementById("buttons").getElementsByTagName("span");
	index = 1;
	function buttonsShow(){
		for (var i = 0; i < buttons.length; i++) {
			if (buttons[i].className == "on") {
				buttons[i].className = "";
			}
		}
		buttons[index-1].className = "on";
	}

	prev.onclick = function func(){
		index = index-1;
		if (index<1) {
			index = 4;
		}
		buttonsShow();
		animate(imgWidth);
		// console.log(index);
	}
	next.onclick = function func(){
		index = index+1;
		if (index>4) {
			index = 1;
		}
		buttonsShow();
		animate(-imgWidth);
		// console.log(index);
	}

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].onclick = function(){
			var clickIndex = parseInt(this.getAttribute("index"));
			// console.log(index);
			var offset = imgWidth*(index - clickIndex);//特别不理解
			animate(offset);
			index = clickIndex;
			buttonsShow();
		}
	}
}
// js代码结束
// 
// js登录框
