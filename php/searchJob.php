<?php
include('./PDO/Connection.php');

$content = 2; //設定每頁有多少筆資料
$omitData = 0; //預設 省略0筆

$page = $_GET["page"]; //前端傳來要第幾頁的資料
$omitData = $content * ( $page - 1 ) ; //要省略多少筆資料

// $member = json_decode(file_get_contents("php://input"), true); //接收前端傳來的json格式
$sql = "SELECT
            j.ID, j.NAME, j.COMPANY_ID, j.WORKPLACE, j.SCALE, 
            j.SALARY, j.WFH, j.JOB, j.BROWSED, j.BAN, j.CREATE_DATE, 
            c.NAME as COMPANYNAME
        FROM JOB j
            JOIN COMPANY c
            on j.COMPANY_ID = c.ID
        LIMIT
        $omitData, $content;
         ";

$stmt = $pdo->prepare($sql);

$stmt->execute(); //執行
$members = $stmt->fetchAll();
echo json_encode($members);

?>


