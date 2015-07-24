<?php
/**
 * Created by PhpStorm.
 * User: Rafi
 * Date: 7/23/2015
 * Time: 9:43 PM
 */


$patchNumber = $_POST['patchNumber'];
$patchDescription = $_POST['patchDescription'];


$patchTemplate = "\n\n#Patch " . $patchNumber . " - " .
    $patchDescription . "\n\n\n" .
    "INSERT INTO patchhistory VALUES (" .  $patchNumber . ", CURRENT_TIMESTAMP(), '"
    . $patchDescription . "' );";

echo $patchTemplate;