const navHome = document.querySelector('.home-nav');
const navChat = document.querySelector('.chat-nav');
const inquiryBtn = document.querySelector('#inquiryBtn');

const homeBody = document.querySelector('#home-body');
const chatBody = document.querySelector('#chat-body');

const userInput = document.querySelector('#chat-input input');
const sendBtn = document.querySelector('.sendBtn');
const chatArea=document.querySelector('.chatArea');

// 첫 번째 요소는 가리고, 두 번째 요소는 보이게 하는 함수
function toggleDisplay(first, firstBody, second, secondBody) {
  first.classList.remove('active');
  second.classList.add('active');

  firstBody.style.display = 'none';
  secondBody.style.display = 'block';
}

inquiryBtn.addEventListener('click', () => {
  toggleDisplay(navHome, homeBody, navChat, chatBody);
});

navChat.addEventListener('click', () => {
  toggleDisplay(navHome, homeBody, navChat, chatBody);
});

navHome.addEventListener('click', () => {
  toggleDisplay(navChat, chatBody, navHome, homeBody);
});


// 입력 처리
const spinner=createSpinner();

userInput.addEventListener('keyup', (event) => {
  const inputMsg=userInput.value;
  if (event.key === 'Enter' && !checkIfBlank(inputMsg)) {
    fetchData(inputMsg);
  }
});

sendBtn.addEventListener('click', (event) => {
  const inputMsg=userInput.value;
  if(checkIfBlank(inputMsg)) {
    event.preventDefault();
    return;
  }
    fetchData(inputMsg);
});

function checkIfBlank(message) {
  return !message || message.trim().length === 0;
}

async function fetchData(message) {
  const defaultMsg="데이터를 불러오는 데 실패했습니다. 잠시 후 다시 이용해 주세요.";
    try {      
      // 사용자 메시지 추가 및 입력 창 초기화
      createUserMsg(message);
      userInput.value='';

      // 스피너 표시
      showSpinner();
      scrollToLatest();

      // 비동기 요청 (fetch + await/async)
      const response=await fetch(`${BASE_URL}/chat`, {
          method: 'POST',
          headers: { 'content-Type': 'application/json'},
          body: JSON.stringify({question: message})
      });

      const result=await response.json(); // 서버 응답 파싱
      let botMsg = '';

      // TODO: 응답 메시지 형식 변경으로 추후 변경
      if(!response.ok) {  
        botMsg=result.message;
      } else {
        botMsg=result.data.message || defaultMsg;
      }

      // 스피너 제거
      hideSpinner();

      // 응답 태그 추가
      createBotMsg(botMsg);
      scrollToLatest();
    } catch(error) {
      console.error('챗봇 API 호출 중 오류 발생: ', error);
      hideSpinner();

      // 응답 태그 추가
      createBotMsg(defaultMsg);
      scrollToLatest();
    }
}

function showSpinner() {
  if(!chatArea.contains(spinner)) {
    chatArea.appendChild(spinner);
  }
}

function hideSpinner() {
  if(chatArea.contains(spinner)) {
    chatArea.removeChild(spinner);
  }
}


function createSpinner() {
// chatArea.innerHTML += `<div class="bot-response typing-indicator">
//    <img src="./img/main-character.png" alt="KODA_캐릭터" />
//    <p class="msg"><i class="fa fa-spinner fa-spin""></i></p></div>`
  const spinnerContainer=document.createElement('div');
  spinnerContainer.classList.add('bot-response', 'typing-indicator');

  const characterImg=document.createElement('img');
  characterImg.src='./img/main-character.png';
  characterImg.alt='KODA_캐릭터';
  spinnerContainer.appendChild(characterImg);

  const msgP=document.createElement('p');
  msgP.classList.add('msg');
  spinnerContainer.appendChild(msgP);

  const spinnerIcon = document.createElement('i');
  spinnerIcon.classList.add('fa', 'fa-spinner', 'fa-spin');
  msgP.appendChild(spinnerIcon);

  return spinnerContainer;
}
  
function createUserMsg(msg) {
// chatArea.innerHTML += `<p class="msg usermsg">` + message + `</p>`;
  const msgP=document.createElement('p');
  msgP.classList.add('msg', 'usermsg');
  msgP.textContent=msg;
  chatArea.appendChild(msgP);
}

function createBotMsg(msg) {
// chatArea.innerHTML += `<div class="bot-response">
//             <img src="./img/main-character.png" alt="KODA_캐릭터"/>
//             <p class="msg">` + msg + `</p></div>`;
  const msgContainer=document.createElement('div');
  msgContainer.classList.add('bot-response');

  const characterImg=document.createElement('img');
  characterImg.src='./img/main-character.png';
  characterImg.alt='KODA_캐릭터';

  const msgP=document.createElement('p');
  msgP.classList.add('msg');
  msgP.textContent=msg;

  msgContainer.appendChild(characterImg);
  msgContainer.appendChild(msgP);
  chatArea.appendChild(msgContainer);
}

function scrollToLatest() {
  chatArea.scrollIntoView({
    behavior: 'smooth',
    block: 'end'
  })
}