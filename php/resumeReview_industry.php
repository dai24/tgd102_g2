<?php

    include('./PDO/Connection.php');

    //目標：尋找資料庫的擅長產業資料
    $sql_industryclass = "SELECT INDUSTRYCLASSNAME AS industryclassname FROM INDUSTRYCLASS;";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料

    // //產業
    $stmt_industryclass = $pdo->prepare($sql_industryclass);
    $stmt_industryclass->execute(); //執行

    //---------------------------------------------------

    $industryclassList = $stmt_industryclass->fetchAll(); //撈到資料
    
    // echo "測試有跑到這裡";

    echo json_encode($industryclassList);

?>