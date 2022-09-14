<?php
if(!isset($_SESSION["username"]) || $_SESSION['rank'] < 1) {
	header("Location: $url_site/index.php?error=420");
	exit;
}
?>