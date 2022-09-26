<?php
    //目標：尋找資料庫的履歷診療老師資料

    include('./PDO/Connection.php');

    $sql = "SELECT ID as id, TNAME as tname, PHOTO as img, JOBTITLE as tjobtitle , TIMES as ttimes FROM TEACHER;";   

    // $sql = "SELECT T.TNAME, T.PHOTO, T.JOBTITLE, T.TIMES, T.SCHOOL, T.TDESCRIPTION,
    //         TJ.JOBNAME, TIC.INDUSTRYCLASSNAME, TJC.JOBCLASSNAME
    //         FROM TEACHER AS T
    //         LEFT JOIN TEACHER_JOB AS TJ ON T.ID = TJ.TEACHERID
    //         LEFT JOIN TEACHER_INDUSTRYCLASS AS TIC ON T.ID = TIC.TEACHERID
    //         LEFT JOIN TEACHER_JOBCLASS AS TJC ON T.ID = TJC.TEACHERID;
    //         ";    

    // $sql = "
    //         set sql_mode = 'STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
            
    //         SELECT T.TNAME, T.PHOTO, T.JOBTITLE, T.TIMES, T.SCHOOL, T.TDESCRIPTION,
    //         TJ.JOBNAME, TIC.INDUSTRYCLASSNAME, TJC.JOBCLASSNAME
    //         FROM TEACHER AS T
    //         LEFT JOIN TEACHER_JOB AS TJ ON T.ID = TJ.TEACHERID
    //         LEFT JOIN TEACHER_INDUSTRYCLASS AS TIC ON T.ID = TIC.TEACHERID
    //         LEFT JOIN TEACHER_JOBCLASS AS TJC ON T.ID = TJC.TEACHERID
    //         GROUP BY T.ID;
    //         ";




    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    
    $stmt = $pdo->prepare($sql);
    $stmt->execute(); //執行
    
    
    //---------------------------------------------------
    
    $teacherList = $stmt->fetchAll(); //撈到資料
    // for ($i = 0; $i < count($teacherList); $i++) {
    //     $teacher = $teacherList[$i];
    //     $sql = "select INDUSTRYCLASSNAME as icn from TEACHER_INDUSTRYCLASS where TEACHERID = :teacherId";
    //     $stmt = $pdo->prepare($sql);
    //     $stmt->bindValue(":teacherId", $teacher["id"]);
    //     $stmt->execute();
    //     $industryClassList = $stmt->fetchAll();
    //     $teacherList[$i]["industryClassList"] = $industryClassList;
    // }


    
        
    // if ($stmt->rowCount() > 0){ //只要有撈到一筆資料 = 有撈到資料
    //     $member["successful"] = true; //successful的屬性數值顯示 true        
    // } else{ //如果沒有撈到資料...
    //     $member["successful"] = false;
    // }
    
    // echo "測試有跑到這裡";
    echo json_encode($teacherList);
?>