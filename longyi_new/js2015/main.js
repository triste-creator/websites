$(function() {
	
	// 主菜单
	$("#main-top-menu li:lt(4),#main-top-menu li:gt(4),#main-second-menu").hover(function() {
		$("#main-second-menu").show();
	}, function() {
		$("#main-second-menu").hide();
	});
	
	// 本周活动
	var actAjaxUrl = "http://ly.kongzhong.com/json/calendar/calendar.json";
	$.ajax({
		cache : false,
		url : actAjaxUrl,
		type : "get",
		dataType : "json",
		success : function(data) {
			for(i in data.lists) {
				var start = new Date(data.lists[i].startTime.replace(/-/g, "/")).getTime();
				var end = new Date(data.lists[i].endTime.replace(/-/g, "/")).getTime() + 1000 * 60 * 60 * 24;
				
				var everyday = new Date();
				var day = everyday.getDay();
				everyday.setDate(everyday.getDate() - day - 1);
				for(var d = 0; d < 7; d++) {
					everyday.setDate(everyday.getDate() + 1);
					if(everyday.getTime() >= start && everyday.getTime() < end) {
						if(new Date().getTime() >= end) {
							$(".main-center-left-acts-list").eq(d).append("<li><span class=\"main-center-left-act-end\">已结束</span>● <a href=\"" + data.lists[i].link + "\" target=\"_blank\" title=\"" + data.lists[i].title + "\">" + data.lists[i].title + "</a></li>");
						} else if(new Date().getTime() < start) {
							$(".main-center-left-acts-list").eq(d).append("<li><span class=\"main-center-left-act-end\">未开始</span>● <a href=\"" + data.lists[i].link + "\" target=\"_blank\" title=\"" + data.lists[i].title + "\">" + data.lists[i].title + "</a></li>");
						} else {
							$(".main-center-left-acts-list").eq(d).append("<li><span>进行中</span>● <a href=\"" + data.lists[i].link + "\" target=\"_blank\" title=\"" + data.lists[i].title + "\">" + data.lists[i].title + "</a></li>");
						}
					}
				}
			}
			$(".main-center-left-acts-list").mCustomScrollbar();
			$("#main-center-left-acts-days li").click(function() {
				$("#main-center-left-acts-days li").removeClass("main-center-left-acts-days-selected");
				$(this).addClass("main-center-left-acts-days-selected");
				$(".main-center-left-acts-list").hide();
				$(".main-center-left-acts-list").eq($("#main-center-left-acts-days li").index(this)).show();
			});
			$("#main-center-left-acts-days li").eq(new Date().getDay()).click();
		}
	});
	
});