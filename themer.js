var themeCSS;
let themeName;
let cPicker = '#colorButton';
let cRgb = {
    r: '190',
    g: '78',
    b: '180'
};
let action;
let bgImage = 'https://mwittrien.github.io/BetterDiscordAddons/ThemesV2/BasicBackground/background.jpg';

$(document).ready(function () {
    addCp();
    genTheme();
});

function addCp() {
    $(cPicker).spectrum({
        appendTo: '#modal',
        move: function (color) {
            cRgb = color.toRgb();
            $(cPicker).css('background', color.toRgbString()) // #ff0000
        }
    });
}

function genTheme() {
    themeName = document.getElementById('themeName').value;
    bgImage = document.getElementById('imageLink').value;

    themeCSS = `//META{"name":"${themeName}","description":"Generated Automatically using Themer.js. Theme base made by DevilBro\","author":"themer, DevilBro","version":"1.0.4"}*//

@import url(https://mwittrien.github.io/BetterDiscordAddons/Themes/BasicBackground/BasicBackground.css);

:root {
	--transparencycolor: 0,0,0;		/* default: 0,0,0 */
	--transparencyalpha: 0.15;		/* default: 0.15 */
	--messagetransparency: 0.5;		/* default: 0.5 */
	--memberlistransparency: 0;		/* default: 0 (additional darkness for member list can be changed in case a bright background makes the list hard to read)*/
	--accentcolor:${cRgb.r},${cRgb.g},${cRgb.b}; 		/* default: 190,78,180 discord: 114,137,218 bd-blue: 58,113,193*/
	--background: url("${bgImage}"); /* replace the link in url() with your own direct image link to change the background */
	--backdrop: rgba(0,0,0,0.4);	/* default: rgba(0,0,0,0.4) can also be changed to an image like --background */
}`

}

function check(action) {

    genTheme()
    if (!(bgImage.startsWith('https:') && bgImage.match(/\.(jpeg|jpg|gif|png|webp)$/) != null)) {
        $('#warn').css('display', 'block')
        return;
    }
    $('#warn').css('display', 'none')
    var element = document.createElement('a');
    if (action.toString() == 'download') {
        element.setAttribute('href', "data:text/plain;charset=utf-8," + encodeURIComponent(themeCSS));
        element.setAttribute('download', `${themeName}.theme.css`);
        element.style.display = 'none';
    } else if (action.toString() == 'preview') {
        element.setAttribute('href', `./DiscordPreview.html?url=data:text/plain;charset=utf-8${encodeURI(themeCSS)}`);
        console.log(element);
        element.setAttribute('target', 'blank');
        element.style.display = 'none';

    }
    document.body.appendChild(element);
    element.click();

    document.body.removeChild(element);
}
