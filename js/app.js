var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}
preload(
    "./images/hero3.jpg",
    "./images/hero4.jpg",
    "./images/hero5.jpg",
    "./images/hero6.jpg",
    "./images/helpline.jpg",
    "./images/waipahu.jpg",
    "./images/nami.jpg"
)
$(".menuItem").hover(function() {
    $(this).css({"color":"#90C695","font-size":"33px"});
}).mouseout(function() {
    $(this).css({"color":"white","font-size":"30px"});
});

var onHome = 1;
var onCareer = 0;
var onContact = 0;
var onFaq = 0;
var onStat = 0;

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
      if (onHome == 1) {
        statsClick()
      } else if (onCareer == 1) {
        homeClick()
      } else if (onContact == 1) {
        careersClick()
      } else if (onFaq == 1) {
        contactClick();
      } else if(onStat == 1) {
        faqClick();
      }
    }

    else if (e.keyCode == '39') {
      if (onHome == 1) {
        careersClick()
      } else if (onCareer == 1) {
        contactClick()
      } else if (onContact == 1) {
        faqClick()
      } else if (onFaq == 1) {
        statsClick();
      } else if(onStat == 1) {
        homeClick();
      }
    }

}

function homeClick() {
    onHome = 1;
    onCareer = 0;
    onContact = 0;
    onFaq = 0;
    onStat = 0;
    var $target = $('html,body');
    $target.animate({scrollTop: $("#navBar").offset().top}, 700);
    $('#imgFront').css('background-image', 'url(./images/hero2.jpg)');
    $('#boxContainer').css('display', 'block');
    $('#faqContainer').css('display', 'none');
    $('#contactContainer').css('display', 'none');
    $('#careersContainer').css('display', 'none');
    $('#statsContainer').css('display', 'none');
    $('#contact').css('border-bottom', 'none');
    $('#careers').css('border-bottom', 'none');
    $('#stats').css('border-bottom', 'none');
    $('#faq').css('border-bottom', 'none');
    $('.menuItem').css('color', 'white');
    $(".menuItem").hover(function() {
        $(this).css({"color":"#90C695","font-size":"33px"});
    }).mouseout(function() {
        $(this).css({"color":"white","font-size":"30px"});
    });
}


function careersClick() {
    onHome = 0;
    onCareer = 1;
    onContact = 0;
    onFaq = 0;
    onStat = 0;
    var $target = $('html,body');
    $target.animate({scrollTop: $("#navBar").offset().top}, 700);
    $('#imgFront').css('background-image', 'url(./images/hero3.jpg)');
    $('#careers').css('color', '#1F3A93');
    $('#careers').css('border-bottom', '5px solid  #1F3A93');
    $('#contact').css('border-bottom', 'none');
    $('#faq').css('border-bottom', 'none');
    $('#stats').css('border-bottom', 'none');
    $('#careersContainer').css('display', 'block');
    $('#boxContainer').css('display', 'none');
    $('#statsContainer').css('display', 'none');
    $('#contactContainer').css('display', 'none');
    $('.menuItem').not('#careers').css('color', 'white');
    $(".menuItem").hover(function() {
        $(this).css({"color":" #1F3A93","font-size":"33px"});
    }).mouseout(function() {
        $(this).css({"color":"white","font-size":"30px"});
    });
    // $("#home").hover(function() {
    //     $(this).css({"color":"orange","font-size":"31px"});
    // }).mouseout(function() {
    //     $(this).css({"color":"white","font-size":"25px"});
    // });
    $('#boxContainer').css('display', 'none');
    $('#faqContainer').css('display', 'none');
}

function contactClick() {
    onHome = 0;
    onCareer = 0;
    onContact = 1;
    onFaq = 0;
    onStat = 0;
    var $target = $('html,body');
    $target.animate({scrollTop: $("#navBar").offset().top}, 700);
    $('#imgFront').css('background-image', 'url(./images/hero4.jpg)');
    $('#contact').css('color', '#F64747');
    $('#contact').css('border-bottom', '5px solid #F64747');
    $('#careers').css('border-bottom', 'none');
    $('#faq').css('border-bottom', 'none');
    $('#stats').css('border-bottom', 'none');
    $('#contactContainer').css('display', 'block');
    $('#boxContainer').css('display', 'none');
    $('#faqContainer').css('display', 'none');
    $('#statsContainer').css('display', 'none');
    $('#careersContainer').css('display', 'none');
    $('.menuItem').not('#contact').css('color', 'white');
    $(".menuItem").hover(function() {
        $(this).css({"color":"#F64747","font-size":"33px"});
    }).mouseout(function() {
        $(this).css({"color":"white","font-size":"30px"});
    });
}

function faqClick() {
    onHome = 0;
    onCareer = 0;
    onContact = 0;
    onFaq = 1;
    onStat = 0;
    var $target = $('html,body');
    $target.animate({scrollTop: $("#navBar").offset().top}, 700);
    $('#imgFront').css('background-image', 'url(./images/hero5.jpg)');
    $('#faq').css('color', '#5ec9ca');
    $('#faq').css('border-bottom', '5px solid #5ec9ca');
    $('#contact').css('border-bottom', 'none');
    $('#careers').css('border-bottom', 'none');
    $('#contactContainer').css('display', 'none');
    $('#stats').css('border-bottom', 'none');
    $('#boxContainer').css('display', 'none');
    $('#careersContainer').css('display', 'none');
    $('#statsContainer').css('display', 'none');
    $('.menuItem').not('#faq').css('color', 'white');
    $(".menuItem").hover(function() {
        $(this).css({"color":"#5ec9ca","font-size":"33px"});
    }).mouseout(function() {
        $(this).css({"color":"white","font-size":"30px"});
    });
    $('#faqContainer').css('display', 'block');
}

function statsClick() {
    onHome = 0;
    onCareer = 0;
    onContact = 0;
    onFaq = 0;
    onStat = 1;
    var $target = $('html,body');
    $target.animate({scrollTop: $("#navBar").offset().top}, 700);
    $('#imgFront').css('background-image', 'url(./images/hero6.jpg)');
    $('#stats').css('color', '#663399');
    $('#stats').css('border-bottom', '5px solid #663399');
    $('#contact').css('border-bottom', 'none');
    $('#faq').css('border-bottom', 'none');
    $('#careers').css('border-bottom', 'none');
    $('#boxContainer').css('display', 'none');
    $('#faqContainer').css('display', 'none');
    $('#careersContainer').css('display', 'none');
    $('#contactContainer').css('display', 'none');
    $('#statsContainer').css('display', 'block');
    $('.menuItem').not('#stats').css('color', 'white');
    $(".menuItem").hover(function() {
        $(this).css({"color":"#663399","font-size":"33px"});
    }).mouseout(function() {
        $(this).css({"color":"white","font-size":"30px"});
    });
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    if(this.classList.contains("active")){
      $(this).css("border-radius", "20px 20px 0px 0px");
    } else {
      $(this).css("border-radius", "20px 20px 20px 20px");
    }
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

$(document).ready(function(){
    $(".disclaimer").mouseover(function(){
      if(onHome == 1){
        $(this).css("background-color", "#90C695");
      } else if (onCareer == 1) {
        $(this).css("background-color", "#F64747");
      } else if (onContact == 1) {
        $(this).css("background-color", "#1F3A93");
      } else if (onFaq == 1) {
        $(this).css("background-color", "#5ec9ca");
      } else if (onStat == 1) {
        $(this).css("background-color", "#663399");
      }
        $(".disclaimer p").css("display", "block");
        $(".disclaimer h1").css("color", "white");
        $(".disclaimer p").css("color", "white");
        $(".disclaimer").css("margin-top", "500px");
    });
    $(".disclaimer").mouseout(function(){
        $(this).css("background-color", "transparent");
        $(".disclaimer").css("margin-top", "600px");
        $(".disclaimer h1").css("color", "black");
        $(".disclaimer p").css("color", "black");
    });
});
