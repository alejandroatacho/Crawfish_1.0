
<?php 
	include "include/menu.inc.php"; ?>





<div id="asd">
<?php include "$dir_site/include/navside.inc.php";?>
<div id="main_section" class="EqHeightDiv">


<center>

<?php 

$start=0;
$limit=3;

if(isset($_GET['page']))
{
$page=$_GET['page'];
$start=($page-1)*$limit;
}


	$query = "SELECT * FROM newsfeed ORDER BY ID DESC LIMIT $start, $limit";
	$query2 = "SELECT * FROM users";
	$exe = mysqli_query($connection,$query);
	$exe2 = mysqli_query($connection,$query2);
	while($row2 = mysqli_fetch_array($exe2)){
		while($row = mysqli_fetch_array($exe)){
			
			if($row['id_user'] == $row2['id']){?>
			
<section>
<h1 >
<?php
				echo $row['title'];
?>

</h1>
<div id="post">

<?php


echo $row['date']." ";
echo "Posted by:";?><a href="http://naruto-arena.com/profile/djackbyron"><strong><?php echo $row2['username'];?></strong></a> <?php date_default_timezone_set("America/Curacao");
?>
</div>
<hr style="border-top: dashed 1px;">
<h4>
<?php echo $row['text']; ?>
</h4>
</section>

<?php } }}?>
</center>

<div id="pages">
<?php
$rows=mysqli_num_rows(mysqli_query($connection,"select * from newsfeed"));
$total=ceil($rows/$limit);

if($page>1)
{
echo "<a href='?page=".($page-1)."' class='button'>PREVIOUS</a>";
}
if($page!=$total)
{
echo "<a href='?page=".($page+1)."' class='button'>NEXT</a>";
}

echo "<ul class='page'>";
for($i=1;$i<=$total;$i++)
{
if($i==$page) { echo "<li class='current'>".$i."</li>"; }

else { echo "<li><a href='?page=".$i."'>".$i."</a></li>"; }
}
echo "</ul>";
?>

</div>
</div></div></div>



<footer>
	<?php 
	include "footer.php" ?>
</footer>

