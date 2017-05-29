/**
 * Created by yunxiao on 2017/5/12.
 */

function Center() {
    var screenWidth = window.innerWidth;                                           //获取浏览器显示范围宽度
    var screenHeight = window.innerHeight;                                         //获取浏览器显示范围高度
    $('.contrl-botton').css({
        left: screenWidth / 2 - 135,
        top: screenHeight - 100
    });

    $('.hero.center').css({                                                         //居中显示带有center类名的元素
        left: screenWidth / 2 - 120,
        top: screenHeight / 2 - 150,
        transform:"rotateX(0deg)"
    });
}

$(function () {
    Center();
});

var screenWidth = window.innerWidth;                                           //获取浏览器显示范围宽度
var screenHeight = window.innerHeight;                                         //获取浏览器显示范围高度

$(function () {
    $('.wutai').css({
        width: screenWidth,
        height: screenHeight
    });

    $('.hero').each(function () {
        $(this).css({
            left: screenWidth / 2 - 120,
            top: screenHeight / 2 - 150,
            transform: 'rotate(0deg)'
        });
    });

    $('.contrl-botton').css({
        left: screenWidth / 2 - 135,
        top: screenHeight - 100
    }).hide()
});

/*图片初始化排布函数*/

function Change() {
    $('.hero:not(.center)').each(function () {
        var screenWidth = window.innerWidth;                                           //获取浏览器显示范围宽度
        var screenHeight = window.innerHeight;
        var imgLeftL = (screenWidth / 2 - 390) * Math.random();
        var imgLeftR = (screenWidth / 2 - 390) * Math.random() + screenWidth / 2 + 130;  //计算非中心图片可显示区域
        var imgTop = (screenHeight - 140) * Math.random() - 70;
        var imgTrans = (30 - Math.random() * 60) + 'deg';

        if ((imgTop < ( screenHeight / 2 - 420 )) || (imgTop > (screenHeight / 2 + 180))) {
            $(this).css({
                left: screenWidth * Math.random(),
                top: imgTop,
                transform: "rotateX(" + imgTrans + ")"
            })
        } else {
            $(this).css({
                left: (Math.random() > 0.5 ) ? imgLeftL : imgLeftR,
                top: imgTop,
                transform: "rotate(" + imgTrans + ")"
            })
        }
        Center();
    })
}


/*3.点击图片后随机分布*/

$(function () {
    var i = true;
    var images = $('.img');
    var heros = $('.hero');                                                                    //设置变量监视图片正反面
    $(heros).add(images).on('click', function () {
        if (!$(this).hasClass('center')) {
            if (i === false) {
                var $this1 = $('.hero.center');
                $this1.children('.back').css({
                    transform: "rotateY(180deg)"
                });
                $this1.children('.front').css({
                    transform: "rotateY(0deg)"
                });
                $('.img.center').css({
                    transform: "rotateY(0)"
                });
            }
            var $this = $('.center');
            var num = $(this).index();                                    //鼠标点击为中心图片则翻转，不是则重新排布图片位置并居中被点击图片
            $this.removeClass('center');
            $(heros[num]).addClass('center');
            $(images[num]).addClass('center');
            $('.contrl-botton').fadeIn(600);

            i=true;
            Change();

        } else {                                                           //剧终图片循环反转
            var $this2 = $('.hero.center');
            if (i === true) {
                $this2.children('.front').css({
                    transform: "rotateY(180deg)"
                });
                $this2.children('.back').css({
                    transform: "rotateY(0deg)"
                });
                $('.img.center').css({
                    transform: "rotateY(180deg)"
                });
                i = false;
            } else {
                $this2.children('.back').css({
                    transform: "rotateY(-180deg)"
                });
                $this2.children('.front').css({
                    transform: "rotateY(0deg)"
                });
                $('.img.center').css({
                    transform: "rotateY(0deg)"
                });
                i = true;
            }
        }
    })
});

