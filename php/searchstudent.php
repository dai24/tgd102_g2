<?php
    //目標：尋找資料庫的公司會員資料

    include('./PDO/Connection.php');

    //建立SQL語法
    $member = json_decode(file_get_contents("php://input"), true); //接收前端傳來的json格式

    $content = 5; //設定每頁有多少筆資料
    $omitData = 0; //預設 省略0筆
    
    $page = isset($_GET["page"]) ? $_GET["page"] : 1 ; //前端傳來要第幾頁的資料
    
    $omitData = $content * ( $page - 1 ) ; //要省略多少筆資料  

    $student = isset($_GET["student"]) ? $_GET["student"] : 0; //查詢功能
    $student2 = "%$student%";
    
    if(isset($_GET["student"])){
        // echo "有查詢";
        
        $sql = "SELECT
                    ID, `NAME`, GENDER, BIRTHDAY, `COIN`, BLACKLIST, BAN, EMAIL, PHONE, `ADDRESS`,
                    CREATE_DATE
                FROM STUDENT 
                WHERE ID like :ID or `NAME` like :NAME
                LIMIT
                    $omitData, $content;
                ";
        $stmt = $pdo->prepare($sql);
        $stmt -> bindValue(":ID" , $student2);
        $stmt -> bindValue(":NAME" , $student2);
        $stmt->execute(); //執行      

    }else{
        // echo "未查詢";
        $sql = "SELECT
                    ID, `NAME`, GENDER, BIRTHDAY, `COIN`, BLACKLIST, BAN, EMAIL, PHONE, `ADDRESS`,
                    CREATE_DATE
                FROM STUDENT 
                LIMIT
                    $omitData, $content;
                ";
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