<?php
include('./PDO/Connection.php');

$category = isset($_GET['category'])?$_GET['category']:'';
if(isset($_GET['category']) && $_GET['category'] != '全部'){   
    $sql = "SELECT STUDENT_ID,LIKE_COUNT,IMG_PATH, CREATE_DATE FROM RESUME WHERE MODEL = 2 AND CATEGORY = ?";
   
}else{
    $sql = "SELECT STUDENT_ID,LIKE_COUNT,IMG_PATH, CREATE_DATE FROM RESUME WHERE MODEL = 2";
    
}
    $statement = $pdo->prepare($sql);
    if(isset($_GET['category']) && $_GET['category'] != '全部'){
        $statement->bindValue(1,$category);
    }
    $statement->execute();
    
    echo json_encode($statement->fetchAll());

?>