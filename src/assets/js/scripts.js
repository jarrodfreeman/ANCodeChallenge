(function($) {
    $('.expand').on('click', function() {
        var li = $(this).closest('.list-item');
        if(li.is('.open')) {
            li.find('.more-info').slideUp(200, function() {
                li.removeClass('open').blur();
            });
        } else { 
            li.find('.more-info').slideDown(200, function() {
                li.addClass('open');
            });
        }
    });
})(jQuery);