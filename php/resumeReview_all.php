<?php

    include('./PDO/Connection.php');
    
    //目標們
    //目標：尋找資料庫的履歷診療老師資料
    $sql_teacher = "SELECT ID as id, TNAME as tname, PHOTO as img, JOBTITLE as tjobtitle , TIMES as ttimes FROM TEACHER;";

    // //目標：尋找資料庫的擅長產業資料
    $sql_industryclass = "SELECT INDUSTRYCLASSNAME AS industryclassname FROM INDUSTRYCLASS;";

    // //目標：尋找資料庫的擅長職務資料
    $sql_jobclass = "SELECT JOBCLASSNAME AS jobclassname FROM JOBCLASS;";
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    // 老師
    $stmt_teacher = $pdo->prepare( $sql_teacher);
    $stmt_teacher->execute(); //執行

    // //產業
    $stmt_industryclass = $pdo->prepare($sql_industryclass);
    $stmt_industryclass->execute(); //執行

    // //職務
    $stmt_jobclass = $pdo->prepare($sql_jobclass);
    $stmt_jobclass->execute(); //執行
    
    // function getIcn($item) {}

    //---------------------------------------------------
    $teacherList = $stmt_teacher->fetchAll(); //撈到資料
    for ($i = 0; $i < count($teacherList); $i++) {
        $teacher = $teacherList[$i];
        $sql = "select INDUSTRYCLASSNAME as icn from TEACHER_INDUSTRYCLASS where TEACHERID = :teacherId";
        $stmt = $pdo->prepare($sql);
        $stmt->bindValue(":teacherId", $teacher["id"]);
        $stmt->execute();
        $industryClassList = $stmt->fetchAll();
        $teacherList[$i]["industryClassList"] = array_map(function($row){return $row["icn"];}, $industryClassList);

        $sql2 = "select JOBCLASSNAME as jcn from TEACHER_JOBCLASS where TEACHERID = :teacherId";
        $stmt2 = $pdo->prepare($sql2);
        $stmt2->bindValue(":teacherId", $teacher["id"]);
        $stmt2->execute();
        $jobClassList = $stmt2->fetchAll();
        $teacherList[$i]["jobClassList"] = array_map(function($row){return $row["jcn"];}, $jobClassList);
    }



    $industryclassList = $stmt_industryclass->fetchAll(); //撈到資料
    $jobclassList = $stmt_jobclass->fetchAll();
    
    // echo "測試有跑到這裡";
    $resp_body = (object) [
        "teacherList" => $teacherList,
        "industryclassList" => $industryclassList,
        "jobclassList" => $jobclassList
    ];
    echo json_encode($resp_body);
?>

