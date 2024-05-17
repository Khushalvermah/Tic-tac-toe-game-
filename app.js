let boxes = document.querySelectorAll('.box')
let resetBtn = document.querySelector('#reset_btn')
let NewGamebtn = document.querySelector('#NewGame')
let newGameWindow = document.querySelector('.newGameWindow')
let GameWindow = document.querySelector('.game')
let winner = document.querySelector('.WinnerLine')
let turnO = true;


const winnerpattern = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
]



const disableboxes = ()=>{
  for(let box of boxes){
    box.disabled=true;
  }
};

const newGameWindowShow = ()=>{
  newGameWindow.classList.remove('hide')
  GameWindow.classList.add("hide")
}

const enablledboxes =  ()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";}
  }
const resetGame = ()=>{
  enablledboxes()
}

const newGamefunc = ()=>{
  enablledboxes()
  newGameWindow.classList.add('hide')
  GameWindow.classList.remove('hide')


}
const winnercheck = ()=>{
    for (let pattern of winnerpattern) {
       let position1 =   boxes[pattern[0]].innerText;
       let position2 =   boxes[pattern[1]].innerText;
       let position3 =   boxes[pattern[2]].innerText;
    // console.log(position1,position2,position3)
    // 
    if (position1 != ""&& position2 != "" && position3 != "") {
      console.log(position1,position2,position3)
      if(position1===position2 && position2===position3){
        console.log(`winner is ${position1}`)
        disableboxes()
        newGameWindowShow()
        winner.innerText=`Congratulations Winner is ${position1}`
      }
    }
  }

}


boxes.forEach(box => {
  box.addEventListener('click',()=>{
    if (turnO) {
     box.innerText="O"
     turnO = false;
    }
    else{
        box.innerText= "X"
        turnO=true;
    }
    box.disabled = true;
    winnercheck()

  })
})
  
resetBtn.addEventListener('click',resetGame)
NewGamebtn.addEventListener('click',newGamefunc)

