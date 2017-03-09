<?php
include('config.php');
include('admin_header.php');
$connection = mysqli_connect($dbhost, $dbusername, $dbpassword, $db);
?>

  <?php
$page = isset($_GET['page']) ? $_GET['page'] : "";

switch ($page) {
    case 'admin':
        include_once("admin.php");
        break;
    
    case 'users':
        include_once("admin_users.php");
        break;

    case 'home-page':
        header("Location: ../index.php");
        break;
    
    default:
        include ('admin.php');
        break;
}
?>

    <?php
include('admin_footer.php');
?>