<?php
/**
 * Created by PhpStorm.
 * User: Rafi
 * Date: 7/23/2015
 * Time: 9:43 PM
 */


if(isset($_POST['token']) && ($_POST['token'] === "iUEeRyKIKhM8F4wngsZog4i2" || $_POST['token'] === "HLPjcEavFiSUYUHRWc1Jrku6")) {


    if (isset($_POST['patchNumber'])) {

        $patchNumber = $_POST['patchNumber'];
        $patchDescription = $_POST['patchDescription'];

    } else {
        $incoming = $_POST['text'];
        $arr = explode(' ', trim($incoming));
        $patchNumber = $arr[0];
        unset($arr[0]);
        $patchDescription = implode(" ", $arr);
    }

    $patchTemplate = "\n\n#Patch " . $patchNumber . " - " .
        $patchDescription . "\n\n\n" .
        "INSERT INTO patchhistory VALUES (" . $patchNumber . ", CURRENT_TIMESTAMP(), '"
        . $patchDescription . "' );";

    echo $patchTemplate;
}
else {
    sleep(5);
    header("HTTP/1.0 403 Forbidden");
}