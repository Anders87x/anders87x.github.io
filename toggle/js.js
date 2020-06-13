/*** COLOR CHANGER ***/
$("#color-toggle").on("click", function () {
    var e = this.io ^= 1;
    $("#color-palate").animate({
        right: e ? 0 : -188
    }, "slow");
});

$("#blue").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style_blue.css");
});
$("#blue-blend").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style_blue_blend.css");
});
$("#teal").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style_teal.css");
});
$("#gray").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style_gray.css");
});
$("#green").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style_green.css");
});
$("#green-blend").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style_green_blend.css");
});
$("#purple").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style_purple.css");
});
$("#brown").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style_brown.css");
});
$("#red").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style_red.css");
});
$("#pink").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style_pink.css");
});
$("#dark_gray").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style_dark_gary.css");
});
$("#dark_dark").on("click", function () {
    $("#switch_style").attr("href", "stylesheets/style_dark_dark.css");
});