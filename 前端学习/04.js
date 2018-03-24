window.onload = function(){
	var oDiv=document.getElementById('div1');
	oDiv.onmouseover=function(){
		startMove(0);
	}
	oDiv.onmouseout=function(){
		startMove1(-200);
	}
}
var timer=null;
function startMove(iTarget){
	clearInterval(timer);
	var oDiv=document.getElementById('div1');
	timer=setInterval(function(){
		var speed=(iTarget-oDiv.offsetLeft)/20;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		// if (oDiv.offsetLeft>iTarget) {
		// 	speed=-10;
		// }
		// else{
		// 	speed=10;
		// }
		if (oDiv.offsetLeft==iTarget) {
			clearInterval(timer);
		}
		else{oDiv.style.left=oDiv.offsetLeft+speed+'px';}
	},30)
}
/**function startMove1(){
	clearInterval(timer);
	var oDiv=document.getElementById('div1');
	timer=setInterval(function(){
		if (oDiv.offsetLeft==-200) {
			clearInterval(timer);
		}
		else{oDiv.style.left=oDiv.offsetLeft-10+'px';}
	},30)
}