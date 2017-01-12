;(function(){
			//获取元素的属性值
			//obj  元素对象
			//attr 要获取的元素属性
			//兼容写法
			window.onload = function(){
				function getStyleAttr(obj,attr){
				if(window.getComputedStyle){  //ie9+  ff 谷歌
					return getComputedStyle(obj,null)[attr];			
				}
				//ie8及以下
				return obj.currentStyle[attr];
			}
				var box = document.querySelector(".box");
				var owidth = window.innerWidth;
				var oheight =window.innerHeight;
				box.style.height = oheight+"px";
				console.log(owidth);
				console.log(oheight);
				
				var navli = document.querySelectorAll(".nav li");
				var box1section = document.querySelectorAll(".box1 section");
				startMove(box1section[0],"left",0);	
				navli[0].onclick = function(){
					
					box1section[1].style.left= owidth+"px";
					box1section[2].style.left = owidth+"px";
					startMove(box1section[0],"left",0);					
				}
				navli[1].onclick = function(){
					
					box1section[0].style.left = owidth+"px";
					box1section[2].style.left = owidth+"px";
					startMove(box1section[1],"left",0);					
				}
				navli[2].onclick = function(){
				
					box1section[0].style.left = owidth+"px";
					box1section[1].style.left = owidth+"px";
					startMove(box1section[2],"left",0);					
				}
				
			}

})();
