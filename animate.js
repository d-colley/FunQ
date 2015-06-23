
$(document).ready(function() {
    $('#pic').hover(
        function(){
            $(this).find('div').stop(true, true).animate({
                'bottom': '+=350'
            }, 200);
        },
        function(){
            $(this).find('div').stop(true, true).animate({
                'bottom': '-=350'
            }, 200);
        }
        );
});




