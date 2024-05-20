
let button7=document.querySelectorAll('button')[0]
let button8=document.querySelectorAll('button')[1]
let button9=document.querySelectorAll('button')[2]
let buttona=document.querySelector('#devides')

let button4=document.querySelectorAll('button')[4]
let button5=document.querySelectorAll('button')[5]
let button6=document.querySelectorAll('button')[6]
let buttonmm=document.querySelector('#minuses')

let button1=document.querySelectorAll('button')[8]
let button2=document.querySelectorAll('button')[9]
let button3=document.querySelectorAll('button')[10]
let buttonm=document.querySelector('#multiplies')

let button0=document.querySelectorAll('button')[12]
let buttond=document.querySelector('button')
let buttonp=document.querySelector('#addition')
let buttone=document.querySelector('#equals')
let buttonc=document.querySelector('#clears')
let buttons=document.querySelectorAll('button')
let input=document.querySelector('#display')

const form = document.getElementById("calculator-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

const operand_btns = document.querySelectorAll("button[data-type=operand]");
const operand = document.querySelectorAll("button");
let is_operator = false;
// control what happens when a button is clicked
operand_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (input.value == "0") {
    input.value = e.target.value;
    } else if (is_operator) {
      is_operator = false;
      input.value = e.target.value;
    } else if (input.value.includes(".")) {
      input.value = input.value + "" + e.target.value.replace(".", "");
    } else {
      input.value = input.value + "" + e.target.value;
    }
  });
});
 buttona.addEventListener("click",(division)=>{
   input.value = input.value + "/";
  
 }) 

 buttonmm.addEventListener("click",(subtraction)=>{
  input.value = input.value + "-";
 
}) 

buttonm.addEventListener("click",(multiplication)=>{
  input.value = input.value + "*";
 
}) 

buttonp.addEventListener("click",(addition)=>{
  input.value = input.value + "+";
 
}) 
buttone.addEventListener("click",(equalto)=>{
  input.value = eval(input.value )
  // return
 
}) 