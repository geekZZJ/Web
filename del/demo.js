window.onload=function(){
	var opinion=document.getElementById("opinion");
	var text=opinion.innerHTML;
	// console.log(opinion.innerHTML);
	function CheckSpace(){
		// var reg=new RegExp("[\\u4E00-\\u9FA5]+","g");
		var reg1=new RegExp(/(\s+)([\u4e00-\u9fa5]+)/, "g");
		var reg2=new RegExp(/([\u4e00-\u9fa5]+)(\s+)/, "g");
		var reg3=new RegExp(/([a-zA-Z]+)(\s{2,})([a-zA-Z]+)/, "g");
		var result1=reg1.test(text);
		var result2=reg2.test(text);
		var result3=reg3.test(text);
		if (result1) {
			text=text.replace(reg1,'$2');
		}
		else {
			console.log("中文前面没有空格");
		}
		if (result2) {
			text=text.replace(reg2,'$1');
		}
		else {
			console.log("中文后面没有空格");
		}
		if (result3) {
			text=text.replace(reg3,'$1'+" "+'$3');
		}
		else {
			console.log("两单词间只有一个空格");
		}
		opinion.innerHTML=text;
	}
	CheckSpace();
}