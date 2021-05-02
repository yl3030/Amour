var Rswiper = new Swiper("#room", {
	loop: true,
	speed: 600,
	// parallax: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: "#room-pag",
		clickable: true,
	},
});
// 滑鼠滑入後停止輪播
$("#room").mouseenter(function () {
	Rswiper.autoplay.stop();
});
$("#room").mouseleave(function () {
	Rswiper.autoplay.start();
});

$(".magn").click(function(){
    var magnPic = $(this).parents(".swiper-slide").children("img")[0].src;
    $("#roomModal").children(".modal-dialog").children(".modal-content").children("img").attr("src",magnPic);
})