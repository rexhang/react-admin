/*
 * @Author: rexhang 
 * @Date: 2017-11-28 15:52:38 
 * @Last Modified by: rexhang
 * @Last Modified time: 2017-11-28 15:52:59
 */

const timer = 360;

const onNav = () => {
    // nav收缩展开
    $('.nav-item > a').on('click', function () {
        if (!$('.nav').hasClass('nav-mini')) {
            if ($(this).next().css('display') == "none") {
                // 其余全部收起
                $('.nav-item').children('ul').slideUp(timer);
                $('.nav-item > .icon-pos > .isicon-r').removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down');
                // 当前展开
                $(this).next('ul').slideDown(timer);
                $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
                $(this).parent('li').find('.icon-pos .isicon-r').removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up');
            } else {
                //收缩已展开
                $(this).next('ul').slideUp(timer);
                $('.nav-item.nav-show').removeClass('nav-show');
                $(this).parent('li').find('.icon-pos .isicon-r').removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down');
            }
        }
    });
    //nav-mini切换
    $('#mini > img').on('click', function () {
        var trueW = null;
        if (!$('.nav').hasClass('nav-mini')) {
            $('.nav-item.nav-show').removeClass('nav-show');
            $('.nav-item').children('ul').removeAttr('style');
            $('.nav').addClass('nav-mini');
            trueW = '60px';
        } else {
            $('.nav').removeClass('nav-mini');
            trueW = '220px';
        }
        console.log(trueW)
        $('.leftBar').css({
            'width': "60px"
        })
        $('.rightContent').css({
            'width': "calc(100% - " + trueW + ")"
        })

    });
}

const offNav = () => {
    $('.nav-item>a').off('click');
    $('#mini > img').off('click');
}

export default {
    init: onNav,
    uninit: offNav
}