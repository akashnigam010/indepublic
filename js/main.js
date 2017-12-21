var text = {};
$(document).ready(function() {
	text = {
		title : {
			english : 'INDEPUBLIC',
			hindi : 'जनस्वराज'
		},
		subtitle : {
			english : 'people . power . progress',
			hindi : 'लोग . शक्ति . प्रगति'
		},
		section1 : {
			english : 'Where people and the leaders come together',
			hindi : 'जहाँ जनता एवं नेता एक साथ चलते हैं'
		}
	}
});

function toHindi() {
	$("#mtitle").addClass('tempFontSize');
	$("#mtitle").html(text.title.hindi);
	$("#mSubtitle").html(text.subtitle.hindi);
	$("#mSection1").html(text.section1.hindi);
}

function toEnglish() {
	$("#mtitle").removeClass('tempFontSize');
	$("#mtitle").html(text.title.english);
	$("#mSubtitle").html(text.subtitle.english);
	$("#mSection1").html(text.section1.english);
}