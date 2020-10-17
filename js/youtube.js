var url;
var urlCut;
var urlEnd;
var iframe;

function ok(){
	url = document.getElementById('urlText').value;
	urlCut = 'https://www.youtube.com/embed/';
	urlEnd = '';

	for (var i = 0; i <= url.length; i++) {
		if (url[i] != urlCut[i]) {
			urlEnd += url[i];
		}
	}

	iframe = document.getElementById('video');

	changeUrl();
}

function search(){
	url = document.getElementById('searchText').value;
	urlCut = 'https://www.youtube.com/embed/results?search_query=';

	// Cibles
	result1 = '/ytd-video-renderer.ytd-item-section-renderer:nth-child(1).src';
	result2 = '/ytd-video-renderer.ytd-item-section-renderer:nth-child(2)';
	result3 = '/ytd-video-renderer.ytd-item-section-renderer:nth-child(3)';

	// Application des liens
	document.getElementById('r1').src = urlCut + url + result1;
	document.getElementById('r2').src = urlCut + url + result2;
	document.getElementById('r3').src = urlCut + url + result3;

	// Console
	console.log(urlCut + url + result1);
}

function changeUrl(){
	reload();
}

function reload() {
    iframe.src = urlCut + urlEnd;

    console.log('URL ' + iframe.id + ' : ' + iframe.src);
}

// ytd-video-renderer.ytd-item-section-renderer:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(1) > a:nth-child(2)