const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//toDos는 처음에 빈배열로 시작하고 요소가 쌓이면 업데이트 되어야 하므로 let으로 선언
let toDos = [];

//5. localStorage의 todos를 배열의 문자형으로 만들어줌
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//4. X button을 누르면 삭제하는 함수
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //클릭한 li.id와 다른 toDo는 남겨두고 싶다
  saveToDos();
}

//3. input의 value를 표시하는 리스트 함수
//리스트 안에 텍스트, 삭제버튼 포함
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerHTML = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span); //li는 span이라는 자식을 가진다
  li.appendChild(button); //li는 button이라는 자식을 가진다
  toDoList.appendChild(li); //todoList는 li라는 자식을 가진다
}

//2. submit할때 동작하는 함수
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //input의 현재 value를 새로운 변수에 복사
  toDoInput.value = "";
  //같은 value라도 id로 구분하기 위해 객체 형태로 받음
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj); //리스트에 그리는 함수호출
  saveToDos(); //로컬 스토리지 저장
}

//1. submit할때 handleToDoSubmit 함수 실행
toDoForm.addEventListener("submit", handleToDoSubmit);

//6. 로컬 스토리지의 value를 변수에 담아
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  //value가 비어있지 않으면
  const parsedToDos = JSON.parse(savedToDos); //json으로 반환한 문자열을 변수에 담음
  toDos = parsedToDos; //todos 배열에 json을 담아서 업데이트
  parsedToDos.forEach(paintToDo); //json의 요소를 돌면서 paintToDo함수 실행
}
