<?php


require_once("tokens.inc");
require_once("dbcreds.inc");

if(isset($_REQUEST['token']) && in_array($_REQUEST['token'], $tokens) ) {
    $db = new PDO("mysql:dbname=$dbname;host=$host", "$user", "$pw");
}
else {

    file_put_contents("log.log", "Received a payload of: " . print_r($_POST, true) . "\n", FILE_APPEND );
    sleep(5);
    header("HTTP/1.0 403 Forbidden");
    exit;
}