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

    function setNextEntityId($db, $entityType, $claimer, $entityId, $branch = "") {
        $table = $this->tableMapping($entityType);
        if($this->lastEntity($db, $entityType) < $entityId) {

            $query = $db->prepare("INSERT INTO $table (id, claimer, branch, date) VALUES (:entityId, :claimer, :branch, now());");
            $res = $query->execute([":entityId" => $entityId, ":claimer" => $claimer, ":branch" => $branch]);

            if ($res) {
//                return $db->lastInsertId();
                file_put_contents("log.log", "Set next entity\n", FILE_APPEND);
                echo "Successfully set next value";
                return true;
            } else {

                file_put_contents("log.log", "Failed: " . print_r(error_get_last(), true) . "\n" .
                    print_r($db->errorInfo(), true), FILE_APPEND);

                echo print_r(error_get_last(), true);
                return false;
            }
        }
        else {
            echo "New id is smaller than next available one";
            return false;
        }
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

    function lastEntity($db, $entityType) {
        $tableName = $this->tableMapping($entityType);
        $res = $db->query("SELECT max(id) FROM $tableName");
        if($res !== false) {
            return $res->fetch(PDO::FETCH_NUM)[0];
        }
        else {
            echo "Failed to get last $entityType";
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