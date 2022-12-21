## 1. 버튼으로 카운트 만들기 (바닐라 JS 버전)

- html: body에 button 태그를 생성
- js: button, count 텍스트 불러와서 버튼 누를때마다 html의 텍스트 수정되도록 함수 추가

## 2. 버튼으로 카운트 만들기 (react 맛보기 버전-1)

- react js, react-dom 을 import 해줌
  - react js: 어플리케이션이 interective하도록 만들어주는 library, 유저에게 보여질 내용을 컨트롤 할 수 있음
  - react-dom: React element를 HTML에 두는 역할
- React.createElement(html 태그, property, 태그의 내용)
- ReactDOM.render(btn, root) : React element를 가지고 HTML로 만들어 배치 (root안에 btn을 배치)
- property에서 event를 등록하여 addEventListener를 대체할 수 있음

## 3. 버튼으로 카운트 만들기 (JSX로 만들기)

- createElement로 작성하지 않고 html문법으로 대체할 수 있다
- 컴포넌트 안에 변수를 넣으려면 함수화 해주면 된다 (arrow function)
- 변수명 앞에 대문자로 만들어주기 (소문자면 html태그와 헷갈릴 수 있다)

## 4. 버튼으로 카운트 만들기 2 (React.js로 만들기)

- 변수를 JSX에 전달하기
- React.js는 UI에서 바뀐 부분만 업데이트 해준다
- 컴포넌트나 JSX에 변수를 추가하고 싶으면 {변수명}으로 작성
- 사용자에게 변화된 부분을 보여주고 싶으면 render함수를 호출
