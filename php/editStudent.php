<?php
    //目標：尋找資料庫的學生會員資料

    include('./PDO/Connection.php');

    $stuId = $_GET['stuId'];
    //建立SQL語法
    $member = json_decode(file_get_contents("php://input"), true); //接收前端傳來的json格式
    // echo $member;
    $sql = "SELECT *
            FROM Student S
            WHERE S.ID = :stuid"
            ;    

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    
    $stmt = $pdo->prepare($sql);
    $stmt -> bindValue(":stuid" , $stuId);
    $stmt->execute(); //執行
    
    
    //---------------------------------------------------
    
    $members = $stmt->fetchAll(); //撈到資料
    session_start();

    echo  json_encode($members);
?>