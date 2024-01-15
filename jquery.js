//document should listen for key press or mouse click on document
// document.querySelector("document").addEventListener("click keydown",()=>{

// });
let playerClicks = [];
let pcClicks = [];
const squareList = document.querySelectorAll(".square");

//computer should generate random number then it should click it and push into pcClicks
const pcMove = ()=>{
    const randomIndex = Math.floor(Math.random() * 4);
    clicked(squareList[randomIndex]);
    pcClicks.push(squareList[randomIndex].id);
    console.log(`pc Click: ${pcClicks}`);    
}




//event Listener for player clicks

    const redButton = document.getElementById("red").addEventListener('click',(event)=>{
        playerClicks.push(event.target.id);        
    });
    const blueButton = document.getElementById("blue").addEventListener('click',(event)=>{
        playerClicks.push(event.target.id);
    });
    const yellowButton = document.getElementById('yellow').addEventListener('click',(event)=>{
        playerClicks.push(event.target.id);
    });
    const greenButton = document.getElementById('green').addEventListener('click',(event)=>{
        playerClicks.push(event.target.id);
    });

//function for click animation
const clicked = (square)=>{
    square.classList.add("fadeIn");
    setTimeout(()=>{
        square.classList.remove("fadeIn");
    },300)
}
//playerClicks[], pcClicks[], squareList,
// document.querySelector("document").addEventListener("keyDown", ()=>{

// })
const game = ()=>{
    //after key pressed by player callback of game is started.
    //It must go on until player gets it wrong.
    let gameIsOn = true;
    let score = 0;

    // this section should be in while loop

    console.log(playerClicks);
    for(let index = 0; index < pcClicks.length; index++){
        if(pcClicks[index] != playerClicks[index]){
            console.log('idi damoi');
            pcClicks = [];
        }else{
            score++;
            console.log(`your score is ${score}`)
        }
    }
    pcMove();
    playerClicks = [];

    

}
    
    document.querySelector('html').addEventListener('keydown', game);
