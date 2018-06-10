var text = {};
var lang = 'english';
$(document).ready(function() {
	text = {
		title : {
			english : 'INDEPUBLIC',
			hindi : 'जनस्वराज'
		},
		subtitle : {
			english : 'people . power . progress',
			hindi : 'जन . शक्ति . प्रगति'
		},
		mAbout : {
			english : 'About',
			hindi : 'परिचय'
		},
		mContact : {
			english : 'Contact',
			hindi : 'संपर्क'
		},
		section1 : {
			english : 'Where people and the leaders come together',
			hindi : 'जन एवं प्रतिनिधियों की एकजुटता'
		},
		heading1 : {
			english : 'All your information need',
			hindi : 'समस्त आवश्यक जानकारी'
		},
		feature1 : {
			english : 'Discover and follow the vision, political career, work, '+
					  'agenda and public life of the political leaders, workers and other members of your society, circle, city or state.',
			hindi : 'अपने शहर एवं राज्य के नेताओं, प्रतिनिधियों एवं समाज के अन्य सदस्यों के दृष्टिकोण, राजनैतिक आजीविका, ' +
					'कार्य एवं सार्वजनिक जीवन की जानकारी पाएं तथा उसका अनुसरण करें'
		},
		heading2 : {
			english : 'Connect with more people',
			hindi : 'अधिक लोगों के साथ जुड़ें'
		},
		feature2 : {
			english : 'Raise societal and public concerns on Indepublic and get help from circle representatives, leaders and public workers around you.',
			hindi : 'जनस्वराज पर सामाजिक और सार्वजनिक मुद्यों को उठाएं एवं अपने आसपास के मंडल के प्रतिनिधियों, नेताओं और सार्वजनिक श्रमिकों से सहायता पाएं'
		},
		heading3 : {
			english : 'Be a leader',
			hindi : 'स्वयम नेतृत्व करें'
		},
		feature3 : {
			english : 'Showcase your public work, political aspirations and vision and let more people reach you.',
			hindi : 'अपने दृष्टिकोण, सार्वजनिक कार्य, राजनैतिक आकांक्षाओं को प्रदर्शित करें और जन-जन तक पहुचाएं'
		},
		mReadMore : {
			english : 'LEARN MORE',
			hindi : 'और अधिक जानें'
		},
		mSubscribe : {
			english : 'Subscribe for the latest updates',
			hindi : 'नवीनतम अपडेट के लिए सदस्यता लें'
		},
		mEmailError : {
			english : 'Please check your email',
			hindi : 'कृपया अपना सही ईमेल दर्ज करें'
		},
		mThankYou : {
			english : 'Thank You!',
			hindi : 'धन्यवाद'
		},
		mPlaceholder : {
			english : 'Enter your email',
			hindi : 'अपना ईमेल दर्ज करें'
		},
		mSubscribeButton : {
			english : 'SUBSCRIBE',
			hindi : 'सदस्य बनें'
		}
	};

	if (getCookie('lang') === 'hindi') {
		lang = 'hindi';
		toHindi();
	}
});

function toHindi() {
	lang = 'hindi';
	setCookie('lang', 'hindi', 365);
	$("#mtitle").addClass('tempFontSize');
	$("#mtitle").html(text.title.hindi);
	$("#mSubtitle").html(text.subtitle.hindi);
	$("#mAbout").html(text.mAbout.hindi);
	$("#mContact").html(text.mContact.hindi);
	$("#mSection1").html(text.section1.hindi);
	$("#heading1").html(text.heading1.hindi);
	$("#feature1").html(text.feature1.hindi);
	$("#heading2").html(text.heading2.hindi);
	$("#feature2").html(text.feature2.hindi);
	$("#heading3").html(text.heading3.hindi);
	$("#feature3").html(text.feature3.hindi);
	$("#mReadMore").html(text.mReadMore.hindi);
	$("#mSubscribe").html(text.mSubscribe.hindi);
	$("#subscribeMail").attr('placeholder', text.mPlaceholder.hindi);
	$("#mSubscribeButton").html(text.mSubscribeButton.hindi);
	toHindiCommon();
}

function toEnglish() {
	lang = 'english';
	setCookie('lang', 'english', 365);
	$("#mtitle").removeClass('tempFontSize');
	$("#mtitle").html(text.title.english);
	$("#mSubtitle").html(text.subtitle.english);
	$("#mAbout").html(text.mAbout.english);
	$("#mContact").html(text.mContact.english);
	$("#mSection1").html(text.section1.english);
	$("#heading1").html(text.heading1.english);
	$("#feature1").html(text.feature1.english);
	$("#heading2").html(text.heading2.english);
	$("#feature2").html(text.feature2.english);
	$("#heading3").html(text.heading3.english);
	$("#feature3").html(text.feature3.english);
	$("#mReadMore").html(text.mReadMore.english);
	$("#mSubscribe").html(text.mSubscribe.english);
	$("#subscribeMail").attr('placeholder', text.mPlaceholder.english);
	$("#mSubscribeButton").html(text.mSubscribeButton.english);
	toEnglishCommon();
}

function subscribe() {
    var email = $("#subscribeMail").val();
    if (!validateEmail(email)) {
        $(".subscriptionError").html(lang === 'english' ? text.mEmailError.english : text.mEmailError.hindi);
        $(".subscriptionError").attr('style', 'color: red;')
        $(".subscriptionError").removeClass('hide');
    } else {
    	$(".subscriptionError").addClass('hide');
    	$("#loader").removeClass('hide');
    	var dataOb = {
	        email : email
	    };
	    $.ajax({
	          method: "POST",
	          url: "/subscribe",
	          contentType : "application/json",
	          data: JSON.stringify(dataOb)
	        })
	          .done(function(response) {
	          	  $("#loader").addClass('hide');
	        	  if (response.status) {
	            	  $("#subscribeMail").val('');
	            	  $(".subscriptionError").html(lang === 'english' ? text.mThankYou.english : text.mThankYou.hindi);
	                  $(".subscriptionError").attr('style', 'color: green;')
	                  $(".subscriptionError").removeClass('hide');
	              } else {
	                  $(".subscriptionError").html("Something went wrong. Please refresh the page and try again");
	              }                       
	          });
    }
}