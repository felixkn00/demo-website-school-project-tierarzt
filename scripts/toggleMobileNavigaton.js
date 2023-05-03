$(document).ready(function () {
    $("#navigation_mobile_elements").hide()
    $("button").click(function () {
        $("#navigation_mobile_elements").slideToggle("fast");

    });
});