$("#jiu").click(function(){
	var href = $(this).attr("href");
	var pos = $(href).offset().top;
	$("html,body").animate({scrollTop: pos}, 600);
	return false;
});
$("#meet").click(function(){
	var href = $(this).attr("href");
	var pos = $(href).offset().top;
	$("html,body").animate({scrollTop: pos}, 1200);
	return false;
});
$("#room").click(function(){
	var href = $(this).attr("href");
	var pos = $(href).offset().top;
	$("html,body").animate({scrollTop: pos}, 1200);
	return false;
});