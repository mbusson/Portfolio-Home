$(document).ready(function(){

// --- PRE-LOADER ---
 
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 1);

// --- ANIM ---

	function startFinalAnimation(){
    	var fa = new TimelineLite();
			fa.to('#animated', 0.5, {visibility:'visible'});
			fa.from('#welcome', 1, {opacity:0, scale:0, top:0, ease: Back.easeInOut.config(2), y: 0});
			fa.staggerFrom('.tagline', 0.3, {rotation:90, scale:0, y:-60, ease:Back.easeOut}, 0.035);
			fa.to('#welcome, .tagline', 0.5, {opacity:0, delay: 1, onComplete:erase});
			fa.from('#enter', 3, {opacity:0, ease: Power1.easeIn});
	};

var footer = '<div id="footer"><div class="footnote"><p><br><br>...looking for your way <strong style="font-size:105%"><a href="../index.php">home</a></strong>?</p></div></div>'
	function erase() {
		$('#welcome').css({
			visibility: 'hidden'
		});
		$('#animated .tagline').css({
			visibility: 'hidden'
		});
		$('#slider').append(footer);
		$('body').css({
			overflow: 'auto',
			height: 'auto'
		});
		$('#footer').css({
			visibility: 'visible'
		});
		$('#animated').css({
			height: '95vh'
		});
	}
	startFinalAnimation();

});