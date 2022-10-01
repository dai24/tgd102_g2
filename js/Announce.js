$(function () {

   

    const name = document.querySelector("#name")
    const job = document.querySelector("#job")
    const salary = document.querySelector("#salary")
    const require = document.querySelector("#require")
    const condition = document.querySelector("#condition")
    const plus = document.querySelector("#plus")
    // const wfh = document.querySelector("#wfh")
    let wfh1 ='';
    let wfh = document.getElementsByName('wfh');
        for(let i = 0;i < wfh.length;i++){
            wfh[i].addEventListener('click',()=>{
            if(wfh[i].checked){

                wfh1 = wfh[i].value;
                console.log(wfh1);

                }
                    
            })

        

        }
    
   

    document.querySelector('.submit').addEventListener('click', () => {
        console.log('true');  
        location = "./company_main.html";
              
        
       
        fetch('./php/Announce.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name.value,
                job: job.value,
                salary: salary.value,
                require: require.value,
                condition: condition.value,
                plus: plus.value,
                wfh: wfh1
                
             

            })
        })
        .then(resp => resp.json(
            console.log(resp)))



        .then(body => {
            console.log(body)
        })


    })


})

