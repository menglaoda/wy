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
				var body = document.querySelector("body");
				var door1 = document.querySelector(".door1");
				var door2 = document.querySelector(".door2");
				var door3 = document.querySelector(".door3");
				var door3inp = document.querySelectorAll(".door3 input");
				var door3span = document.querySelector(".door3 span");
				var box = document.querySelector(".box");
				var owidth = window.innerWidth;
				var oheight =window.innerHeight;
				box.style.display = "none";
				door1.style.height = oheight+"px";door1.style.width = parseInt(owidth/2)+1+"px";
				door2.style.height = oheight+"px";door2.style.width = parseInt(owidth/2)+"px";door2.style.left = parseInt(owidth/2)+"px";
				box.style.height = oheight+"px";
				console.log(owidth);
				console.log(oheight);
				door3span.onclick = function(){
					if(door3inp[0].value=="逗比" && door3inp[1].value=="520"){
						door3.style.display = "none";
						startMove(door1,"left",-(parseInt(owidth/2)+1));
						startMove(door2,"left",owidth);
						box.style.display = "block";
						setTimeout(function(){				
								document.body.removeChild(door1);
								document.body.removeChild(door2);
						},1000)
						
					}
					
				}
				setInterval(function(){
							console.log(owidth);
						},1000)
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
