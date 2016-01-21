(function($) {
    $.fn.Tab = function() {
        tabs = new Array();
        links = $(this).find("a");
        links.each(function( index ) {
            tabs.push($(this).attr("href"));
            $(this).addClass("tab"+index);
        });
        links.click(function(e) {
            e.preventDefault();
            $this = $(this);
            for (i = 0; i < tabs.length; i++){
                $(tabs[i]).attr("aria-hidden", "true");
            };
            links.attr("aria-selected", "false");  
            $this.attr("aria-selected", "true");  
            $($this.attr("href")).attr("aria-hidden", "false");    
        });
    };
})(jQuery);