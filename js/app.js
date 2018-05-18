$(".menuItem").hover(function() {
    $(this).css({"color":"#90C695","font-size":"33px"});
}).mouseout(function() {
    $(this).css({"color":"white","font-size":"30px"});
});

function homeClick() {
    $('#imgFront').css('background-image', 'url(./images/hero2.jpg)');
    $('#boxContainer').css('display', 'block');
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
    $('#imgFront').css('background-image', 'url(./images/hero3.jpg)');
    $('#careers').css('color', 'orange');
    $('#careers').css('border-bottom', '5px solid #F5AB35');
    $('#contact').css('border-bottom', 'none');
    $('#faq').css('border-bottom', 'none');
    $('#stats').css('border-bottom', 'none');
    $('#boxContainer').css('display', 'none');
    $(".menuItem").hover(function() {
        $(this).css({"color":"#F5AB35","font-size":"33px"});
    }).mouseout(function() {
        $(this).css({"color":"white","font-size":"30px"});
    });
    // $("#home").hover(function() {
    //     $(this).css({"color":"orange","font-size":"31px"});
    // }).mouseout(function() {
    //     $(this).css({"color":"white","font-size":"25px"});
    // });
    $('#boxContainer').css('display', 'none');
}

function contactClick() {
    $('#imgFront').css('background-image', 'url(./images/hero4.jpeg)');
    $('#contact').css('color', '#F1A9A0');
    $('#contact').css('border-bottom', '5px solid #F1A9A0');
    $('#careers').css('border-bottom', 'none');
    $('#faq').css('border-bottom', 'none');
    $('#stats').css('border-bottom', 'none');
    $('#boxContainer').css('display', 'none');
    $(".menuItem").hover(function() {
        $(this).css({"color":"#F1A9A0","font-size":"33px"});
    }).mouseout(function() {
        $(this).css({"color":"white","font-size":"30px"});
    });
}

function faqClick() {
    $('#imgFront').css('background-image', 'url(./images/hero5.jpg)');
    $('#faq').css('color', '#5ec9ca');
    $('#faq').css('border-bottom', '5px solid #5ec9ca');
    $('#contact').css('border-bottom', 'none');
    $('#careers').css('border-bottom', 'none');
    $('#stats').css('border-bottom', 'none');
    $('#boxContainer').css('display', 'none');
    $(".menuItem").hover(function() {
        $(this).css({"color":"#5ec9ca","font-size":"33px"});
    }).mouseout(function() {
        $(this).css({"color":"white","font-size":"30px"});
    });
}

function statsClick() {
    $('#imgFront').css('background-image', 'url(./images/hero6.jpg)');
    $('#stats').css('color', '#663399');
    $('#stats').css('border-bottom', '5px solid #663399');
    $('#contact').css('border-bottom', 'none');
    $('#faq').css('border-bottom', 'none');
    $('#careers').css('border-bottom', 'none');
    $('#boxContainer').css('display', 'none');
    $(".menuItem").hover(function() {
        $(this).css({"color":"#663399","font-size":"33px"});
    }).mouseout(function() {
        $(this).css({"color":"white","font-size":"30px"});
    });
}
