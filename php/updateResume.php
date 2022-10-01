<?php
include('./PDO/Connection.php');

$resume = json_decode(file_get_contents("php://input"), true);
if(!isset($resume)){
    $resume['id'] = htmlspecialchars($_GET['id']);
    $resume['studentId'] = htmlspecialchars($_GET['studentId']);
    $resume['public_status'] = isset($_GET['publicStatus'])?htmlspecialchars($_GET['publicStatus']):0;
    $resume['like_count'] = isset($_GET['likeCount'])?htmlspecialchars($_GET['likeCount']):0;
    $resume['category'] = isset($_GET['category'])?htmlspecialchars($_GET['category']):'';
}

// if($resume['id'] != null && $resume['studentId'] != null){
    $sql = "UPDATE RESUME SET FILE_NAME=?,AVATAR=?,PUBLIC_STATUS=?,
    CATEGORY=?,LIKE_COUNT=?,BAN=?,NAME=?,ADDRESS=?,PHONE=?,EMAIL=?,PORFOLIO=?,AUTOBIOGRAPHY=?,
    WORK_EXPERIENCE_JOB=?,DURING_WORK=?,WORK_CONTENT=?,SCHOOL=?,DURING_SCHOOL=?,DEPARTMENT=?,ATTEND_SCHOOL_STATUS=?,
    SCHOOL_EXPERIENCE=?,JOB_APPLY=?,SKILL1=?,SKILL2=?,SKILL3=?,SKILL4=?,SKILL5=?,SKILL6=?,LANGUAGE1=?,LANGUAGE2=?,
    LANGUAGE3=?
    WHERE ID = ? AND STUDENT_ID = ?";
// }


    $statement = $pdo->prepare($sql);
 
    $statement->bindValue(1,isset($resume['fileName'])?$resume['fileName']:'');
    $statement->bindValue(2,isset($resume['avatar'])?$resume['avatar']:'');
    $statement->bindValue(3,isset($resume['public_status'])?$resume['public_status']:0);
    $statement->bindValue(4,isset($resume['category'])?$resume['category']:'');
    $statement->bindValue(5,isset($resume['like_count'])?$resume['like_count']:0);
    $statement->bindValue(6,isset($resume['ban'])?$resume['ban']:0);
    $statement->bindValue(7,isset($resume['name'])?$resume['name']:'');
    $statement->bindValue(8,isset($resume['address'])?$resume['address']:'');
    $statement->bindValue(9,isset($resume['phone'])?$resume['phone']:'');
    $statement->bindValue(10,isset($resume['email'])?$resume['email']:'');
    $statement->bindValue(11,isset($resume['porfolio'])?$resume['porfolio']:'');
    $statement->bindValue(12,isset($resume['autobiography'])?$resume['autobiography']:'');
    $statement->bindValue(13,isset($resume['work_experience_job'])?$resume['work_experience_job']:'');
    $statement->bindValue(14,isset($resume['during_work'])?$resume['during_work']:'');
    $statement->bindValue(15,isset($resume['work_content'])?$resume['work_content']:'');
    $statement->bindValue(16,isset($resume['school'])?$resume['school']:'');
    $statement->bindValue(17,isset($resume['during_school'])?$resume['during_school']:'');
    $statement->bindValue(18,isset($resume['department'])?$resume['department']:'');
    $statement->bindValue(19,isset($resume['attend_school_status'])?$resume['attend_school_status']:'');
    $statement->bindValue(20,isset($resume['school_experience'])?$resume['school_experience']:'');
    $statement->bindValue(21,isset($resume['job_apply'])?$resume['job_apply']:'');
    $statement->bindValue(22,isset($resume['skill1'])?$resume['skill1']:'');
    $statement->bindValue(23,isset($resume['skill2'])?$resume['skill2']:'');
    $statement->bindValue(24,isset($resume['skill3'])?$resume['skill3']:'');
    $statement->bindValue(25,isset($resume['skill4'])?$resume['skill4']:'');
    $statement->bindValue(26,isset($resume['skill5'])?$resume['skill5']:'');
    $statement->bindValue(27,isset($resume['skill6'])?$resume['skill6']:'');
    $statement->bindValue(28,isset($resume['language1'])?$resume['language1']:'');
    $statement->bindValue(29,isset($resume['language2'])?$resume['language2']:'');
    $statement->bindValue(30,isset($resume['language3'])?$resume['language3']:'');
    $statement->bindValue(31,$resume['id']);
    $statement->bindValue(32,$resume['studentId']);
    


$statement->execute();

if($statement->rowCount() > 0){
    $member['successful'] = true;
    $member['message'] = "更新成功";
    header("Location: ./getResume_sample_All.php");
}else{
    $member['successful'] = false;
    $member['message'] = "更新失敗";
}
echo json_encode($member);
