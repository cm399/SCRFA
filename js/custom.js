
$(document).ready(function() {
    /* Bottom to Top Icon */
    $(document).on('click', '.bottom-to-top-content a', function() { $('html, body').animate({ scrollTop: 0 }, 600); });
    /* Bottom to Top Icon */

    /*Header My Account Dropdown */
    $(document).on('click', '.menu-block', function() {
        if ($('.menu-block-content').hasClass('open')) {
            $('.menu-block-content').removeClass('open').slideUp(400);
            $(this).removeClass('open');
        } else {
            $('.menu-block-content').addClass('open').slideDown(400);
            $(this).addClass('open');
        }
    }); 
    /*Close Header My Account Dropdown */
    /*Header My Account Dropdown */
    $(document).on('click', '.search-btn', function() {
        if ($('.search-content-box').hasClass('open')) {
            $('.search-content-box').removeClass('open').slideUp(400);
            $(this).removeClass('open');
        } else {
            $('.search-content-box').addClass('open').slideDown(400);
            $(this).addClass('open');
        }
    }); 
    /*Close Header My Account Dropdown */
});