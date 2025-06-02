alert("this game can be play infinite times. just click the icons  and start playing.")

let userScore=0
let compScore=0

let choises = document.querySelectorAll(".choise");
let msg = document.querySelector("#msg");

let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");

    const genCompChoise = ()=>{
    const options =["rock","paper","scissors"];
    const randIdx =Math.floor(Math.random()*3);
    return options[randIdx];
}




let scoreUpdate = ()=>{
    userScore++;
    user.innerText=userScore
}
let compUpdate = ()=>{
    compScore++;
    comp.innerText=compScore
}






let msgone= ()=>{
    console.log("congrulation you win")
    
};
let msgtwo = ()=>{
    console.log("opss you lose and computer win")
}


let changeTxtWin = ()=>{
    msg.innerText = "🥳congrulation🫵you win"
    msg.style.backgroundColor = "green"
}


let changeTxtLose = ()=>{
    msg.innerText = "🥹Ahhh!! 🫵 you lose comp win."
    msg.style.backgroundColor = "red"
}

let changeTxtDraw = ()=>{
    msg.innerText = "The game is draw🤝"
    msg.style.backgroundColor = "aquamarine"
    
}



const playGame=(userChoise)=>{
    console.log("user choise= " , userChoise)

    const compChoise= genCompChoise();
    console.log("comp choise= " , compChoise)

    if(userChoise===compChoise){
        console.log("thats draw")
        changeTxtDraw()
    }
    else{
        let userWin =true
        if(userChoise==="rock"&&compChoise==="scissors"){
            msgone();
            changeTxtWin();
            scoreUpdate();
            //alert("rock can break the scissors")          
        }
        if(userChoise==="paper"&&compChoise==="scissors"){
            msgtwo();
            changeTxtLose();
            compUpdate()
            //alert("scissors can cut the paper")
        }
        if(userChoise==="rock"&&compChoise==="paper"){
           msgtwo();
           changeTxtLose();
           compUpdate()
            //alert("paper can cover the rock")
        }
        if(userChoise==="scissors"&&compChoise==="paper"){
            msgone();
            changeTxtWin();
            scoreUpdate();
            //alert("scissors can cut the paper")
        }
        if(userChoise==="paper"&&compChoise==="rock"){
            msgone();
            changeTxtWin();
            scoreUpdate()
            //alert("paper can cover the rock")
        }
        if(userChoise==="scissors"&&compChoise==="rock"){
            msgtwo();
            changeTxtLose();
            compUpdate()
            // alert("rock can break the sissors")
        }


        return userWin
    };
};


choises.forEach((choise) =>{
choise.addEventListener("click",()=>{
    console.log("clicked")
    const userChoise = choise.getAttribute("id");
    playGame(userChoise);
   });
});

