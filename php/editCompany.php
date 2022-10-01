<?php
    //目標：尋找資料庫的公司會員資料

    include('./PDO/Connection.php');

    $comId = $_GET['comId'];
    // $JOBNAME = $_POST['JOBNAME'];
    //建立SQL語法
    $member = json_decode(file_get_contents("php://input"), true); //接收前端傳來的json格式
    // echo $member;
    $sql = "SELECT *
            FROM COMPANY C
            JOIN COMPANY_COIN_DETAILS D
            ON C.ID = D.COMPANY_ID
            WHERE C.ID = :comid"
            ;    

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    
    $stmt = $pdo->prepare($sql);
    $stmt -> bindValue(":comid" , $comId);
    $stmt->execute(); //執行
    
    
    //---------------------------------------------------
    
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