<?php
include('./PDO/Connection.php');

$category = isset($_GET['category'])?$_GET['category']:'';
if(isset($_GET['category']) && $_GET['category'] != '全部'){   
    $sql = "SELECT STUDENT_ID,LIKE_COUNT,IMG_PATH FROM RESUME WHERE MODEL = 2 AND CATEGORY = ?";
   
}else{
    $sql = "SELECT STUDENT_ID,LIKE_COUNT,IMG_PATH FROM RESUME WHERE MODEL = 2";
    
}
    $statement = $pdo->prepare($sql);
    if(isset($_GET['category']) && $_GET['category'] != '全部'){
        $statement->bindValue(1,$category);
    }
    $statement->execute();
    // $members = $statement->fetchAll();
    // if($statement->rowCount() > 0){
    //     // $member = $members;
    //     $member['successful'] = true;
    //     $member['message'] = "取得履歷範本".$category."資料成功";
    // }else{
    //     $member['successful'] = false;
    //     $member['message'] = "取得覆歷範本".$category."資料失敗";
    // }
    
    echo json_encode($statement->fetchAll());

?>