var inputs = document.querySelector(".input");
var output = document.querySelector(".answer");
const reset = document.querySelectorAll(".reset");


/* */
var nums = document.querySelectorAll(".num");
nums.forEach(function(num){
    num.addEventListener('click', (e)=>{
        inputs.textContent += num.textContent;
        console.log(e.target);
    })
});

/*this acess the equal to */
const equalTo = document.querySelector(".equal")
equalTo.addEventListener("click", (e)=>{
//    if (inputs.textContent 


//     console.log(e.target);
});


/* this access the aritimatic operation */
const operations =  document.querySelectorAll(".operation")
operations.forEach(function(operator){
    
    operator.addEventListener("click",(e)=>{
        if(inputs.textContent === ''){
        inputs.textContent = ''
        console.log(e.target);

} else if(inputs.textContent.includes(operator.textContent, operator.textContent)){
    operator.textContent= operator.textContent
}else{
   
        inputs.textContent += operator.textContent
        console.log(e.target);
   
}
})
});

/* access the backSpace*/
const del = document.querySelector(".backspace");
del.addEventListener("click", (e)=>{
    inputs.textContent -= nums.textContent
    console.log(e.target);
});


const refresh = document.querySelector(".clear")

refresh.addEventListener("click", (e)=>{
    reset.textContent = "";
    inputs.textContent="";
    inputs.textContent="";
    output.textContent="0";

});










