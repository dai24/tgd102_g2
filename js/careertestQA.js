new Vue({
    el:'#careertxtQA',
    data:{

        isshow: 0,

        questions:[
            {
                'title':'請問你比較喜歡...?',
                'answer':null,
                answers:[
                    {
                        content:'獨處',
                        value:'I'
                    },
                    {
                        content:'與他人相處',
                        value:'E'
                    }
                ]
            },
            {
                'title':'當你學習新事物時，你傾向...?',
                'answer':null,

                answers:[
                    {
                        content:'專注了解概念與理論',
                        value:'N'
                    },
                    {
                        content:'注重實際用途',
                        value:'S'
                    }
                ]
            },
            {
                'title':'當你在做決策時，你傾向...?',
                'answer':null,

                answers:[
                    {
                        content:'重視邏輯理論',
                        value:'T'
                    },
                    {
                        content:'重視相處融洽',
                        value:'F'
                    }
                ]
            },
            {
                'title':'你的生活方向傾向...?',
                'answer':null,

                answers:[
                    {
                        content:'先工作再玩耍，做事著重結果',
                        value:'J'
                    },
                    {
                        content:'先玩耍再工作，做事享受過程',
                        value:'P'
                    }
                ]
            },
        ],

        username:"",

        mbti:"",

        mbtianswer:{
            img:'',
            title: "",
            description: "",
            job: " "
        },


        

    },
    methods: {
        wholeanswer(i,k){

            this.isshow ++ 
            // console.log(this.questions[k].answers[i].value);
            this.mbti += this.questions[k].answers[i].value,
            console.log(this.mbti);

            
            if( this.mbti === "ISTJ"){
                this.mbtianswer.img = "./images/careertest/16MBTI/ISTJ.png"
                this.mbtianswer.title = "物流師"
                this.mbtianswer.description = "認真、可靠、實事求是、負責，偏向從邏輯上決定應做什麼，並且會穩步地朝著目標努力，不容易分心。喜歡讓工作、家庭、生活等，一切都井然有序，重視傳統和忠誠。"
                this.mbtianswer.job = "會計師 、商業分析師 "
            }else if( this.mbti === "ISFJ"){
                this.mbtianswer.img = "./images/careertest/16MBTI/ISFJ.png"
                this.mbtianswer.title = "守衛者"
                this.mbtianswer.description = "人格安靜、友善、負責、認真，而且個性忠誠、體貼，時常留意並且會記住對他們很重要的人的細節，關心他人的感受。努力營造有序、和諧的工作和家庭環境。"
                this.mbtianswer.job = "醫療工作、客服專員"
            }else if( this.mbti === "INFJ"){
                this.mbtianswer.img = "./images/careertest/16MBTI/INFJ.png"
                this.mbtianswer.title = "提倡者"
                this.mbtianswer.description = "喜歡在思想、關係、物質財富之間尋找意義和關聯，並對他人有很強的洞察力。有責任心，堅守自己的價值觀，常思考如何最好地實現共同利益有清楚的計畫及願景，並且也可以果斷地實施。",
                this.mbtianswer.job = "人資專員、社工人員"
            }else if( this.mbti === "INTJ"){
                this.mbtianswer.img = "./images/careertest/16MBTI/INTJ.png"
                this.mbtianswer.title =  "建築師"
                this.mbtianswer.description = "具有獨到的見解和強大的動力來實施他們的想法和目標，因此很擅長學習複雜知識及理論，在專業領域往往能有所成就。能夠快速地看出事件的模式，並制定出長遠的解釋性觀點。",
                this.mbtianswer.job ="財務專員、精算師 "
            }else if ( this.mbti === "ISTP"){
                this.mbtianswer.img = "./images/careertest/16MBTI/ISTP.png"
                this.mbtianswer.title =  "鑑賞家"
                this.mbtianswer.description = "通常是團體中較為安靜的「觀察者」，不過一旦出現問題，往往能迅速採取行動，尋找可行的解決方案。擅長分析事情發生的原因，通常精於使用工具或數據來找出實際問題的核心。",
                this.mbtianswerjob ="技術員、工程師 "
            }else if ( this.mbti === "ISFP"){
                this.mbtianswer.img = "./images/careertest/16MBTI/ISFP.png"
                this.mbtianswer.title =  "探險家"
                this.mbtianswer.description = "比一般人更需要生活的變化與刺激，環境適應力高、容易觸發想像力，有讓人難以抗拒的魅力，不過衝動的個性不善常強規畫，也比較無法客觀的處理事情。",
                this.mbtianswerjob = "藝術工作者、時尚設計師"
            }else if ( this.mbti === "INFP"){
                this.mbtianswer.img = "./images/careertest/16MBTI/INFP.png"
                this.mbtianswer.title = "調停者"
                this.mbtianswer.description = "忠於自己的價值觀和對他們重要的人，喜歡花時間探索自己的價值觀，了解人們並幫助他們發揮潛力。適應性強且接受度高，喜歡發掘新的想法及新的可能性。",
                this.mbtianswerjob ="文案寫手、平面設計師"
            }else if ( this.mbti === "INTP" ){
                this.mbtianswer.img = "./images/careertest/16MBTI/INTP.png"
                this.mbtianswer.title = "邏輯學家"
                this.mbtianswer.description = "喜歡對他們感興趣的一切事物做出合乎邏輯的解釋。對理論想法遠比對社交互動更感興趣。在深入專注於解決他們感興趣領域中的問題時有著非凡的能力。",
                this.mbtianswerjob = "商業分析師、軟體設計師"
            }else if ( this.mbti === "ESTP" ){
                this.mbtianswer.img = "./images/careertest/16MBTI/ESTP.png"
                this.mbtianswer.title ="企業家"
                this.mbtianswer.description = "最勇於冒險的類型，是徹底的行動派，「實作就是最好的學習」。專注於「立竿見影」的效果，解釋理論和概念的過程都會讓他們感到厭煩。專注於當下。享受可以和其他人互動的每一刻。",
                this.mbtianswerjob = "創意企劃、主持人"
            }else if ( this.mbti === "ESFP"){
                this.mbtianswer.img = "./images/careertest/16MBTI/ESFP.png"
                this.mbtianswer.title ="表演者"
                this.mbtianswer.description = "外向、友好。熱愛生活、享樂主義至上，享受物質娛樂。他們也喜歡與人群為伍，喜歡與他人合作，在工作上，講究常識和實用性。擅長社交，不會害怕與陌生人接觸，容易適應新的人和環境。",
                this.mbtianswerjob ="空服員、導遊 "
            }else if ( this.mbti === "ENFP"){
                this.mbtianswer.img = "./images/careertest/16MBTI/ENFP.png"
                this.mbtianswer.title = "競選者"
                this.mbtianswer.description = "性格熱情且富有想像力，能夠快速建立起事件和資訊之間的關聯，並根據他們觀察到的模式自信地推進。這類型的人非常自發，而且依賴於他們的即興創作能力和說話之道，在聚會中經常成為焦點。",
                this.mbtianswerjob ="記者、產品經理"
            }else if ( this.mbti === "ENTP"){
                this.mbtianswer.img = "./images/careertest/16MBTI/ENTP.png"
                this.mbtianswer.title = "辯論家"
                this.mbtianswer.description = "在接收新資訊時，。重視邏輯觀點，會透過多個角度觀察事物，並勇於表達自己的看法。不喜歡做一成不變的事，很少會以同樣的方式做同樣的事情，容易出現三分鐘熱度。",
                this.mbtianswerjob ="行銷專員、律師"
            }else if ( this.mbti === "ESTJ"){
            this.mbtianswer.img = "./images/careertest/16MBTI/ESTJ.png"
            this.mbtianswer.title = "總經理"
                this.mbtianswer.description = "天生的領導者，具備超卓的組織力和領導才能，擅長於組織及策劃事活動，可以用上最有效率方式達致最大效益，也懂得控制大局，成為團隊中不可或缺的領袖。",
                this.mbtianswerjob ="行銷企劃、財務專員"
            }else if ( this.mbti === "ESFJ"){
                this.mbtianswer.img = "./images/careertest/16MBTI/ESFJ.png"
                this.mbtianswer.title = "執政官"
                this.mbtianswer.description = "熱情、認真、喜歡與他人合作，以精準、準時地完成任務。即使在小事上也堅決忠誠到底。會留意到其他人在日常生活中需要什麼，並嘗試提供。",
                this.mbtianswerjob ="活動企劃、醫療工作"
            }else if ( this.mbti === "ENFJ"){
                this.mbtianswer.img = "./images/careertest/16MBTI/ENFJ.png"
                this.mbtianswer.title = "主人公"
                this.mbtianswer.description = "熱情、善解人意、反應靈敏、責任感強，擅於發現每個人的潛力，也希望能幫助他人發揮潛力，善於交際，天生感染力強，經常成為團體中的領導者。",
                this.mbtianswerjob ="公關、輔導員、老師"
            }else if ( this.mbti === "ENTJ" ){
                this.mbtianswer.img = "./images/careertest/16MBTI/ENTJ.png"
                this.mbtianswer.title =  "指揮官"
                this.mbtianswer.description = "邏輯性強、具有決策力的引導者，他們在做決定方面雖然很迅速，但非常的小心。同時，他們也認為挑戰能使自己更進步。給人自信和有魅力的感覺，總能帶領大家往目標前進。",
                this.mbtianswerjob = "商業專員、律師"
            }



        },

    },

})




