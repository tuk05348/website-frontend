$(window).scroll(function(){
    var scrollPosition = $(window).scrollTop();
    $('.sidenav').css({
        'background-position': 'center ' + (scrollPosition) + 'px'
    });
});