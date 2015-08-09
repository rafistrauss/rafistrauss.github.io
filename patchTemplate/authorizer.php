<?php


if(isset($_POST['token']) && in_array($_POST['token'], $tokens) ) {
    $db = new PDO("mysql:dbname=$dbname;host=$host", "$user", "$pw");
}
else {
    sleep(5);
    header("HTTP/1.0 403 Forbidden");
    exit;
}