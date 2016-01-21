$("[data-toggle=\"collapse\"]").click(function(e) {
    e.preventDefault();
    var $this = $(this);
    $this.attr('aria-expanded', function(i, attr) {
        var expanded = attr != "true";
        $this.attr("aria-expanded", expanded);
        $($this.attr("href")).slideToggle();
    });
});