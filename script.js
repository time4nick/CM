$(document).ready(function () {
    $('.btn').click(function () {
        $('.nav-links').slideToggle(1000);
        $('.btn').toggleClass('change');
    })
})