var text = {};
$(document).ready(function() {
	text = {
		title : {
			english : 'ABOUT',
			hindi : 'परिचय'
		},
		section1 : {
			english : 'Where people and the leaders come together',
			hindi : 'जहाँ जनता एवं नेता एक साथ चलते हैं'
		}
	};

	if (getCookie('lang') === 'hindi') {
		toHindi();
	}
});

function toHindi() {
	setCookie('lang', 'hindi', 365);
	$("#mtitle").html(text.title.hindi);
}

function toEnglish() {
	setCookie('lang', 'english', 365);
	$("#mtitle").html(text.title.english);
}