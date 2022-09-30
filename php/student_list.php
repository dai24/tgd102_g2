<?php
include('./PDO/Connection.php');

// $member = json_decode(file_get_contents("php://input"), true);
$id = $_GET['home']; // 設一個變數id 
// $name = $_GET['name']; 

$sql = "SELECT  ID, NAME, PICTURE, PHONE, EMAIL, COIN FROM STUDENT WHERE ID=?";



$statement = $pdo->prepare($sql);
$statement->bindValue(1,$id);
// $statement->bindValue(2,$name);
$statement->execute();
$member = $statement->fetchAll();
// echo $statement->rowCount();
// if($statement->rowCount() > 0){
//     $member['successful'] = true;
//     $member['message'] = "更新成功";
//     header("Location: ./company_main.php"); //如果成功回傳用company_main.php去重新抓取資料更新
   
// }else{
//     $member['successful'] = false;
//     $member['message'] = "更新失敗";
// }
echo json_encode($member);


?>