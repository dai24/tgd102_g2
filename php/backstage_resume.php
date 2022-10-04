<?php
//目標：後台顯示資料庫的履歷模半
include('./PDO/Connection.php');

$member = json_decode(file_get_contents("php://input"), true);
$sql = "SELECT ID, `NAME`, IMG_PATH, CREATE_DATE
        FROM RESUME  
        WHERE MODEL = 1
        LIMIT 0,8
        ";

$statement = $pdo->prepare($sql);
$statement->execute();

$members = $statement->fetchAll();

echo  json_encode($members);

?>