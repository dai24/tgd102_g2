//swiper套件

// var swiper = new Swiper('.mySwiper', {
//     slidesPerView: 1,
//     slidesPerColumn: 2,
//     spaceBetween: 10,
//     // loop: true,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//   });

//打開/關閉子選單
let consultantIndustrySearch = document.querySelector(".consultantIndustrySearch");  
let categoryCurrent = consultantIndustrySearch.firstElementChild;
let consultantIndustry = document.querySelector(".searchItem"); 
let category = consultantIndustry.querySelectorAll("button"); //找到所有子選單選項
// console.log(category);
console.log(categoryCurrent.innerText);
let currentCategory = consultantIndustrySearch.firstElementChild;
consultantIndustrySearch.addEventListener("click", () => {
    consultantIndustry.classList.toggle("-on");
    if(consultantIndustry.classList.contains("-on")){
        consultantIndustry.style.display = "block";
    }else{
        consultantIndustry.style.display = "none";
    }

    for(let i = 0; i <category.length; i++ ){
        category[i].addEventListener("click", e => {
            categoryCurrent.innerText = e.target.innerHTML;
            categoryCurrent.insertAdjacentHTML("beforeend", `
                <i class="fa-solid fa-chevron-down"></i>
            `)
        })
    }
})