<?php
    //目標：尋找資料庫的公司會員資料

    include('./PDO/Connection.php');

    //建立SQL語法
    $member = json_decode(file_get_contents("php://input"), true); //接收前端傳來的json格式
    $sql = "select * from company"; 

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    
    $stmt = $pdo->prepare($sql);
 
    // echo "測試有跑到這裡";
    $stmt->execute(); //執行
    
    
    //---------------------------------------------------
    
    $members = $stmt->fetchAll();
    
    if ($stmt->rowCount() > 0){ //只要有撈到一筆資料 = 有撈到資料
        $member = $members[0];        
        $member["successful"] = true;
        session_start(); //啟用session 
        $_SESSION["loggedin"] = true;
        $_SESSION["member"] = (object) $member;
        
    } else{ //如果沒有撈到資料...
        $member["successful"] = false;
        $member["message"] = "撈取失敗";
    }
    
    echo  json_encode($member);
?>