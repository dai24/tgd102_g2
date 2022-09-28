<?php
include('./PDO/Connection.php');



$member = json_decode(file_get_contents("php://input"), true);
// $member['id'] = $id;
// $member['name'] = $name;

// $id = $_POST['id']; // 設一個變數id 
// $name = $_POST['name'];
$sql = "UPDATE JOB SET NAME = :NICKNAME WHERE ID = :ID";
//$sql = "UPDATE JOB SET NAME =? WHERE ID =?";
// $sql = "UPDATE JOB SET NAME = '實習生'  WHERE ID = 3";

$statement = $pdo->prepare($sql);
$statement->bindValue(":NICKNAME",$member["name"]);
$statement->bindValue(":ID",$member["id"]);
//$statement->bindValue(1,$member['name']);
//$statement->bindValue(2,$member['id']);

$statement->execute();


if($statement->rowCount() > 0){
    // $member = $members[0];
    $member['successful'] = true;
    $member['message'] = "更新成功";
    // header("Location: ./company_main.php"); //如果成功回傳用company_main.php去重新抓取資料更新

}else{
    $member['successful'] = false;
    $member['message'] = "無更新資料";
    
}
echo json_encode($member);


?>