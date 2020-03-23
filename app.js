// alert('Welcome to my calculator')

const input = document.getElementById('input')
let resultValue, currentValue
let reset = false;

//insert number

const insert = (num) =>{
    if (reset) {
        input.value=""
        reset = false
    }
    input.value = input.value + num
}

const c = ()=>{
    input.value = ""
}

const result = ()=>{
    if(input.value){

   
    currentValue = input.value
    resultValue = eval(currentValue)
    input.value = (Math.round(resultValue*100000)/100000).toFixed(4)
    reset= true;
    } 
}

const negative = ()=>{
    if(input.value){
    currentValue = input.value;
    resultValue = currentValue * -1
    input.value=(Math.round(resultValue*100000)/100000).toFixed(4);}
}

const percentage = ()=>{
    currentValue = input.value;
    resultValue = currentValue * 100
    input.value=resultValue + '%';
}