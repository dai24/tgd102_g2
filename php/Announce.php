<?php
include('./PDO/Connection.php');

$member = json_decode(file_get_contents("php://input"), true);
// $sql = "insert into student(name,email,password,phone,create_date) 
// values(?,?,?,?,?)";
$sql = "insert into job(NAME,JOB,SALARY,REQUIRE,CONDITION,PLUS,WFH,CREATE_DATE) 
values(?,?,?,?,?,?,?,?)";
 $statement = $pdo->prepare($sql);
 $statement->bindValue(1,$member['name']);
 $statement->bindValue(2,$member['job']);
 $statement->bindValue(3,$member['salary']);
 $statement->bindValue(4,$member['require']);
 $statement->bindValue(5,$member['condition']);
 $statement->bindValue(6,$member['plus']);
 $statement->bindValue(7,$member['wfh']);
 $statement->bindValue(8,date('Y-m-d H:i:s', time()));

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