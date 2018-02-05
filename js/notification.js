$(document).ready(function(){
	$(".sub-button").click(function(){
		$("#noti").fadeIn(1000);
		$('#noti').delay(3000).fadeOut(1000);
		$('.subscribe').delay(3000).fadeOut(1000);
	});
});