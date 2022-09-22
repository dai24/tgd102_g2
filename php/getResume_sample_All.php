<?php
include('./PDO/Connection.php');


$sql = "SELECT STUDENT_ID,LIKE_COUNT,IMG_PATH FROM RESUME WHERE MODEL = 2";
$statement = $pdo->prepare($sql);
$statement->execute();

if($statement->rowCount() > 0){
    $member['successful'] = true;
    $member['message'] = "取得履歷範本資料成功";
}else{
    $member['successful'] = false;
    $member['message'] = "取得覆歷範本資料失敗";
}
 
echo json_encode($statement->fetchAll());


?>