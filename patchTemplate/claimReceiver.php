<?php
/**
 * Created by PhpStorm.
 * User: Rapha
 * Date: 8/9/2015
 * Time: 10:26 PM
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

$date = date("Y m D H:i:s");
file_put_contents("log.log", "Hit at $date from $domain \n\n", FILE_APPEND);

$arr = explode(' ', trim($payload));
$entityType = $arr[0];
$numberOfEntitiesToClaim = 1;
$description = "";
if(isset($arr[1])) {
    if(is_numeric($arr[1])) {
        $numberOfEntitiesToClaim = $arr[1];
        if(isset($arr[2])) {
            unset($arr[0], $arr[1]);
            $description = implode(" ", $arr);
        }

    }
    else {
        unset($arr[0]);
        $description = implode(" ", $arr);
    }

}

$claimr = new claimr();
$slackBot = new \lygav\slackbot\SlackBot($slackBotUrl);

for($i = 0; $i < $numberOfEntitiesToClaim; $i++) {

    $patchNumber = $claimr->claimEntity($db, $claimr->tableMapping($entityType), "$userName");




    $data = "$userName claimed $entityType #$patchNumber";
    $slackBot->text($data)->send();

    $newPayload = "$patchNumber $description";

    $_POST['text'] = $newPayload;

    include 'patchReceiver.php';
}
