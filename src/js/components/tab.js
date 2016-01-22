(function($) {
    $.fn.Tab = function () {
        var tabs = new Array();
        var $t = $(this);
        var links = $t.find("a");
        links.each(function (index) {
            $t = $(this);
            tabs.push($t.attr("href"));
            $t.addClass("tab" + index);
        });
        links.click(function (e) {
            e.preventDefault();
            $t = $(this);
            for (i = 0; i < tabs.length; i++) {
                $(tabs[i]).attr("aria-hidden", "true");
            };
            links.attr("aria-selected", "false");
            $t.attr("aria-selected", "true");
            $($t.attr("href")).attr("aria-hidden", "false");
        });
    };
})(jQuery);