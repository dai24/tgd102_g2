<?php
    include('./PDO/Connection.php');

    // //目標：尋找會員的履歷們
    $StudentId = $_GET['StudentId'];    // ['StudentId'] 是 resumeReview.JS 中  fetch(`../php/resumeReviewcard.php?StudentId= 的 StudentId
    $sql_whoseresume = "SELECT R.FILE_NAME ,R.IMG_PATH , R.ID , R.STUDENT_ID
                        FROM RESUME R
                        JOIN STUDENT S
                        ON S.ID = R.STUDENT_ID
                        WHERE R.STUDENT_ID = :SID
                        ";
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料

    // //職務
    $stmt_whoseresume = $pdo->prepare($sql_whoseresume);
    $stmt_whoseresume -> bindValue(":SID" , $StudentId);   // :SID 去得到  $StudentId 再去資料庫中叫出來
    $stmt_whoseresume->execute(); //執行
    $resumeList = $stmt_whoseresume->fetchAll();
    session_start();
    
    // echo "測試有跑到這裡";
    echo json_encode($resumeList);
?>