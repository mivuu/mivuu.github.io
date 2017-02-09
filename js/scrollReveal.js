var titles = [
    'NIGHT OUT',
    'A CONTAINER',
    'GREEN-Y',
    'NO GOOD'
];

$(window).scroll(function(){
    var pos = $(this).scrollTop();
    
    if(pos < 200) {
        $('#yy').text(titles[0]);
    }
    if(pos > 550) {
        $('#yy').text(titles[1]);
    }
    if(pos > 1300) {
        $('#yy').text(titles[2]);
    }
    if(pos > 1800) {
        $('#yy').text(titles[3]);
    }
});