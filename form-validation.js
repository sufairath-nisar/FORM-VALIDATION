
function fnameValidation(){
   let fname = document.getElementById("fname-id")
   let fnameError = document.getElementById("fname-error")
   let regExp = /^[a-zA-Z]+$/
   if(fname.value.trim() == '')
   {
      fnameError.innerHTML = "Full name cannot be blank"
      return false
   }
   else if(!fname.value.match(regExp))
   {
      fnameError.innerHTML = "Full name must be in letters"
      return false
   }
   else
   {
      fnameError.innerHTML = ''
      return true
   }
}

function emailValidation(){
   let email = document.getElementById("email-id")
   let emailError = document.getElementById("email-error")
   let regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
   if(email.value.trim() == ''){
      emailError.innerHTML = "email cannot be blank"
      return false
   }
   else if(!email.value.match(regExp))
   {
      emailError.innerHTML = "Please enter an email correctly"
      return false
   }
   else{
      emailError.innerHTML = ''
      return true
   }
}

function pswdValidation(){
   let pswd = document.getElementById("pswd-id")
   let pswdError = document.getElementById("pswd-error")
   let regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
   if(pswd.value.trim() == ''){
      pswdError.innerHTML = "Password cannot be blank"
      return false;
   }
   else if(!pswd.value.match(regExp)){
      pswdError.innerHTML = "Password should be 8 characters with atleast 1 uppercase, lowercase, numeric digit and special symbol"
      return false
   }
   else{
      pswdError.innerHTML = ''
      return true
   }
}

function cpswdValidation(){
   let cpswd = document.getElementById('cpswd-id')
   let cpswdError = document.getElementById('cpswd-error')
   let pswd = document.getElementById('pswd-id')
   if(cpswd.value.trim() == '')
   {
      cpswdError.innerHTML = "Password cannot be blank"
      return false
   }    
   else if(pswd.value != cpswd.value){
      cpswdError.innerHTML = "Password is not matched"
      return false
   }
   else{
      cpswdError.innerHTML = ''
      return true
   }
}

function submitValidation(){
   let submitError = document.getElementById("submit-error")
   if(!fnameValidation() || !emailValidation() || !pswdValidation() || !cpswdValidation()){
      submitError.style.display = "flex"
      submitError.style.justifyContent = "center"
      submitError.style.marginLeft = "4%"
      submitError.innerHTML = "ERROR"
      return false
   }
   else{
      submitError.style.display = "none"
      submitError.innerHTML= ''
      return true
   }
}
