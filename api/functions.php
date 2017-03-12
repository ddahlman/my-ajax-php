<?php

function db_connect() {
    // komma åt variablerna från config.php
    GLOBAL $dbhost, $dbusername, $dbpassword, $db;
    $connetion = mysqli_connect($dbhost, $dbusername, $dbpassword, $db);
    
    if (mysqli_connect_errno()) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }
    
    return $connetion;
}

function db_query($connetion, $query) {
    $result = mysqli_query($connetion, $query);
    /* check result */
    if ($result==NULL) {
        printf("Query '$query' failed:<br> %s\n", mysqli_error($connetion));
        exit();
    }
    return $result;
}

function db_print_result($result) {
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $i++;
        if ($i==1) {
            foreach ($row as $index => $value) {
                echo "$index, ";
            }
            echo "<br>\n";
        }
        foreach ($row as $value) {
            echo "$value, ";
        }
        echo "<br>\n";
    }
    return $i;
}

function db_close($connetion) {
    mysqli_close($connetion);
}

?>