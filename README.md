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

## 4. todo-list 추가하기

1) html: form id = "todo-form" 추가
2) html: ul id = "todo-list" 추가
3) todo.js 추가
  - input박스에 값을 입력하고 submit
  - submit할 때 동작할 handleToDoSubmit 함수 : vaule를 어떻게 담고 저장할지
  - input의 value를 표시하는 paintToDo 함수 : 리스트안에 텍스트, 삭제버튼 포함
  - X 버튼을 누르면 삭제하는 deleteToDo 함수 : li를 삭제하는데 value의 id와 같은지 검사해서 기존의 value값 남기기
  - localStorage의 toDos를 배열의 문자형으로 만들 saveToDos 함수
  - 만약 value가 비어있지 않으면 todos 배열에 json을 담아 요소를 반복하며 paintToDo 함수 실행

## 5. weater api 불러오기

1) html: id = "weather"인 div 추가
2) weather.js 추가
  - onGeoOk 함수  : 위도와 경도, api url을 저장하는 변수 / 날씨와 도시를 표시
  - onGeoError 함수 : 위치를 부르는게 에러가 났을때 실행하는 함수

## 6. css 스타일 추가

1) 이미지가 배경으로 채워지도록 정렬
2) 시계는 수직 중앙정렬
3) 날씨, 도시 정보는 오른쪽 위
4) todo-list는 왼쪽 위
5) 명언, 저자는 수직 하단정렬
6) 폰트 크기 모듈화, 색상 통일

## 리팩토링 230126 완료
1) 이름 입력 시 문장이 fade out / hello name이 fade in 되도록 수정 ✅
2) todo-list가 많아졋을때 스크롤 되도록 수정 ✅
3) 날씨에 맞는 아이콘 추가해보기 ✅ 
4) AM, PM 추가하여 24시 기준이 아닌 12시간 기준으로 리팩토링 (오후 7시 > 19시 x) ✅
5) 오류 : 로컬 스토리지에서 todo-list목록 사라지지 않아 새로고침해도 남아있음 ✅
6) 배경이 밝으면 폰트가 흰색일때 잘 안보여서 테두리 스타일 추가 ✅

## 참고한 자료
<details>
  <summary>날씨 아이콘 추가</summary>
  참고 : https://velog.io/@duckgus/Openweathermap.api-%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%B4-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%97%90-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EB%82%A0%EC%94%A8-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%84%A3%EA%B8%B0
</details>

<details>
    <summary>시간을 am, pm로 표시</summary>
    참고 : https://velog.io/@duckgus/Openweathermap.api-%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%B4-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%97%90-%EC%8B%A4%EC%8B%9C%EA%B0%84-%EB%82%A0%EC%94%A8-%EC%95%84%EC%9D%B4%EC%BD%98-%EB%84%A3%EA%B8%B0
</details>

