function clickedGameButton(){
    let btn ="";
    for(let i=0;i<403;i++){
    let rn=Math.floor(Math.random()*20)
    btn+= `<div class="button">${rn}</div>`
};

document.querySelector(".pannelbottom").innerHTML=btn;

};

let timer = 60;
function runTimer(){
    var timerValue=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent=timer;
            
        }else{
            clearInterval(timerValue);  //yaha 
            document.querySelector(".pannelbottom").innerHTML=`<div  id = "gameover"> <h1>game over</h1> <button id="playagain">Play Again</button></div>`
            document.getElementById("playagain").addEventListener("click",()=>{
                alert("please refresh the page")
            })
        };
    },1000);
};

var hit=""
function newHit(){
     hit = Math.floor(Math.random()*20);
    document.querySelector("#hitvalue").textContent=hit
}

let score = 0;
function scoreIncrease(){
    score += 10;
    document.querySelector("#scorevalue").textContent=score;

}


document.querySelector(".pannelbottom")

.addEventListener("click",function(details){
        buttonText=(Number(details.target.textContent))
        if(buttonText==hit){
           scoreIncrease();
           newHit();
           clickedGameButton();

             }    
    });
clickedGameButton();
runTimer();
newHit();
