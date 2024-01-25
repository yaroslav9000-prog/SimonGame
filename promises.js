// const fetchPromise = fetch(
//     "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//   );

// fetchPromise
//     .then((response)=>{
//         if(!response.ok){
//             throw new Error(`HTTP error: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then((data)=>{
//         console.log(data[0].name);
//     })
//     .catch((error)=>{
//         console.log(`Could not get products: ${error}`);
//     });
const randomNumber = ()=>{
    return Math.floor(Math.random() * 4);
}

const topLeft = document.getElementById("top-left");
const topRight = document.getElementById("top-right");
const botLeft = document.getElementById("bot-left");
const botRight = document.getElementById("bot-right");

const buttons = [
    topLeft,
    topRight,
    botLeft,
    botRight   
];
const buttonsToClick = [];
const playerClicks = [];
const updateClickedList = ()=>{
    buttonsToClick.push(buttons[randomNumber()]);
    console.log(buttonsToClick);   
}
const makeItFlash = (buttonToFlash) =>{
    return new Promise((resolve, reject)=>{


    setTimeout(()=>{
        buttonToFlash.classList.add("flash");
        setTimeout(()=>{
            buttonToFlash.classList.remove("flash");
        }, 250)
        resolve();
    }, 300)
    
})
}
const actionButton = (someButton) =>{
    makeItFlash(someButton);
    playerClicks.push(someButton);    
}
const theGame = async ()=>{
    updateClickedList();
    updateClickedList();
    updateClickedList();
    updateClickedList();
    updateClickedList();
    
    for(let index = 0; index < buttonsToClick.length; index++){
        console.log(buttonsToClick);
        await makeItFlash(buttons[index]);
    }
    //should have function that lets user click and theGame function should wait for it to end.
    

}

theGame();