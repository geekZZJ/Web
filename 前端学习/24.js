window.onload=function(){
  var box=document.getElementById("box");
  var wutai =box.getElementsByClassName("wutai");
  var gs=5;//遍历的div
  var neirong= '<div class="wutai"><div class="mofang qian"></div><div class="mofang hou"></div><div class="mofang left"></div><div class="mofang right"></div><div class="mofang top"></div><div class="mofang buttom"></div></div>';    //遍历的HTML
  var dom="";
  for(var i=0;i<gs;i++){
    dom+=neirong;//循环遍历div的个数
  }
  box.innerHTML=dom;// 将遍历的div放入html中
  var dian=0;
  box.onclick=function(){
    dian++;
    var jiaodu=dian*90;
    for(var i=0;i<gs;i++){
      wutai[i].style="transition:transform 1s"+100*i+"ms;transform:rotateX("+jiaodu+"deg)";//设置延迟时间和旋转的度数
      }
  }
  setInterval(function(){
    dian++;
    var jiaodu=dian*90;
    for(var i=0;i<gs;i++){
      wutai[i].style="transition:transform 1s"+100*i+"ms;transform:rotateX("+jiaodu+"deg)";
      }
  },3000)//设置计时器让dome自己运动起来
}