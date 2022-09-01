const input = document.querySelector('#fullone');
const personName = document.getElementById('fulltwo');
const expiry = document.querySelector('#halfone');
const cvvInput = document.querySelector('#halftwo')

input.addEventListener('keyup', function(){
    if(input.value.length > 0){
        let photocopy;
        if(input.value.length === 4 || input.value.length === 9 || input.value.length ===14){
            photocopy = input.value + " ";
            input.value = photocopy;
        }  else if(input.value.length === 19){
            expiry.focus();
        } 
        
    }

    
})

expiry.addEventListener('keyup', function(){
    if(expiry.value.length === 2){
        copy = expiry.value + "/";
        expiry.value = copy;
    } else if(expiry.value.length === 5){
        cvvInput.focus();
    }
})




