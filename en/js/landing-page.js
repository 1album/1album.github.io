// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 700, 'easeOutExpo');
        event.preventDefault();
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('#site-logo').fadeIn('fast');
        }
        else {
            $('#site-logo').fadeOut('fast');
        }
    });

    if ($(window).scrollTop() > 150) {
        $('#site-logo').show()
    }
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a[href!="#"]').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});