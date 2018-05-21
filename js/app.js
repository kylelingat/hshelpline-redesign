$(".menuItem").hover(function() {
    $(this).css({"color":"#90C695","font-size":"33px"});
}).mouseout(function() {
    $(this).css({"color":"white","font-size":"30px"});
});

function homeClick() {
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
    var $target = $('html,body');
    $target.animate({scrollTop: $("#navBar").offset().top}, 700);
    $('#imgFront').css('background-image', 'url(./images/hero4.jpeg)');
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
    $(".menuItem").hover(function() {
        $(this).css({"color":"#F64747","font-size":"33px"});
    }).mouseout(function() {
        $(this).css({"color":"white","font-size":"30px"});
    });
}

function faqClick() {
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
    $(".menuItem").hover(function() {
        $(this).css({"color":"#5ec9ca","font-size":"33px"});
    }).mouseout(function() {
        $(this).css({"color":"white","font-size":"30px"});
    });
    $('#faqContainer').css('display', 'block');
}

function statsClick() {
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
