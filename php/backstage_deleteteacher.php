<?php
//目標：職缺停權
include('./PDO/Connection.php');

$teacherId = $_GET["teacher"];

$sql = "DELETE FROM TEACHER
        WHERE ID = $teacherId
        ";
$stmt = $pdo->prepare($sql);
$stmt->execute(); //執行

echo  json_encode($members);
?>