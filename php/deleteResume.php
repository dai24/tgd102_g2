<?php
include('./PDO/Connection.php');

$id = isset($_GET['id'])?htmlspecialchars($_GET['id']):0;
$studentId = isset($_GET['studentId'])?htmlspecialchars($_GET['studentId']):0;
$sql = "DELETE FROM RESUME WHERE ID = ? AND STUDENT_ID = ?"; 

$statement = $pdo->prepare($sql);
$statement->bindValue(1,$id);
$statement->bindValue(2,$studentId);

$statement->execute();
// echo $statement->rowCount();
if($statement->rowCount() > 0){
    $member['successful'] = true;
    $member['message'] = "刪除成功";
    // header("Location: ./getResume_sample_All.php?model=1&studentId=$studentId");
}else{
    $member['successful'] = false;
    $member['message'] = "刪除失敗";
}
echo json_encode($member);


?>