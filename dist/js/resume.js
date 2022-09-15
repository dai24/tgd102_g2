let resume_zoome_window=`
<div class="m-a-s-k"></div>
<div class="resume_zoom">
   <button class=""><i class="fa-solid fa-xmark"></i></button>
   <img src="">
</div> 
`,resume_save_window=`
<div class="m-a-s-k"></div>
<div class="card_resume resume_window">
   <ul class="cardUl">
      <li>
         <h1 class="cardH1">儲存</h1>
      </li>
      <li>
         <i class="fa-solid fa-xmark cardXmark"></i>
      </li>
   </ul>
   <div class="cardInner applyfor">
      <div class="applyTitle">
         <div class="messageTitleMain">
            <h3>儲存成功</h3>
            <h3>要到會員的我的履歷檢視嗎？</h3>
         </div>
      </div>
      <div class="btna3 check_btn">確定</div>
   </div> 
      
   </div>
`,resume_pay_window=`
<div class="m-a-s-k"></div>
<div class="card_resume resume_window">
   <ul class="cardUl">
      <li>
         <h1 class="cardH1">金幣不足</h1>
      </li>
      <li>
         <i class="fa-solid fa-xmark cardXmark"></i>
      </li>
      </ul>
      <div class="cardInner applyfor">
         <div class="applyTitle">
            <div class="messageTitleMain">
               <h3>001模板需100金幣</h3>
            </div>
         </div>
         <div class="btna3 addpay">確定加值</div>
      </div>
</div>
`,resume_delete_window=`
<div class="m-a-s-k"></div>
<div class="card_resume resume_window">
   <ul class="cardUl">
      <li>
         <h1 class="cardH1">刪除</h1>
      </li>
      <li>
         <i class="fa-solid fa-xmark cardXmark"></i>
      </li>
   </ul>
   <div class="cardInner applyfor">
      <div class="applyTitle">
         <div>
            <i class="fa-regular fa-circle-check"></i>
         </div>
         <div class="messageTitleMain">
            <h3>確定刪除履歷嗎？</h3>
         </div>
      </div>
      <div class="btna3 check_btn">確定</div>
   </div>
</div>
`,resume_share_window=`
<div class="m-a-s-k"></div>
<div class="card_resume resume_window">
        <ul class="cardUl">
            <li>
                <h1 class="cardH1">分享您的履歷</h1>
            </li>
            <li>
                <i class="fa-solid fa-xmark cardXmark"></i>
            </li>
        </ul>
        <div class="cardInner shareresumeform ">
            <div class="applyTitle">
                <select name="" id="shareresumeform_select"><option value="設計">請選擇履歷種類</option>
                    <option value="工程">工程</option>
                    <option value="管理">管理</option>
                    <option value="媒體">媒體</option>
                    <option value="銷售">銷售</option>
                    <option value="金融">金融</option>
                    <option value="行政">行政</option>
                    <option value="科技">科技</option>
                    <option value="服務">服務</option>
                </select>    
            </div>
            <div class="shareresumeform_1">
                <input type="radio">
                <i class="fa-solid fa-earth-asia"></i>
                <span>公開 網站上的人都可以找到並檢視。</span>
                <div class="share_ig_fb">
                    <h3>分享至</h3>
                    <img src="/images/header_icon/ig.jpg" alt="">
                    <i class="fa-brands fa-facebook"></i>
                </div>
                <div class="btna3 check_btn">確定</div>
            </div>
        </div>
    </div>
`,resume_pdf_window=`
<div class="m-a-s-k"></div>
<div class="card_resume  resume_window">
        <ul class="cardUl">
            <li>
                <h1 class="cardH1">您的履歷 PDF 已就緒</h1>
            </li>
            <li>
                <i class="fa-solid fa-xmark cardXmark"></i>
            </li>
        </ul>
        <div class="cardInner applyfor">
            <div class="applyTitle">
                <div>
                    <i class="fa-solid fa-file-circle-plus"></i>
                </div>
                <div class="deleteTitleMain">
                    <h3>新鮮人履歷.pdf</h3>
                </div>
            </div>
            <div class="btna3 check_btn pdf_dowload">下載 PDF</div>
        </div>
    </div>
`,resume_addmoney_window=`
<div class="m-a-s-k"></div>
<div class="card_resume  resume_window">
        <ul class="cardUl">
            <li>
                <h1 class="cardH1">加值點數</h1>
            </li>
            <li>
                <a href="./student_main.html"><i class="fa-solid fa-xmark cardXmark"></i></a>
            </li>
        </ul>
        <div class="cardInner studentaddmoney">
            <div class="studentaddmoney_applyTitle">
        
                <div class="applyTitle_main">
                    <input type="radio" name="123">
                    <h2>NT 399</h2>
                    <img src="/images/header_icon/money.png" alt="">
                    <h2>200金幣</h2>
                </div>
                <div class="applyTitle_main">
                    <input type="radio" name="123">
                    <h2>NT 899</h2>
                    <img src="/images/header_icon/money.png" alt="">
                    <h2>500金幣</h2>
                </div>
                <div class="applyTitle_main">
                    <input type="radio" name="123">
                    <h2>NT 1599</h2>
                    <img src="/images/header_icon/money.png" alt="">
                    <h2>1000金幣</h2>
                </div>
            </div>
            <div class="btna3 check_btn">確定</div>
        </div>
</div>`;function closeWindows(){$(".resume_window .fa-xmark,.resume_window .check_btn,.resume_zoom").on("click",function(){$(".resume_zoom").remove(),$(".resume_window").remove(),$(".m-a-s-k").remove()})}$(function(){$(".btna13").on("click",function(){$(".btna13").css("background-color","rgba(255, 255, 255, 0)").css("color","#313131"),$(this).css("background-color","#EAA565").css("color","#FFFFFF")}),$(".resume_zoom_btn").on("click",function(){$(".resume_wrapper").append(resume_zoome_window);var i=$(this).parents(".resume_card").children("img").attr("src");$(".resume_zoom img").attr("src",i),$(".m-a-s-k").show(),$(".resume_zoom .fa-xmark").on("click",function(){closeWindows()})}),$("#resume_model-btn").on("click",function(){$(".resume_model-border").toggle("blind",{percent:50},500)}),$(".xmark_btn").on("click",function(){$(".resume_model-border").toggle("blind",{percent:50},500)}),$(".pagination-ul a").on("click",function(){$(".pagination-ul a").css("color","#313131"),$(this).css("color","#EAA565")}),$(".resume_model-border .resume_pay").on("click",function(){$(".resume_wrapper").append(resume_pay_window),closeWindows()}),$(".addpay").on("click",function(){console.log("123"),$(".resume_wrapper").append(resume_pay_window),closeWindows()}),$("#resume_save").on("click",function(){$(".resume_wrapper").append(resume_save_window),$(".m-a-s-k").show(),closeWindows()}),$("#resume_share").on("click",function(){$(".resume_wrapper").append(resume_share_window),$(".m-a-s-k").show(),closeWindows()}),$("#resume_pdf_dowload").on("click",function(){$(".resume_wrapper").append(resume_pdf_window),$(".m-a-s-k").show(),closeWindows()}),$(".pdf_dowload").on("click",function(){window.print()}),$("#resume_delect").on("click",function(){$(".resume_wrapper").append(resume_delete_window),$(".m-a-s-k").show(),closeWindows()})});