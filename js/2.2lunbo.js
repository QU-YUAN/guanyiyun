// 2.轮播图
// 获取运动的图片
var img =document.querySelector('.q-middle10-middle')
var outer=document.querySelector('.q-middle10-outer');
var tup =document.querySelectorAll('.q-middle10-in');
// 获取左右点击的点
var prev=document.querySelector('.q-middle10-div-button1');
var next=document.querySelector('.q-middle10-div-button2');
// 获取圆点
var buttom=document.querySelector('.num').getElementsByTagName('a');
		// 设置定时器
		var timer = setInterval(function(){
			++now;
			move();
		},4000);
		var now = 0;
		buttom[0].style.background = '#61b5ff';
		function move (){
			if(now==tup.length){
				now=0;
				outer.style.left='0px';
			}
			if (now==-1) {
				now=tup.length-1;
				outer.style.left=-1*parseInt(tup[0].offsetWidth)*4+'px';
			}
			if (now>0 && now<tup.length) {
				outer.style.left=-1*parseInt(tup[0].offsetWidth)*(now)+'px';
			}
			if (now==0) {
				outer.style.left='0px';
			}
			for (var i = 0; i < buttom.length; i++) {
					buttom[i].style.background = '';
				}
			buttom[now].style.background = '#61b5ff';
		}
			//向左的点击运动
			prev.onclick = function(){
				now--;
				// 清除延时器
				move();
				clearInterval(timer)
				// 设置向左的延时运动
				timer = setInterval(function(){
					++now;
					move();
				},4000);
			};
			//向右的点击运动
			next.onclick= function(){
				now++;
				// 清除延时器
				move();
				clearInterval(timer);
				//设置向右的延时运动
				timer = setInterval(function(){
					++now;
					move();
				},4000);
			};
			//进入大图，暂停定时器
			outer.onmouseenter = function(){
			    clearInterval(timer);
			}
			//离开大图，启用定时器
			outer.onmouseleave = function(){
			    timer = setInterval(function(){
			        now++;
			        move();
			    },4000);
			}
			//给小图添加点击事件
			for(var m =0;m<buttom.length;m++){
			    buttom[m].index = m;
			    buttom[m].onclick = function(){
			        clearInterval(timer);
			        now = this.index;
			        move();
			        timer = setInterval(function(){
			            now++;
			            move();
			        },4000);
			    }
			}

		//封装获取标签的方法。
function $(selector){
    return document.querySelector(selector);
}