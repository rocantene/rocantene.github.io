$(document).ready(function () {
    showTabFilter();
    applyActiveBtn();
});

function showTabFilter()
{
    let selectedClass = "";
    $('.choice-btn-js').on('click', function() {
        selectedClass = $(this).attr("data-rel");
        $('.showcase-wrap').fadeTo(200, 0.1);
        $('.showcase-wrap .goods-item').not('.' + selectedClass).fadeOut();
        setTimeout(function () {
            $('.' + selectedClass).fadeIn();
            $('.showcase-wrap').fadeTo(300, 1);
        }, 300);

    });
}

function applyActiveBtn()
{
    $('.choice-btn-js').on('click', function() {
        $('.choice-btn-js').removeClass('btn-active');
        $(this).addClass('btn-active');
    });
}