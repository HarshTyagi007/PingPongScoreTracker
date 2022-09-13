const p1={
    score:0,
    btn :document.querySelector('#p1Btn'),
    display:document.querySelector('#p1Display')
};

const p2={
    score:0,
    btn :document.querySelector('#p2Btn'),
    display:document.querySelector('#p2Display')
};


const resetBtn=document.querySelector('#reset');
const winningScoreSelect=document.querySelector('#playTo');


let isGameOver=false;
let winningScore=3;

p1Btn.addEventListener('click',function(){
    updateScore(p1,p2);    
});

p2Btn.addEventListener('click',function(){
    updateScore(p2,p1);
});

function updateScore(player,opponent){
    if(!isGameOver){
        player.score+=1;
        player.display.textContent=player.score;
        if(player.score===winningScore)
        {
            opponent.display.classList.add('has-text-success');
            player.display.classList.add('has-text-danger');
            isGameOver=true;
            player.btn.disabled=true;
            opponent.btn.disabled=true;
        }
    }
}

winningScoreSelect.addEventListener('change',function(){
    winningScore=parseInt(this.value);
    resetGame();
})

resetBtn.addEventListener('click',resetGame);

function resetGame(){
    
    isGameOver=false;
    
    for(let p of [p1,p2]){
        p.score=0;
        p.display.textContent=0;
        p.display.classList.remove('has-text-success','has-text-danger');
        p.btn.disabled=false;
    }
   
    
}
