$(function () {

    // 名稱不要正規表達式限制住

    const name = document.querySelector("#name_sign")
    // console.log("abc",name.value)
    // let alertNameTrue = true
    // name.addEventListener("blur",function(){
    // let pattern = /^[a-zA-Z][a-zA-Z0-9_]{4,15}/;
    // let alertName = document.querySelector("#alertName")
    // if(pattern.test(name.value)){
    //     alertName.innerHTML = ""
    //     name.style.border = "1px solid black";
    //     alertNameTrue = true
    // }else{
    //     alertName.innerHTML = "<h4>請輸入正確的用戶名格式</h4>"
    //     console.log(name.value);
    //     name.style.border = "2px solid red";
    //     alertNameTrue = false
    // }
    
    // })

    const email = document.querySelector("#email")
    let alertEmailTrue = true
    email.addEventListener("blur",function(){
        let alertEmail = document.querySelector("#alertEmail")
        let pattern =  /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
            if(pattern.test(email.value)){
                alertEmail.innerHTML = ""
                email.style.border = "1px solid black";
                alertEmailTrue = true
            }else{
                alertEmail.innerHTML = "<span>請輸入正確的電子郵件格式</span>"
                console.log(email.value);
                email.style.border = "2px solid red";
                alertEmailTrue = false
            }
            return
    })
    
   

        const password = document.querySelector("#password")
        let alertPasswordTrue = true
        password.addEventListener("blur",function(){
        let alertPassword = document.querySelector("#alertPassword")
        let pattern =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
            if(pattern.test(password.value)){
                alertPassword.innerHTML = ""
                password.style.border = "1px solid black";
                alertPasswordTrue = true
            }else{
                alertPassword.innerHTML = "<span>請輸入正確的密碼格式</span>"
                console.log(password.value);
                password.style.border = "2px solid red";
                alertPasswordTrue = false
            }
            return
        }) 

     // 看看兩次密碼是否相同？
        const password1 = document.querySelector("#checkpw")
        let alertPasswordTrue1 = true
        password1.addEventListener("blur",function(){
        let alertPassword1 = document.querySelector("#alertPassword1")
        let pattern =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
            if(pattern.test(password1.value)){
                alertPassword1.innerHTML = ""
                password1.style.border = "1px solid black";
                alertPasswordTrue1 = true
            }else{
                alertPassword1.innerHTML = "<span>兩次密碼並不相同！</span>"
                console.log(password1.value);
                password1.style.border = "2px solid red";
                alertPasswordTrue1 = false
            }
            return
        })



    //手機正規表達式判斷
    const phone = document.querySelector("#phone")
    let alertphoneTrue = true
    phone.addEventListener("blur",function(){
    let pattern = /^[0-9]{10}$/g;
    let alertphone = document.querySelector("#alertphone")
    if(pattern.test(phone.value)){
        alertphone.innerHTML = ""
        phone.style.border = "1px solid black";
        alertphoneTrue = true
    }else{
        alertphone.innerHTML = "<span>請輸入正確的手機格式</span>"
        console.log(phone.value);
        phone.style.border = "2px solid red";
        alertphoneTrue = false
    }
    
    })
    // 隱私條款打勾驗證
    let agree = document.querySelector('#agree')
     if (agree.checked == false) {
         console.log(agree.checked);
         alert("請勾選同意隱私條款");
     }

    document.querySelector('.submit').addEventListener('click', () => {
        if(agree.checked == true && alertEmailTrue == true && alertPasswordTrue == true && alertphoneTrue == true){
            location.replace('../dist/student_login.html');
        console.log('true');           
        }else{
            alert('資料輸入不完全,請重新輸入')
        }
        fetch('./php/regist.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                passowrd: password.value,
                phone: phone.value

            })
            
        })
        
        .then(resp => resp.json())
        .then(result => {
            let studentData = []; //準備一個空陣列用來裝回傳的資料
            studentData = result; //回傳資料裝進去空陣列
            // location.replace('../dist/student_login.html');
            // console.log(studentData) //確認回傳結果有ID值
            // console.log(studentData[0].name) //有找到ID
            // console.log('test', result == 'successful');
             
         });

        // .then(body => {
        //     console.log(body)
        // })


    })


})

