$("li.accordion span").click(function () {
    if ($(this).parent().hasClass('open')) {
        $("li.accordion").removeClass('open');
        $("li.accordion ul").slideUp();
    } else {
        $("li.accordion ul").slideUp();
        $(this).parent().children('ul').slideDown();
        $("li.accordion").removeClass('open');
        $(this).parent().addClass('open');
    }
})