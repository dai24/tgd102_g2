<?php
include('./PDO/Connection.php');

$member = json_decode(file_get_contents("php://input"), true);
$sql = "insert into student(name,email,password,phone,create_date) 
values(?,?,?,?,?)";
 $statement = $pdo->prepare($sql);
 $statement->bindValue(1,$member['name']);
 $statement->bindValue(2,$member['email']);
 $statement->bindValue(3,$member['passowrd']);
 $statement->bindValue(4,$member['phone']);
 $statement->bindValue(5,date('Y-m-d H:i:s', time()));

 $statement->execute();


 if($statement->rowCount() == 1){
     $member['successful'] = true;
     $member['message'] = "註冊成功";
     header("Location: ../index.html");
    //  window.location: "../index.html"
 }else{
     $member['successful'] = false;
     $member['message'] = "註冊失敗";
 }
 
 echo json_encode($member);


?>