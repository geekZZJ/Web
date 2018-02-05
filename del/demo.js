window.onload=function(){
	var opinion=document.getElementById("opinion");
	var text=opinion.innerHTML;
	// console.log(opinion.innerHTML);
	function CheckSpace(){
		// var reg=new RegExp("[\\u4E00-\\u9FA5]+","g");
		var reg1=new RegExp(/(\s+)([\u4e00-\u9fa5]+)/, "g");
		var reg2=new RegExp(/([\u4e00-\u9fa5]+)(\s+)/)
		var result1=reg1.test(text);
		var result2=reg2.test(text);
		if (result1) {
			opinion.value=text.replace(reg1,'$2');
		}
		else {
			console.log("中文前面没有空格");
		}
		if (result2) {
			opinion.value=text.replace(reg2,'$1');
		}
		else {
			console.log("中文后面没有空格");
		}
	}
	CheckSpace();
}