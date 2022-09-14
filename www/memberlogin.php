
<?php 

	include "include/definitions.inc.php"; 

	if($_POST['username']!="" && $_POST['password']!=""){
		$query="SELECT * FROM users WHERE active = 1";
		$exe = mysqli_query($connection,$query);
		while($row = mysqli_fetch_array($exe))
		{
			if($row['username'] == $_POST['username'] && $row['password'] == $_POST['password']){
				$user = $_POST['username'];
				$_SESSION['username'] = $_POST['username'];
				$_SESSION['rank'] = $row['rank'];
				$query="SELECT * FROM users WHERE username = '$user'";
				$exe = mysqli_query($connection,$query);
				$row = mysqli_fetch_array($exe);				
				$_SESSION['id'] = $row['id'];
				header('Location:index.php?page=1');
			} else {
				header('Location:index.php?page=1error=1');
			}
		}

	}else{ header('Location:../index.php?page=1error=2');}


?>