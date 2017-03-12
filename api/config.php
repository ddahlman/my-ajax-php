<?php
$dbhost = "localhost";
$dbusername = "root";
$dbpassword = "";
$db = "ajaxtest";

header('Content-Type: application/json');

$connection = mysqli_connect($dbhost, $dbusername, $dbpassword, $db);
mysqli_query($connection, "SET NAMES utf8");
?>