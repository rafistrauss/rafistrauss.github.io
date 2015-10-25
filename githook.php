<?php
/**
 * Created by IntelliJ IDEA.
 * User: rafi_000
 * Date: 10/25/2015
 * Time: 12:36 PM
 */



if(isset($_POST)) {
    $date = date("Y m D H:i:s");
    file_put_contents("gitlog.log", "Hit at $date" .  print_r($_POST, true) .  "\n", FILE_APPEND);
}

