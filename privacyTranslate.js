var text = {};
$(document).ready(function() {
	text = {
		title : {
			english : 'PRIVACY POLICY',
			hindi : 'प्रच्छन्नता नीति'
		},
		lastUpdate : {
			english : 'Last updated on 25th December, 2017',
			hindi : '25 दिसंबर, 2017 को अंतिम बार अपडेट'
		},
		section1 : {
			english : 'Indepublic is a subsidiary of Bananaa Internet Private Limited ( hereby referred to as "Indepublic", "Bananaa", the ' +
					  '"Company", "we", "us" and "our"). We respect your privacy and are committed to protecting it through our compliance ' + 
					  'with this privacy policy. This policy describes:',
			hindi : 'जनस्वराज या Indepublic - Bananaa Internet Private Limited की सहायक कंपनी है (इसे "जनस्वराज", "Indepublic", ' +
					'"कंपनी", "हम", "हमें" और "हमारा" के जरिए संदर्भित किया गया है)। हम आपकी गोपनीयता का सम्मान करते हैं और हमारे ' +
					'अनुपालन के माध्यम से इसे सुरक्षित रखने के लिए प्रतिबद्ध हैं। यह पॉलिसी है : '
		},
		li1 : {
			english : 'The information we collect from you when you use our website, application and online services (collectively called our ' +
					  '"Services") and,',
			hindi : 'हमारी वेबसाइट, एप्लिकेशन और ऑनलाइन सेवाओं का उपयोग करते समय हम आपके द्वारा एकत्र की जाने वाली जानकारी ' +
					'(सामूहिक रूप से हमारी "सेवाएं") और,'
		},
		li2 : {
			english : 'How we collect, maintain, protect and disclose that information',
			hindi : 'हम यह जानकारी कैसे एकत्र करते हैं, रखरखाव करते हैं तथा रक्षा करते हैं'
		},
		p1 : {
			english : 'This policy DOES NOT apply to information that you provide to, or that is collected by, any third-party. We encourage you ' +
					  'to consult directly with such third-parties about their privacy practices.',
			hindi : 'यह नीति आपके द्वारा प्रदान की जाने वाली जानकारी, या किसी तीसरे पक्ष द्वारा एकत्रित की गई जानकारी पर लागू ' +
					'नहीं होती है। हम आपको अपने गोपनीयता प्रथाओं के बारे में ऐसे तृतीय-पक्षों के साथ सीधे सलाह लेने के लिए प्रोत्साहित करते हैं'
		},
		p2 : {
			english : 'Please read this policy carefully to understand our policies and practices regarding your information and how we will treat ' +
					  'it. If you do not agree with our policies and practices, your choice is not to use our Services. By accessing or using our ' +
					  'Services, you agree to this privacy policy. This policy may change from time to time, your continued use of our Services after ' +
					  'we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates.',
			hindi : 'कृपया हमारी नीतियों और प्रथाओं को समझने के लिए इस नीति को ध्यान से पढ़ें। यदि आप हमारी नीतियों और प्रथाओं से सहमत ' +
					'नहीं हैं, तो आपकी पसंद हमारी सेवाओं का उपयोग नहीं करना है हमारी सेवाओं तक पहुंचने या उपयोग करने से, आप इस गोपनीयता ' +
					'नीति से सहमत होते हैं। यह नीति समय-समय पर बदल सकती है, परिवर्तन करने के बाद हमारी सेवाओं के आपके निरंतर उपयोग को उन ' +
					'परिवर्तनों की स्वीकृति माना जाता है, इसलिए कृपया अपडेट के लिए नीति को समय-समय पर जांचें।'
		}
	};

	if (getCookie('lang') === 'hindi') {
		toHindi();
	}
});

function toHindi() {
	setCookie('lang', 'hindi', 365);
	$("#mtitle").html(text.title.hindi);
	// $("#lastUpdate").html(text.lastUpdate.hindi);
	// $("#section1").html(text.section1.hindi);
	// $("#li1").html(text.li1.hindi);
	// $("#li2").html(text.li2.hindi);
	// $("#p1").html(text.p1.hindi);
	// $("#p2").html(text.p2.hindi);
	toHindiCommon();
}

function toEnglish() {
	setCookie('lang', 'english', 365);
	$("#mtitle").html(text.title.english);
	// $("#lastUpdate").html(text.lastUpdate.english);
	// $("#section1").html(text.section1.english);
	// $("#li1").html(text.li1.english);
	// $("#li2").html(text.li2.english);
	// $("#p1").html(text.p1.english);
	// $("#p2").html(text.p2.english);
	toEnglishCommon();
}