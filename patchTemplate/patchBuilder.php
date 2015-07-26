<?php

/**
 * Created by IntelliJ IDEA.
 * User: rafi_000
 */
class patchBuilder
{
    function __construct() {

    }

    function patchTemplate($patchNumber, $patchDescription, $terms = null) {
        $patchTemplate = "\n\n#Patch " . $patchNumber . " - " .
            $patchDescription . "\n\n" . $this->termsTemplate($terms) . "\n\n" .
            "INSERT INTO patchhistory VALUES (" . $patchNumber . ", CURRENT_TIMESTAMP(), '"
            . $patchDescription . "' );";

        return $patchTemplate;
    }

    /**
     * @param $terms Array of array of termkeyid=>termtext
     * @return string
     */
    function termsTemplate($terms) {

        if($terms === null) {
            return "";
        }

        $termTemplate = "set @maxterm = (SELECT max(id) from term);\n\n";

        for($i = 0; $i < sizeof($terms); $i++) {
            $termId = $i + 1;
            $termKeyId = $terms[$i]['termKeyId'];
            $termText = $terms[$i]['termText'];
            $termTemplate .= "INSERT INTO `term` (`id`, `siteId`, `localeId`, `termkeyid`, `termtext`, `approved`, `createdby`)
            VALUES (@maxterm + $termId,  0, 1, $termKeyId, '$termText', 1,1);";
            $termTemplate .= "\n";
        }

        return $termTemplate;

    }


}