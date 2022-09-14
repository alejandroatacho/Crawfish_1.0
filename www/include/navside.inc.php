
<div id="navside" class="EqHeightDiv">

<div style="font-size:22px;"><strong><?php if(!isset($_SESSION['username'])){?> Member Login:<?php }else{?><center>Member Area</center><?php }?></strong></div>
<hr>
<?php if(!isset($_SESSION['username'])){?><form id="memberlogin" action="memberlogin.php" method="post">
<table>
<tr><td style="float:right;">Username:</td><td> <input type="text" name="username"></td></tr>
<tr><td style="float:right;">Password:</td><td> <input type="password" name="password"></td></tr>
<tr><td></td><td><a href="#">Sign Up</a> <input type="submit" style="float:right;width:50%;"value="Login"></td></tr>
</table></form><?php
}else{
?>
<center>Welcome <?php 
echo ucfirst($_SESSION['username']);
?>, <a href="logout.php">(logout)</a></center>


<?php
}
?>
<hr style="background:#005644;">

<?php if(isset($_SESSION['username'])){?>
<center>
<h5>Search for a user: </h5>
<form action ="profile.php" method="POST">
	<table>
		<tr><td>Username:</td><td><input type="text" id="developer" name="username"></td></tr>
		<tr><td><input type="submit" id="submit" name="submit" value="View Profile"></td></tr>
	</table>
	</form>

<a href="http://forum.tgn.site90.net">-Forum</a><br>
<a href="#">-Change Username</a><br>
<a href="#">-Change Email</a><br>
<a href="#">-Change Password</a><br>
<?php if($_SESSION['rank'] > 0){ ?><a href="<?php echo $url_site?>/panel">-Go to Admin Panel</a><br><?php }?>
<a href="logout.php">-Logout</a>


<a href="#"></a>
<a href="#"></a>








</center>



<?php } ?>


</div>