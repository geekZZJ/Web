window.onload=function(){
	var oDiv=document.getElementById('div1');
	oDiv.mouseover=function(){
		startMove(100);
	}
	oDiv.mouseout=function(){
		startMove(30);
	}
}
var timer=null;
var alpha=30;
function startMove(iTarget){
	var oDiv=document.getElementById('div');
	clearInterval(timer);
	timer=setInterval(function(){
		var speed=0;
		if (alpha>iTarget) {
			speed=-10;
		}
		else{
			speed=10;
		}
		if (alpha==iTarget) {
			clearInterval(timer);
		}
		else{
			alpha+=speed;
			oDiv.style.filter='alpha(opacity:'+alpha+')'
			oDiv.style.opacity=alpha/100;
		}
	},30)
}