
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
/**
 * @param $claimr
 * @param $db
 * @param $entityType
 * @param $userName
 * @param $description
 * @return mixed
 */
function claimSinglePatch($claimr, $db, $entityType, $userName, $description)
{
    $entityNumber = $claimr->claimEntity($db, $claimr->tableMapping($entityType), "$userName");
    $_POST['text'] = "$entityNumber $description";
    include 'patchReceiver.php';
    return $entityNumber;
}

if(is_numeric($arr[0])) {
    $numberOfEntities = $arr[0];
    $entityType = $arr[1];
    switch($entityType) {
        case "patch":
        case "patches":

            break;
        case "term":
        case "terms":
        case "termkey":
        case "termkeys":
            unset($arr[0]);
            unset($arr[1]);
            $termstring = implode("", $arr);
            $separateTerms = explode(",", $termstring);
            $entityNumbers = $claimr->claimEntities($db, "terms", $userName, $numberOfEntities);
            $patchNumber = $claimr->claimEntity($db, $claimr->tableMapping("patch"), "$userName");
            $slackBot->text($userName . " claimed patch #" . $patchNumber)->send();

            $resultingTermString = "";
            $startNumber = $entityNumbers[0];
            $lastIndex = count($entityNumbers) - 1;
            $endNumber = $entityNumbers[$lastIndex];

            for($i = 0; $i < $lastIndex; $i++) {
                $termText = "";
                if(isset($separateTerms[$i])) {
                     $termText = $separateTerms[$i];
                }
                $resultingTermString .= $entityNumbers[$i] . " " . $termText . ",";
            }
            $resultingTermString = substr($resultingTermString, 0, -1); //Remove trailing comma

            $_POST['text'] = "$resultingTermString;$patchNumber";
            include 'termReceiver.php';
            $data = "$userName claimed termkeys $startNumber - $endNumber";
            break;
    }
}
else {
    $entityType = $arr[0];
    unset($arr[0]);
    $description = implode(" ", $arr);
    switch($entityType) {
        case "patch":
            $entityNumber = claimSinglePatch($claimr, $db, $entityType, $userName, $description);
            break;
        case "term":
        case "termkey":
            $entityNumber = $claimr->claimEntity($db, $claimr->tableMapping($entityType), "$userName");
            $patchNumber = $claimr->claimEntity($db, $claimr->tableMapping("patch"), "$userName");
            $slackBot->text($userName . " claimed patch #" . $patchNumber)->send();
            $_POST['text'] = "$patchNumber~$entityNumber~$description";
            include 'termHandler.php';
            break;
        default:
            $entityNumber = $claimr->claimEntity($db, $claimr->tableMapping($entityType), "$userName");
            break;
    }
    $data = "$userName claimed $entityType #$entityNumber";
}


$slackBot->text($data)->send();






//$numberOfEntitiesToClaim = 1;
//$description = "";
//if(isset($arr[1])) {
//    if(is_numeric($arr[1])) {
//        $numberOfEntitiesToClaim = $arr[1];
//        if(isset($arr[2])) {
//            unset($arr[0], $arr[1]);
//            $description = implode(" ", $arr);
//        }
//
//    }
//    else {
//        unset($arr[0]);
//        $description = implode(" ", $arr);
//    }
//
//}
//
//
//
//for($i = 0; $i < $numberOfEntitiesToClaim; $i++) {
//
//    $patchNumber = $claimr->claimEntity($db, $claimr->tableMapping($entityType), "$userName");
//
//
//
//
//    $data = "$userName claimed $entityType #$patchNumber";
//    $slackBot->text($data)->send();
//
//    $newPayload = "$patchNumber $description";
//
//    $_POST['text'] = $newPayload;
//
//    include 'patchReceiver.php';
//}
