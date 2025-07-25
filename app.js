let gameSeq = [];
let userSeq = [];
let arr=[];
let h5=document.querySelector("h5");

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2"); 

document.querySelector("#level-title").addEventListener("click", function () {  
  if (started == false) {
    console.log("game is started");
    started = true;

    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1200);
    }
  } else {
      arr.push(level);
      let highestScore=0;
      for(list of arr){
         if(list>highestScore){
            highestScore=list;
         }
      }
      h5.innerText=`Highest Score:${highestScore}`;
    
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Click here to start the game.`;
    document.querySelector("body").classList.add("game-over");
    setTimeout(function () {
      document.querySelector("body").classList.remove("game-over");
    }, 500);
    reset();
  }
}


function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}

