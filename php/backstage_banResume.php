<?php
//目標：履歷停權
include('./PDO/Connection.php');

$resumeId = isset($_GET["resumeId"]) ? $_GET["resumeId"] : '' ;
$resumeId2 = isset($_GET["resumeId2"]) ? $_GET["resumeId2"] : '' ;

if(isset($_GET["resumeId"])){
    $sql = "UPDATE RESUME
            SET BAN = 1
            WHERE ID = :ID
            ";
    $stmt = $pdo->prepare($sql);
    $stmt -> bindValue(":ID" , $resumeId);
    $stmt->execute(); //執行

}else if(isset($_GET["resumeId2"])){
    $sql = "UPDATE RESUME
            SET BAN = 0
            WHERE ID = :ID
            ";
    $stmt = $pdo->prepare($sql);
    $stmt -> bindValue(":ID" , $resumeId2);
    $stmt->execute(); //執行
}
?>