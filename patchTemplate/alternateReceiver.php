<?php
/**
 * Created by PhpStorm.
 * User: Rapha
 * Date: 11/8/2015
 * Time: 1:15 PM
 */

require_once('authorizer.php');
require_once('claimr.php');
require_once('phpSlackbot/SlackBot.php');

$payload = $_POST['text'];
$userName = $_POST['user_name'];
$domain = $_POST['team_domain'];

$slackBotUrl = "https://marsb.slack.com/services/hooks/slackbot?token=WLjq0DPnWUsC6H4bVQo9sE4Z&channel=%23patches";
if($domain === "proseeder") {
    $slackBotUrl = "https://proseeder.slack.com/services/hooks/slackbot?token=lGe4xkszgrq4C81pp7GqlEo9&channel=%23autobuildtest";
}

$arr = explode(' ', trim($payload));

$entityType = $arr[0];
$id = $arr[1];

$claimr = new claimr();
$slackBot = new \lygav\slackbot\SlackBot($slackBotUrl);


if($claimr->setNextEntityId($db, $entityType, $userName, $id)) {
    $data = "$userName set the next $entityType to $id";
    $slackBot->text($data)->send();
}


