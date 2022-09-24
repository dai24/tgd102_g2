<?php
include('./PDO/Connection.php');

$model = isset($_GET['model'])?$_GET['model']:'';

$sql = "SELECT PRICE,UNLOCK_STATUS,FILE_NAME,IMG_PATH FROM RESUME WHERE MODEL = ?";
$statement = $pdo->prepare($sql);
$statement->bindValue(1,$model);
$statement->execute();
echo json_encode($statement->fetchAll());

?>