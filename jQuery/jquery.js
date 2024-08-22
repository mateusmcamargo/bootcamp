console.log($('h1').attr('class'));
$('h1').attr('class', 'test');
console.log($('h1').attr('class'));

$('div.load-text').load('./load.txt');

const button = '<button>toggle</button>';
$('h1').before(button);

$('button').on('click', function () {
    $('h1').slideToggle(100, 'swing');
});

$('button').on('click', function () {
    $('h2').slideUp(300)
           .slideDown(100)
           .animate({
                opacity: .5,
            }, 200);
});