//using nested if statement to build a credit card input

const input = document.querySelector("input")

input.addEventListener('keyup', function(){
    if(input.value.length > 0){
        if(input.value.length === 3 || input.value.length === 8 || input.value.length === 14){
            const photocopy = input.value +"-"
            input.value = photocopy
        }
    }
})

