var data = ['夏承乐','余勇','陈明','曹红婷','罗德权','罗兵','王祥福','唐杰','蒲志军','何忠平','钟星','黄建','刘鹏飞','何军','王鹏','王莉','陈然','张涛','王强','张超','鲍晓糠','邓军泽','邹春','叶宇皓','李秋平','宋平','陈芸芸','万丽斌','陈文莉','杨帆','李立','魏方念','吴元军','邓建超','张磊','龙文'];
timer = null;

window.onload = function(){
	var a = 0;
	var b = 0;
	var c = 0;
	var d = 0;
	$('#play1').click(function(){
		a++;
		clearInterval(timer);
		timer = setInterval(function(){
			var random = Math.floor(Math.random()*data.length);
			$('#name1')[0].innerHTML = data[random];
		},50);
		$('#play1').css('background','#999');
	});
	$('#stop1').click(function(){
		clearInterval(timer);
		$('#play1').css('background','#036');
		console.log($('#name1')[0].innerHTML);
		for(var i = 0;i<data.length;i++){
			if (data[i] == $('#name1')[0].innerHTML) {
				data.splice(i,1);
			}
		}
		if (a == 2) {
			$('#play1').css('background','#999');
			$('#stop1').css('background','#999');
		}
	});
	$('#play2').click(function(){
		b++;
		clearInterval(timer);
		timer = setInterval(function(){
			var random = Math.floor(Math.random()*data.length);
			$('#name2')[0].innerHTML = data[random];
			// console.log(data[random]);
		},50);
		$('#play2').css('background','#999');
	});
	$('#stop2').click(function(){
		clearInterval(timer);
		$('#play2').css('background','#036');
		console.log($('#name2')[0].innerHTML);
		for(var i = 0;i<data.length;i++){
			if (data[i] == $('#name2')[0].innerHTML) {
				data.splice(i,1);
			}
		}
		if (b == 6) {
			$('#play2').css('background','#999');
			$('#stop2').css('background','#999');
		}
	});
	$('#play3').click(function(){
		c++;
		clearInterval(timer);
		timer = setInterval(function(){
			var random = Math.floor(Math.random()*data.length);
			$('#name3')[0].innerHTML = data[random];
			// console.log(data[random]);
		},50);
		$('#play3').css('background','#999');
	});
	$('#stop3').click(function(){
		clearInterval(timer);
		$('#play3').css('background','#036');
		console.log($('#name3')[0].innerHTML);
		for(var i = 0;i<data.length;i++){
			if (data[i] == $('#name3')[0].innerHTML) {
				data.splice(i,1);
			}
		}
		if (c == 12) {
			$('#play3').css('background','#999');
			$('#stop3').css('background','#999');
		}
	});
	$('#play4').click(function(){
		d++;
		clearInterval(timer);
		timer = setInterval(function(){
			var random = Math.floor(Math.random()*data.length);
			$('#name4')[0].innerHTML = data[random];
			// console.log(data[random]);
		},50);
		$('#play4').css('background','#999');
	});
	$('#stop4').click(function(){
		clearInterval(timer);
		$('#play4').css('background','#036');
		console.log($('#name4')[0].innerHTML);
		for(var i = 0;i<data.length;i++){
			if (data[i] == $('#name4')[0].innerHTML) {
				data.splice(i,1);
			}
		}
		if (d == 16) {
			$('#play4').css('background','#999');
			$('#stop4').css('background','#999');
		}
	})
}