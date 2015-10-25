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
            "patch" => "patches",
            "term" => "terms",
            "template" => "templates",
            "resource" => "resourceTypes",
            "resourceType" => "resourceTypes"
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
        if(array_key_exists($passedEntity, $this->tableMapping)) {
            return $this->tableMapping[$passedEntity];
        }
        else {
            echo "Table doesn't exist";
            return false;
        }

    }

    function lastPatch($db) {
        $res = $db->query('SELECT max(id) FROM patches');
        if($res !== false) {
            return $res->fetch(PDO::FETCH_NUM)[0];
        }
        else {
            return "Failed to get last patch";
        }
    }
}