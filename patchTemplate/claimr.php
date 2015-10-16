<?php

/**
 * Created by PhpStorm.
 * User: Rapha
 * Date: 8/3/2015
 * Time: 11:19 PM
 */
class claimr
{
    private $tableMapping;

    function __construct() {
        $this->tableMapping = [
            "patch" => "patches"
        ];
    }

    function claimEntity($db, $entityType, $claimer, $branch = "") {
        $query = $db->prepare("INSERT INTO $entityType (claimer, branch, date) VALUES (:claimer, :branch, now());");
        $res = $query->execute([":claimer" => $claimer, ":branch" => $branch]);
        if($res) {
            return $db->lastInsertId();
        }
        else {
            echo error_get_last();
            return false;
        }
    }

    function claimEntityWithId($db, $entityType, $id, $claimer, $branch = "") {
        $query = $db->prepare("INSERT INTO $entityType VALUES (:id, :claimer, :branch, now());");
        $res = $query->execute([":id" => $id, ":claimer" => $claimer, ":branch" => $branch]);
        if($res) {
            return $db->lastInsertId();
        }
        else {
            echo error_get_last();
            return false;
        }
    }

    function tableMapping($passedEntity) {
        return $this->tableMapping[$passedEntity];
    }

    function lastPatch($db) {
        return $db->query('SELECT max(id) FROM patches')->fetch(PDO::FETCH_NUM)[0];
    }
}