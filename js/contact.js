var text = {};
$(document).ready(function() {
	text = {
		title : {
			english : 'CONTACT',
			hindi : 'संपर्क'
		},
		callus : {
			english : 'Call us at 9999200758',
			hindi : 'हमें 9999200758 पर फोन करें'
		},
        submitquery : {
            english : 'Or submit your query below',
            hindi : 'या नीचे अपना संदेश भेजें'        
        },
        name : {
            english : 'Name',
            hindi : 'आपका नाम'
        },
        errorLabelName : {
            english : 'Please enter your name',
            hindi : 'अपना नाम दर्ज करें'
        },
        phone : {
            english : 'Phone',
            hindi : 'आपका फ़ोन'
        },
        email : {
            english : 'Email',
            hindi : 'आपका ईमेल'
        },
        errorLabelEmail : {
            english : 'Please check your email',
            hindi : 'कृपया अपना सही ईमेल दर्ज करें'
        },
        message : {
            english : 'Message',
            hindi : 'आपका संदेश'
        },
        errorLabelMessage : {
            english : 'Please enter your message',
            hindi : 'कृपया अपना संदेश लिखें'
        },
        sendMessage : {
            english : 'Send Message',
            hindi : 'संदेश भेजें'
        },
        successLabelMessage : {
            english : 'Thank you for your message. We will get back to you shortly!',
            hindi : 'आपके संदेश के लिए धन्यवाद। हम जल्द ही आप तक वापस आएंगे!'
        },
        errorLabelMessageMain : {
            english : 'Something went wrong. Please refresh the page and try again.',
            hindi : 'पृष्ठ को रीफ्रेश करें और पुन: प्रयास करें।'
        }
	};

	if (getCookie('lang') === 'hindi') {
		toHindi();
	}
});

function toHindi() {
	setCookie('lang', 'hindi', 365);
	$("#mtitle").html(text.title.hindi);
    $("#mCallus").html(text.callus.hindi);
    $("#mSubmitQuery").html(text.submitquery.hindi);
    $("#name").attr("placeholder", text.name.hindi);
    $(".error-label-name").html(text.errorLabelName.hindi);
    $("#phone").attr("placeholder", text.phone.hindi);
    $("#email").attr("placeholder", text.email.hindi);
    $(".error-label-email").html(text.errorLabelEmail.hindi);
    $("#message").attr("placeholder", text.message.hindi);
    $(".error-label-message").html(text.errorLabelMessage.hindi);
    $("#mSendMessage").html(text.sendMessage.hindi);
    $(".success-label-message").html(text.successLabelMessage.hindi);
    $(".error-label-message-main").html(text.errorLabelMessageMain.hindi);
    toHindiCommon();
}

function toEnglish() {
	setCookie('lang', 'english', 365);
	$("#mtitle").html(text.title.english);
    $("#mCallus").html(text.callus.english);
    $("#mSubmitQuery").html(text.submitquery.english);
    $("#name").attr("placeholder", text.name.english);
    $(".error-label-name").html(text.errorLabelName.english);
    $("#phone").attr("placeholder", text.phone.english);
    $("#email").attr("placeholder", text.email.english);
    $(".error-label-email").html(text.errorLabelEmail.english);
    $("#message").attr("placeholder", text.message.english);
    $(".error-label-message").html(text.errorLabelMessage.english);
    $("#mSendMessage").html(text.sendMessage.english);
    $(".success-label-message").html(text.successLabelMessage.english);
    $(".error-label-message-main").html(text.errorLabelMessageMain.english);
    toEnglishCommon();
}

function submitMessage() {
    $name = $("#name").val();
    $phone = $("#phone").val();
    $email = $("#email").val();
    $message = $("#message").val();
    if ($name == '') {
        $(".error-label-name").removeClass('hide');
        return;
    } else {
        $(".error-label-name").addClass('hide');
    }

    if (!validateEmail($email)) {
        $(".error-label-email").removeClass('hide');
        return;
    } else {
        $(".error-label-email").addClass('hide');
    }

    if ($message == '') {
        $(".error-label-message").removeClass('hide');
        return;
    } else {
        $(".error-label-message").addClass('hide');
    }

    $("#loader").removeClass('hide');

    var dataOb = {
        name : $name,
        phone : $phone,
        email : $email,
        message : $message
    };
    $.ajax({
          method: "POST",
          url: "/message",
          contentType : "application/json",
          data: JSON.stringify(dataOb)
        })
          .done(function(response) {
                $("#loader").addClass('hide');
          		if (response.status) {
    			  $("#name").val('');
    			  $("#phone").val('');
    			  $("#email").val('');
    			  $("#message").val('');
    			  $(".success-label-message").removeClass('hide');
    			} else {
    			  $(".error-label-message-main").removeClass('hide');
    			}
          });
    
}