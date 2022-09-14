

<?php 
	include "include/menu.inc.php"; ?>



<div id="asd3" class="EqHeightDiv">
<?php include "$dir_site/include/navside.inc.php";?>
<div id="main_section2" class="EqHeightDiv">

<?php
//check for a form submission
if(isset($_POST['username'])) {
	$username = $_POST['username'];
	$userquery = mysqli_query($connection,"SELECT * FROM users WHERE username='$username'") or die ("The query could not be completed. Please try again later.");
	if(mysqli_num_rows($userquery) != 1) {
		die ("That username could not be found.");
	}
	
	$row = mysqli_fetch_array($userquery);
	$username = $row ['username'];


	if ($username != $username) {die("There has been a fatal error. Please try again.");}

	$id = $row ['id'];
	$name = $row ["name"];
	$email =$row ["email"];
	$rank =$row ["rank"];
 ?>
 <?php
  if($rank == 0 ) {
 	$rank = "Member";
 	}
 	if ($rank == 1 ) {
 		$rank = "Moderator";
 	}
 	if($rank == 2) {
 		$rank = "Global Moderator";
 	}

 	if($rank == 3 ) {
 		$rank = "Something";
 	}

 	if($rank == 4) {
 		$rank = "poopdeck";
 	}
 	
	if ($rank == 5) {
		$rank = "Web worker";
 	}
 	if($rank == 6) {
 		$rank = "Admin";
 	}
  if($rank == 7 ) {
 	$rank = "Webmaster";
 	}

?>

<center>
 <h5>You are now viewing <?php echo $username; ?>'s profile.</h5></center>
<hr><br><br>
<p>
 	Username: <?php echo ucfirst($username); ?><br>
 	Name: <?php echo $name; ?><br>
 	Email Address:<?php if ($_SESSION['rank'] >= 4) {?>
 	 <?php echo $email; }?><br> 
 	Rank: <?php echo $rank; ?> 


 </p><br><br><br><br>
<hr>
 <?php 
} else die ("You need to specify a username!"); 
?>
</div></div>


<footer>
	<?php 
	include "footer.php" ?>
</footer>
