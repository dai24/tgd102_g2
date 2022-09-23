<?php
include('./PDO/Connection.php');

$member = json_decode(file_get_contents("php://input"), true);
// $sql = "insert into student(name,email,password,phone,create_date) 
// values(?,?,?,?,?)";
$sql = "insert into company(NAME,UNIT_NUM,PRINCIPLE,PROPERTY,CITY,DISTRICT,ADDRESS,INTRO,SERVE,WELFARE,CREATE_DATE,PASSWORD,PHONE,EMAIL,PRINCIPLE_TEL,EXT) 
values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
 $statement = $pdo->prepare($sql);
 $statement->bindValue(1,$member['name']);
 $statement->bindValue(2,$member['unit_num']);
 $statement->bindValue(3,$member['principle']);
 $statement->bindValue(4,$member['property']);
 $statement->bindValue(5,$member['city']);
 $statement->bindValue(6,$member['district']);
 $statement->bindValue(7,$member['address']);
 $statement->bindValue(8,$member['intro']);
 $statement->bindValue(9,$member['serve']);
 $statement->bindValue(10,$member['welfare']);
 $statement->bindValue(11,date('Y-m-d H:i:s', time()));
 $statement->bindValue(12,$member['password']);
 $statement->bindValue(13,$member['phone']);
 $statement->bindValue(14,$member['email']);
 $statement->bindValue(15,$member['principle_tel']);
 $statement->bindValue(16,$member['ext']);


 $statement->execute();


 if($statement->rowCount() == 1){
     $member['successful'] = true;
     $member['message'] = "註冊成功";
 }else{
     $member['successful'] = false;
     $member['message'] = "註冊失敗";
 }
 
 echo json_encode($member);


?>