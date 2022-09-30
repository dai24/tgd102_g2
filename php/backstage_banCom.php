<?php
//目標：職缺停權
include('./PDO/Connection.php');

$comId = isset($_GET["comId"]) ? $_GET["comId"] : '' ;
$comId2 = isset($_GET["comId2"]) ? $_GET["comId2"] : '' ;

if(isset($_GET["comId"])){
    $sql = "UPDATE COMPANY
            SET BAN = 1
            WHERE ID = :ID
            ";
    $stmt = $pdo->prepare($sql);
    $stmt -> bindValue(":ID" , $comId);
    $stmt->execute(); //執行

}else if(isset($_GET["comId2"])){
    $sql = "UPDATE COMPANY
            SET BAN = 0
            WHERE ID = :ID
            ";
    $stmt = $pdo->prepare($sql);
    $stmt -> bindValue(":ID" , $comId2);
    $stmt->execute(); //執行
}
?>