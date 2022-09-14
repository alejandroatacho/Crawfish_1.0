<?php
mysqli_query($connection, "SET NAMES 'utf8'");
function pr($arr) {
	echo "<pre>";
	print_r($arr);
	echo "</pre>";
}
function shortname($str) {
	$arrStr = explode(" ",$str);
	if(count($arrStr)>1) {
		return $arrStr[0] . " " . $arrStr[count($arrStr)-1];
	}
	return $arrStr[0];
}
function words($str,$n) {
	$arrStr = explode(" ",$str);
	$str = "";
	for($i=0; $i<$n; $i++) {
		if($i<count($arrStr)) {
			$str .= $arrStr[$i] . " ";
		} else {
			break;
		}
	}
	if($i==$n) $str .= "...";
	return $str;
}
?>