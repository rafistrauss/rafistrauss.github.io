<?php
/**
 * Created by PhpStorm.
 * User: Rapha
 * Date: 10/15/2015
 * Time: 10:10 PM
 */


require_once("dbcreds.inc");
$db = new PDO("mysql:dbname=$dbname;host=$host", "$user", "$pw");