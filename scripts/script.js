/*----- constants -----*/
const element=document.querySelectorAll('.game-cell');
const matchOver=true;
//Player One is True which is X
//Player Two is False which is O
let turn=true;

let count=0;

const combinations=[
[1,2,3,4],
[1,6,11,16],
[1,5,9,13],
[13,10,7,4],
[2,6,10,14],
[5,6,7,8],
[9,10,11,12],
[13,14,15,16],
[3,7,11,15],
[4,8,12,16],
[3,7,11,15],
];

/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/
const grid = document.querySelectorAll('.game-cell');
grid.forEach((box) =>{

box.addEventListener("click",()=>{
// box.innerHTML="<center><img src='images/oes.png' style='width: 80px; height: 70px;'/></center>";

if(turn){
box.innerHTML="<center><h2 style='width: 50px;  color:red; font-size:40px; '>X</h2></center>";
count++;
turn=false;
}
else if (!turn) {
    box.innerHTML="<center><h2 style='width: 50px;  color:blue; font-size:40px; '>0</h2></center>";
    count++;
    turn=true;
} 
box.disabled=true;
});
});


