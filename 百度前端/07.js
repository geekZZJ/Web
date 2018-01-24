window.onload = function(){
	func();
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
		// console.log(slider.style.left);
		// console.log(newLeft);
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
// 轮播图代码结束
// 
// 
// 
// js登录框
function g(id){
	return document.getElementById(id);
}
//获取元素对象
function autoCenter(el){
	var bodyW = document.documentElement.clientWidth;
	var bodyH = document.documentElement.clientHeight;
	var elW = el.offsetWidth;
	var elH = el.offsetHeight;
	el.style.left = (bodyW-elW)/2 + "px";
	el.style.top = (bodyH-elH)/2 + "px";
}
//自动居中元素（el=element）
function fillToBody(el){
	el.style.width = document.documentElement.clientWidth+"px";
	el.style.heght = document.documentElement.clientHeight+"px";
}
var dialogInstace,onMoveStartId;//用于记录当前可拖拽的对象
function Dialog(DragId,moveId){
	var instace = {};//初始化一个数组
	instace.dragElement = g(DragId);//允许执行拖拽操作的元素
	instace.moveElement = g(moveId);//拖拽操作时，移动的元素
	instace.mouseOffsetLeft = 0;
	instace.mouseOffsetTop = 0;
	instace.dragElement.addEventListener("mousedown", function(e){
		var e = e || window.event;
		dialogInstace = instace;
		instace.mouseOffsetLeft = e.pageX-instace.moveElement.offsetLeft;
		instace.mouseOffsetTop = e.pageY - instace.moveElement.offsetTop;
	})
	return instace;
}
document.onmouseup = function(e){
	dialogInstace = false;
	clearInterval(onMoveStartId);
}
//在页面中侦听，鼠标弹起事件
document.onmousemove = function(e){
	var e = e || window.event;
	var instace = dialogInstace;
	if(instace){
		var maxX = document.documentElement.clientWidth-instace.moveElement.offsetWidth;
		var maxY = document.documentElement.clientHeight-instace.moveElement.offsetHeight;
		instace.moveElement.style.left = Math.min(Math.max((e.pageX - instace.mouseOffsetLeft),0),maxX)+"px";
		instace.moveElement.style.top = Math.min(Math.max((e.pageY - instace.mouseOffsetTop),0),maxY)+"px";
	}
	if (e.stopPropagation) {
		e.stopPropagation();
	}
	else {
		e.cancelBubble = true;
	}
}
//在页面中侦听，鼠标移动事件
Dialog('dialogDrag','dialogMove');
function onMoveStart(){}

function showDialog(){
	g("dialogMove").style.display = 'block';
	g("mask").style.display = 'block';
	autoCenter(g("dialogMove"));
	fillToBody(g("mask"));
}
//重新调整对话框的位置和遮罩，并且展现
function hideDialog(){
	g("dialogMove").style.display = 'none';
	g("mask").style.display = 'none';
}
function checkForm(form){
	var user1 = document.getElementById("user1");
	var psd1 = document.getElementById("psd1");
	if (user1.value == "") {
		alert("用户名不能为空！");
		user1.focus();
		return false;
	}
	if (psd1.value == "") {
		alert("密码不能为空！");
		psd1.focus();
		return false;
	}
	return true;
}
var login1 = document.getElementById("login1");
login1.onclick = checkForm;