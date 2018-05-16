var zhuxiao = document.getElementById("zhuxiao");
var but1 = document.getElementById("button1");
var but2 = document.getElementById("button2");
var zhifang = document.getElementById("zhifang1");
var shanxing = document.getElementById("shanxing1");

var  a = [65,95,45,25,71,75,85,49,61,45,95,65,95,45,86,45,78,96,65,84,56,56,96,65,84];
var  b = [15,68,45,75,89,45,65,45,85,65,48,85,65,65,88,55,36,85,96,93,66,65,96,65,84];
var  c = [35,85,65,65,88,99,42,72,96,46,73,99,42,72,62,63,95,75,85,45,78,66,96,65,84];
var  d = [66,42,56,55,36,85,96,75,27,73,65,95,68,45,75,89,45,65,95,85,45,34,96,65,84];
var  e = [75,85,65,65,88,99,42,72,56,46,73,65,45,85,65,48,85,65,65,66,54,54,96,65,84];
var  f = [66,42,56,35,36,85,96,75,72,59,46,85,65,65,88,99,42,72,96,95,55,54,96,65,84];

zhuxiao.onclick = function(){
	// alert("Mr. Li,are you sure you want to quit?");
	var r = confirm("Mr. Li,are you sure you want to quit?");
	if (r==true) {
		window.open("../index.html","_self");
		//修改为首页地址
	}
	else {
		window.open("grades.html","_self");
	}
}
		/*button1.onclick = function(){
			shanxing.style.display = 'none';
			zhifang.style.display = 'block';
		}
		button2.onclick = function(){
			zhifang.style.display = "none";
			shanxing.style.display = "block";
			
			for(var i=0;i<10;i++){
				p[i].onclick=function(){

					alert("123");
				}
			}
			
		}*/
	
	window.onload=function(){
		
		var stu=document.getElementById("stu");
		var p=stu.getElementsByTagName("p");
        for(var i=0;i<22;i++){
            function aaa(i){
                p[i].onclick=function(){
                    var j1=0;
                    var j2=0;
                    biaoge(a[i],b[i],c[i],d[i],e[i],f[i]);
                    var jj=[a[i],b[i],c[i],d[i],e[i],f[i]];
                    for(var t=0;t<6;t++){
                        if(jj[t]>60){
                            j1++;
                        }
                        else{
                            j2++;
                        }
                    }
                    bingzhuang(j1,j2);
                }
            }
            aaa(i);

        }
		/*var island=true;*/
		/*var isclick = false;
		for(var i=0;i<22;i++){
			p[i].onclick=function(){
				isclick = true;
				
				if (island==1) {
					shanxing.style.display = 'none';
					zhifang.style.display = 'block';
					biaoge(12,15,59,65,85,10);
				}
				else if(island==2){
					
				}
			}
		}*/

		but1.onclick=function(){
			
			 $("#zhifang1").toggle();	
			
			$("#shanxing1").toggle();
							

		}
					
		/*but2.onclick=function(){
			zhifang.style.display = 'block';
			zhifang.style.display = 'block';
			
			shanxing.style.display = 'none';
			
		 biaoge(a[i],b[i],c[i],d[i],e[i],f[i]);


		}*/
	}
	
		function biaoge(a,b,c,d,e,f){
    clearCanvas();
         var cax=document.getElementById("zhifang").getContext("2d");
            var myChart1=new Chart(cax,{
                type:'line',
                data:{
                    labels:["高等数学","大学物理","c++程序设计","数据库设计","Java程序设计","计算机组成原理"],
                    datasets:[{


                        label:'',
                         data:[a,b,c,d,e,f],
                         backgroundColor:"rgba(101,39,215,0.4)",

                        fillColor:"rgb(220,220,220)",
                    strokeColor: "rgba(0,102,51,1)",

                pointColor: "rgba(0,0,0,1)",

                pointStrokeColor: "#339933",

                pointHighlightFill: "#339933",

                pointHighlightStroke: "rgba(220,220,220,1)",
               
                    }]


                },

        options: {
            title:{
                display:true,
                text:"成绩表"
            },
            scales:{
                 xAxes:[{
                    //轴标题
                    scaleLabel:{
                        display:true,
                        labelString:'第几圈',
                        fontColor:'#666'
                    },
                    //网格显示
                    gridLines:{
                        display:true
                    },


                }],
                yAxes:[{
                   /* scaleLabel:{
                        display:true,
                        labelString:"分",
                        fontColor:'#666'
                    },
                     gridLines:{
                        scaleStep:10,
                        min:0,
                        max:10
                    },*/
                    stacked:true,
                    scaleStep:10,
                    min:0,
                    max:100,

                }],
            },
            elements:{
                
                line:{
                    
                    tension:0,
                }
            }
           }

        });

       /* var p1=document.getElementById("pp2");
        if((f+e)/(a+b+c+d)<=0.1){
            p1.innerHTML="成绩评价:此科目总体情况较好，不及格率小于10%"+'<br>'+"评分：A";
        }
        else if((f+e)/(a+b+c+d)>0.1&&(f+e)/(a+b+c+d)<=0.2){
            p1.innerHTML="成绩评价:此科目总体情况一般，不及格率在10%和20%之间"+'<br>'+"评分：B";

        }
        else if((f+e)/(a+b+c+d)>0.2&&(f+e)/(a+b+c+d)<=0.3){
            p1.innerHTML="成绩评价:此科目总体情况较差，不及格率在20%和30%之间"+'<br>'+"评分：C";

        }
        else{
            pp.innerHTML="成绩评价:此科目总体情况很差，不及格率在30%以上"+'<br>'+"评分：D";
        }*/
}
			

	function clearCanvas(){
   

     $('#zhifang').remove();
     $('#zhifang1').append('<canvas height="100%" id="zhifang"></canvas>');
}
function bingzhuang(a,b){
	clearbingzhuang();
       var cbx=document.getElementById("shanxing").getContext("2d");
           var myChart2=new Chart(cbx,{
                type:'pie',
                    data:{
                        labels:["及格","不及格"],
                            datasets:[{
                                data:[a,b],
                                    label:["及格","不及格"],
                                        backgroundColor:[
                                            'rgba(7,233,112,0.5)',
                                            'rgba(7, 190, 233, 0.5)',
                                            'rgba(54, 162, 235, 0.7)',

                                                            ],
                                                //borderColor:'rgba(169,185,23,1)',
                                                     borderWidth: 0
                                    }]
                        },
                   options: {
                       /* scales: {
                            xAxes:[{
                    //轴标题
                                scaleLabel:{
                                    display:false,
                       
                                },
                    //网格显示
                                gridLines:{
                                    display:false,
                                },

                           /* yAxes:[{

                                gridLines:{
                                    display:false,
                                },

                            }]*/
                                     /*ticks: {
                                     beginAtZero:true
                                            }
                                        }]
                                    }*/
                                }
                            
            });
}
function clearbingzhuang(){
	$('#shanxing').remove();
    $('#shanxing1').append('<canvas height="100%" id="shanxing"></canvas>');
}