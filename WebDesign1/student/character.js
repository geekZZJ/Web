	var zhuxiao = document.getElementById("zhuxiao");
		document.onreadystatechange=function(){
			if (document.readyState=='complete') {
				$('.loading').fadeOut();
			}
		}
		zhuxiao.onclick = function(){
			// alert("Mr. Li,are you sure you want to quit?");
			var r = confirm("Li Hua,are you sure you want to quit?");
			if (r==true) {
				window.open("../index.html","_self");
				//修改为首页地址
			}
			else {
				window.open("character.html","_self");
			}
		}
var z=[56,76,89,67,89,45,67,88,86,45,65,23,35];
var s=[34,54,65,65,76,76,87,87,87,15,56,85,25];
var p=[12,6,,17,14,15,13,13,14,13,15,65,85,26];
var l=[13,23,14,32,13,14,13,12,16,22,26,25,35];
var j=document.getElementById("jichu");
var j1=j.getElementsByTagName('button');
var xue=document.getElementById("zhuanye");
var xue1=xue.getElementsByTagName('button');

window.onload=function(){
	console.log(xue1);
	for(var i=0;i<13;i++){
		function bing(i){
			j1[i].onclick=function() {
			bingzhuang(z[i],s[i],p[i],l[i]);
		}
			xue1[i].onclick=function(){
				bingzhuang(z[i+5],s[i+5],p[i+5],l[i+5]);
			}
		}
		bing(i);
	}

}
function bingzhuang(a,b,c,d){
	clearbingzhuang();
       var cbx=document.getElementById("bingzhuang").getContext("2d");
           var myChart2=new Chart(cbx,{
                type:'pie',
                    data:{
                        labels:["期末成绩","半期成绩","平时成绩","实验成绩"],
                            datasets:[{
                                data:[a,b,c,d],
                                    label:["及格","不及格"],
                                        backgroundColor:[
                                            'rgba(255, 99, 132, 0.7)',
                                            'rgba(255, 206, 86, 0.7)',
                                            'rgba(54, 162, 235, 0.7)',
                                            'rgba(122, 62, 25, 0.7)',

                                                            ],
                                                borderColor:'rgba(169,185,23,1)',
                                                     borderWidth: 1
                                    }]
                        },
                   options: {
                        }
                            
            });
}
function clearbingzhuang(){
	$('#bingzhuang').remove();
    $('#bfather').append('<canvas id="bingzhuang"></canvas>');
}