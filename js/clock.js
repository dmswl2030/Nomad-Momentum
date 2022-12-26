const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  //padStart : 현재 문자열의 시작을 다른 문자열로 채워준다
  //한자리수인 문자열을 두자리로 보이기 위해서
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

//website가 load되자마자 getClock()을 실행하고
//매초마다 다시 실행되도록
getClock();
setInterval(getClock, 1000);