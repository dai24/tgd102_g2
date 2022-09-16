$(function () {

    document.querySelector('.submit').addEventListener('click', () => {
        const name = document.querySelector('#name')
        const email = document.querySelector('#email')
        const password = document.querySelector('#password')
        const phone = document.querySelector('#phone')
        fetch('./php/regist.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                passowrd: password.value,
                phone: phone.value

            })
        }).then(resp => resp.json())
            .then(body => {
                console.log(body.message);
            })


    })


})

