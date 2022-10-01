

(() => {
  // 取得 sessionStorage 資料

  const StudentId = sessionStorage.getItem("StudentId");
  const CompanyId = sessionStorage.getItem("CompanyId");
  

  // 綁定
  // 登入狀態 ( 顏色 )
  const user_avatar = document.querySelector("#user_avatar");
  const member_logout = document.querySelector("#member_logout");
 

  //學生會員登入
  if(JSON.stringify(sessionStorage.getItem('StudentId')) == 'null'&& JSON.stringify(sessionStorage.getItem('CompanyId')) == 'null'){
      user_avatar.classList.remove("loging");
      member_logout.classList.add("hide");
  }else{
      user_avatar.classList.add("loging");
      member_logout.classList.remove("hide");
  }
  user_avatar.addEventListener('click', function(){
    console.log(sessionStorage.getItem('StudentId'));
    if(sessionStorage.getItem('StudentId') != null){
      location='./student_main.html'
    }else if(sessionStorage.getItem('CompanyId') != null){
      location='./company_main.html'
    }else{
      location='./login.html'
    }
  
  })
  



// 登出鍵
try {
  // 嘗試綁定
  member_logout.addEventListener("click", () => {
    // 移除 sessionStorage NAME 值
    sessionStorage.removeItem("StudentId");
    sessionStorage.removeItem("CompanyId");

    
    // location = `${getContextPath()}/tgd102_g2/dist/index.html`;
    location = `./index.html`;

  });
} catch (error) {}


  
})();