<?php
    //目標：尋找資料庫的履歷診療老師資料

    include('./PDO/Connection.php');

    //建立SQL語法
    // $member = json_decode(file_get_contents("php://input"), true); //接收前端傳來的json格式
    $sql_jobs = "SELECT TJC.JOBNAME as tjobname
            FROM TEACHER_JOB AS TJC where TJC.TEACHERID = 1;    
    ";    


    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    
    $stmt_jobs = $pdo->prepare($sql_jobs);
    $stmt_jobs->execute(); //執行
    
    
    //---------------------------------------------------
    
    $teacherjob = $stmt_jobs->fetchAll(); //撈到資料
        
    // if ($stmt->rowCount() > 0){ //只要有撈到一筆資料 = 有撈到資料
    //     $member["successful"] = true; //successful的屬性數值顯示 true        
    // } else{ //如果沒有撈到資料...
    //     $member["successful"] = false;
    // }
    
    // echo "測試有跑到這裡";
    echo json_encode($teacherjob);
?>