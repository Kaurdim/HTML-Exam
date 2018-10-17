$(document).ready(function() {

setInterval(function(){
	var buttonSlider = $(".slider-check:checked");
	var buttonSliderIndex = $(".slider-check:checked").index();
	var nextbuttonSliderIndex = buttonSliderIndex + 1;
	var nextSlide = $(".slider-check").eq(nextbuttonSliderIndex);
	buttonSlider.prop("checked", true);
	if (nextbuttonSliderIndex === ($(".slider-check:last").index()+1)) {
		$(".slider-check").eq(0).prop("checked", true);
	} else {
		nextSlide.prop("checked", true);
	}
}, 5000);





});



