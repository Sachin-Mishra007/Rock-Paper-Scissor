let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const getcomputerChoice=()=>{
    const Elements=["rock","paper","scissor"];
    let random=Math.floor((Math.random()*3));
    return Elements[random];
};
const showDraw=()=>{
    console.log("Game Draw");
    msg.innerText="Game was Draw, Play Again";
    msg.style.backgroundColor="#081b31";
};
const showWinner=(userWins,userChoice,computerChoice)=>{
    if(userWins){
        let string=`You win your choice ${userChoice} beats computers choice ${computerChoice}`;
        msg.innerText=string;
        userScore++;
        document.querySelector("#UserScore").innerText=userScore;
    }
    else
    {
        let string=(`Computer wins! computers choice ${computerChoice} beats user choice ${userChoice}`)
        msg.innerText=string;
        compScore++;
        document.querySelector("#ComputerScore").innerText=compScore;
    }

}
const playGame= (userChoice)=>{
    const computerChoice=getcomputerChoice();
    
    //Handling draw case
    if(userChoice===computerChoice)
    {
        // console.log("Game Draw");
        showDraw();
        
    }
    else
    {
        let userWins=false;
        if(userChoice==='paper')
        {
            userWins=computerChoice==='rock'?true:false;
        }
        if(userChoice==='scissor')
        {
            userWins=computerChoice==='rock'?false:true;
        }
        if(userChoice==='rock')
        {
            userWins=computerChoice==='scissor'?true:false;
        }
        showWinner(userWins,userChoice,computerChoice);
    }

}

choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
        
    }
    
    )
}

)