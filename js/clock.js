const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  //padStart : 현재 문자열의 시작을 다른 문자열로 채워준다 (한자리수인 문자열을 두자리로 보이기 위해서)
  //12로 나눈 나머지가 true이면 해당값을 리턴하고 그게 아니면(0이라서 false 이면) 12를 리턴
  const hours = String(date.getHours() % 12 ? date.getHours() % 12 : 12).padStart(2, "0");
  //현재 분이 10보다 작으면 분앞에 0을 붙여주고 아니면 현재분을 표시한다 (1분이면 01, 2분이면 02 이렇게)
  const minutes = String(date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
  clock.innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;

}

//website가 load되자마자 getClock()을 실행하고
//매초마다 다시 실행되도록
getClock();
setInterval(getClock, 1000);

