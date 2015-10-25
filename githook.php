<?php
/**
 * Created by IntelliJ IDEA.
 * User: rafi_000
 * Date: 10/25/2015
 * Time: 12:36 PM
 */

if(isset($_POST)) {
    file_put_contents("gitlog.log", print_r($_POST, true) .  "\n", FILE_APPEND);
}

