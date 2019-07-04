	// var dian= document.getElementsByClassName('dian')[0];
	// var up=document.getElementsByClassName('up')[0];
	// var out=document.getElementsByClassName('out')[0];
	// // 位置的改换——调出
	// for(var i=0;i<dian.length;i++){
	// 	dian[i].index=i;
	// };
	// for(var j=0;j<out.length;j++){
	// 	out[j].index=j;
	// };
	// for(var x=0; x<up.length;x++)
	// dian[i].onmouseenter = function(){

	// 	setTimeout(function(){
	// 		up[x].style.display='none';
	// 		out[j].style.top = 0 +'px';
	// 	},100);
	// }
	// //位置的改换——调入
	// dian[i].onmouseleave = function(){
	// 	setTimeout(function(){
	// 		up[x].style.display='block';
	// 		out[j].style.top =200 +'px';
	// 	},1000);
	// }

	var dian= document.getElementsByClassName('dian')[0];
	var up=document.getElementsByClassName('up')[0];
	var out=document.getElementsByClassName('out')[0];
	// 位置的改换——调出
	for(var i=0;i<dian.length;i++){
	dian[i].timer = null;
	dian[i].onmouseenter = function(){
		startMove(this,0);
	};
	dian[i].onmouseleave = function(){
		startMove(this,200);
	};
}
	//位置的改换——调入
	dian[i].onmouseleave = function(){
		setTimeout(function(){
			up[x].style.display='block';
			out[j].style.top =200 +'px';
		},1000);
	};
	function startMove(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var is_clear = true;
		for(var n in json){
			//{"width"：300，"height":300}
			//属性名
			var attr = n;
			//目标值
			var dest = json[n];
			if(attr=='opacity'){
				//当前的样式值
				var nowStyle = getStyle(obj,attr);
				nowStyle = Math.round(nowStyle*100);
			}else{
				var nowStyle = parseInt(getStyle(obj,attr));
			}
			//调整速度，这个是缓冲速度。
			var speed = dest>=nowStyle?Math.ceil((dest-nowStyle)/10):Math.floor((dest-nowStyle)/10);
			//当前值是否等于目标
			if(nowStyle!=dest){
				//有多少个到达目标的属性
				if('opacity'==attr){
					console.log(nowStyle)
					obj.style.opacity = (nowStyle+speed)/100;
					obj.style.filter = 'alpha(opacity='+nowStyle+speed+')';
				}else{
					obj.style[attr] = nowStyle+speed+'px';
				}
				is_clear = false;
			}
			//json的元素个数
		}
		if(is_clear){
			clearInterval(obj.timer);
			if(fn)fn();
		}
	},30);
}
function getStyle(obj,style){
	if(obj.currentStyle){
		return obj.currentStyle[style];
	}else{
		return getComputedStyle(obj,null)[style];
	}
}











	// var dian= document.getElementsByClassName('dian');
	// var out=document.getElementsByClassName('out');

	// for(var i=0;i<dian.length;i++){
	// 		for(var j=0;j<out.length;j++){
	// 		dian[i].onmouseenter = function(){
	// 		// 位置的改换——调出
	// 		out[j].style.top = 0 +'px';
	// 		// setTimeout(function(){

	// 		// },100);
	// 	};
	// 		//位置的改换——调入
	// 		dian[i].onmouseleave = function(){
	// 			out[j].style.top =200 +'px';
	// 		// setTimeout(function(){

	// 		// },1000);
	// 	};

	// }
	// }









































// 	function startMove(obj,json,fn){
// 	clearInterval(obj.timer);
// 	obj.timer = setInterval(function(){
// 		var is_clear = true;
// 		for(var n in json){
// 			//{"width"：300，"height":300}
// 			//属性名
// 			var attr = n;
// 			//目标值
// 			var dest = json[n];
// 			if(attr=='opacity'){
// 				//当前的样式值
// 				var nowStyle = getStyle(obj,attr);
// 				nowStyle = Math.round(nowStyle*100);
// 			}else{
// 				var nowStyle = parseInt(getStyle(obj,attr));
// 			}
// 			//调整速度，这个是缓冲速度。
// 			var speed = dest>=nowStyle?Math.ceil((dest-nowStyle)/10):Math.floor((dest-nowStyle)/10);
// 			//当前值是否等于目标
// 			if(nowStyle!=dest){
// 				//有多少个到达目标的属性
// 				if('opacity'==attr){
// 					console.log(nowStyle)
// 					obj.style.opacity = (nowStyle+speed)/100;
// 					obj.style.filter = 'alpha(opacity='+nowStyle+speed+')';
// 				}else{
// 					obj.style[attr] = nowStyle+speed+'px';
// 				}
// 				is_clear = false;
// 			}
// 			//json的元素个数
// 		}
// 		if(is_clear){
// 			clearInterval(obj.timer);
// 			if(fn)fn();
// 		}
// 	},10);
// }
// function getStyle(obj,style){
// 	if(obj.currentStyle){
// 		return obj.currentStyle[style];
// 	}else{
// 		return getComputedStyle(obj,null)[style];
// 	}
// }


