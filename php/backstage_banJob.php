<?php
//目標：職缺停權
include('./PDO/Connection.php');

$jobId = isset($_GET["jobId"]) ? $_GET["jobId"] : '' ;
$jobId2 = isset($_GET["jobId2"]) ? $_GET["jobId2"] : '' ;

if(isset($_GET["jobId"])){
    $sql = "UPDATE JOB
            SET BAN = 1
            WHERE ID = :ID
            ";
    $stmt = $pdo->prepare($sql);
    $stmt -> bindValue(":ID" , $jobId);
    $stmt->execute(); //執行

}else if(isset($_GET["jobId2"])){
    $sql = "UPDATE JOB
            SET BAN = 0
            WHERE ID = :ID
            ";
    $stmt = $pdo->prepare($sql);
    $stmt -> bindValue(":ID" , $jobId2);
    $stmt->execute(); //執行
}
?>