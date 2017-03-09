<?php
include_once('./includes/header.php');
include('./admin/config.php');

$connection = mysqli_connect($dbhost, $dbusername, $dbpassword, $db);


$page = isset($_GET['page']) ? $_GET['page'] : "";

switch ($page) {
    case 'home':
        include_once("home.php");
        break;
    
    case 'users':
        include_once("users.php");
        break;
    
    case 'admin':
        header("Location: ./admin/admin_index.php");
        break;
    
    default:
        include_once("home.php");
        break;
}

include('./includes/footer.php');
?>