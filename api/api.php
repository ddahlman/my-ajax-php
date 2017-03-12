<?php
include_once('config.php');
include('functions.php');

$existing_resources = array("users", "welcome_text");

$fullurl = $_SERVER['REQUEST_URI'];

$url_and_vars = explode('?', $fullurl);
print_r($url_and_vars);
$url = $url_and_vars[1];
$url_parts = explode('/', $url);
var_dump($url_parts);

$method = $_SERVER['REQUEST_METHOD'];
if (array_key_exists('method', $_REQUEST)) {
    $method = $_REQUEST['method'];
}
echo "Method: $method <br>\n";


if (array_key_exists(1, $url_parts)) {
    $resource = $url_parts[1];
}
if (array_key_exists(2, $url_parts)) {
    $id = $url_parts[2];
}
if (array_key_exists(3, $ulr_parts)) {
    $collection = $url_parts[3];
}

$error = NULL;
$id_col = "";
if (empty($resource)) {
    echo "Existing resources: " . implode(", ", $existing_resources) . "\n";
    exit(0);
}

switch($resource) {
    case 'welcome_text':
        $id_col = "ID"; break;
    case 'users':
        $id_col = "ID"; break;
    default:
        $error = "Not a valid resource '$resource'";
}
$query = "SELECT * FROM $resource";
if (!empty($id)) {
    $query .= " WHERE $id_col = '$id'";
}


if (!empty($error)) {
    echo "ERROR: $error\n";
    exit(1);
}

$connection = db_connect();
$result = db_query($connection, $query);
$num_rows = db_print_result($result);
if ($num_rows==0) {
    echo "No resource found with id '$id'\n";
}
?>