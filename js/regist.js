$(function () {

    const name = document.querySelector("#name")
    let alertNameTrue = true
    name.addEventListener("blur",function(){
    let pattern = /^[a-zA-Z][a-zA-Z0-9_]{4,15}/;
    let alertName = document.querySelector("#alertName")
    if(pattern.test(name.value)){
        alertName.innerHTML = ""
        name.style.border = "1px solid black";
        alertNameTrue = true
    }else{
        alertName.innerHTML = "<h4>請輸入正確的用戶名格式</h4>"
        console.log(name.value);
        name.style.border = "2px solid red";
        alertNameTrue = false
    }
    
    })

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
        let pattern =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
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
        let pattern =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
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

    const agree = document.getElementById('agree')
    console.log(agree);
    agree.addEventListener('click', function(){
        console.log('123');
        console.log(this.checked);
    })

    

    const join = document.getElementsByClassName('submit')[0]
    console.log(join);
    join.addEventListener('click',function(e){
        if(agree.checked == true && alertNameTrue == true && alertEmailTrue == true && alertPasswordTrue == true&& alertPasswordTrue1 == true&& alertphoneTrue == true){
            console.log('true');
            
            // this.setAttribute("href", "index.html");
        }else{
            console.log('false');
            swal("格式有誤", "You clicked the button!", "error");
        }

    })

    document.querySelector('.submit').addEventListener('click', () => {
        // const name = document.querySelector('#name')
        // const email = document.querySelector('#email')
        // const password = document.querySelector('#password')
        // const phone = document.querySelector('#phone')
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
        .then(resp => resp.json(
            console.log(resp)
        ))
        .then(body => {
            console.log(body)
        })


    })


})

