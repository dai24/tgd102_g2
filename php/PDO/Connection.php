<?php
$db_host = "127.0.0.1";  
$db_user = "root";  
$db_pass = "password";
$db_select = "interngo";


//這是chen的
// $db_host = "192.168.0.205";  // 粲慧的ip位置
// $db_user = "chen";  // 自己的名字
// $db_pass = "password";
// $db_select = "interngo";

// 團專上傳tibame的連線
// $db_host = "127.0.0.1";
// $db_user = "tibamefe_since2021";
// $db_pass = "vwRBSb.j&K#E";
// $db_select = "tibamefe_tgd102g2";

$dsn = "mysql:host=".$db_host.";dbname=".$db_select.";charset=utf8";
$pdo = new PDO($dsn,$db_user,$db_pass);

?>