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
	};

	if (getCookie('lang') === 'hindi') {
		toHindi();
	}
});

function toHindi() {
	setCookie('lang', 'hindi', 365);
	$("#mtitle").addClass('tempFontSize');
	$("#mtitle").html(text.title.hindi);
	$("#mSubtitle").html(text.subtitle.hindi);
	$("#mSection1").html(text.section1.hindi);
}

function toEnglish() {
	setCookie('lang', 'english', 365);
	$("#mtitle").removeClass('tempFontSize');
	$("#mtitle").html(text.title.english);
	$("#mSubtitle").html(text.subtitle.english);
	$("#mSection1").html(text.section1.english);
}

function subscribe() {
    var email = $("#subscribeMail").val();
    if (!validateEmail(email)) {
        $(".subscriptionError").html("Please check your email");
        $(".subscriptionError").attr('style', 'color: red;')
        $(".subscriptionError").removeClass('hide');
    } else {
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
	        	  if (response.status) {
	            	  $("#subscribeMail").val('');
	            	  $(".subscriptionError").html("Thank you!");
	                  $(".subscriptionError").attr('style', 'color: green;')
	                  $(".subscriptionError").removeClass('hide');
	              } else {
	                  $(".subscriptionError").html("Something went wrong. Please refresh the page and try again");
	              }                       
	          });
    }
}