## 1. 로그인화면 만들기

1) html, js생성
- login-form안에 input, button 생성
- 클릭할 때 input의 vaule를 console.log로 확인
- input의 vaule값을 저장하는 변수 선언

2) 클릭 동작 구현
- 새로고침 햇을 때 기본동작(리셋)되지 않도록 막아야 함
- loginForm을 숨긴 후 입력한 username을 넣은 h1태그를 표시하는 동작
- h1과 loginForm은 표시되어야 할 타이밍이 다르기 때문에 add, remove 활용

3) localStorage
- 만약 저장된 이름이 없다면 form을 표시, 저장된 이름이 있다면 h1을 표시
- localStorage에 item을 담는 setItem, localStorage에서 item을 받아오는 getItem 활용
- h1을 표시하는 구문을 함수로 수정

## 2.clock 추가하기

1) 시계를 보여주는 h2태그 생성, 기본값 00:00
2) 현재시간 시,분,초를 나타내는 각각의 변수 생성
3) 한자리 숫자일 때 앞에 0을 붙여 두자리로 나타내도록 수정
4) website가 load 되자마자 getClock()을 실행하고, 매초마다 다시실행되도록 수정

## 3. 명언, 배경 추가하기

1) html: id= "quotes" div 추가
2) quotes.js 추가
  - 명언과 저자를 배열안의 객체형태로 저장 [{명언, 저자}]
  - 명언을 quotes의 길이에서 랜덤으로 표시
3) background.js 추가
  - 배경 이미지를 담을 img폴더와 파일 추가
  - 이미지 파일명을 배열의 요소로 저장
  - 이미지 태그 생성, 이미지 경로를 불러 body태그의 맨뒤에 붙이도록 구현
  - 랜덤표시는 quotes와 똑같이 구현