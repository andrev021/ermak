jQuery(document).ready(function($) {
	$(function(){

		$('.tab-title li').not('.active').click(function(){
		    var index = $(this).index();
		    var content = $('.tab-content li').eq(index);
		    $(this).addClass('active').siblings().removeClass('active');
		    $('.tab-content li').css('display', 'none').eq(index).css('display', 'block');
		})

		    $('.tab-title li:first').addClass('active');
		    $('.tab-content li:first').css('display', 'block');

		})

	var element = $(".main_d2__card__bag");
	var height_el = element.offset().top;
	var element_stop = $(".main_d4");
	var h_el1 = $('.menu_d1');
	var h_el2 = $('.main_d4');


		$(window).scroll(function() {



			if($(window).scrollTop() > $(".main_d4").offset().top - 20) {
				
				element.css({
					"top": h_el1.outerHeight(true) + h_el2.outerHeight(true) - (element.outerHeight(true) + element.outerHeight(true) / element.css('--top')),
					'right': 0
				}).removeClass("fixed");
			
			} else {

				if($(window).scrollTop() > height_el) {
				element.css({
					"top": 5 + '%',
					'right': 5 + '%'
				}).addClass("fixed");
				
				} else {
					
				element.css({
					"top": 0,
					'right': 0
				}).removeClass("fixed");
				
				}
				
			}
			

		});
});