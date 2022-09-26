<?php
include('./PDO/Connection.php');

// $model = isset($_GET['category'])?$_GET['category']:'';

$sql = "SELECT PRICE,NT FROM FEE WHERE CATEGORY = '學生'";
$statement = $pdo->prepare($sql);
// $statement->bindValue(1,$model);
$statement->execute();
echo json_encode($statement->fetchAll());

?>