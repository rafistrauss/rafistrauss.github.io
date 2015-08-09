<?php


require_once("tokens.inc");
require_once("dbcreds.inc");

if(isset($_POST['token']) && in_array($_POST['token'], $tokens) ) {
    $db = new PDO("mysql:dbname=$dbname;host=$host", "$user", "$pw");
}
else {
    file_put_contents("log.log", "Received a token of: " . $_POST['token'] . "\n", FILE_APPEND );
    sleep(5);
    header("HTTP/1.0 403 Forbidden");
    exit;
}