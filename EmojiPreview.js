var emUrl, emId ,emExt;
window.onload = function () {
	emUrl = getParameterByName('em');
	if(!emUrl)return;
	// console.log(emUrl.startsWith('https'));
	if (emUrl.startsWith('https')) {
		emExt = emUrl.replace(new RegExp('.*\\\/emojis\\\/(.*)(\\.png|\\.gif)(\\?v=\\d)?','g'),'$2');
		emId = emUrl.replace(new RegExp('.*\\\/emojis\\\/(.*)(\\.png|\\.gif)(\\?v=\\d)?','g'),'$1');
	} else {

		emExt = getParameterByName('gif') ? '.gif' : '.png';
		emId = getParameterByName('em');
	}
	// console.log('ext = ' + emExt + '\n' + 'id =' + emId + '\n'+ emUrl);
	previewEmoji();
}

function previewEmoji() {
	let emojiPreview = document.getElementById('emojiImg');
	emojiPreview.content = `https://cdn.discordapp.com/emojis/${emId}${emExt}?v=1`

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
	// var themeCSS = this.responseTemExt;
}

function getCSSfromUrl(res) {
	// themeCSS = res;
}