Vue.component('my-list',{
    data() {
        return {
            isShow:false,
        }
    },
    template:`
    <div>
    <div class="contactUSInner" v-if="isShow" @click="close" ></div>
    <div v-if="isShow" class="card contactUSInnerCard" >
        <ul class="cardUl" >
            <li>
                <h1 class="cardH1">聯絡我們</h1>
            </li>
            <li>
                <i class="fa-solid fa-xmark cardXmark" @click="close"></i>
            </li>
        </ul>
        <div class="cardInner contact">
            <h2>謝謝您的主動聯絡，請留下要諮詢的問題，我們會用以下資訊進行回覆。</h2>
            <form action="">
            <div class="contactUSG">
                <input type="text" name="" value="" placeholder="請輸入電子郵件">
            </div>
            <div class="contactUSM">
                <textarea rows="10" maxlength="200" placeholder="請輸入您的訊息，我們會盡快聯繫您 !"  id="talk"></textarea>
                <p id="feedback"></p>
            </div>
            <div class="btna3" @click="close">送出</div>
            </form>
        </div>
    </div>



<footer>

    <div class="footer_inner">

        <ul>
            <li>
                <a class="footer_a" @click="open">聯絡我們</a>
            </li>
    
            <li>
                <a href="./about.html" class="footer_a">關於我們</a>
                
            </li>
    
            <li>
                <a href="#" class="footer_a">隱私政策</a>    
            </li>

        </ul>

        <h3>Copyright © INTERNGO 2022</h3>
        <p>本網站為緯育TibaMe前端工程師班第78期學員專題作品，本平台僅供學習、展示之用。</p>
        <p><a href="#">參考資源</a></p>
    </div>

</footer>  
</div>
            `, 
    methods: {
        open(){
        
            this.isShow =!this.isShow
        },
        close(){
            this.isShow =!this.isShow
        },
    },
})
new Vue({
    el:'#app2',
    data:{
        // isShow:false,
    },

    methods: {
        // open(){
        //     this.isShow =!this.isShow
        // },
        // close(){
        //     this.isShow =!this.isShow
        // },
    },

})