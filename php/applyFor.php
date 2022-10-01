<?php
    include('./PDO/Connection.php');
    $StudentTd = $_GET['StudentTd'];
    $sql = "SELECT R.IMG_PATH , R.ID , R.STUDENT_ID , R.FILE_NAME
            FROM RESUME R
            JOIN STUDENT S
            ON S.ID = R.STUDENT_ID
            WHERE R.STUDENT_ID = :SID;
            "
            ;  
    $stmt = $pdo->prepare($sql);
    $stmt -> bindValue(":SID" , $StudentTd);
    $stmt->execute(); //執行
    $members = $stmt->fetchAll(); //撈到資料
    session_start();
    // $_SESSION["JOBNAME"] = $JOBNAME;
    // $_SESSION["JOBNAME"] = $member;
    // if ($stmt->rowCount() > 0){ //只要有撈到一筆資料 = 有撈到資料
    //     $member["successful"] = true; //successful的屬性數值顯示 true        
    // } else{ //如果沒有撈到資料...
    //     $member["successful"] = false;
    // }
    
    // echo "測試有跑到這裡";

    echo  json_encode($members);

?>