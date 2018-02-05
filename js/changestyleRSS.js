window.onload = function() {
	changestyleRSS();
};

function changestyleRSS() {
	document.getElementsByClassName("rssincl-content")[0].classList.add("news-content");
	for(var i=0; i<3; i++) {
		document.getElementsByClassName("rssincl-entry")[i].classList.add("news-item");
		document.getElementsByClassName("rssincl-itemdate")[i].classList.add("date");
		document.getElementsByClassName("rssincl-itemtitle")[i].classList.add("news");
	}

}