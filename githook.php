<?php
/**
 * Created by IntelliJ IDEA.
 * User: rafi_000
 * Date: 10/25/2015
 * Time: 12:36 PM
 */

require_once('GitHub_WebHook.php');
$secret = getenv("SECRET_TOKEN");
$date = date("Y m D H:i:s");


$GHWH = new GitHub_WebHook();
if($GHWH->ValidateHubSignature($secret)) {
    exec('git pull');
    file_put_contents('gitlog.log', "Pulled at $date", FILE_APPEND);
}
else {
    file_put_contents('gitlog.log', "Failed at $date", FILE_APPEND);
}


