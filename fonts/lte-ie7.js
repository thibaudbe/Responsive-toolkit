/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-mobile' : '&#xe000;',
			'icon-tablet' : '&#xe001;',
			'icon-mobile-2' : '&#xe002;',
			'icon-laptop' : '&#xe003;',
			'icon-screen' : '&#xe004;',
			'icon-android' : '&#xe005;',
			'icon-apple' : '&#xe006;',
			'icon-windows8' : '&#xe007;',
			'icon-cog' : '&#xe009;',
			'icon-settings' : '&#xe008;',
			'icon-info' : '&#xe00a;',
			'icon-help' : '&#xe00b;',
			'icon-lifebuoy' : '&#xe00c;',
			'icon-menu' : '&#xe00d;',
			'icon-resize-shrink' : '&#xe00f;',
			'icon-resize-enlarge' : '&#xe010;',
			'icon-link' : '&#xe011;',
			'icon-browser' : '&#xe012;',
			'icon-chrome' : '&#xe013;',
			'icon-firefox' : '&#xe014;',
			'icon-IE' : '&#xe015;',
			'icon-opera' : '&#xe016;',
			'icon-safari' : '&#xe017;',
			'icon-landscape' : '&#xe018;',
			'icon-document' : '&#xe019;',
			'icon-heart' : '&#xe01a;',
			'icon-screen-2' : '&#xe01c;',
			'icon-hourglass' : '&#xe01d;',
			'icon-mail' : '&#xe01e;',
			'icon-books' : '&#xe01f;',
			'icon-bookmark' : '&#xe020;',
			'icon-share' : '&#xe021;',
			'icon-facebook' : '&#xe023;',
			'icon-googleplus' : '&#xe024;',
			'icon-droplet' : '&#xe01b;',
			'icon-github' : '&#xe026;',
			'icon-finder' : '&#xe027;',
			'icon-twitter' : '&#xe028;',
			'icon-dribbble' : '&#xe022;',
			'icon-ccw' : '&#xe025;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};