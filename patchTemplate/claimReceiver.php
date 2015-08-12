<?php
/**
 * Created by PhpStorm.
 * User: Rapha
 * Date: 8/9/2015
 * Time: 10:26 PM
 */

require_once('authorizer.php');
require_once('claimr.php');

$payload = $_POST['text'];
$userName = $_POST['user_name'];

$arr = explode(' ', trim($payload));
$entityType = $arr[0];
$branchName = "";
$description = "";
if(isset($arr[1])) {
    $branchName = $arr[1];
}
if(isset($arr[2])) {
    unset($arr[0], $arr[1]);
    $description = implode(" ", $arr);
}

$claimr = new claimr();
$patchNumber = $claimr->claimEntity($db, $claimr->tableMapping($entityType), "$userName", $branchName);

$slackBotUrl = "https://marsb.slack.com/services/hooks/slackbot?token=WLjq0DPnWUsC6H4bVQo9sE4Z&channel=%23patches";


$data = "$userName claimed $entityType #$patchNumber";

// build the urlencoded data

// open connection
$ch = curl_init();

// set the url, number of POST vars, POST data
curl_setopt($ch, CURLOPT_URL, $slackBotUrl);
curl_setopt($ch, CURLOPT_TRANSFERTEXT, $data);

// execute post
$result = curl_exec($ch);

// close connection
curl_close($ch);

$newPayload = "$patchNumber $description";

$_POST['text'] = $newPayload;

include 'patchReceiver.php';
