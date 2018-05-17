document.getElementById('home').addEventListener("click", function() {
    $('#imgFront').css('background-image', 'url(./images/hero2.jpg)');
    $('#boxContainer').css('display', 'block');
});


document.getElementById('careers').addEventListener("click", function() {
    $('#imgFront').css('background-image', 'url(./images/hero3.jpg)');
    $('#imgFront').css('transition', 'background-image 0.2s ease-in-out');
    $(".menuItem").hover(function() {
        $(this).css("color", "orange")
    }).mouseout(function() {
        $(this).css({
            "color": "white",
        });
    });
    $("#home").hover(function() {
        $(this).css("color", "orange")
    }).mouseout(function() {
        $(this).css({
            "color": "white",
        });
    });
    $('#boxContainer').css('display', 'none');
});

document.getElementById('contact').addEventListener("click", function() {
    $('#imgFront').css('background-image', 'url(./images/hero4.jpeg)');
    $('#boxContainer').css('display', 'none');
});

document.getElementById('faq').addEventListener("click", function() {
    $('#imgFront').css('background-image', 'url(./images/hero5.jpg)');
    $('#boxContainer').css('display', 'none');
});

document.getElementById('stats').addEventListener("click", function() {
    $('#imgFront').css('background-image', 'url(./images/hero6.jpg)');
    $('#boxContainer').css('display', 'none');
});
