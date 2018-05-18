var cssUrl, themeCSS;
window.onload = function () {
	cssUrl = getParameterByName('url');
	if (cssUrl.startsWith('https')) {
		var http = new XMLHttpRequest()

		http.open("GET", cssUrl, false)
		http.send();
		getCSSfromUrl(http.responseText);
	} else {
		themeCSS = cssUrl
	}
	previewTheme();
}

function previewTheme() {
	var discordPreview = document.getElementById('discordPreview');
	if (!discordPreview) {
		discordPreview = document.createElement('style');
		discordPreview.setAttribute('id', 'discordPreview');
		document.head.appendChild(discordPreview);
	}

	document.body.innerHTML = document.body.innerHTML.replace(new RegExp("REPLACE_USERNAMESMALL", "g"), 'Themer');
	document.body.innerHTML = document.body.innerHTML.replace(new RegExp("REPLACE_USERNAME", "g"), 'Themer');
	document.body.innerHTML = document.body.innerHTML.replace(new RegExp("REPLACE_USERID", "g"), '392498266161414144');
	document.body.innerHTML = document.body.innerHTML.replace(new RegExp("REPLACE_AVATAR", "g"), 'url(https://discordapp.com/assets/6debd47ed13483642cf09e832ed0bc1b.png)')
	document.body.innerHTML = document.body.innerHTML.replace(new RegExp("REPLACE_DISCRIMINATOR", "g"), '0000');

	document.body.firstElementChild.style.display = "flex";
	themeCSS = themeCSS.substring(themeCSS.indexOf("\n") + 1);
	discordPreview.innerHTML = themeCSS;
}

function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function reqListener() {
	var themeCSS = this.responseText;
}

function getCSSfromUrl(res) {
	themeCSS = res;
}