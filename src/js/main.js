$("[data-toggle=\"collapse\"]").CollapsiblePanel();

$("#tab-container").Tab();
$("#tab-container2").Tab();

$("#modal-link").click(function(e) {
    e.preventDefault();
    $($(this).attr("href")).fadeIn();
    $("body").addClass("modal-open");
});