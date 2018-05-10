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
					window.open("../html/activity.html")

				}else{

			$("#mark1").css('display', 'block');
	
		
			$("#form1").css('display', 'block');
		
				}
			}
		}



	})



}