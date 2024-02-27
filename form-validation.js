

function handleSubmit(){
    var message = document.getElementById('alert-id');
    var successMsg = document.getElementById('success-id');
    message.style.display = "none";
    var nam = document.getElementById('fname-id').value;
    var email = document.getElementById('email-id').value;
    var pswd = document.getElementById('password-id').value;
    var cpswd = document.getElementById('cpassword-id').value;
    var submitBtn = document.getElementById('submit-id');
    
    
       if(nam.length == 0 || /^[a-zA-Z]+$/.test(nam) == false)
       {
          message.innerText= "Please enter the name";
          message.style.display = "block";
          return false;
       }
    
       if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false){
          message.innerText = "Please enter the valid e-mail";
          message.style.display = "block";
          return false;
       }
    
       if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(pswd) == false){
          message.innerText = "Password should be 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";
          message.style.display = "block";
          return false;
       }
    
       if(pswd != cpswd)
       {
          message.innerText = "Passwords did nt match";
          message.style.display = "block";
          return false;
       }
       successMsg.style.display = "block";
       successMsg.innerText = "Success!";
       //submitBtn.addEventListener("load",home.html);
       //submitBtn.onload(home.html);
       //window.open("home.html");
       //location.href("home.html");
       //location.replace("./home.html");
       
       window.location.href = './home.html';
       return false;
    }