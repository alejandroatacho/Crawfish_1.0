<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="css/stylesheet.css">
	 <link href="favicon.png" rel="shortcut icon"  type="image/x-icon">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	
	<script type="text/javascript">
function equalHeight(group) {
    tallest = 0;
    group.each(function() {
        thisHeight = $(this).height();
        if(thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.height(tallest);
}
 
$(document).ready(function(){
    equalHeight($(".EqHeightDiv"));
});
</script>
<script src="http://code.jquery.com/jquery-latest.js"></script>

<div id="def"><?php include "definitions.inc.php";?></div>


</head>
<body>
<div id ='header'><h1>Gaming site!</h1></div>
<nav>
	<ul>
		<a href="index.php?page=1"><li>Home</li></a>
<?php 
$query = "SELECT * FROM pages WHERE active = 1";
$exe = mysqli_query($connection,$query) or die("error");
while($row = mysqli_fetch_array($exe)){
	$file = $row['filename'];
?>
	<a href='<?php echo $file;?>?id=<?php echo $row["id"];?>'><li><?php echo $row["name"];?></li></a>

<?php } ?>
	</ul>
</nav>
