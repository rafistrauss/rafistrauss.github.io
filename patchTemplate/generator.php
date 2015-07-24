<?php
/**
 * Created by PhpStorm.
 * User: Rafi
 * Date: 7/23/2015
 * Time: 9:43 PM
 */


if(isset($_POST['patchNumber'])) {

    $patchNumber = $_POST['patchNumber'];
    $patchDescription = $_POST['patchDescription'];

}
else {
    $incoming = $_POST['text'];
    $arr = explode(' ',trim($incoming));
    $patchNumber = $arr[0];
    unset($arr[0]);
    $patchDescription = implode(" ", $arr);
}

$patchTemplate = "\n\n#Patch " . $patchNumber . " - " .
    $patchDescription . "\n\n\n" .
    "INSERT INTO patchhistory VALUES (" . $patchNumber . ", CURRENT_TIMESTAMP(), '"
    . $patchDescription . "' );";

echo $patchTemplate;