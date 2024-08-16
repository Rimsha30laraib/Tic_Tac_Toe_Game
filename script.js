let boxes=document.querySelectorAll(".box");
let reset_button=document.querySelector(".reset_button");
let new_game_button=document.querySelector(".new_game");
let msg_conatiner=document.querySelector(".msg_container");
let msg=document.querySelector("#msg");
let turnY= true//playerX , playerY
const winning_pattern=[
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]

];
const resetgame=()=>{
    turnY=true;
    enableboxes();
    msg_conatiner.classList.add("hide");

};
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was click")
        if(turnY===true){
            box.innerText='0';
            turnY=false;

        }
        else{
            box.innerText='X';
            turnY=true;
        };
        box.disabled=true;
        checkWinner();
       
    });

});
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const disabledboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const showWinner=(winner)=>{
    msg.innerText=`WINNER IS ${winner}`;
    msg_conatiner.classList.remove("hide");
    disabledboxes();

};
const checkWinner=()=>{
    for(let pattern of winning_pattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        
        if(pos1 != "" &&pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner");
                showWinner(pos1);
            }
        }
    }
};

new_game_button.addEventListener("click",resetgame);
reset_button.addEventListener("click",resetgame);