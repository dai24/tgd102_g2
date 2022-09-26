//開關導覽列
let backstage_nav2 = document.querySelector(".backstage-nav2");
    let nav_toggle = document.querySelector(".nav-toggle");
    let maskMain = document.querySelector(".maskMain");

    document.getElementsByClassName("nav-toggle")[0].addEventListener("click",function(){
        document.body.classList.toggle("activeNav");
        nav_toggle.classList.toggle("on");

        if(nav_toggle.classList.contains("on")){
            backstage_nav2.style.left = 0;
            maskMain.style.opacity = "80%";
            maskMain.style.width = "100vw";
            maskMain.style.height = "100%";
            maskMain.style.backgroundColor = "#313131";
        }else{
            backstage_nav2.style.left = "-250px";
            maskMain.style.opacity = "0%";
        }        
    })

