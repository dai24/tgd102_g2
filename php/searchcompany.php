<?php
    //目標：尋找資料庫的公司會員資料

    include('./PDO/Connection.php');
    
    //建立SQL語法
    $member = json_decode(file_get_contents("php://input"), true); //接收前端傳來的json格式

    $content = 2; //設定每頁有多少筆資料
    $omitData = 0;
    $endData = $content;

    $page = $_get["pageContent"]; //前端傳來要第幾頁的資料
    $omitData = $content * $page;
    $endData = $omitData + $content;

    $sql = "SELECT
                c.ID, c.NAME, c.ADDRESS, c.PROPERTY, c.PRINCIPLE, c.CITY, c.DISTRICT,
                c.ADDRESS, c.CREATE_DATE, d.PRICE 
            FROM company c
                JOIN COMPANY_COIN_DETAILS d
                ON c.ID = d.COMPANY_ID
            LIMIT
                $omitData, $endData;
            "
            ;    
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    
    $stmt = $pdo->prepare($sql);
    
    //---------------------------------------------------
    
    $members = $stmt->fetchAll(); //撈到資料
        
    if ($stmt->rowCount() > 0){ //只要有撈到一筆資料 = 有撈到資料
        $member["successful"] = true; //successful的屬性數值顯示 true        
    } else{ //如果沒有撈到資料...
        $member["successful"] = false;
    }
    
    
    echo  json_encode($members);
?>