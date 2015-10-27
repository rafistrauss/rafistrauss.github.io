<?php
/**
 * Created by IntelliJ IDEA.
 * User: rafi_000
 */

require_once('authorizer.php');
require_once('patchBuilder.php');

$patchGenerator = new patchBuilder();
$termsArray = array();

$incoming = $_POST['text'];
$arr = explode('~', $incoming);
$patchNumber = $arr[0];
unset($arr[0]);

if(sizeof($arr) === 2) {
    $termKeyId = $arr[1];
    $termText = $arr[2];
    $termsArray[] = array('termKeyId' => $termKeyId, 'termText' => $termText);
    $patchDescription = "Insert terms";
    $patchTemplate = $patchGenerator->patchTemplate($patchNumber, $patchDescription, $termsArray);
    echo $patchTemplate;
}


//$termTextHolder = implode("", $arr);
//$separateTerms = explode(",", $termTextHolder);
//$termsArray = array();


//foreach($separateTerms as $separateTerm) {
//    $termTokens = explode(' ', trim($separateTerm));
//    $termKeyId = $termTokens[0];
//    unset($termTokens[0]);
//    $termText = implode(" ", $termTokens);
//    $termsArray[] = array('termKeyId' => $termKeyId, 'termText' => $termText);
//}

//$patchDescription = "Insert terms";
//
//$patchTemplate = $patchGenerator->patchTemplate($patchNumber, $patchDescription, $termsArray);
//
//echo $patchTemplate;

