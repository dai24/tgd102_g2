<?php
    include('./PDO/Connection.php');

    // //目標：尋找資料庫的擅長職務資料
    $sql_jobclass = "SELECT JOBCLASSNAME AS jobclassname FROM JOBCLASS;";
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料

    // //職務
    $stmt_jobclass = $pdo->prepare($sql_jobclass);
    $stmt_jobclass->execute(); //執行
     
    //---------------------------------------------------

    $jobclassList = $stmt_jobclass->fetchAll();
    
    // echo "測試有跑到這裡";

    echo json_encode($jobclassList);
?>