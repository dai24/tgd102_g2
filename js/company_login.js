
$(function () {


    const account = document.querySelector('#account');
    const password = document.querySelector('#password');


    document.querySelector('.submit').addEventListener('click',() => {
      
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

        fetch('./php/company_login.php',{
            method:'POST',
            headers:{'Cont-Type': 'application'},
            body:JSON.stringify({
                account:account.value,
                password:password.value,
            })
        })


        //前端去接後端的字串改成resp.text()給一個變數result
        
        // .then(resp => resp.text())
        // .then(result => {
        //     console.log('test', result == 'successful');
        //     if(result == 'successful') {
        //         location.replace('../dist/company_main.html');
        //     }else{
        //         alert("信箱密碼錯誤")
        //     }
        // });


        .then(resp => resp.json())
        .then(result => {
           let companyData = []; //準備一個空陣列用來裝回傳的資料
           companyData = result; //回傳資料裝進去空陣列
        //    console.log(studentData) //確認回傳結果有ID值
        //    console.log(studentData[0].ID) //有找到ID
    
            if(companyData.length > 0) {
                location.replace('../dist/company_main.html');
                let comID = companyData[0].ID
                sessionStorage.setItem('CompanyId', comID)
            }else{
                alert("信箱密碼錯誤!!")
            }
        });
      

    });

})