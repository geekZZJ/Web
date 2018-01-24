// JavaScript Document
var _newnowi=1;    
    var imgroll2=function(id){    
        if(-1 != id){    
            _newnowi = id;    
        }    
        var imgnum = [1,2,3,4];    
        for(var i=1;i<=imgnum.length;i++){    
            if(i == _newnowi){    
                document.getElementById("topimg1"+i).style.display="";    
                document.getElementById("linkt1"+i).setAttribute("class","linkBoxchoose");    
            }else{    
                document.getElementById("topimg1"+i).style.display="none";    
                document.getElementById("linkt1"+i).setAttribute("class","linkBox");    
            }    
        }    
        _newnowi = _newnowi+1;    
        if(_newnowi > imgnum.length){    
                _newnowi = 1;    
        }    
    }    
        
    var interval1=window.setInterval("imgroll2(-1)",2080);