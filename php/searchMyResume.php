<?php
    //目標：前台 學生會員專區顯示自己的履歷

    include('./PDO/Connection.php');
    
    $stuId = $_GET["stuId"]; //前端傳來學生id
    
    $sql = "SELECT
                ID, STUDENT_ID, `FILE_NAME`, CATEGORY, IMG_PATH, LIKE_COUNT, CREATE_DATE
            FROM RESUME
            WHERE STUDENT_ID = $stuId;
            ";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(); //執行    
    $members = $stmt->fetchAll(); //撈到資料

    echo  json_encode($members);
?>