const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('re-password');


function error(input , message){
    input.className = 'form-control is-invalid'
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}
function success(input){
    input.className = 'form-control is-valid'
}

function checkemail(input){
      const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  
      if(re.test(input.value)){
        success(input);
      }
      else{
        if(input.value === ''){
            error(input, `Please enter your ${input.id}`);

        }
        else{
            error(input, 'Please enter your e-mail address correctly')
        }
      }
    };   

function checkrequired(inputs){
    inputs.forEach(function(input){
        if(input.value === ''){
            error(input, `Please enter your ${input.id}`);
        }
        else{
            success(input);
        }
    });
};
function checkpassword(inputp,inputrep){
    if(inputp.value !== inputrep.value){
        error(inputrep, 'Passwords are not the same')
    }
}

function checklenght(input,min,max){
    if(input.value.length < min){
        error(input,`${input.id} must be at least ${min} characters`);

    }
    else if(input.value.length > max){
        error(input, `${input.id} must be at most ${max} characters`);

    }
    else{
        success(input);
    }
}

    
form.addEventListener('submit',function(e){
    e.preventDefault();

    checkrequired([username,email,password,repassword]);
    checkemail(email);
    checklenght(username,4,15);
    checklenght(password,7,13);
    checkpassword(password,repassword);
    
});
