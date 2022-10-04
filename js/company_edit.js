//按下"儲存"按鈕，跳轉頁面
let save = document.querySelector(".save");

save.addEventListener("click", () => {
    fetch(`./php/updateEditCompany.php`, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
            comId : sessionStorage.getItem('CompanyId'),
            describe: comIntro.innerText,
            TEMPLOYEE : range.innerText,
            PROPERTY : property.innerText,
            ADDRESS : address.innerText,
            EMAIL : email.innerText,
            PHONE : perPhone.innerText,
            SERVE : serve.innerText,
            PHOTO : imgStrJoin
        })
    })
    .then (res => res.json())
    .then (body => {})
    
})