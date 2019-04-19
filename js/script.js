/* PRELOADER FUNCTION */

    $(window).on('load', function() {
        $('.loader').fadeOut();
        $('.loaderArea').delay(300).fadeOut('slow');
    });


/* document.ready */

$(document).ready(function()
{
    applyHomeBackground();
    applyBurgerAnimate();
    // applyMobilNavigation();
    applyScrollSpy();
    applyPortfolioFilter();
    applyActivePortfolioFilter();
    applySmoothScroll();
    // applyScrollGithub();
    applyScrollTop();
});

/* background-cover-hello */
function applyHomeBackground()
{
    $('.cover-img').height($(window).height());
    $(window).resize(function () {
        $('.cover-img').height($(window).height());
    });
}

/* NAVIGATION FUNCTIONS */

/*burger-animate-click*/
function applyBurgerAnimate()
{
    $('.nav-toggle').on('click', function(event){
        $('.nav-toggle').toggleClass('active');
        $('.block-menu').toggleClass('responsive-menu');
    });
    $('.menu-items').on('click', function(event){
        $('.nav-toggle').toggleClass('active');
        $('.block-menu').toggleClass('responsive-menu');
    });
}

/*responsive-menu-click*/
// function applyMobilNavigation()
// {
//     $('.nav-toggle').on('click', function(event){
//         $('.block-menu').toggleClass('responsive-menu');
//     });
// }

/*scroll-menu-active*/
function applyScrollSpy()
{
    $(window).scroll(function(){
        let sections = $('section');
        sections.each(function(i,el){
            let top  = $(el).offset().top-260;
            let bottom = top + $(el).height();
            let scroll = $(window).scrollTop();
            let id = $(el).attr('id');
            if( scroll > top && scroll < bottom){
                $('.menu-items').removeClass('active');
                $('a[href="#'+id+'"]').addClass('active');
            }
        });
    });
}

/* PORTFOLIO FUNCTIONS */

/*filter-portfolio-click*/
function applyPortfolioFilter()
{
    let selectedClass = "";
    $('.choice-btn-js').on('click', function(){
        selectedClass = $(this).attr("data-rel");
        $('.project').fadeTo(200, 0.1);
        $('.project .projects-items').not('.' +selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function() {
            $('.' +selectedClass).fadeIn().addClass('scale-anm');
            $('.project').fadeTo(300, 1);
        }, 300);

    });
}

/*filter-portfolio-click-active*/
function applyActivePortfolioFilter()
{
    $('.btn').on('click', function(event) {
        $('.btn').removeClass('btn-active');
        $(this).addClass('btn-active');
    });
}

/* SCROLL FUNCTION */

/*smooth scroll*/
function applySmoothScroll()
{
    let $page = $('html, body');
    $('a[href*="#"]').on('click', function(event) {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        // return false;
    });
}

/*scroll-github-right*/
// function applyScrollGithub()
// {
//     let previousScroll = 0;
//     $(window).scroll(function(event){
//         let scroller = $(this).scrollTop() >= 400;
//         if (scroller > previousScroll){
//             $('.github-right').hide(100);
//         } else if (scroller < previousScroll) {
//             $('.github-right').show(100);
//         }
//         previousScroll = scroller;
//     });
// }

/*scroll To Top*/
function applyScrollTop()
{
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });
}








