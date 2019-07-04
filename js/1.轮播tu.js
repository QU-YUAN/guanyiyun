// 获取运动的图片
// var img = document.querySelector('.q-middle4-middle');  //1080
var outer= document.querySelector('.q-middle4-middle-outer');//4320
var tup =document.querySelectorAll('.tup');
//360
// 获取左右点击的点
var prev = document.querySelector('.q-middle4-btu1');
var next = document.querySelector('.q-middle4-btu2');
// 获取圆点
// var li = $('.num')[0];
var buttom=$('.num').getElementsByTagName("a");
    // outer.innerHTML =  outer.innerHTML + outer.innerHTML;
    // li.innerHTML =  li.innerHTML + li.innerHTML;
    // outer.style.width = outer.offsetWidth*2 + 'px';
    var now = 0;
    var timer = setInterval(function(){
        now++;
        move();
    },1000);
    buttom[0].style.background = '#61b5ff';


    function move(){
        //修正向右运动的时候超出范围
        if(now==tup.length){
            now =0;
            outer.style.left =0;
        }else if(now==-1){////修正向左运动的时候超出范围
            now = 1;
            var left =  -1*(parseInt(tup[0].offsetWidth))*(now);  //大图向右移动3个小图向右移动1个
            outer.style.left = left+'px';
        }else if(now<tup.length && now>0){//设置正常运动时小图的运动
            var left = -1*(parseInt(tup[0].offsetWidth))*(now);
            outer.style.left = left+'px';
        }
        if (now==0) {
            outer.style.left='0px';
        }
    // 背景色的改变
        for (var i = 0; i < buttom.length; i++) {
            buttom[i].style.background = '';
        }
        buttom[now].style.background = '#61b5ff';
    }



            //向左的点击运动
            prev.onclick = function(){
                now--;
                move();
                clearInterval(timer);
                // 设置向左的延时运动
                timer = setInterval(function(){
                    now++;
                    move();
                },1000);
            };
            //向右的点击运动
            next.onclick= function(){
                now++;
                move();
                clearInterval(timer);
                // 设置向左的延时运动
                timer = setInterval(function(){
                    now++;
                    move();
                },1000);
            };
            //给小图添加点击事件





        //封装获取标签的方法。
function $(selector){
    return document.querySelector(selector);
}