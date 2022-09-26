<?php
include('./PDO/Connection.php');

$searchJob = $_GET['searchJob1'];
$searchJob2 = "%$searchJob%";

// $member = json_decode(file_get_contents("php://input"), true); //接收前端傳來的json格式
$sql = "SELECT J.ID, J.CATEGORY ,J.COMPANY_ID ,J.NAME AS JOB_NAME , J.CATEGORY, C.NAME AS COM_NAME, J.DESCRIBE , J.JOB , C.CITY , J.SALARY , J.BROWSED , C.LOGO
        FROM COMPANY C
        INNER JOIN JOB J
        ON C.ID = J.COMPANY_ID
        WHERE J.NAME LIKE :JOB_NAME ";

$stmt = $pdo->prepare($sql);
$stmt -> bindValue(":JOB_NAME" , $searchJob2);

$stmt->execute(); //執行
$members = $stmt->fetchAll();
echo json_encode($members);

?>


