
const firstname = document.querySelector('#firstname')
const lastname = document.querySelector('#lastname')
const email = document.querySelector('#email')
const phone = document.querySelector('#phone')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')
const form = document.querySelector('form')
const inputbox = document.querySelector('.inputbox')

document.body.className = 'fadeIn';

form.addEventListener('submit', e =>{

    e.preventDefault();

    validateInputs();

});


const setError = (element,message) =>{

    

    const inputcontrol = element.parentElement;

    inputcontrol.style.color = 'red'
    element.classList.add('error')
    element.classList.remove('success')

    element.parentElement.querySelector('.errorT').innerText = message
    
    
    
}

const setSuccess = (element) =>{

    element.parentElement.style.color = 'green'
    element.classList.add('success')
    element.classList.remove('error')

    element.parentElement.querySelector('.errorT').innerText = ""
    
}


const validateInputs = () =>{

    const firstnameT = firstname.value.trim();
    const lastnameT = lastname.value.trim();
    const emaailT = email.value.trim();
    const phoneT = phone.value.trim();
    const passwordT = password.value.trim();
    const password2T = password2.value.trim();

    
    

if(firstnameT === ''){
    setError(firstname, "Please enter first name")
}else{
    setSuccess(firstname)
    isValid = true;
}


if(lastnameT === ''){
    setError(lastname, "Please enter last name")
}else{
    setSuccess(lastname)
}


if(emaailT === ''){
    setError(email, "Please eneter Email")
}else{
    setSuccess(email)
}


if(phoneT === ''){
    setError(phone,"Please enter phone number")
}else{
    setSuccess(phone)
}


if(passwordT.length <8){
    setError(password,"Please enter Password greater than 8 characters")
}else{
    setSuccess(password)
}


if(password2T === '' || password2T != passwordT || password2T.length <8){
    setError(password2,"Passwords do not match")

}else{
    setSuccess(password2)
}



}



