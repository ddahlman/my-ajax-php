<?php
$dbhost = "localhost";
$dbusername = "root";
$dbpassword = "";
$db = "ajaxtest";
header('Content-Type: application/json');
/*header('Access-Control-Allow-Methods: GET, POST, PUT');*/

header('Content-Type: application/json');

$connection = mysqli_connect($dbhost, $dbusername, $dbpassword, $db);
mysqli_query($connection, "SET NAMES utf8");
?>