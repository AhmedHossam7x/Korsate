function check(){
    const form=document.getElementById('form');
    const email=document.getElementById('email').value;
    const pat= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    
    if(email.match(pat)){
        form.classList.add('valid')
        form.classList.remove('invalid')
    }else{
        form.classList.remove('valid')
        form.classList.add('invalid')
    }
    if(email ==""){
        form.classList.remove('valid')
        form.classList.remove('invalid')
    }
}
    
const p_w = document.getElementById('pass');
const toggle = document.getElementById('toggle');
function show(){
    if (p_w.type === 'password'){
       p_w.setAttribute('type','text');
        toggle.classList.add('hide');
    }else{
        p_w.setAttribute('type','password');
       toggle.classList.remove('hide');
    }
}