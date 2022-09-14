<?php
include "include/definitions.inc.php";
unset($_SESSION["username"]);
unset($_SESSION["id"]);
unset($_SESSION["rank"]);
session_destroy();
header("Location: index.php?page=1");
exit;
?>