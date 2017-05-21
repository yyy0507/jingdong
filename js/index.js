$(function () {
    var login = document.getElementById("login");
    var mask = document.getElementById("mask");
    var box = document.getElementById("box");
    login.onclick = function () {
        // 当我们点击登录，会弹出灰色的大盒子和白色的小盒子
        mask.style.display = "block";
        box.style.display = "block";
    }
    // 事件源 span x
    var close_all = document.getElementById("close_all");
    close_all.onclick = function () {
        mask.style.display = 'none';
        box.style.display = "none";
    }
})

$(function(){
        var oxx = document.getElementById("xx");
        var obanner =document.getElementById("top-banner");
        var otext = document.getElementById("textt");
        oxx.onmousedown = function () {
            obanner.style.display = "none";
        }
        otext.onmousedown = function () {
            otext.value = "";
            otext.style.color = "rgb(51,51,51)";
        };
    })
$(function () {

    //手动控制轮播图
    $('#one li').eq(0).show();

    $('#two li').mouseover(function(){
        $(this).addClass('on').siblings().removeClass('on');
        var index=$(this).index();
        i=index;
        $('#one li').eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
    })
    //自动播放
    var i=0;
    var t=setInterval(move,1500);
    //自动播放核心函数
    function move(){
        i++;
        if(i==5){
            i=0;
        }
        $('#two li').eq(i).addClass('on').siblings().removeClass('on');
        $('#one li').eq(i).fadeIn(300).siblings().fadeOut(300);
    }

    //向右播放核心函数
    function moveL(){
        i--;
        if(i==-1){
            i=4;
        }
        $('#two li').eq(i).addClass('on').siblings().removeClass('on');
        $('#one li').eq(i).fadeIn(300).siblings().fadeOut(300);
    }
    $('#left').click(function(){
        moveL();
    })
    $('#right').click(function(){
        move();
    })
    //鼠标移入移除
    $('#lunbo').hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,1500);
    })

})