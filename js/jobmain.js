Vue.component('my-list1',{
    data() {
        return {
            // companyImg : './images/findJob/comLogo.jpg',
            // companyJob : '醫療客服專案實習師',
            // companyName : 'Dr. Right 精準關懷',
            // jobMain : '化身為醫療院所業主的客服顧問，協助做好醫病關係維繫。不同於一般的傳統客服，Dr.Right 走的是高端醫療客服公關，做為院長與患者間的溝通橋樑。醫療客訴案件處理與追蹤 定期與業主檢討醫療品質問題，協助導入建。',
            // vacancies : 6,
            // placeDist : '台北',
            // salary : 200,
            // viewCount : 20
            jobTitle:'醫療客服專案管理師',
            companyImg : './images/findJob/comLogo.jpg',
        }
    },
    template:`
    <div class="jobMainWrapperTitle">
        <h2>{{jobTitle}}</h2>
        <div class="moveToCom">
            <img :src="companyImg" alt=""><p>Dr. Right 精準關懷</p>
        </div>
    </div>
            `,
    
})
Vue.component('my-list2',{
    data() {
        return {
            jobDescribe:'化身為醫療院所業主的客服顧問，協助做好醫病關係維繫。不同於一般的傳統客服，Dr.Right 走的是高端醫療客服公關，做為院長與患者間的溝通橋樑。醫療客訴案件處理與追蹤 定期與業主檢討醫療品質問題，協助導入建議及改善方案定期與業主檢討醫療品質問題，協助導入建議及改善方案 對於客服數據進行統計分析，提供業主顧問分析報告。',
            experience:'資訊，電腦工程，電機，相關學科、五年以上的程式學科或工作實習經驗、網站框架經驗(列Ruby on Rails，Django-Python，Java，Node.js)、數據庫經驗(列PostgreSQL，SQL Server)、測試QC經驗(列QUnit，Mocha，Jasmine，RSpec)。',
            condition:'具備解決問題的能力、善於邏輯分析，口語表達清晰、溝通應對流暢，個性開朗、樂觀進取、主動積極、具工作熱忱，具有擔任社團活動幹部經驗者尤佳。',
            addPoints:'自我激勵、自我學習、自我管理、自我要求，渴望滿足使用者的需求，並追求成就與卓越感，能夠快速學習新技能和熟悉新領域，願意主動參與團隊，與非工程人員一同合作奮鬥',
            vacancies : 6,
            placeDist : '台北',
            salary : 200,

        }
    },
    template:`
    <div class="jobMainWrapperMain">
    <div class="jobMainContent">
            <div class="jobMain">
                <div class="jobMainStatement"><h3>職缺描述</h3></div>
                <div><p>{{jobDescribe}}</p></div>
            </div>
            <div class="jobMain">
                <div class="jobMainStatement"><h3>職務需求</h3></div>
                <div><p>【經驗條件】</p></div>
                <div>
                    <ul>
                        <li><p>{{experience}}</p></li>
                    </ul>
                </div>
            </div>
            <div class="jobMain">
                <div class="jobMainStatement"><h3>條件要求</h3></div>
                <div>
                    <ul>
                        <li><p>{{condition}}</p></li>
                        
                    </ul>
                </div>
            </div>
            <div class="jobMain">
                <div class="jobMainStatement"><h3>加分條件</h3></div>
                <div>
                    <ul>
                        <li><p>{{addPoints}}</p></li>
                    </ul>
                </div>
            </div>
            <div class="jobMainVacanciesBtn">
                <div class="btna5 saveApplyOpen" @click='openSave'>儲存職缺</div>
                <div class="btna6" @click="openApply">應徵職缺</div>
            </div>
        </div>


        <div class="jobMainItem">
                <div class="jobMainIcon">
                    <a href="" title="職缺人數"><i class="fa-solid fa-user-tie"></i><p>{{vacancies}}</p></a>
                </div>
                <div class="jobMainIcon">
                    <a href="" title="地點"><i class="fa-solid fa-location-dot"></i><p>{{placeDist}}</p></a>
                </div>
                <div class="jobMainIcon">
                    <a href="" title="薪資"><i class="fa-solid fa-dollar-sign"></i><p>{{salary}} / h</p></a>
                </div>
        </div>
    </div>
    
            `,
    methods: {
        openSave(){
            this.$emit('save-click')
        },
        openApply(){
            this.$emit('open-click')
        },
        
    }, 
    
})
Vue.component('my-list3',{
    data() {
        return {
            companyName : 'Dr. Right 精準關懷',
            numberOfCompant:'50',
            jobTitle:'醫療客服專案管理師',
            companyImg : './images/findJob/comLogo.jpg',
            companyAddress:'100台北市中正區濟南路一段321號',
            companyAbout:`我們的使命是發揚高品質醫療資源，使人人受惠。
            Dr.Right 成立於 2016 年，是由精品公關、醫管顧問、數據分析師所組成的團隊。協助醫療團隊第一時間與患者關懷溝通，改善院所執行流程、進而提升營運績效，使得醫病雙方都能夠從中受益的 CRM 服務。我們期許能用創新技術與高端服務思維，來打造美好的醫病互動關係。
            
            在網路社群越來越開放的環境底下，醫病關係反而是逐漸惡化的。醫師與患者間，經常是因為就診溝通時的誤解或是不順暢，患者們就直接上網發出公開的負面評論。醫師們也因此感到挫折甚至憤怒，最後轉為雙方對簿公堂。因而往往患者的疑問沒得到解答，醫師也陷入情緒中無法專心看診，社群平台上盡是充斥著醫病關係的仇恨言論。
            
            Dr. Right 為醫病間搭起了一個新橋樑，可以透過專屬的手機應用程式直接反映給院所端。溫馨的醫療客服團隊會立即在黃金 48 小時內，協助院所透過電話關心病患的現況、照顧不安的情緒、協助釐清問題確切點後，馬上反映至院內做後續處理。不但即時解決醫病雙方資訊不對稱的問題，醫療單位也因此有依據來改善醫療品質。
            
            我們希望透過這個服務，讓整個社會產生更多的好醫師與好病患。醫病關係能不再緊張，民眾也能夠接受到更好的醫療品質照護 !`
        }
    },
    template:
    `
    <div class="jobMainWrapperCom">
        <div class="jobMainWrapperComTitle">
            <div><a><img :src="companyImg" alt="" class="moveToCom"></a></div>
            <div class="jobMainWrapperComIconT">
                    <a><h2 class="moveToCom">{{companyName}}</h2></a>
                <div class="jobMainWrapperComIconTM">
                    <div class="jobMainWrapperComIcon">
                        <a title="總人數"><i class="fa-solid fa-users"></i><p>{{numberOfCompant}}</p></a>
                    </div>
                    <div class="jobMainWrapperComIcon">
                        <a title="地點"><i class="fa-solid fa-location-dot"></i><p>{{companyAddress}}</p></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="jobMainWrapperComMain">
            <h3>關於我們</h3>
            <p>{{companyAbout}}</p>
        </div>
    </div>
    `,
    
})
Vue.component('my-list4',{
    data() {
        return {
            jobMainOthTitle:{
                companyName : 'Dr. Right 精準關懷',
                companyImg : './images/findJob/comLogo.jpg',
            },
            jobMainOthMain:[
                {
                    companyDepartment : '溝通部門',
                    companyName : 'Dr. Right 精準關懷',
                    vacancies : 6,
                    placeDist : '台北',
                    salary : 200,
                    numberOfCompant:'50',
                    jobTitle:'醫療客服專案管理師',
                },
                {
                    companyDepartment : '溝通部門',
                    companyName : 'Dr. Right 精準關懷',
                    vacancies : 6,
                    placeDist : '台北',
                    salary : 200,
                    numberOfCompant:'50',
                    jobTitle:'醫療客服專案管理師',
                }
            ]
            
        
            
        }
    },
    template:`
    <div class="jobMainWrapperOther">
                <div class="jobMainWrapperOthSec">
                    <div class="jobMainWrapperOthTitle">
                        <img :src="jobMainOthTitle.companyImg" alt=""><h2><span>{{jobMainOthTitle.companyName}}</span>的其他熱門職缺</h2>
                    </div>
                    <div class="jobMainWrapperOthMain" v-for="jobMainOthMain in jobMainOthMain">
                        <div>
                            <p>{{jobMainOthMain.companyDepartment}}</p>
                            <p>{{jobMainOthMain.jobTitle}}</p>
                            <div class="findJobVacanciesIcTitle">
                                <div class="findJobVacanciesIcon">
                                    <a href="" title="職缺人數"><i class="fa-solid fa-user-tie"></i><p>{{jobMainOthMain.vacancies}}</p></a>
                                </div>
                                <div class="findJobVacanciesIcon">
                                    <a href="" title="地點"><i class="fa-solid fa-location-dot"></i><p>{{jobMainOthMain.placeDist}}</p></a>
                                </div>
                                <div class="findJobVacanciesIcon">
                                    <a href="" title="薪資"><i class="fa-solid fa-dollar-sign"></i><p>{{jobMainOthMain.salary}} / h</p></a>
                                </div>
                            </div>
                        </div>
                        <div class="jobMainWrapperOthBtn">
                            <div class="btna5 saveApplyOpen" @click='openSave'>儲存職缺</div>
                            <div class="btna6" @click='goApply'>立即應徵</div>
                        </div>
                        
                    </div>
                    <div class="jobMainWrapperOthMain">
                        <div class="btna19">查看更多職缺</div>
                    </div>
                </div>
                
            </div>
            `,
    methods: {
        openSave(){
            this.$emit('save-click')
        },
        goApply(){
            location = './jobMain.html';
        }
    },
})

new Vue({
    el: '#jobMainApp',
    data:{
        asd:'123',
        isShowSave:false,
        isShow:false,
        isShowR: false,
        resumeBrow:[
            {   
                resumeName:'履歷一',
                resumeImg:'./images/resume/resume_1.jpg'
            }
        ]
    },
    methods: {
        open(){
            this.isShow =!this.isShow
        },
        close(){
            this.isShow =!this.isShow
        },
        saveGo(){
            this.isShowSave =!this.isShowSave
        },
        saveClose(){
            this.isShowSave =!this.isShowSave
        },
        isShowResOpen(){
            this.isShowR =!this.isShowR
        },
        isShowResClose(){
            this.isShowR =!this.isShowR
        }
        
    },

})
