function startMove(obj,json,fn){
		var flag=true;
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			for(var attr in json){
				var icur=0;
				if(attr=='opacity'){
					icur=Math.round(parseFloat(getStyle(obj,attr))*100);
				}else{
					icur=parseInt(getStyle(obj,attr));
				}
				var speed=(json[attr]-icur)/8;
				speed=speed<0?Math.floor(speed):Math.ceil(speed);
				if(icur!=json[attr]){
					flag=false;
				}else if(icur==json[attr]){
					flag=true;
					//这里是必须要判断的，这样，第一个值达到目标，flag被改为了true，
					//for循环第二个值时，如果未达标，依然会再次把flag设为flase.
				}
				if(attr=='opacity'){
					obj.style[attr]=(icur+speed)/100;
				}else{
					obj.style[attr]=icur+speed+'px';
				}
				if(flag){
					clearInterval(obj.timer);
				if(fn){
					fn();
				}
			}
		}
	},20)
	}
	function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else
		{
			return getComputedStyle(obj,false)[attr];
		}

	}