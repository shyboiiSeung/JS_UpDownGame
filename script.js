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


playbutton.addEventListener("click",play)

function pickrn() {
    rn = Math.floor(Math.random()*100)+1;
    console.log("정답",rn);
}

function play(){
    let uservalue = userinput.value;
    if(uservalue<rn){
        resultarea.textContent = "UP !!!"
    }
    else if(uservalue>rn){
        resultarea.textContent = "DOWN !!!"
    }
    else {
        resultarea.textContent = "맞췄습니다 !!!"
    }
}    
pickrn();


