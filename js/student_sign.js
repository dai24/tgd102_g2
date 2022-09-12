//判斷註冊內容是否符合?
let name = document.querySelector(".name");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let checkpw = document.querySelector(".checkpw");
let cellphone = document.querySelector(".cellphone");
let agreeid = document.querySelector(".agreeid"); //同意會員條款

let submit = document.querySelector(".submit"); //註冊按鈕

// let inputAlert = document.querySelectorAll(".submit");

//如果欄位填寫不完全，彈出錯誤訊息
// function alert_NG(){
//     if(messa_alert.style.display == "none"){
//         // console.log("開啟錯誤提醒");
//         messa_alert.style.display = "flex";
//     }
// }

//點擊"確定"，能關掉彈出訊息
// btn_msg_alert.addEventListener("click", function(e){
//     if(messa_alert.style.display == "flex"){    
//         // console.log("關閉錯誤提醒");    
//         e.preventDefault();
//         messa_alert.style.display = "none";
//         masktop.style.display = "none";        
//     }
// })

//判斷電話是否符合格式?
cellphone.addEventListener("blur", function(e){
    let phone_judge =/^09\d{8}$/; //判斷是否09開頭且9個數字? 
    if(phone_judge.test(cellphone.value) == false){
        this.parentElement.querySelector(".inputAlert").classList.add("-on"); //同層下一個標籤加上class        
    }else{
        this.parentElement.querySelector(".inputAlert").classList.remove("-on");
        this.classList.add("ok");
    }
});

//---------------------------------

//點擊"註冊"，跳轉頁面
submit.addEventListener("click", () => {
    location = "../student_login.html";
})