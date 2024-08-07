
const element=document.querySelectorAll('.game-cell');
let player1;
let player2;

const matchOver=true;
let turn;

let count;

let combinations;

const grid = document.querySelectorAll('.game-cell');
grid.forEach((box) =>{

box.addEventListener("click",()=>{
// box.innerHTML="<center><img src='images/oes.png' style='width: 80px; height: 70px;'/></center>";
box.innerHTML="<center><h2 style='width: 180px; height: 140px; color:red;'>X</h2></center>";
});
});


