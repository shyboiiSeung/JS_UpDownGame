let rn = 0
let playbutton = document.getElementById("play-button")
let userinput = document.getElementById("user-input")
let resultarea = document.getElementById("result-area")
let resetbutton = document.getElementById("reset-button")
let chances = 3
let gameover = false
let chancearea = document.getElementById("chancearea")
let history = []
let answer = document.getElementById("answer-area")

playbutton.addEventListener("click",play)
resetbutton.addEventListener("click",reset)
userinput.addEventListener("focus",function(){userinput.value=""})
answer.addEventListener("click",showanswer)

function pickrn() {
    rn = Math.floor(Math.random()*100)+1;
    console.log("정답",rn);
}

function showanswer() {
    answer.textContent=`${rn} 이 정답입니다`
}

function play(){
    let uservalue = userinput.value;

    if(uservalue<1 || uservalue>100) {
        resultarea.textContent="1~100 사이의 숫자를 입력해 주세요"
        return 
    }
    if(history.includes(uservalue)) {
        resultarea.textContent="이미 입력한 숫자입니다 다른 숫자를 입력해 주세요"
        return
    }
    

    chances --;
    chancearea.textContent= `남은기회 : ${chances}번 | 입력했던 숫자들 : ${history.join(", ")}`
    console.log("chance",chances)
    if(uservalue<rn){
        resultarea.textContent = "업 !!!"
    }
    else if(uservalue>rn){
        resultarea.textContent = "다운 !!!"
    }
    else {
        resultarea.textContent = "맞췄습니다 축하합니다 !!!"
        playbutton.disabled=true
    }
    history.push(uservalue)
    console.log(history)
    if(chances<1){
        gameover=true
    }
    if(gameover==true){
        resultarea.textContent="기회를 모두 소진하였습니다 다시 하시려면 리셋 버튼을 눌려주세요"
        playbutton.disabled=true
    }
}    

function reset() {
    location.reload(true);
}

pickrn();