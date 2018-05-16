window.onload=function(){
	var vm=new Vue({
		el:'body',
		data:{
			sign:'SIGN IN',
			center:'个人中心',
			islog:false

		},
		methods:{
			login(){
				
				this.sign='个人中心';
			
			$("#mark1").css('display', 'none');

		
			$("#form1").css('display', 'none');


	
					
			},
			login2(){
				if(this.sign=='个人中心'){
					window.open("../html/activity.html","_self")

				}else{

			$("#mark1").css('display', 'block');
	
		
			$("#form1").css('display', 'block');
		
				}
			}
		}



	})



}


document.onreadystatechange=function(){
	if (document.readyState=='complete') {
		$('.loading').fadeOut();
	}
}
$("#first").mouseover(function(){
	$("#first").addClass('rubberBand');
});
$("#first").mouseout(function(){
	$("#first").removeClass('rubberBand');
});
$("#top").click(function(){
	$("html,body").animate({scrollTop:0},600);
});
$("#join").click(function(){
	$("#mark1").css('display', 'block');
});
$("#join").click(function(){
	$("#form1").css('display', 'block');
});
$("#join").click(function(){
	$(document.body).css({
		"overflow-y":"hidden"
	});
});
$("#login1").click(function(){
	$(document.body).css({
		"overflow-y":"hidden"
	});
});
$("#search1").keydown(function(a){
	if(a.keyCode == 13){
		alert("not found");
	}
});
$("#login3").click(function(){
	$(document.body).css({
		"overflow-y":"auto"
	});
})