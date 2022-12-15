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
