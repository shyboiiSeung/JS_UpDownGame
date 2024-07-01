// 구현 할 기능
// 랜덤 번호 지정
// 번호 입력 후 go 라는 버튼 누름
// 만약에 유저가 번호를 맞추면 맞췄습니다
// 번호 < 유저 번호 Down !
// 번호 > 유저 번호 Up !
// Reset 버튼을 누르면 게임이 리셋됨
// 5번의 기회를 다쓰면 게임이 끝남 (더이상 추측 불가 , 버튼 사용 불가)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다 (기회 안깍음)
// 유저가 이미 입력한 숫자를 또 입력하면 알려준다 (기회 안깍음)

let rn = 0
let playbutton = document.getElementById("play-button")
let userinput = document.getElementById("user-input")
let resultarea = document.getElementById("result-area")
let resetbutton = document.getElementById("reset-button")
let chances = 5
let gameover = false
let chancearea = document.getElementById("chancearea")
let history = []

playbutton.addEventListener("click",play)
resetbutton.addEventListener("click",reset)
userinput.addEventListener("focus",function(){userinput.value=""})

function pickrn() {
    rn = Math.floor(Math.random()*100)+1;
    console.log("정답",rn);
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
    chancearea.textContent= `남은기회 : ${chances}번`
    console.log("chance",chances)
    if(uservalue<rn){
        resultarea.textContent = "UP !!!"
    }
    else if(uservalue>rn){
        resultarea.textContent = "DOWN !!!"
    }
    else {
        resultarea.textContent = "맞췄습니다 !!!"
        gameover=true
    }
    history.push(uservalue)
    console.log(history)
    if(chances<1){
        gameover=true
    }
    if(gameover==true){
        playbutton.disabled=true
    }
}    

function reset() {
    userinput.value = ""
    pickrn()
    resultarea.textContent="결과값이 여기 나옵니다 !"
}



pickrn();


