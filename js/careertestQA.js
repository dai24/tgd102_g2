new Vue({
    el:'#careertxtQA',
    data:{
        isshow7:true,
        isshow1:true,
        isshow2:false,
        isshow3:false,
        isshow4:false,
        isshow5:false,
        isshow6:false,

        username:"",
        

    },
    methods: {
        
        open1(){
            this.isshow1 = false,
            this.isshow2 = true
        },
        open2(){
            this.isshow2 = false,
            this.isshow3 = true
        },
        open3(){
            this.isshow3 = false,
            this.isshow4 = true
        },
        open4(){
            this.isshow4 = false,
            this.isshow5 = true
        },
        open5(){
            this.isshow7 = false,
            this.isshow5 = false,
            this.isshow6 = true
            
        },
    },

})


// ======================================


// let careertestAnswer = document.getElementsByClassName("btna18");
// // console.log(careertestAnswer);

// let answerSubmit = document.getElementById("answerSubmit");
// let testanswerName = document.getElementById("testanswerName");
// let txt1_name = document.getElementById("txt1_name");
// let img_mbti = document.getElementById("img_mbti");
// let txt1_mbti = document.getElementById("txt1_mbti");
// let txt2_mbti = document.getElementById("txt2_mbti");
// let txt3_mbti = document.getElementById("txt3_mbti");


// let mbtiAnswer = '';
// for(let i = 0; i < careertestAnswer.length; i++){
//     // console.log(i);
//     careertestAnswer[i].addEventListener('click', function(){
       
//         // console.log(careertestAnswer[i].getAttribute("data-value"));
//         let a = careertestAnswer[i].getAttribute("data-value")
       
//         // console.log(typeof(careertestAnswer[i].getAttribute("data-value")));
       
//         mbtiAnswer += a
//         // console.log(mbtiAnswer);
        
//         // console.log(txt1_mbti.innerText);
//         // console.log(img_mbti.getAttribute('src'));
//         // console.log(INTJ);
//         if(mbtiAnswer == 'ISTJ'){
//             img_mbti.setAttribute('src', `${ISTJ.img}`) 
//             txt1_mbti.innerText = ISTJ.mbti;
//             txt2_mbti.innerText = ISTJ.description;
//             txt3_mbti.innerText = ISTJ.job;
//         }else if(mbtiAnswer == 'ISFJ'){
//             img_mbti.setAttribute('src', `${ISFJ.img}`) 
//             txt1_mbti.innerText = ISFJ.mbti;
//             txt2_mbti.innerText = ISFJ.description;
//             txt3_mbti.innerText = ISFJ.job;
//         }else if(mbtiAnswer == 'INFJ'){
//             img_mbti.setAttribute('src', `${INFJ.img}`) 
//             txt1_mbti.innerText = INFJ.mbti;
//             txt2_mbti.innerText = INFJ.description;
//             txt3_mbti.innerText = INFJ.job;
//         }else if(mbtiAnswer == 'INTJ'){
//             img_mbti.setAttribute('src', `${INFJ.img}`) 
//             txt1_mbti.innerText = INFJ.mbti;
//             txt2_mbti.innerText = INFJ.description;
//             txt3_mbti.innerText = INFJ.job;
//         }else if(mbtiAnswer == 'ISTP'){
//             img_mbti.setAttribute('src', `${ISTP.img}`) 
//             txt1_mbti.innerText = ISTP.mbti;
//             txt2_mbti.innerText = ISTP.description;
//             txt3_mbti.innerText = ISTP.job;
//         }else if(mbtiAnswer == 'ISFP'){
//             img_mbti.setAttribute('src', `${ISFP.img}`) 
//             txt1_mbti.innerText = ISFP.mbti;
//             txt2_mbti.innerText = ISFP.description;
//             txt3_mbti.innerText = ISFP.job;
//         }else if(mbtiAnswer == 'INFP'){
//             img_mbti.setAttribute('src', `${INFP.img}`) 
//             txt1_mbti.innerText = INFP.mbti;
//             txt2_mbti.innerText = INFP.description;
//             txt3_mbti.innerText = INFP.job;
//         }else if(mbtiAnswer == 'INTP'){
//             img_mbti.setAttribute('src', `${INTP.img}`) 
//             txt1_mbti.innerText = INTP.mbti;
//             txt2_mbti.innerText = INTP.description;
//             txt3_mbti.innerText = INTP.job;
//         }else if(mbtiAnswer == 'ESTP'){
//             img_mbti.setAttribute('src', `${ESTP.img}`) 
//             txt1_mbti.innerText = ESTP.mbti;
//             txt2_mbti.innerText = ESTP.description;
//             txt3_mbti.innerText = ESTP.job;
//         }else if(mbtiAnswer == 'ESFP'){
//             img_mbti.setAttribute('src', `${ESFP.img}`) 
//             txt1_mbti.innerText = ESFP.mbti;
//             txt2_mbti.innerText = ESFP.description;
//             txt3_mbti.innerText = ESFP.job;
//         }else if(mbtiAnswer == 'ENFP'){
//             img_mbti.setAttribute('src', `${ENFP.img}`) 
//             txt1_mbti.innerText = ENFP.mbti;
//             txt2_mbti.innerText = ENFP.description;
//             txt3_mbti.innerText = ENFP.job;
//         }else if(mbtiAnswer == 'ENTP'){
//             img_mbti.setAttribute('src', `${ENTP.img}`) 
//             txt1_mbti.innerText = ENTP.mbti;
//             txt2_mbti.innerText = ENTP.description;
//             txt3_mbti.innerText = ENTP.job;
//         }else if(mbtiAnswer == 'ESTJ'){
//             img_mbti.setAttribute('src', `${ESTJ.img}`) 
//             txt1_mbti.innerText = ESTJ.mbti;
//             txt2_mbti.innerText = ESTJ.description;
//             txt3_mbti.innerText = ESTJ.job;
//         }else if(mbtiAnswer == 'ESFJ'){
//             img_mbti.setAttribute('src', `${ESFJ.img}`) 
//             txt1_mbti.innerText = ESFJ.mbti;
//             txt2_mbti.innerText = ESFJ.description;
//             txt3_mbti.innerText = ESFJ.job;
//         }else if(mbtiAnswer == 'ENFJ'){
//             img_mbti.setAttribute('src', `${ENFJ.img}`) 
//             txt1_mbti.innerText = ENFJ.mbti;
//             txt2_mbti.innerText = ENFJ.description;
//             txt3_mbti.innerText = ENFJ.job;
//         }else if(mbtiAnswer == 'ENTJ'){
//             img_mbti.setAttribute('src', `${ENTJ.img}`) 
//             txt1_mbti.innerText = ENTJ.mbti;
//             txt2_mbti.innerText = ENTJ.description;
//             txt3_mbti.innerText = ENTJ.job;
//         }
        
//     })
// }

// answerSubmit.addEventListener('click',function(){
//     // console.log(testanswerName.value);
//     txt1_name.innerText = testanswerName.value
// })



// let ISTJ = {
//     img : "./images/careertest/16MBTI/ISTJ.png",
//     mbti : "物流師",
//     description : "認真、可靠、實事求是、負責，偏向從邏輯上決定應做什麼，並且會穩步地朝著目標努力，不容易分心。喜歡讓工作、家庭、生活等，一切都井然有序，重視傳統和忠誠。",
//     job : "會計師 、商業分析師 ",
// };

// let ISFJ = {
//     img : "./images/careertest/16MBTI/ISFJ.png",
//     mbti : "守衛者",
//     description : "人格安靜、友善、負責、認真，而且個性忠誠、體貼，時常留意並且會記住對他們很重要的人的細節，關心他人的感受。努力營造有序、和諧的工作和家庭環境。",
//     job : "醫療工作、客服專員",
// };


// let INFJ = {
//     img : "./images/careertest/16MBTI/INFJ.png",
//     mbti : "提倡者",
//     description : "喜歡在思想、關係、物質財富之間尋找意義和關聯，並對他人有很強的洞察力。有責任心，堅守自己的價值觀，常思考如何最好地實現共同利益有清楚的計畫及願景，並且也可以果斷地實施。",
//     job : "人資專員、社工人員",
// };

// let INTJ = {
//     img : "./images/careertest/16MBTI/INTJ.png",
//     mbti : "建築師",
//     description : "具有獨到的見解和強大的動力來實施他們的想法和目標，因此很擅長學習複雜知識及理論，在專業領域往往能有所成就。能夠快速地看出事件的模式，並制定出長遠的解釋性觀點。",
//     job : "財務專員、精算師 ",
// };

// let ISTP = {
//     img : "./images/careertest/16MBTI/ISTP.png",
//     mbti : "鑑賞家",
//     description : "通常是團體中較為安靜的「觀察者」，不過一旦出現問題，往往能迅速採取行動，尋找可行的解決方案。擅長分析事情發生的原因，通常精於使用工具或數據來找出實際問題的核心。",
//     job : "技術員、工程師 ",
// };


// let ISFP = {
//     img : "./images/careertest/16MBTI/ISFP.png",
//     mbti : "探險家",
//     description : "比一般人更需要生活的變化與刺激，環境適應力高、容易觸發想像力，有讓人難以抗拒的魅力，不過衝動的個性不善常強規畫，也比較無法客觀的處理事情。",
//     job : "藝術工作者、時尚設計師",
// };

// let INFP = {
//     img : "./images/careertest/16MBTI/INFP.png",
//     mbti : "調停者",
//     description : "忠於自己的價值觀和對他們重要的人，喜歡花時間探索自己的價值觀，了解人們並幫助他們發揮潛力。適應性強且接受度高，喜歡發掘新的想法及新的可能性。",
//     job : "文案寫手、平面設計師",
// };


// let INTP = {
//     img : "./images/careertest/16MBTI/INTP.png",
//     mbti : "邏輯學家",
//     description : "喜歡對他們感興趣的一切事物做出合乎邏輯的解釋。對理論想法遠比對社交互動更感興趣。在深入專注於解決他們感興趣領域中的問題時有著非凡的能力。",
//     job : "商業分析師、軟體設計師",
// };

// let ESTP = {
//     img : "./images/careertest/16MBTI/ESTP.png",
//     mbti : "企業家",
//     description : "最勇於冒險的類型，是徹底的行動派，「實作就是最好的學習」。專注於「立竿見影」的效果，解釋理論和概念的過程都會讓他們感到厭煩。專注於當下。享受可以和其他人互動的每一刻。",
//     job : "創意企劃、主持人",
// };

// let ESFP = {
//     img : "./images/careertest/16MBTI/ESFP.png",
//     mbti : "表演者",
//     description : "外向、友好。熱愛生活、享樂主義至上，享受物質娛樂。他們也喜歡與人群為伍，喜歡與他人合作，在工作上，講究常識和實用性。擅長社交，不會害怕與陌生人接觸，容易適應新的人和環境。",
//     job : "空服員、導遊 ",
// };


// let ENFP = {
//     img : "./images/careertest/16MBTI/ENFP.png",
//     mbti : "競選者",
//     description : "性格熱情且富有想像力，能夠快速建立起事件和資訊之間的關聯，並根據他們觀察到的模式自信地推進。這類型的人非常自發，而且依賴於他們的即興創作能力和說話之道，在聚會中經常成為焦點。",
//     job : "記者、產品經理",
// };

// let ENTP = {
//     img : "./images/careertest/16MBTI/ENTP.png",
//     mbti : "辯論家",
//     description : "在接收新資訊時，。重視邏輯觀點，會透過多個角度觀察事物，並勇於表達自己的看法。不喜歡做一成不變的事，很少會以同樣的方式做同樣的事情，容易出現三分鐘熱度。",
//     job : "行銷專員、律師",
// };

// let ESTJ = {
//     img : "./images/careertest/16MBTI/ESTJ.png",
//     mbti : "總經理",
//     description : "天生的領導者，具備超卓的組織力和領導才能，擅長於組織及策劃事活動，可以用上最有效率方式達致最大效益，也懂得控制大局，成為團隊中不可或缺的領袖。",
//     job : "行銷企劃、財務專員",
// };

// let ESFJ = {
//     img : "./images/careertest/16MBTI/ESFJ.png",
//     mbti : "執政官",
//     description : "熱情、認真、喜歡與他人合作，以精準、準時地完成任務。即使在小事上也堅決忠誠到底。會留意到其他人在日常生活中需要什麼，並嘗試提供。",
//     job : "活動企劃、醫療工作",
// };

// let ENFJ = {
//     img : "./images/careertest/16MBTI/ENFJ.png",
//     mbti : "主人公",
//     description : "熱情、善解人意、反應靈敏、責任感強，擅於發現每個人的潛力，也希望能幫助他人發揮潛力，善於交際，天生感染力強，經常成為團體中的領導者。",
//     job : "公關、輔導員、老師",
// };

// let ENTJ = {
//     img : "./images/careertest/16MBTI/ENTJ.png",
//     mbti : "指揮官",
//     description : "邏輯性強、具有決策力的引導者，他們在做決定方面雖然很迅速，但非常的小心。同時，他們也認為挑戰能使自己更進步。給人自信和有魅力的感覺，總能帶領大家往目標前進。",
//     job : "商業專員、律師",
// };

