//按下"儲存"按鈕，跳轉頁面
let save = document.querySelector(".save");

save.addEventListener("click", () => {
    fetch(`php/updateEditUser.php`, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({
            stuid : sessionStorage.getItem('StudentId'),
            PHONE : phone.innerText,
            EMAIL : email.innerText,
            PASSWORD : password.innerText,
            ADDRESS : address.innerText
        })
    })
    .then (res => res.json())
    .then (body => {})
    window.location.assign(window.location.href);
})

