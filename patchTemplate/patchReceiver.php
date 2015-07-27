<?php
/**
 * Created by PhpStorm.
 * User: Rafi
 * Date: 7/23/2015
 * Time: 9:43 PM
 */


require_once('authorizer.php');
require_once('patchBuilder.php');


$patchGenerator = new patchBuilder();

$incoming = $_POST['text'];
$arr = explode(' ', trim($incoming));
$patchNumber = $arr[0];
unset($arr[0]);

$patchDescription = implode(" ", $arr);

$patchTemplate = $patchGenerator->patchTemplate($patchNumber, $patchDescription);

echo $patchTemplate;
