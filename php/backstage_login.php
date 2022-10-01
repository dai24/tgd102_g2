<?php
include('./PDO/Connection.php');

$member = json_decode(file_get_contents("php://input"), true);
$sql = "SELECT ID FROM ADMIN  WHERE EMAIL = :EMAIL AND `PASSWORD` = :PWD ";

$statement = $pdo->prepare($sql);
$statement->bindValue(":EMAIL", $member['account']);
$statement->bindValue(":PWD", $member['password']);
$statement->execute();


$members = $statement->fetchAll();

echo  json_encode($members);

?>