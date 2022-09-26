<?php
include('./PDO/Connection.php');

// $member = json_decode(file_get_contents("php://input"), true);
$id = $_GET['id']; // 設一個變數id 
// $name = $_GET['name']; 
// 資料庫把停權狀態改停權(1)  ,用where id 寫? 空格 點哪一筆的資料才做修改
$sql = "UPDATE JOB SET BAN  = 1 WHERE ID = ?"; 


// if($id){
//     $sql = "UPDATE JOB SET BAN  = 1 WHERE ID = ?"; 
// }else{
//     $sql = "UPDATE JOB SET NAME = ? WHERE ID = ?";
// }
$statement = $pdo->prepare($sql);
$statement->bindValue(1,$id);
// $statement->bindValue(2,$name);

$statement->execute();
// echo $statement->rowCount();
if($statement->rowCount() > 0){
    $member['successful'] = true;
    $member['message'] = "更新成功";
    header("Location: ./company_main.php"); //如果成功回傳用company_main.php去重新抓取資料更新
   
}else{
    $member['successful'] = false;
    $member['message'] = "更新失敗";
}
echo json_encode($member);


?>