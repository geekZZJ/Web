document.onreadystatechange=function(){
	if (document.readyState=='complete') {
		$('.loading').fadeOut();
	}
}
$("#join").click(function(){
	alert('报名成功');
	$(".btn-default-main").css({
		"background-color":"#666",
		"border":"1px solid #666",
		"color":"#fff",
		"cursor":"not-allowed"
	});
	$(".btn-default-main:button").val("已报名");
	$("#join").attr('disabled','true');
})
$("#make").click(function(){
	window.open("make.html","_self");
})
$("#search1").keydown(function(a){
	if(a.keyCode == 13){
		alert("not found");
	}
});
$("#search2").click(function(){
	alert("not found");
});