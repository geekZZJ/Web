window.onload=function(){
	var aLi=document.getElementsByTagName('li');
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].timer=null;
		aLi[i].onmouseover=function(){
			startMove(this,400);
		}
		aLi[i].onmouseout=function(){
			startMove(this,200);
		}
	}
}
function getStyle(obj,attr){
	if (obj.currentStyle) {
		return obj.currentStyle[attr];
	}
	else {
		return getComputedStyle(obj,false)[attr];
	}
}
// var timer=null;
function startMove(obj,iTarget){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var icur=parseInt(getStyle(obj,'height'));
		var speed=(iTarget-icur)/8;
		speed= speed>0?Math.ceil(speed):Math.floor(speed);
		if (icur==iTarget) {
			clearInterval(obj.timer);
		}
		else {
			obj.style['height']=icur+speed+'px';
		}
	},30)
}