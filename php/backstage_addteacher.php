<?php
//目標：後台新增導師 (未完成)
include('./PDO/Connection.php');

$member = json_decode(file_get_contents("php://input"), true);
$sql = "INSERT INTO TEACHER(TNAME, PHOTO, JOBTITLE, SCHOOL, TDESCRIPTION, INDUSTRY, SKILL, EMAIL, CREATE_DATE)
        VALUES(:TNAME, :PHOTO, :JOBTITLE, :SCHOOL, :TDES, :industry, :skill, :email, NOW())
        ";

$statement = $pdo->prepare($sql);
$statement->bindValue(":TNAME", $member['tname']);
$statement->bindValue(":PHOTO", $member['figure']);
$statement->bindValue(":JOBTITLE", $member['job']);
$statement->bindValue(":SCHOOL", $member['school']);
$statement->bindValue(":TDES", $member['descript']);
$statement->bindValue(":industry", $member['industry']);
$statement->bindValue(":skill", $member['skill']);
$statement->bindValue(":email", $member['email']);
$statement->execute();

$members = $statement->fetchAll();

echo  json_encode($members);
?>