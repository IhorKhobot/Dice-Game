const cube02=document.getElementById('cube_2')
const cube1=document.querySelector('.cube_1')
const cube2=document.querySelector('.cube_2')
const cube01 = document.getElementById('cube_1')
const number1=Math.floor(Math.random()*6)+1;
const number2=Math.floor(Math.random()*6)+1;
const winner = document.querySelector('.winner')
if(number1===0){
    cube1.innerHTML=' '
}
if(number1===1){

    cube1.innerHTML="<div class='one'></div>"
}
if(number1===2){

    cube1.innerHTML="<div class='two1'></div> <div class='two2'></div>"

}
if(number1===3){

    cube1.innerHTML="<div class='three1'></div><div class='three2'></div><div class='three3'></div>"
}
if(number1===4){
    cube01.classList.toggle('cube_1')
    cube01.classList.toggle('cube1')
    cube1.innerHTML="<div class='four1'></div><div class='four2'></div><div class='four3'></div><div class='four4'></div>"
}
if(number1===5){
    cube1.innerHTML="<img src='./images/dice5.png'>"
}
if(number1===6){
    cube1.innerHTML="<img src='./images/dice6.png'>"
}


if(number2===0){
    cube2.innerHTML=' '
}
if(number2===1){

    cube2.innerHTML="<div class='one'></div>"
}
if(number2===2){

    cube2.innerHTML="<div class='two1'></div> <div class='two2'></div>"

}
if(number2===3){

    cube2.innerHTML="<div class='three1'></div><div class='three2'></div><div class='three3'></div>"
}
if(number2===4){
    cube02.classList.toggle('cube_1')
    cube02.classList.toggle('cube1')
    cube2.innerHTML="<div class='four1'></div><div class='four2'></div><div class='four3'></div><div class='four4'></div>"
}
if(number2===5){
    cube2.innerHTML="<img src='./images/dice5.png'>"
}
if(number2===6){
    cube2.innerHTML="<img src='./images/dice6.png'>"
}
if(number1>number2){
    winner.innerHTML = "<h2> &#128681 Player 1 wins</h2>"
}
if(number2>number1){
    winner.innerHTML="<h2>Player 2 wins &#128681</h2>"
}
if(number1===number2){
    winner.innerHTML="<h2>Draw &#127987</h2>"
}