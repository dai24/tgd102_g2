<?php
    //目標：尋找資料庫的履歷診療老師資料

    include('./PDO/Connection.php');
    $teacherId = $_GET["teacherId"];

    //建立SQL語法

    $sql_teacherinfo = "SELECT T.ID AS id,T.TNAME as tname, T.PHOTO as img, T.JOBTITLE as tjobtitle,
                        T.TIMES as ttimes, T.SCHOOL as tschool, T.TDESCRIPTION as tdescription
                        FROM TEACHER AS T where T.ID = :teacherId;            
    ";

    $sql_jobtype = "SELECT TJC.JOBCLASSNAME AS tjobclassname
             FROM TEACHER_JOBCLASS AS TJC where TJC.TEACHERID = :teacherId;   
    ";

    $sql_industrytype = "SELECT TIC.INDUSTRYCLASSNAME AS tindustryclassname
             FROM TEACHER_INDUSTRYCLASS AS TIC where TIC.TEACHERID = :teacherId;    
    ";

    $sql_jobs = "SELECT TJC.JOBNAME as tjobname
            FROM TEACHER_JOB AS TJC where TJC.TEACHERID = :teacherId;    
    ";


    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    


    $stmt_teacherinfo = $pdo->prepare($sql_teacherinfo);
    $stmt_teacherinfo->bindValue(":teacherId", $teacherId);
    $stmt_teacherinfo->execute(); //執行

    $stmt_jobtype = $pdo->prepare($sql_jobtype);
    $stmt_jobtype->bindValue(":teacherId", $teacherId);
    $stmt_jobtype->execute(); //執行

    $stmt_industrytype = $pdo->prepare($sql_industrytype);
    $stmt_industrytype->bindValue(":teacherId", $teacherId);
    $stmt_industrytype->execute(); //執行

    $stmt_jobs = $pdo->prepare($sql_jobs);
    $stmt_jobs->bindValue(":teacherId", $teacherId);
    $stmt_jobs->execute(); //執行
    
    
    //---------------------------------------------------
    
    $teacherinfo = $stmt_teacherinfo->fetchAll(); //撈到資料
    $teacherjobtype = $stmt_jobtype->fetchAll(); //撈到資料    
    $teacherindustrytype = $stmt_industrytype->fetchAll(); //撈到資料
    $teacherjob = $stmt_jobs->fetchAll(); //撈到資料

    $resp_body = (object) [
        "teacherinfo" =>$teacherinfo,
        "teacherjobtype" =>$teacherjobtype,
        "teacherindustrytype" =>$teacherindustrytype,
        "teacherjob" =>$teacherjob
    ];
    echo json_encode($resp_body);
?>