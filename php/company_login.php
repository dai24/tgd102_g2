<?php
include('./PDO/Connection.php');

$member = json_decode(file_get_contents("php://input"), true);
$sql = "SELECT * FROM COMPANY  WHERE EMAIL = :EMAIL AND PASSWORD = :PWD ";

$statement = $pdo->prepare($sql);
$statement->bindValue(":EMAIL", $member['account']);
$statement->bindValue(":PWD", $member['password']);
$statement->execute();



$members = $statement->fetchAll();

echo  json_encode($members);

//原本寫法 從後端判斷好後呼叫一個字串給前端去接
// if($statement->rowCount() > 0) {
//     $member = $members[0];
//     $member["successful"]= true;
//     session_start();
//     $_SESSION["loggedin"]= true;
//     $_SESSION["member"]=(object) $member;

//無法用後端header直接轉網址
//     // header('Location: http://localhost/tgd102_g2/dist/student_main.html');
// 成功的字串給前端
//     echo ('successful');

// }else {
//     $member["successful"]= false;
//     $member["message"]= "登入失敗";
//     echo"<h1 style='color:red'>帳號密碼錯誤</h1>";
//     // function_alert("帳號或密碼錯誤");
// }
 
//echo json_encode($member["successful"]);



?>