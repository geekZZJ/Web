// function insertParagraph(text){
// 	var str = "<p>";
// 	str += text;
// 	str += "</p>";
// 	document.write(str);
// }
// window.onload = function(){
// 	var testdiv = document.getElementById("testdiv");
// 	testdiv.innerHTML = "<p>I inserted <em>this</em> content.</p>";
// }
// window.onload = function(){
// 	var para = document.createElement("p");
// 	var info = "nodeName: ";
// 	info+= para.nodeName;
// 	info+= " nodeType: ";
// 	info+=para.nodeType;
// 	alert(info);
// }creatElement方法
// 
// 
// var testdiv = document.getElementById("testdiv");
// var para = document.createElement("p");
// testdiv.appendChild(para);使用appendChild
// 
// 
// window.onload = function(){
// 	var para = document.createElement("p");
// 	var testdiv = document.getElementById("testdiv");
// 	testdiv.appendChild(para);
// 	var txt = document.createTextNode("Hello world");
// 	para.appendChild(txt);
// }
// window.onload = function(){
// 	var para = document.createElement("p");
// 	var txt = document.createTextNode("Hello world");
// 	para.appendChild(txt);
// 	var testdiv = document.getElementById("testdiv");
// 	testdiv.appendChild(para);
// }
// 
// 
window.onload = function(){
	var para = document.createElement("p");
	var txt1 = document.createTextNode("This is ");
	para.appendChild(txt1);
	var emphasis = document.createElement("em");
	var txt2 = document.createTextNode("my");
	emphasis.appendChild(txt2);
	var txt3 = document.createTextNode(" content.");
	para.appendChild(txt3);
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);
}
//在现有元素后插入一个新元素
function insertAfter(newElement,targetElement){
			var parent = targetElement.parentNode;
			if (parent.lastChild==targetElement) {
				parent.appendChild(newElement);
			}
			else{
				parent.insertBefore(newElement,targetElement.nextSibling);
			}
		}