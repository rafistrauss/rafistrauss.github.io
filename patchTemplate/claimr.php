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
            "patches" => "patches",
            "term" => "terms",
            "terms" => "terms",
            "template" => "templates",
            "templates" => "templates",
            "resource" => "resourceTypes",
            "resources" => "resourceTypes",
            "resourceType" => "resourceTypes",
            "resourceTypes" => "resourceTypes"
        ];

        date_default_timezone_set("America/New_York");
        error_reporting(1);

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
        $start = $this->getBeginningStatement($entityType);

        $statement = " $start INSERT INTO $entityType (id, claimer, branch, date) VALUES (@maxid + 1, :claimer, :branch, now());";

        $query = $db->prepare($statement);
        $res = $query->execute([":claimer" => $claimer, ":branch" => $branch]);
        var_dump($statement);
        if($res) {
            return $db->lastInsertId();
        }
        else {
            echo "Failed";
            $this->logError(print_r(error_get_last()));
            return false;
        }
    }

    function unclaimEntity($db, $entityType, $id, $claimer, $override = false) {

        $tableName = $this->tableMapping($entityType);

        $queryString = "DELETE FROM $tableName WHERE id = :id";
        $valueArray = [":id" => $id];

//        if(!$override) {
//            $queryString .= " and claimer = ':claimer'";
//            $valueArray[":claimer"] = $claimer;
//        }
        $query = $db->prepare($queryString);
        $res = $query->execute($valueArray);
        if(!$res) {
            echo "There was some error";
            $this->logError(print_r($db->errorInfo(), true));
            $this->logError(print_r(error_get_last(), true));
            return false;
        }
        else if($res === 0) {
            echo "Did not unclaim entity";
        }
        else {
            return "$claimer unclaimed $entityType $id";
        }
    }

    function claimEntities($db, $entityType, $claimer, $numberOfEntities, $branch = "") {
        $queryString = "";
        for($i = 0; $i < $numberOfEntities; $i++) {
            $queryString .= "INSERT INTO $entityType (claimer, branch, date) VALUES (:claimer, :branch, now());";
        }
        $query = $db->prepare("{$queryString}");
        $res = $query->execute([":claimer" => $claimer, ":branch" => $branch]);
        if($res) {
            $itemsArray = array();
            $lastInsertId = $db->lastInsertId();
            $firstInsertId = $lastInsertId - $numberOfEntities;
            for($i = $firstInsertId; $i <= $lastInsertId; $i++) {
                $itemsArray[] = $i;
            }
            return $itemsArray;
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

    function getBeginningStatement($entityType) {
        $table = $this->tableMapping($entityType);
        $stmt = " SET @maxid := (SELECT max(id) FROM $table);";
        $this->logError($table);
        $this->logError($stmt);
        return $stmt;
    }

    function logError($errorMessage) {
        $beginning = "\n\n" .  date("Y n, d H:i:s");
        file_put_contents("log.log", $beginning . $errorMessage, FILE_APPEND);
    }
}