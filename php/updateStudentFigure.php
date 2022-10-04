<?php
    //目標：更新學生會員的大頭貼圖片

    include('./PDO/Connection.php');

    //建立SQL語法
    $member = json_decode(file_get_contents("php://input"), true); //接收前端傳來的json格式

    

    $sql = "UPDATE STUDENT AS S
            SET  S.PICTURE = :picture
            WHERE S.ID = 1"
            ;    

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    
    $stmt = $pdo->prepare($sql);
    $stmt -> bindValue(":stuid" , $member['stuid']);
    $stmt -> bindValue(":PHONE" , $member['PHONE']);
    $stmt -> bindValue(":EMAIL" , $member['EMAIL']);
    $stmt -> bindValue(":PASSWORD" , $member['PASSWORD']);
    $stmt -> bindValue(":ADDRESS" , $member['ADDRESS']);

    $stmt->execute(); //執行
        
    //---------------------------------------------------
    
    $members = $stmt->fetchAll(); //撈到資料
    echo  json_encode($members);
?>