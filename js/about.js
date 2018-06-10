var text = {};
$(document).ready(function() {
	text = {
		title : {
			english : 'ABOUT',
			hindi : 'परिचय'
		},
		heading1 : {
			english : 'INFORMATION',
			hindi : 'जानकारी'
		},
		info1 : {
			english : 'Indepublic is the answer to your curiosity about all political and social happenings around you.',
			hindi : 'जनस्वराज आपको राजनैतिक एवं सामाजिक गतिविधियों से अवगत कराने हेतु एक सक्रिय मंच है।'
		},
		info2 : {
			english : 'It helps in discovering the vision, political career, work, agenda and public ' +
					  'life of the political leaders, workers and other members of your society, circle, city or state.',
			hindi : 'यह आपके शहर एवं राज्य के नेताओं, प्रतिनिधियों एवं समाज के अन्य सदस्यों के दृष्टिकोण, ' +
					'राजनैतिक आजीविका, कार्य एवं सार्वजनिक जीवन की जानकारी प्रदान करने मे सहायक है।'
		},
		info3 : {
			english : 'Follow the public life of your representatives and keep yourself updated with the public works ' +
					  'being undertaken or new issues being raised around you.',
			hindi : 'अपने प्रतिनिधियों के सार्वजनिक जीवन का अनुसरण करें एवं स्वयम को सामाजिक कार्यों तथा ' +
					'अपने परिवेश मे पहल किए गए नए मुद्दों से अवगत करें।'
		},
		heading2 : {
			english : 'CONNECT',
			hindi : 'संपर्क'
		},
		connect1 : {
			english : 'Indepublic is designed to connect more people and bring a positive change.',
			hindi : 'जनस्वराज की रचना अधिक से अधिक लोगों से जुड़ने एवं सकारात्मक परिवर्तन लाने के लिए की गयी है।'
		},
		connect2 : {
			english : 'It brings you closer to the people who can help in resolving a problem in your society ' +
					  'or a public concern around you.',
			hindi : 'यह आपको उन लोगों के समीप लाता है जो आपके समाज की या अन्य ' +
					'सार्वजनिक समस्याओं को हल करने में आपकी सहायता कर सकते हैं।'
		},
		connect3 : {
			english : 'Raise an issue on Indepublic and get help from circle representatives, leaders, ' +
					  'public workers and other members of your society.',
			hindi : 'जनस्वराज पर मुद्दा उठाएं और मंडल के प्रतिनिधियों, नेताओं, सार्वजनिक श्रमिकों ' +
					'और अपने समुदाय के अन्य सदस्यों से सहायता प्राप्त करें।'
		},
		heading3 : {
			english : 'LEADERSHIP',
			hindi : 'नेतृत्व'
		},
		lead1 : {
			english : 'Indepublic provides you the platform to lead.',
			hindi : 'जनस्वराज आपको नेतृत्व करने के लिए मंच प्रदान करता है'
		},
		lead2 : {
			english : 'Showcase your public work, political aspirations and vision and let more people reach you.',
			hindi : 'अपने दृष्टिकोण, सार्वजनिक कार्य, राजनैतिक आकांक्षाओं को प्रदर्शित करें और जन-जन तक पहुचाएं।'
		},
		lead3 : {
			english : 'Take up the lead, help in resolving the issues posted by people in your area, team up ' +
					  'with others and work towards a better future.',
			hindi : 'स्वयम आगे बढ़ कर पहल करे, अपने क्षेत्र के लोगों द्वारा पोस्ट किए गए मुद्दों को हल करने में सहायता '+ 
					'करें एवं अन्य सदस्यों से जुड़कर बेहतर भविष्य की दिशा में काम करें।'
		}
	};

	if (getCookie('lang') === 'hindi') {
		toHindi();
	}
});

function toHindi() {
	setCookie('lang', 'hindi', 365);
	$("#mtitle").html(text.title.hindi);
	$("#heading1").html(text.heading1.hindi);
	$("#info1").html(text.info1.hindi);
	$("#info2").html(text.info2.hindi);
	$("#info3").html(text.info3.hindi);
	$("#heading2").html(text.heading2.hindi);
	$("#connect1").html(text.connect1.hindi);
	$("#connect2").html(text.connect2.hindi);
	$("#connect3").html(text.connect3.hindi);
	$("#heading3").html(text.heading3.hindi);
	$("#lead1").html(text.lead1.hindi);
	$("#lead2").html(text.lead2.hindi);
	$("#lead3").html(text.lead3.hindi);
	toHindiCommon();
}

function toEnglish() {
	setCookie('lang', 'english', 365);
	$("#mtitle").html(text.title.english);
	$("#heading1").html(text.heading1.english);
	$("#info1").html(text.info1.english);
	$("#info2").html(text.info2.english);
	$("#info3").html(text.info3.english);
	$("#heading2").html(text.heading2.english);
	$("#connect1").html(text.connect1.english);
	$("#connect2").html(text.connect2.english);
	$("#connect3").html(text.connect3.english);
	$("#heading3").html(text.heading3.english);
	$("#lead1").html(text.lead1.english);
	$("#lead2").html(text.lead2.english);
	$("#lead3").html(text.lead3.english);
	toEnglishCommon();
}