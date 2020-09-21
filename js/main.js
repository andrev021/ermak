$('document').ready(function() {
    $('.header__nav_item a').each(function() {
        if ('file:///C:/Users/mr-dy/Desktop/ermak/'+$(this).attr('href') == window.location.href)
        {
            $(this).addClass('active');
        }
    });

    // alert(window.location.href);
}); 


var element = $(".main_d2__card__bag");
var height_el = element.offset().top;
var element_stop = $(".main_d4");
var height_el_stop = element_stop.offset().top;
var h_el1 = $('.main_d2');
var h_el2 = $('.main_d3');


		$(window).scroll(function() {



			if($(window).scrollTop() + 20 > height_el_stop - element.outerHeight() - 20) {

				console.log('1');
				
				element.css({
					"top": h_el1.outerHeight(true) + h_el2.outerHeight(true) - (element.outerHeight(true) + element.outerHeight(true) / element.css('--top')),
					'right': 0
				}).removeClass("fixed");
			
			} else {

				if($(window).scrollTop() > height_el) {

				console.log('2');
					
				element.css({
					"top": 5 + '%',
					'right': 5 + '%'
				}).addClass("fixed");
				
				} else {
				
				console.log('3');

				element.css({
					"top": 0,
					'right': 0
				}).removeClass("fixed");
				
				}
				
			}
			

		});