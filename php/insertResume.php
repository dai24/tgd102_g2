<?php
include('./PDO/Connection.php');

$resume = json_decode(file_get_contents("php://input"), true);
// 大頭照下載到指定目錄
if($resume['avatar']){
    $image = $resume['avatar'];
    $imageName = "25220_".date("His",time())."_".rand(1111,9999).'.jpg';
    if (strstr($image,",")){
        $image = explode(',',$image);
        $image = $image[1];
    }
    $sqlPath = "./";
    $previousPath = "../";
    $path = "images/resume/Avatar/".date("Ymd",time());
    $previousPath = $previousPath.$path;
    if (!is_dir($previousPath)){ //判斷目錄是否存在 不存在就建立
        mkdir($previousPath,0777,true);
    }
    $sqlPath = $sqlPath.$path;
    $resume['avatar'] = $sqlPath."/". $imageName;  //圖片名字
    file_put_contents($previousPath."/". $imageName, base64_decode($image));
}
// 履歷截圖下載到指定目錄
if($resume['img_path']){
    $image = $resume['img_path'];
    $imageName = "25220_".date("His",time())."_".rand(1111,9999).'.jpg';
    if (strstr($image,",")){
        $image = explode(',',$image);
        $image = $image[1];
    }
    $sqlPath = "./";
    $previousPath = "../";
    $path = "images/resume/resume_".date("Ymd",time());
    $previousPath = $previousPath.$path;
    if (!is_dir($previousPath)){ //判斷目錄是否存在 不存在就建立
        mkdir($previousPath,0777,true);
    }
    $sqlPath = $sqlPath.$path;
    $resume['img_path'] = $sqlPath."/". $imageName;  //圖片名字
    file_put_contents($previousPath."/". $imageName, base64_decode($image));
}

// 36欄
$sql = "INSERT INTO RESUME (STUDENT_ID,MODEL,PRICE,UNLOCK_STATUS,FILE_NAME,AVATAR,PUBLIC_STATUS,CATEGORY,IMG_PATH,LIKE_COUNT,BAN,
NAME,ADDRESS,PHONE,EMAIL,PORFOLIO,AUTOBIOGRAPHY,WORK_EXPERIENCE_JOB,DURING_WORK,WORK_CONTENT,SCHOOL,DURING_SCHOOL,DEPARTMENT,
ATTEND_SCHOOL_STATUS,SCHOOL_EXPERIENCE,JOB_APPLY,SKILL1,SKILL2,SKILL3,SKILL4,SKILL5,SKILL6,LANGUAGE1,LANGUAGE2,LANGUAGE3,CREATE_DATE) 
VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
$statement = $pdo->prepare($sql);
$statement->bindValue(1,$resume['studentId']);
$statement->bindValue(2,2);
$statement->bindValue(3,0);
$statement->bindValue(4,1);
$statement->bindValue(5,$resume['fileName']);
$statement->bindValue(6,$resume['avatar']);
$statement->bindValue(7,0);
$statement->bindValue(8,'');
$statement->bindValue(9,$resume['img_path']);
$statement->bindValue(10,0);
$statement->bindValue(11,0);
$statement->bindValue(12,$resume['name']);
$statement->bindValue(13,$resume['address']);
$statement->bindValue(14,$resume['phone']);
$statement->bindValue(15,$resume['email']);
$statement->bindValue(16,$resume['porfolio']);
$statement->bindValue(17,$resume['autobiography']);
$statement->bindValue(18,$resume['work_experience_job']);
$statement->bindValue(19,$resume['during_work']);
$statement->bindValue(20,$resume['work_content']);
$statement->bindValue(21,$resume['school']);
$statement->bindValue(22,$resume['during_school']);
$statement->bindValue(23,$resume['department']);
$statement->bindValue(24,$resume['attend_school_status']);
$statement->bindValue(25,$resume['school_experience']);
$statement->bindValue(26,$resume['job_apply']);
$statement->bindValue(27,$resume['skill1']);
$statement->bindValue(28,$resume['skill2']);
$statement->bindValue(29,$resume['skill3']);
$statement->bindValue(30,$resume['skill4']);
$statement->bindValue(31,$resume['skill5']);
$statement->bindValue(32,$resume['skill6']);
$statement->bindValue(33,$resume['language1']);
$statement->bindValue(34,$resume['language2']);
$statement->bindValue(35,$resume['language3']);
$statement->bindValue(36,date('Y-m-d H:i:s', time()));

$statement->execute();

if($statement->rowCount() > 0){
    $member['successful'] = true;
    $member['message'] = "新增履歷成功";
}else{
    $member['successful'] = false;
    $member['message'] = "新增履歷失敗";
}
echo json_encode($member);

?>