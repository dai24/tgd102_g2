<?php

    include('./PDO/Connection.php');
    
    //目標們
    //目標：尋找資料庫的履歷診療老師資料
    $sql_teacher = "SELECT ID as id, TNAME as tname, PHOTO as img, JOBTITLE as tjobtitle , TIMES as ttimes FROM TEACHER;";

    // //目標：尋找資料庫的擅長產業資料
    $sql_industryclass = "SELECT INDUSTRYCLASSNAME AS industryclassname FROM INDUSTRYCLASS;";

    // //目標：尋找資料庫的擅長職務資料
    $sql_jobclass = "SELECT JOBCLASSNAME AS jobclassname FROM JOBCLASS;";
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    // 老師
    $stmt_teacher = $pdo->prepare( $sql_teacher);
    $stmt_teacher->execute(); //執行

    // //產業
    $stmt_industryclass = $pdo->prepare($sql_industryclass);
    $stmt_industryclass->execute(); //執行

    // //職務
    $stmt_jobclass = $pdo->prepare($sql_jobclass);
    $stmt_jobclass->execute(); //執行
    
    
    //---------------------------------------------------
    $teacherList = $stmt_teacher->fetchAll(); //撈到資料
    $industryclassList = $stmt_industryclass->fetchAll(); //撈到資料
    $jobclassList = $stmt_jobclass->fetchAll();
    
    // echo "測試有跑到這裡";
    echo json_encode($teacherList,);
    echo json_encode($industryclassList);
    echo json_encode($jobclassList);
?>