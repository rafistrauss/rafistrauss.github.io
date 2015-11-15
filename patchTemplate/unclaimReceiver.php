<?php
/**
 * Created by IntelliJ IDEA.
 * User: Rafi
 * Date: 11/14/2015
 * Time: 9:26 PM
 */

require_once('authorizer.php');
require_once('claimr.php');
require_once('phpSlackbot/SlackBot.php');

$payload = $_POST['text'];
$userName = $_POST['user_name'];
$domain = $_POST['team_domain'];

$slackBotUrl = "https://marsb.slack.com/services/hooks/slackbot?token=$marsbSlackToken&channel=%23patches";
if($domain === "proseeder") {
    $slackBotUrl = "https://proseeder.slack.com/services/hooks/slackbot?token=$proseederSlackToken&channel=%23patches-o_houlihan";
}

$date = date("Y m D H:i:s");
file_put_contents("log.log", "Hit at $date from $domain \n\n", FILE_APPEND);

$arr = explode(' ', trim($payload));
$claimr = new claimr();
$slackBot = new \lygav\slackbot\SlackBot($slackBotUrl);
$entityNumber = -1;

$entityType = $arr[0];
$entityNumber = $arr[1];
$override = false;
if(isset($arr[2]) && $arr[2] === "override") {
    $override = true;
}

$data = $claimr->unclaimEntity($db, $entityType, $entityNumber, $userName, $override);
if($data) {
    $slackBot->text($data)->send();
}