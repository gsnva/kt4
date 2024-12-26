$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .head').toggleClass('active');
        $('body').toggleClass('lock')
    });
});
