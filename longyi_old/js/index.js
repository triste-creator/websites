/**
 * author:Œ‚≤ŸXXG
 * date:2015-02-27
 */
$(document).ready(function() {
	$('.bxslider').bxSlider({
		auto: true
	});
	
	$(".index-article-type li").click(function() {
		if(!$(this).hasClass("index-article-more") 
				&& !$(this).hasClass("index-article-type-selected")) {
			$(".index-article-type li").removeClass("index-article-type-selected");
			$(this).addClass("index-article-type-selected");
			$(".index-article-main ul").hide();
			$(".index-article-type-" + $(this).attr("data-type")).show();
		}
	});
	
	$(".index-feature a").hover(function() {
		var index = $(".index-feature a").index($(this));
		$(".index-feature").css("background-position", "0px -" + (index * 251) + "px");
	});
});