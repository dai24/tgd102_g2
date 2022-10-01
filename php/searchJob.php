<?php
//目標：backstage頁面尋找資料庫job資料
include('./PDO/Connection.php');

$content = 2; //設定每頁有多少筆資料
$omitData = 0; //預設 省略0筆

$page = isset($_GET["page"]) ? $_GET["page"] : 1 ; //前端傳來要第幾頁的資料，若無傳值則代1

$omitData = $content * ( $page - 1 ) ; //要省略多少筆資料

$comjob = isset($_GET["comId"]) ? $_GET["comId"] : 1;
// $member = json_decode(file_get_contents("php://input"), true); //接收前端傳來的json格式

$job = isset($_GET["job"]) ? $_GET["job"] : 0; //查詢功能
$job2 = "%$job%";

if(isset($_GET["comId"])){
    $sql = "SELECT
                j.ID, j.NAME, j.COMPANY_ID, j.WORKPLACE, j.SCALE, 
                j.SALARY, j.WFH, j.JOB, j.DESCRIBE,  j.REQUIRE, j.CONDITION, j.BROWSED, j.PLUS, j.BAN, j.CREATE_DATE, 
                j.CATEGORY, j.DEPART,                
                c.NAME as COMPANYNAME
            FROM JOB j
                JOIN COMPANY c
                on j.COMPANY_ID = c.ID
            WHERE j.COMPANY_ID = :ID 
            LIMIT
            $omitData, $content;
            ";
            $stmt = $pdo->prepare($sql);
            $stmt -> bindValue(":ID" , $comjob);
            $stmt->execute(); //執行
            
}else if(isset($_GET["job"])){
    // echo "有查詢";
    $sql = "SELECT
                j.ID, j.NAME, j.COMPANY_ID, j.WORKPLACE, j.SCALE, 
                j.SALARY, j.WFH, j.JOB, j.BROWSED, j.BAN, j.CREATE_DATE, 
                c.NAME as COMPANYNAME
            FROM JOB j
                JOIN COMPANY c
                on j.COMPANY_ID = c.ID   
            WHERE j.ID like :ID or j.NAME like :NAME         
            LIMIT
            $omitData, $content;
            ";
            $stmt = $pdo->prepare($sql);
            $stmt -> bindValue(":ID" , $job2);
            $stmt -> bindValue(":NAME" , $job2);
            $stmt->execute(); //執行
}else{
    // echo "未查詢";
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
}

$members = $stmt->fetchAll();
echo json_encode($members);


?>


