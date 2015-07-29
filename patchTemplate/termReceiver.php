<?php
/**
 * Created by IntelliJ IDEA.
 * User: rafi_000
 */

require_once('authorizer.php');
require_once('patchBuilder.php');

$patchGenerator = new patchBuilder();

$incoming = $_POST['text'];
$arr = explode(';', trim($incoming));
$patchNumber = $arr[1];
unset($arr[1]);
$termTextHolder = implode("", $arr);
$separateTerms = explode(",", $termTextHolder);
$termsArray = array();


foreach($separateTerms as $separateTerm) {
    $termTokens = explode(' ', trim($separateTerm));
    $termKeyId = $termTokens[0];
    unset($termTokens[0]);
    $termText = implode(" ", $termTokens);
    $termsArray[] = array('termKeyId' => $termKeyId, 'termText' => $termText);
}

$patchDescription = "Insert terms";

$patchTemplate = $patchGenerator->patchTemplate($patchNumber, $patchDescription, $termsArray);

echo $patchTemplate;

