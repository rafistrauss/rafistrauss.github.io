<?php
/**
 * Created by PhpStorm.
 * User: Rapha
 * Date: 10/15/2015
 * Time: 10:05 PM
 */

require_once('noAuth.php');
require_once('claimr.php');

$claimr = new claimr();

echo $claimr->lastPatch($db);
