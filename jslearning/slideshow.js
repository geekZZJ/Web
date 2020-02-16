window.onload = function(){
	var slider = document.getElementById("slider");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");

	function animate(offset){
		var newLeft = parseInt(slider.style.left)+offset;
		slider.style.left = newLeft+"px";
		// console.log(newLeft);
		if(newLeft<-2400){
			slider.style.left = -600+"px";
		}
		if (newLeft>0) {
			slider.style.left = -1800+"px";
		}
	}

	prev.onclick = function(){
		animate(600);
	}
	next.onclick = function(){
		animate(-600);
	}

	var timer;
	function play(){
		timer = setInterval(function(){
			next.onclick();
		}, 2000)
	}
	play();//如果没有这句，开始的时候就不会轮播，因为没有触发onmouseout这个事件
	var container = document.getElementById("container");
	function stop(){
		clearInterval(timer);
	}
	container.onmouseover = stop;
	container.onmouseout = play;

	var buttons = document.getElementById("buttons").getElementsByTagName("span");
	var index = 1;

	function buttonsShow(){
		for (var i = 0; i < buttons.length; i++) {
			if (buttons[i].className == "on") {
				buttons[i].className = "";
			}
		}
		buttons[index-1].className = "on";
	}

	prev.onclick = function(){
		index = index-1;
		// console.log(index);
		if (index<1) {
			index = 4;
		}
		// console.log(index);
		buttonsShow();
		animate(600);
		console.log(index);
	}
	next.onclick = function(){
		index = index+1;
		if (index>4) {
			index = 1;
		}
		buttonsShow();
		animate(-600);
		console.log(index);
	}

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].onclick = function(){
			//console.log(i);为什么i都是4
			var clickIndex = parseInt(this.getAttribute("index"));
			// console.log(clickIndex);
			console.log(index);
			var offset = 600*(index - clickIndex);//特别不理解
			animate(offset);
			index = clickIndex;
			buttonsShow();
		}
	}
}