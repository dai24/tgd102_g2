<?php
include('./PDO/Connection.php');

$member = json_decode(file_get_contents("php://input"), true);
$sql = "SELECT ID FROM STUDENT  WHERE EMAIL = :EMAIL AND PASSWORD = :PWD ";

$statement = $pdo->prepare($sql);
$statement->bindValue(":EMAIL", $member['account']);
$statement->bindValue(":PWD", $member['password']);
$statement->execute();


$members = $statement->fetchAll();

echo  json_encode($members);

//echo json_encode($member["successful"]);

// function function_alert($message) { 
      
//     // Display the alert box  
//     echo "<script>alert('$message');
//      window.location.href='welcome.php';
//     </script>"; 
//     return false;
// } 



?>