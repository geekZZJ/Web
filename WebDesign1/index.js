var obImg=document.getElementById("chengbao");
	var imgW=obImg.style.width+60+"px";
	window.onload=function xiaoguo(){
		var time=null;
		fangda();
		document.documentElement.style.overflowY = 'hidden';  
		document.documentElement.style.overflowX= 'hidden';
	}
	function fangda(){
		time=setInterval(function(){
		if(obImg.offsetWidth>document.documentElement.clientWidth+150){
			clearInterval(time);
		}
		else{
			obImg.style.width=obImg.offsetWidth+5+"px";
			obImg.style.height=obImg.offsetHeight+5+"px";
		}
	},50);		
}//放大的效果
var d=document.getElementById("denbut");
var p=document.getElementById("password");
var z=document.getElementById("zhanghao");

d.onclick=function yanzhen(){
	console.log(1)
	if(z.value == ""){
		console.log(2)
		alert("请输入账号");
	}else if(p.value == ""){
		console.log(3)

		alert("请输入密码");
	}
	else if(z.value=="teach123"&&p.value=="012412"){
	window.open("teacher/situation.html","_self");
	}
	else if(z.value=="stu123"&&p.value=="012412"){
		window.open("student/character.html","_self");
	}
	else{
		alert("密码错误");
	}

}