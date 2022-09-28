$(function () {


    const account = document.querySelector('#account');
    const password = document.querySelector('#password');


    document.querySelector('.submit').addEventListener('click',() => {
        // if(!account || !password) {
        //         alert('請輸入account,password!');
        //     return false;
        // }

        if(account.value==""|| password.value==""){//判斷兩個均不為空（其他判斷規則在其輸入時已經判斷） 
            alert("信箱密碼均不能為空！") 
        return false
        }
    
        // if($(account).val() == ""){
        //     alert("請輸入帳號");
        //     return false;
        // }else if($(password ).val() == ""){
        //     alert("請輸入密碼");
        //     return false;
        // }

        fetch('./php/login.php',{
            method:'POST',
            headers:{'Cont-Type': 'application'},
            body:JSON.stringify({
                account:account.value,
                password:password.value,
            })
        })
        .then(resp => resp.json())
        .then(result => {
           let studentData = []; //準備一個空陣列用來裝回傳的資料
           studentData = result; //回傳資料裝進去空陣列
        //    console.log(studentData) //確認回傳結果有ID值
        //    console.log(studentData[0].ID) //有找到ID
            // console.log('test', result == 'successful');
            if(studentData.length > 0) {
                location.replace('../dist/student_main.html');
                let stuID = studentData[0].ID
                sessionStorage.setItem('StudentId', stuID)
            }else{
                alert("信箱密碼錯誤!!")
            }
        });
        
        
        

        
        
        
        // .then(body => {
        //     console.log(body);
        
        
        // 這裡寫判斷if true 去轉址 用php retrun回來 
        // .then(resp =>{
        //     console.log(resp);
        //     // var value="<?php echo $num; ?>";
        //     // console.log(value);
        //         // if (resp.status === 200 && success ?? ) {
        //         //     // console.log(resp);
        //         //     // console.log(value);
        //         //     location.replace('../dist/student_main.html');
        //         // }else{
        //         //     resp.status === false;
        //         //     alert('帳號密碼錯誤')
        //         // };
                    
        // });

   

        // .then(resp =>{
        //     if (resp.status === 200) {
        //         location.replace('../dist/student_main.html');
        //     }
        // });

    });

})