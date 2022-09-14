<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="../css/style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
</head>
<header><h1>Gaming site!</h1></header>
<body>
<nav>
	<ul>
		<a href="#"><li>Home</li></a>
		<a href="#"><li>About</li></a>
		<a href="#"><li>Games</li></a>
		<a href="#"><li>Tips And Tricks</li></a>
		<a href="#"><li>Gallery</li></a>
		<a href="#"><li>Contact</li></a>
	</ul>
	<div class="handle">Menu</div>
</nav>
<script>
	$('.handle').on('click', function(){
		$('nav ul').toggleClass('showing');
	});
	
</script>
</body>
</html>