<?php
include('./PDO/Connection.php');

$member = json_decode(file_get_contents("php://input"), true);
$sql = "SELECT * FROM STUDENT  WHERE EMAIL = :EMAIL AND PASSWORD = :PWD ";

$statement = $pdo->prepare($sql);
$statement->bindValue(":EMAIL", $member['account']);
$statement->bindValue(":PWD", $member['password']);
$statement->execute();


$data = $statement->fetchAll();

if($statement->rowCount() == 1) {
    $member = $members[0];
    $member["successful"]= true;
    session_start();
    $_SESSION["loggedin"]= true;
    $_SESSION["member"]=(object) $member;
    header("location:welcome.php");
    
    
}else {
    $member["successful"]= false;
    $member["message"]= "登入失敗";
    function_alert("帳號或密碼錯誤");
    // $errors['login'] = 'Invalid username or password';
}

 
 echo json_encode($member);


function function_alert($message) { 
      
    // Display the alert box  
    echo "<script>alert('$message');
     window.location.href='welcome.php';
    </script>"; 
    return false;
} 



?>