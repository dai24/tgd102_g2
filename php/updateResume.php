<?php
include('./PDO/Connection.php');

// $member = json_decode(file_get_contents("php://input"), true);
$like_count = isset($_GET['like_count'])?htmlspecialchars($_GET['like_count']):0;
$Student_id = isset($_GET['Student_id'])?htmlspecialchars($_GET['Student_id']):0;
// $like_count = $_GET['like_count'];
// $Student_id = $_GET['Student_id'];
if($like_count != 0 && $Student_id != 0){
    $sql = "UPDATE RESUME SET LIKE_COUNT = ? WHERE STUDENT_ID = ?";
}


$statement = $pdo->prepare($sql);

if($like_count != 0 && $Student_id != 0){
    $statement->bindValue(1,$like_count);
    $statement->bindValue(2,$Student_id );
}


$statement->execute();

if($statement->rowCount() > 0){
    $member['successful'] = true;
    $member['message'] = "like更新成功";
    header("Location: ./getResume_sample_All.php");
}else{
    $member['successful'] = false;
    $member['message'] = "like更新失敗";
}
echo json_encode($member);


?>