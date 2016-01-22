(function ($) {
    $.fn.CollapsiblePanel = function () {
        console.log($(this));
        $(this).click(function (e) {
            e.preventDefault();
            var $t = $(this);
            $t.attr("aria-expanded", function(i, attr) {
                var expanded = attr !== "true";
                $t.attr("aria-expanded", expanded);
                $($t.attr("href")).slideToggle();
            });
        });
    }
})(jQuery);