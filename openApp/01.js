let openApp = ()=>{
	let ua = window.navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == 'micromessenger'){
	    window.location.href = 'downLoadForPhone'
	}else {
	    if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){
	        let loadDateTime = new Date();
	        window.setTimeout(function () {
				let timeOutDateTime = new Date();
				if (timeOutDateTime - loadDateTime < 5000){
				    alert("没有安装淘宝");
				    window.location = "";//ios下载地址
				} else {
				    window.close();
				}
            },2000);
	        window.location = "taobao://";
		}else if (navigator.userAgent.match(/android/i)){
	        let state = null;
	        try {
				window.location = 'taobao://';
				setTimeout(function () {
					window.location = "";//安卓下载地址
                },500);
            }catch (e) {
				console.log("错误"+e);
            }
		}
	}
};