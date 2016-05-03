<!DOCTYPE html>
<html>
<head>
	<title>Maxence Busson | Front-End Web & Software Developer</title>
	 <link rel='shortcut icon' href='favicon.ico' type='image/x-icon'/ >
	 <link rel="stylesheet" href="styles.css">
	 <link rel="stylesheet" href="hover.css">
	 <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
</head>
<body>
	<div id="loader-wrapper">
	    <div id="loader"></div>
	    <div class="loader-section section-left"></div>
	    <div class="loader-section section-right"></div>
	</div>
	<div id="gradient"></div>
	<div id="bg-ol"></div>

	<div id="logo" class="element">
		<h1>Maxence Busson</h1>
	</div>
	<header  class="element">
		<h2>Front-End Web Development</h2>
			<a style="display:block" href="javascript:" onclick="window.open('https://github.com/mbusson/Portfolio-Home');" target="_blank"><div id="gh" class="icon-forward element">
				View GitHub
			</div></a>
	</header>

	<div id="network">
		<a style="display:block" href="javascript:" onclick="window.open('http://codepen.io/mbusson/');" target="_blank">
			<div class="netw element">
				<div id="cp"></div>
			</div>
		</a>
	</div>

	<div id="sites">
		<a style="display:block" href="carousel/index.html"><div class="site element" id="site1">
			<img class="thumbnail" src="images/site1.jpg"><br><br>
			<div class="arrow-wrap"><i class="fa fa-angle-double-up" id="ar1" aria-hidden="true"></i></div><br>
			<div class="languages"> <img class="lang-img" src="images/lang.svg"></div>
			<div class="descr"> 
				<p class="descr-text">
					Lorem ipsum dolor sit amet, consectetur<br>
					adipiscing elit. Aenean efficitur fermentum<br>
					volutpat. Nulla faucibus dui vel turpis.
				</p> 
			</div>
		</div></a>
		<a style="display:block" href="carousel/index.html"><div class="site element" id="site2">
			<img class="thumbnail" src="images/site1.jpg"><br><br>
			<div class="arrow-wrap"><i class="fa fa-angle-double-up" id="ar2" aria-hidden="true"></i></div><br>
			<div class="languages"> <img class="lang-img" src="images/lang.svg"></div>
			<div class="descr"> 
				<p class="descr-text">
					Lorem ipsum dolor sit amet, consectetur<br>
					adipiscing elit. Aenean efficitur fermentum<br>
					volutpat. Nulla faucibus dui vel turpis.
				</p> 
			</div>
		</div></a>
		<a style="display:block" href="carousel/index.html"><div class="site element" id="site3">
			<img class="thumbnail" src="images/site1.jpg"><br><br>
			<div class="arrow-wrap"><i class="fa fa-angle-double-up" id="ar3" aria-hidden="true"></i></div><br>
			<div class="languages"> <img class="lang-img" src="images/lang.svg"></div>
			<div class="descr"> 
				<p class="descr-text">
					Basic semi-responsive static website<br>
					with a carousel, using HMTL5, CSS3<br>
					and Javascript/jQuery.
				</p> 
			</div>
		</div></a>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script src="style.js"></script>
	<script src="kcode.js"></script>
</body>
</html>