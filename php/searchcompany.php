<?php
    //目標：後台尋找資料庫的公司會員資料

    include('./PDO/Connection.php');
    
    //建立SQL語法
    $member = json_decode(file_get_contents("php://input"), true); //接收前端傳來的json格式

    $content = 5; //設定每頁有多少筆資料
    $omitData = 0; //預設 省略0筆
    
    $page = isset($_GET["page"]) ? $_GET["page"] : 1 ; //前端傳來要第幾頁的資料
    $omitData = $content * ( $page - 1 ) ; //要省略多少筆資料 
    
    $company = isset($_GET["company"]) ? $_GET["company"] : 0; //查詢功能
    $company2 = "%$company%";

    if(isset($_GET["company"])){
        // echo "有查詢";        
        $sql = "SELECT
                    C.ID, C.NAME, C.ADDRESS, C.PROPERTY, C.PRINCIPLE, C.CITY, C.DISTRICT,
                    C.ADDRESS, C.CREATE_DATE, C.BAN, D.PRICE 
                FROM company C
                JOIN COMPANY_COIN_DETAILS D
                ON C.ID = D.COMPANY_ID
                WHERE C.ID like :ID or C.`NAME` like :NAME
                LIMIT
                $omitData, $content;
                "
                ;  
        $stmt = $pdo->prepare($sql);
        $stmt -> bindValue(":ID" , $company2);
        $stmt -> bindValue(":NAME" , $company2);
        $stmt->execute(); //執行 
    }else{
        // echo "未查詢";
        $sql = "SELECT
                    C.ID, C.NAME, C.ADDRESS, C.PROPERTY, C.PRINCIPLE, C.CITY, C.DISTRICT,
                    C.ADDRESS, C.CREATE_DATE, C.BAN, D.PRICE 
                FROM COMPANY C
                JOIN COMPANY_COIN_DETAILS D
                ON C.ID = D.COMPANY_ID
                LIMIT
                $omitData, $content;
        "
        ;   
        //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料    
        $stmt = $pdo->prepare($sql);    
        $stmt->execute(); //執行
    }
    
    //---------------------------------------------------
    
    $members = $stmt->fetchAll(); //撈到資料
        
    if ($stmt->rowCount() > 0){ //只要有撈到一筆資料 = 有撈到資料
        $member["successful"] = true; //successful的屬性數值顯示 true        
    } else{ //如果沒有撈到資料...
        $member["successful"] = false;
    }
    
    
    echo  json_encode($members);
?>