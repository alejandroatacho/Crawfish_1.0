<?php
    @session_start();
	$hostname="localhost";
	$username="root";
	$password="";
	$database="naruto-kun";
	$connection=mysqli_connect($hostname,$username,$password,$database) or die("Internal Error");

	error_reporting(0);
	$dir_site = "C:\wamp\www";
	$url_site = "http://localhost/";
	$dir_site_admin = $dir_site."/panel";
	$url_site_admin = $url_site."/panel";
	mysqli_query($connection, "SET NAMES 'utf8'");

	include "functions.inc.php";
?>
<link rel="stylesheet" type="text/css" href="<?php echo $url_site;?>/css/stylesheet.css">