function messsage(){
    var email = document.getElementById('email');
    const sucess = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(email.value == ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            email.value = '';
        }, 2000);

        sucess.style.display = 'block';
    }
}