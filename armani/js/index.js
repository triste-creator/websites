/**
 * Created by wucao on 2016/1/7.
 * http://xxgblog.com/
 */

$(document).ready(function() {

    // 轮播图
    $('.index-slider ul').bxSlider({
        controls: false,
        auto: true,
        buildPager: function() {
            return '';
        }
    });

    // tab切换
    $(".index-news-header-tab span").hover(function() {
        $(".index-news-header-tab span").removeClass("index-news-header-tab-active");
        $(this).addClass("index-news-header-tab-active");
        var index = $(".index-news-header-tab span").index($(this));
        $(".index-news-main>div").hide();
        $(".index-news-main>div").eq(index).show();
    });

});