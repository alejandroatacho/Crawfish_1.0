<head>
<div id="def">
<?php 
	include "../include/definitions.inc.php"; 
	include "$dir_site/include/control.inc.php";

?></div>


</head>

<body>
<div id ='header'><center><h1>Welcome
		<?php 		
			echo ucfirst($_SESSION['username']);
		?>,</h1>
</center></div>
<div id="menu">
<nav>
	<ul>
		<li><a href="../index.php?page=1">Home</a></li>
		<li><a href="../logout.php">Logout</a></li>
	</ul>
</nav>
</div>
<div id="body">
	








</div>
<footer>
	<?php 
	include "footer.php" ?>
</footer>

</body>

</html>
