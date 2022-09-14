<!DOCTYPE html>
<html>
<head>
	<title>About us</title>
	
</head>
<body>
<?php


include 'include/menu.inc.php';

$page = $_GET['id'];
$query = "SELECT * FROM pages WHERE id= '$page' AND active = 1";
$exe = mysqli_query($connection,$query);
$row = mysqli_fetch_array($exe);


 ?>
<div id="asd2" class="EqHeightDiv">
<?php include "$dir_site/include/navside.inc.php";?>
<div id="main_section2" class="EqHeightDiv">
<center><section>


<?php echo $row['title']; ?>
</section></center>
</div></div>
<footer>
	<?php include 'footer.php' ?>
</footer>