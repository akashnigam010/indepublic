var text = {};
$(document).ready(function() {
	text = {
		title : {
			english : 'PRIVACY POLICY',
			hindi : 'प्रच्छन्नता नीति'
		}
	};

	if (getCookie('lang') === 'hindi') {
		toHindi();
	}
});

function toHindi() {
	setCookie('lang', 'hindi', 365);
	$("#mtitle").html(text.title.hindi);
	toHindiCommon();
}

function toEnglish() {
	setCookie('lang', 'english', 365);
	$("#mtitle").html(text.title.english);
	toEnglishCommon();
}