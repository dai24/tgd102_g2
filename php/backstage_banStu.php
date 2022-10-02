<?php
//目標：職缺停權
include('./PDO/Connection.php');

$stuId = isset($_GET["stuId"]) ? $_GET["stuId"] : '' ;
$stuId2 = isset($_GET["stuId2"]) ? $_GET["stuId2"] : '' ;

if(isset($_GET["stuId"])){
    $sql = "UPDATE STUDENT
            SET BAN = 1
            WHERE ID = :ID
            ";
    $stmt = $pdo->prepare($sql);
    $stmt -> bindValue(":ID" , $stuId);
    $stmt->execute(); //執行

}else if(isset($_GET["stuId2"])){
    $sql = "UPDATE STUDENT
            SET BAN = 0
            WHERE ID = :ID
            ";
    $stmt = $pdo->prepare($sql);
    $stmt -> bindValue(":ID" , $stuId2);
    $stmt->execute(); //執行
}
?>