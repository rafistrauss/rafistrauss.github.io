<?php

require_once("tokens.inc");
require_once("dbcreds.inc");

if(isset($_POST['token']) && in_array($_POST['token'], $tokens) ) {
    $db = new PDO("mysql:dbname=$dbname;host=$host", "$user", "$pw");
}
else {

    $date = date('Y-m-d H:i:s');
    file_put_contents("log.log", "--------------- $date - Received a payload of: " . print_r($_POST, true) . "\n", FILE_APPEND );
    sleep(5);
    header("HTTP/1.0 403 Forbidden");
    echo "Not authorized";
    exit;
}