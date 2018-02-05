$(document).on("scroll", function () {
	var pageTop = $(document).scrollTop();
	var pageBottom = pageTop + $(window).height();
	var tags = $(".section");

	for (var i=0; i<tags.length; i++) {
		var tag = tags[i];
		$(tag).addClass("section-visible");
		if ($(tag).position().top < pageBottom) { 
			$(tag).addClass("section-visible");
		} else {
			$(tag).removeClass("section-visible");
		}
	}
})