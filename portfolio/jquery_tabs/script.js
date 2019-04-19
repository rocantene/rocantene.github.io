$(document).ready(function() {
    $(".tabs").on("click", ".tab", function(){

        let tabs = $(".main .tab"),
            cont = $(".main .text");

        // Удаляем классы active
        tabs.removeClass("active");
        cont.removeClass("active");
        // Добавляем классы active
        $(this).addClass("active");
        cont.eq($(this).index()).addClass("active");

        return false;
    });
});
