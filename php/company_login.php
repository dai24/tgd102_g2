<?php
include('./PDO/Connection.php');

$member = json_decode(file_get_contents("php://input"), true);
$sql = "SELECT * FROM COMPANY  WHERE EMAIL = :EMAIL AND PASSWORD = :PWD ";

$statement = $pdo->prepare($sql);
$statement->bindValue(":EMAIL", $member['account']);
$statement->bindValue(":PWD", $member['password']);
$statement->execute();



$members = $statement->fetchAll();

if($statement->rowCount() > 0) {
    $member = $members[0];
    $member["successful"]= true;
    session_start();
    $_SESSION["loggedin"]= true;
    $_SESSION["member"]=(object) $member;
    
    // header('Location: http://localhost/tgd102_g2/dist/student_main.html');
    
    echo ('successful');
}else {
    $member["successful"]= false;
    $member["message"]= "登入失敗";
    echo"<h1 style='color:red'>帳號密碼錯誤</h1>";
    // function_alert("帳號或密碼錯誤");
    // $errors['login'] = 'Invalid username or password';
}
 
//echo json_encode($member["successful"]);

// function function_alert($message) { 
      
//     // Display the alert box  
//     echo "<script>alert('$message');
//      window.location.href='welcome.php';
//     </script>"; 
//     return false;
// } 



?>