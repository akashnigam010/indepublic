var textCommon = {};
$(document).ready(function() {
    textCommon = {
        footerHeading : {
            english : 'INDEPUBLIC',
            hindi : 'जनस्वराज'
        },
        homeLink : {
            english : 'Home',
            hindi : 'मुख्य पृष्ठ'
        },
        aboutLink : {
            english : 'About',
            hindi : 'परिचय'
        },
        contactLink : {
            english : 'Contact',
            hindi : 'संपर्क'
        },
        privacyLink : {
            english : 'Privacy',
            hindi : 'प्रच्छन्नता'
        }
    };
});

function toHindiCommon() {
    $("#footer-heading").html(textCommon.footerHeading.hindi);
    $("#home-link").html(textCommon.homeLink.hindi);
    $("#about-link").html(textCommon.aboutLink.hindi);
    $("#contact-link").html(textCommon.contactLink.hindi);
    $("#privacy-link").html(textCommon.privacyLink.hindi);
}

function toEnglishCommon() {
    $("#footer-heading").html(textCommon.footerHeading.english);
    $("#home-link").html(textCommon.homeLink.english);
    $("#about-link").html(textCommon.aboutLink.english);
    $("#contact-link").html(textCommon.contactLink.english);
    $("#privacy-link").html(textCommon.privacyLink.english);
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}