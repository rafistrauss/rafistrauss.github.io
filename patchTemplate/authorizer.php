<?php



if(isset($_POST['token']) &&
    ($_POST['token'] === "iUEeRyKIKhM8F4wngsZog4i2" ||
        $_POST['token'] === "HLPjcEavFiSUYUHRWc1Jrku6" ||
        $_POST['token'] === "9ntxBhATEodzozfBdLGS1oeZ")
    ) {

}
else {
    sleep(5);
    header("HTTP/1.0 403 Forbidden");
    exit;
}