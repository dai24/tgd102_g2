<?php
include('./PDO/Connection.php');

$studentId = isset($_GET['studentId'])?htmlspecialchars($_GET['studentId']):0;
$model = isset($_GET['model'])?htmlspecialchars($_GET['model']):0;
$category = isset($_GET['category'])?htmlspecialchars($_GET['category']):'';

if($category != '' && $category != '全部'){ // 範本分類
    $sql = "SELECT STUDENT_ID,LIKE_COUNT,IMG_PATH, CREATE_DATE, BAN FROM RESUME WHERE MODEL = 2 AND PUBLIC_STATUS = 1 AND CATEGORY = ? LIMIT 0, 8"; 
}else if($model == 2 && $studentId != 0){ // 算有幾個履歷
    $sql = "SELECT ID,STUDENT_ID, BAN FROM RESUME WHERE STUDENT_ID = ?";
}else if($model == 1 || $studentId != 0){ // 模板區顯示模板跟學生做好的履歷
    $sql = "SELECT ID,STUDENT_ID,MODEL,PRICE,UNLOCK_STATUS,FILE_NAME,PUBLIC_STATUS,CATEGORY,LIKE_COUNT,BAN,IMG_PATH,NAME,ADDRESS,PHONE,EMAIL,PORFOLIO,AUTOBIOGRAPHY,
    WORK_EXPERIENCE_JOB,DURING_WORK,WORK_CONTENT,SCHOOL,DURING_SCHOOL,DEPARTMENT,ATTEND_SCHOOL_STATUS,SCHOOL_EXPERIENCE,JOB_APPLY,
    SKILL1,SKILL2,SKILL3,SKILL4,LANGUAGE1,LANGUAGE2, BAN FROM RESUME WHERE MODEL = ? OR STUDENT_ID = ? ORDER BY MODEL";
}else{  // 範本
    $sql = "SELECT ID,STUDENT_ID,LIKE_COUNT,IMG_PATH, CREATE_DATE, BAN FROM RESUME WHERE MODEL = 2 AND PUBLIC_STATUS = 1 LIMIT 0, 8";
    
}
    $statement = $pdo->prepare($sql);
    if($category != '' && $category != '全部'){
        $statement->bindValue(1,$category);
    }else if($model == 2 && $studentId != 0){
        $statement->bindValue(1,$studentId);
    }else if($model == 1 || $studentId != 0){
        $statement->bindValue(1,$model);
        $statement->bindValue(2,$studentId);
    }

    $statement->execute();
    $data = $statement->fetchAll();
    // if($model == 2 && $studentId != 0){
    //     $data = $statement->rowCount();
    // }
    
    echo json_encode($data);

?>