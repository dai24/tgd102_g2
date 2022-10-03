<?php
    //目標：尋找資料庫的公司會員資料

    include('./PDO/Connection.php');

    //建立SQL語法
    $member = json_decode(file_get_contents("php://input"), true); //接收前端傳來的json格式
    // $member['comId'] = $comId   ;
    // $member['describe'] = $describe   ;

    $sql = "UPDATE COMPANY AS C
            SET  C.DESCRIBE = :describe , C.PROPERTY = :PROPERTY ,C.TOTAL_EMPLOYEE = :TEMPLOYEE, C.ADDRESS = :ADRESS ,C.EMAIL = :EMAIL, C.PRINCIPLE_TEL = :PHONE , C.PHOTO = :PHOTO , C.SERVE = :SERVE
            WHERE C.ID = :comid";    

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    
    $stmt = $pdo->prepare($sql);
    $stmt -> bindValue(":comid" , $member['comId']);
    $stmt -> bindValue(":describe" , $member['describe']);
    $stmt -> bindValue(":PROPERTY" , $member['PROPERTY']);
    $stmt -> bindValue(":TEMPLOYEE" , $member['TEMPLOYEE']);
    $stmt -> bindValue(":ADRESS" , $member['ADDRESS']);
    $stmt -> bindValue(":EMAIL" , $member['EMAIL']);
    $stmt -> bindValue(":PHONE" , $member['PHONE']);
    $stmt -> bindValue(":PHOTO" , $member['PHOTO']);
    $stmt -> bindValue(":SERVE" , $member['SERVE']);
    $stmt->execute(); //執行
    
    
    //---------------------------------------------------
    
    $members = $stmt->fetchAll(); //撈到資料
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