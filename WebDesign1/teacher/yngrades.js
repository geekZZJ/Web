$(function(){
	var $zhuxiao = $("#zhuxiao");
	var $but1 = $("#button1");
	var $but2 = $("#button2");
	var $zhifang = $("#zhifang");
	var $shanxing = $("#shanxing");
	var $stu = $("#stu");
	var $pArr = $stu.find("p");
	var i;
	var isclick = false;//是否点击了p
	var  $a = [65,95,45,68,71,75,85,49,61,45,95];
	var  $b = [95,68,45,75,89,45,65,45,85,65,48];
	var  $c = [75,85,65,65,88,99,42,72,96,46,73];
	var  $d = [66,42,56,55,36,85,96,75,72,73,65];
	var  $e = [75,85,65,65,88,99,42,72,96,46,73];
	var  $d = [66,42,56,55,36,85,96,75,72,73,65];
	//这是给什么元素天界什么方法
	$zhuxiao.click(function(){
		var r = confirm("Mr. Li,are you sure you want to quit?");
		if (r==true) {
			window.open("wan/tupian.html","_self");
			//修改为首页地址
		}else {
			window.open("grades.html","_self");
		}
	})



/*$pArr.addListener('click',function(e){
	biaoge(a[e],b[e],c[e],d[e],e[],f[])
}))*/
	$pArr[i].click(function(){
		biaoge(a[i],b[i],c[i],d[i],e[i],f[i]);
	})
	$but1.click(function(){
		console.log($zhifang.css.display);
/*		$shanxing.hide();
		$shanxing.show();*/
		$shanxing.toggle();
		$zhifang.toggle();
		/*$shanxing.css({
			"display":'block',
			"color" : "red"
		});*/
		bingzhuang(6,2);				
	})
					
		/*$but2.click=（function(){
			zhifang.style.display = 'none';
			zhifang.style.display = 'block';
			console.log(1234);
			shanxing.style.display = 'none';
			console.log("123");
			biaoge(12,15,59,65,85,10);
			

		})*/
function biaoge(a,b,c,d,e,f){
    	clearCanvas();
        var ctx = document.getElementById("zhifang").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["高等数学", "大学物理", "c++程序设计", "java程序设计", "数据库设计", "软件工程"],
                datasets: [{
                    label: '成绩表',
                    data: [a,b,c,d,e,f],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
function clearCanvas(){
   

     $('#zhifang').remove();
     $('#zhifang1').append('<canvas id="zhifang"></canvas>');
}
function bingzhuang(a,b){
	//clearbinzhuang();
       var cbx=document.getElementById("shanxing").getContext("2d");
           var myChart2=new Chart(cbx,{
                type:'pie',
                    data:{
                        labels:["red","blue"],
                            datasets:[{
                                data:[a,b],
                                    label:["及格","不及格"],
                                        backgroundColor:[
                                            'rgba(255, 99, 132, 0.7)',
                                            'rgba(255, 206, 86, 0.7)',
                                            'rgba(54, 162, 235, 0.7)',

                                                            ],
                                                borderColor:'rgba(169,185,23,1)',
                                                     borderWidth: 1
                                    }]
                        },
                   options: {
                        scales: {
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
                                     ticks: {
                                     beginAtZero:true
                                            }
                                        }]
                                    }
                                }
                            
            });

function clearbingzhuang(){
	$('#shanxing').remove();
    $('#shanxing1').append('<canvas id="shanxing"></canvas>');
}



})