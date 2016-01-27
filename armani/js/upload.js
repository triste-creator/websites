/**
 * Created by wucao on 2016/1/7.
 * http://xxgblog.com/
 */

$(document).ready(function() {

    $(".media-upload").click(function() {
        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            content: $(".easy-layer").html(),
            area: ['777px', '567px']
        });
    });

    $(document).on("click", ".easy-layer-close", function() {
        layer.closeAll();
    });
});