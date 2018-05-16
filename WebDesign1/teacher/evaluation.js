        var s=document.getElementById("zhu");
        var zhuxiao = document.getElementById("zhuxiao");
        var button1 = document.getElementById("button1");
        var button2 = document.getElementById("button2");
        var stu = document.getElementById("stu");
        var teacher = document.getElementById("teacher");
        var stu1=stu.getElementsByTagName("p");
        zhuxiao.onclick = function(){
            // alert("Mr. Li,are you sure you want to quit?");
            var r = confirm("Mr. Li,are you sure you want to quit?");
            if (r==true) {
                window.open("../index.html","_self");
                //修改为首页地址
            }
            else {
                window.open("evaluation.html","_self");
            }
        }
        button1.onclick = function(){
            stu.style.display = 'block';
            teacher.style.display = 'none';
        }
        button2.onclick = function(){
            stu.style.display = 'none';
            teacher.style.display = 'block';
        }

var teach1=teacher.getElementsByTagName("p");
/*var stu=document.getElementById("stu");
var stu1=stu.getElementsByTagName("p");*/
var  a = [65,95,45,25,71,75,85,49,61,45,95,65,95,45,86,45,78,96,65,84,45,75,69,65,84];
var  b = [15,68,45,75,89,45,65,45,85,65,48,85,65,65,88,55,36,85,96,93,67,67,96,56,84];
var  c = [35,85,65,65,88,99,42,72,96,46,73,99,42,72,62,63,95,75,85,45,23,89,96,65,78];
var  d = [66,42,56,55,36,85,96,75,27,73,65,95,68,45,75,89,45,65,95,85,56,90,96,65,84];
var  e = [75,85,65,65,88,99,42,72,56,46,73,65,45,85,65,48,85,65,65,66,78,45,96,65,84];
var  f = [66,42,56,35,36,85,96,75,72,59,46,85,65,65,88,99,42,72,96,95,45,78,96,65,84];
window.onload=function(){
	for(var i=0;i<30;i++){
        console.log(teach1[i]);
        function aaa(i){
            stu1[i].onclick=function(){
                biaoge(a[i],b[i],c[i],d[i],e[i],f[i]);
            }
        }
        function aab(i){
            teach1[i].onclick=function(){
                biaoge(a[i],b[i],c[i],d[i],e[i],f[i]);
            }
        }
        aaa(i);
        aab(i);

    }
}
/*btu1.onclick=function(){
    for(var i=0;i<10;i++){
        function aaa(i){
            stu1[i].onclick=function(){
                biaoge(a[i],b[i],c[i],d[i],e[i],f[i]);
            }
        }

    }
}*/
function biaoge(a,b,c,d,e,f){
    clearCanvas();
        var ctx = document.getElementById("zhu").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["教学水平", "幽默程度", "A", "b", "C", "D"],
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
    });}
        function biaoge(a,b,c,d,e,f){
    clearCanvas();
        var ctx = document.getElementById("zhu").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["家庭情况", "个人性格", "A", "b", "C", "D"],
                datasets: [{
                    label: '学生评价',
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
    });}
        function clearCanvas(){
  

     $('#zhu').remove();
     $('#left1').append('<canvas id="zhu" height="100%" class="zhu"></canvas>');
}