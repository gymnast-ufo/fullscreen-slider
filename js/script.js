$(document).ready(function () {
	var $itemLength = $('.slider_item').length,
	   $itemWidth = $('.slider_item').width(),
	   $listLength = $itemLength * $itemWidth;
	$('.slider_list').css({
        width: $listLength,
        marginLeft: - $itemWidth  //костыль №1
    })
    $('.slider_list li:last-child').prependTo('.slider_list'); //исправление костыля №1
    $('.next').click(function () {
        $('.slider_list').animate({
            left: - $itemWidth
        }, 600, function () {
            $('.slider_list li:first-child').appendTo('.slider_list');
            $('.slider_list').css('left', '');
        });
    })
    $('.prev').click(function () {
        $('.slider_list').animate({
            right: - $itemWidth
        }, 600, function () {
            $('.slider_list li:last-child').prependTo('.slider_list');
            $('.slider_list').css('right', '');
        });
    })
})