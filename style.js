$(document).ready(function(){

// --- PRE-LOADER ---
 
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 1);

// --- ELEMENT HOVER BG CHANGE ---

	$('.element').mouseenter(function() {
		$('#bg-ol').toggleClass('white');
	});
	$('.element').mouseleave(function() {
		$('#bg-ol').toggleClass('white');
	});   

// adapt w to h for .netw elements
	var hvalue = $('#git').height();
	$('#git').css({'width': hvalue+'px'});
	var hvalue = $('#cp').height();
	$('#cp').css({'width': hvalue+'px'});
















// --- GRADIENT ---

	var $div = document.getElementById("gradient");
	var gradients = [
	  { start: [128,179,171], stop: [30,41,58] },
	  { start: [255,207,160], stop: [234,92,68] },
	  { start: [212,121,121], stop: [130,105,151] }
	];
	var transition_time = 8;
	var fps = 60;

	var timer;
	var interval_time = Math.round(1000/fps);
	var currentIndex = 0;
	var nextIndex = 1;
	var steps_count = 0;
	var steps_total = Math.round(transition_time*fps);
	var rgb_steps = {
	  start: [0,0,0],
	  stop: [0,0,0]
	};
	var rgb_values = {
	  start: [0,0,0],
	  stop: [0,0,0]
	};
	var prefixes = ["-webkit-","-moz-","-o-","-ms-",""];
	var div_style = $div.style;
	var gradients_tested = false;
	var color1, color2;

	function set_next(num) {
	  return (num + 1 < gradients.length) ? num + 1 : 0;
	}

	function calc_step_size(a,b) {
	  return (a - b) / steps_total;
	}

	function calc_steps() {
	  for (var key in rgb_values) {
	    if (rgb_values.hasOwnProperty(key)) {
	      for(var i = 0; i < 3; i++) {
	        rgb_values[key][i] = gradients[currentIndex][key][i];
	        rgb_steps[key][i] = calc_step_size(gradients[nextIndex][key][i],rgb_values[key][i]);
	      }
	    }
	  }
	}

	function updateGradient(){
	  for (var key in rgb_values) {
	    if (rgb_values.hasOwnProperty(key)) {
	      for(var i = 0; i < 3; i++) {
	        rgb_values[key][i] += rgb_steps[key][i];
	      }
	    }
	  }

	  var t_color1 = "rgb("+(rgb_values.start[0] | 0)+","+(rgb_values.start[1] | 0)+","+(rgb_values.start[2] | 0)+")";
	  var t_color2 = "rgb("+(rgb_values.stop[0] | 0)+","+(rgb_values.stop[1] | 0)+","+(rgb_values.stop[2] | 0)+")";

	  if (t_color1 != color1 || t_color2 != color2) {

	    color1 = t_color1;
	    color2 = t_color2;

	    div_style.backgroundImage = "-webkit-gradient(linear, left bottom, right top, from("+color1+"), to("+color2+"))";
	    for (var i = 0; i < 4; i++) {
	      div_style.backgroundImage = prefixes[i]+"linear-gradient(45deg, "+color1+", "+color2+")";
	    }
	  }

	  if (div_style.backgroundImage.indexOf("gradient") == -1 && !gradients_tested) {
	    clearTimeout(timer);
	  }
	  gradients_tested = true;

	  steps_count++;
	  if (steps_count > steps_total) {
	    steps_count = 0;
	    currentIndex = set_next(currentIndex);
	    nextIndex = set_next(nextIndex);
	    calc_steps();
	  }
	}

	calc_steps();

	timer = setInterval(updateGradient,interval_time);

});