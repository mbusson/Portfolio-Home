<!DOCTYPE html>
<html>
<head>
	<title>Two-Sided Toggle Menu</title>
	 <link rel='shortcut icon' href='favicon.ico' type='image/x-icon'/ >
	 <link rel="stylesheet" href="styles.css">
	 <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
</head>
<body>

	<div id="select-box">
		<a href="#" id="rent" class="btn btn-fx">
			Find a place
		</a>
		<a href="#" id="rent-out" class="btn btn-fx">
			Rent out
		</a>
	</div>

	<div id="rent-menu">
		<div class="spacer-big"></div>
		<a href="#msg"><div class="rent-menu"> <span class='rent-txt menu-txt'>Messages</span> </div></a>
		<div class="spacer"></div>
		<a href="#wsl"><div class="rent-menu"> <span class='rent-txt menu-txt'>Wishlist</span> </div></a>
		<div class="spacer"></div>
		<a href="#pfl"><div class="rent-menu"> <span class='rent-txt menu-txt'>My profile</span> </div></a>
		<div class="spacer"></div>
		<a href="#stg"><div class="rent-menu"> <span class='rent-txt menu-txt'>Search settings</span> </div></a>
		<div class="spacer"></div>
		<div class="exit rent-menu-exit"> <span class='rent-txt menu-txt'>Exit this menu</span> </div>
		<div class="spacer-big"></div>
	</div>

	<div id="rent-out-menu">
		<div class="spacer-big"></div>
		<a href="#rgs"><div class="rent-out-menu"> <span class='rent-out-txt menu-txt'>Register my listing</span> </div></a>
		<div class="spacer"></div>
		<a href="#msg"><div class="rent-out-menu"> <span class='rent-out-txt menu-txt'>Messages</span> </div></a>
		<div class="spacer"></div>
		<a href="#pfl"><div class="rent-out-menu"> <span class='rent-out-txt menu-txt'>My profile</span> </div></a>
		<div class="spacer"></div>
		<a href="#tos"><div class="rent-out-menu"> <span class='rent-out-txt menu-txt'>Terms of service</span> </div></a>
		<div class="spacer"></div>
		<div class="exit rent-out-menu-exit"> <span class='rent-out-txt menu-txt'>Exit this menu</span> </div>
		<div class="spacer-big"></div>
	</div>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script src="style.js"></script>
</body>
</html>