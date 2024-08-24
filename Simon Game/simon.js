// get element property  (eg: tagName): $(selector).prop(property);
// get element attribute (eg: class)..: $(selector).attr(attribute);

$(document).ready(function () {

$('.color').each(function(index) {
    $(this).on('clicked', function () {
        $(this).addClass('clicked');
        console.log('clicked');
    });
});

});