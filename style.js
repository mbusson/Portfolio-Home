$(document).ready(function(){

// --- MENU TOGGLE SELECTOR ---

	$('#rent').click(function() {
		$('#rent-menu').css('width', '20%');
		$('#rent-menu .rent-txt').fadeIn()
		$('#rent-out-menu').css('width', '1%');
		$('#rent-out-menu .rent-out-txt').fadeOut(200);
	});
	$('#rent-out').click(function() {
		$('#rent-out-menu').css('width', '20%');
		$('#rent-out-menu .rent-out-txt').fadeIn();
		$('#rent-menu').css('width', '1%');
		$('#rent-menu .rent-txt').fadeOut(200);
	});
	$('#rent-menu .exit').click(function() {
		$('#rent-out-menu').css('width', '1%');
		$('#rent-out-menu .rent-out-txt').fadeOut(200);
		$('#rent-menu').css('width', '1%');
		$('#rent-menu .rent-txt').fadeOut(200);
	});
	$('#rent-out-menu .exit').click(function() {
		$('#rent-out-menu').css('width', '1%');
		$('#rent-out-menu .rent-out-txt').fadeOut(200);
		$('#rent-menu').css('width', '1%');
		$('#rent-menu .rent-txt').fadeOut(200);
	});
});