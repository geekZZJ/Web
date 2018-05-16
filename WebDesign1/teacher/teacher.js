var subj1=document.getElementById("ex1");
var subj2=document.getElementById("ex2");
var subj3=document.getElementById("ex3");
var subj4=document.getElementById("ex4");
var subj5=document.getElementById("ex5");
var subj6=document.getElementById("ex6");
subj1.onclick=function(){ 
  
    biaoge(56,23,85,65,89,25);}
subj2.onclick=function(){
   /* var s=document.createElement("convas");
    var r=document.getElementById("left1");
    r.removeChild(chart);
    r.appendChild('<canvas id="myChart" height="230"></canvas>');
   */
    /*
    $('#myChart').remove();
    $('#myChart').append('<canvas id="myChart" height="230"></canvas>');*/
  
    biaoge(56,23,85,56,25,25);
   
}
    
subj3.onclick=function(){biaoge(86,48,45,45,5,5);}
subj4.onclick=function(){biaoge(59,95,18,85,20,15);}
subj5.onclick=function(){biaoge(45,15,19,63,32,15);}
subj6.onclick=function(){biaoge(65,45,17,36,29,13);}
function biaoge(a,b,c,d,e,f){
    clearCanvas();
        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["100~90", "89~80", "79~70", "69~60", "59~50", "50以下"],
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
                scales:{
                    yAxes:[{
                        stacked:true,
                        max:100,
                    }    ]
                    
                }

            }
    });
        var p1=document.getElementById("pp");
        if((f+e)/(a+b+c+d)<=0.1){
            pp.innerHTML="成绩评价:此科目总体情况较好，不及格率小于10%"+'<br>'+"评分：A";
        }
        else if((f+e)/(a+b+c+d)>0.1&&(f+e)/(a+b+c+d)<=0.2){
            pp.innerHTML="成绩评价:此科目总体情况一般，不及格率在10%和20%之间"+'<br>'+"评分：B";

        }
        else if((f+e)/(a+b+c+d)>0.2&&(f+e)/(a+b+c+d)<=0.3){
            pp.innerHTML="成绩评价:此科目总体情况较差，不及格率在20%和30%之间"+'<br>'+"评分：C";

        }
        else{
            pp.innerHTML="成绩评价:此科目总体情况很差，不及格率在30%以上"+'<br>'+"评分：D";
        }
}
function clearCanvas(){
  

     $('#myChart').remove();
     $('#left1').append('<canvas id="myChart" class="chart" height=100%></canvas>');
}