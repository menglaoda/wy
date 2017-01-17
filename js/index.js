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
				var box1 = document.querySelector(".box1");
				var navli = document.querySelectorAll(".nav li");
				var box1section = document.querySelectorAll(".box1 section");
				var owidth = window.innerWidth;
				var oheight =window.innerHeight;
				box.style.display = "none";				
				door1.style.height = oheight+"px";door1.style.width = parseInt(owidth/2)+1+"px";
				door2.style.height = oheight+"px";door2.style.width = parseInt(owidth/2)+"px";door2.style.left = parseInt(owidth/2)+"px";
				box.style.height = oheight+"px";
				console.log(owidth);
				console.log(oheight);
				box1.style.display = "block";
				door3span.onclick = function(){
					if(door3inp[0].value=="逗比" && door3inp[1].value=="520"){
						door3.style.display = "none";
						startMove(door1,"left",-(parseInt(owidth/2)+1));
						startMove(door2,"left",owidth);
						box.style.display = "block";
						box1.style.display = "block";
						setTimeout(function(){				
								document.body.removeChild(door1);
								document.body.removeChild(door2);
						},1000)
						
					}	
				}
				
				startMove(box1section[0],"left",0);	
				box1.removeAttribute("height");
				navli[0].onclick = function(){
					box1section[0].style.display = "block";
					box1section[1].style.left= owidth+"px";box1section[1].style.display = "none";
					box1section[2].style.left = owidth+"px";box1section[2].style.display = "none";
					startMove(box1section[0],"left",0);					
				}
				navli[1].onclick = function(){
					box1section[1].style.display = "block";
					box1section[0].style.left = owidth+"px";box1section[0].style.display = "none";
					box1section[2].style.left = owidth+"px";box1section[2].style.display = "none";
					startMove(box1section[1],"left",0);					
				}
				navli[2].onclick = function(){
				    box1section[2].style.display = "block";
					box1section[0].style.left = owidth+"px";box1section[0].style.display = "none";
					box1section[1].style.left = owidth+"px";box1section[1].style.display = "none";
					startMove(box1section[2],"left",0);					
				}
				
		}
	

})();
;(function(){
	$(function(){
		//导航栏
		        var $navli = $(".nav li");
		        $navli.eq(0).addClass("oli");
		        $navli.on("click",function(){
		        	$(this).addClass("oli");
		        	$(this).siblings().removeClass("oli");
		        });
		 //感人下的H3
		        var $h3btn = $(".ganren h3");
		        var $biaoti = $(".biaoti");
		        $biaoti.hide();
		        $h3btn.on("click",function(){
		        	var i = $h3btn.index(this);
		        	$h3btn.eq(i).css({"color":"red","margin-left":"0px"});
		        //	$h3btn.eq(i).css("margin-left","0px");
		        	$h3btn.eq(i).siblings(".ganren h3").css({"color":"blue","margin-left":"20px"});
		        	$biaoti.eq(i).show();
		        	$biaoti.eq(i).siblings(".biaoti").hide();
		        });
		//感人小故事
				var $ganrenspan1 = $(".ganrenspan1");
				var $ganrenspan2 = $(".ganrenspan2");
				var p0 = $ganrenspan1.eq(0).html();
				var p1 = $ganrenspan1.eq(1).html();
				var p2 = $ganrenspan1.eq(2).html();
				var p3 = $ganrenspan1.eq(3).html();
				var p4 = $ganrenspan1.eq(4).html();
				var p5 = $ganrenspan1.eq(5).html();
				var p6 = $ganrenspan1.eq(6).html();
				var p7 = $ganrenspan1.eq(7).html();
				
			    var pp0 = p0.split("");	//字符串分割成数组
			    var pp1 = p1.split("");	
			    var pp2 = p2.split("");	
			    var pp3 = p3.split("");	
			    var pp4 = p4.split("");	var pp5 = p5.split("");	var pp6 = p6.split("");	var pp7 = p7.split("");	
				console.log($ganrenspan1.length);
				var ppp0 = pp0.slice(0,40);
				var ppp1 = pp1.slice(0,40);
				var ppp2 = pp2.slice(0,40);
				var ppp3 = pp3.slice(0,40);
				var ppp4 = pp4.slice(0,40);var ppp5 = pp5.slice(0,40);var ppp6 = pp6.slice(0,40);var ppp7 = pp7.slice(0,40);
				console.log(ppp0.length);
				var pppp0 = ppp0.join("");//把数组连接起来
				var pppp1 = ppp1.join("");
				var pppp2 = ppp2.join("");
				var pppp3 = ppp3.join("");
				var pppp4 = ppp4.join("");var pppp5 = ppp5.join("");var pppp6 = ppp6.join("");var pppp7 = ppp7.join("");
				$ganrenspan1.eq(0).html(pppp0+"...");
				$ganrenspan1.eq(1).html(pppp1+"...");
				$ganrenspan1.eq(2).html(pppp2+"...");
				$ganrenspan1.eq(3).html(pppp3+"...");
				$ganrenspan1.eq(4).html(pppp4+"...");$ganrenspan1.eq(5).html(pppp5+"...");$ganrenspan1.eq(6).html(pppp6+"...");$ganrenspan1.eq(7).html(pppp7+"...");
				$ganrenspan2.on("click",function(){					
					var i = $ganrenspan2.index(this);
					console.log(i);
					if($ganrenspan2.eq(i).html()=="(展开)"){
						console.log("sss");
					         var y = "p"+i;
					         var x = eval(y);//把字符串转化为对象
					         console.log(typeof y);
							 $ganrenspan1.eq(i).html(x);
						     $ganrenspan2.eq(i).html("(收缩)");
 
						
					}else{
						var y ="pppp"+i;
						var x =eval(y);
						$ganrenspan1.eq(i).html(x+"...");
						$ganrenspan2.eq(i).html("(展开)");
					}
				})
	});
})();
