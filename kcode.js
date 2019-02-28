var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
n = 0;
$(document).keydown(function (e) {
    if (e.keyCode === k[n++]) {
        if (n === k.length) {


        	var overlay = $('<div id="cricri"> </div>');
			overlay.appendTo(document.body);
	        $('#cricri').fadeIn( 'fast', function() {
				    var image = $('<img src="images/cricri.jpg" class="cricri" >');
		        	image.appendTo( $('#cricri') );
		        	$('#cricri .cricri').fadeIn('slow');
				});
        	

        	$('#cricri').click(function() {
        		$('#cricri .cricri').fadeOut('fast', function() {
					$('#cricri').fadeOut();
				});
			});
            
            n = 0;
            return false;
        }
    }
    else {
        n = 0;
    }
});