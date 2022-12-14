const quotes = [
  {
    quote: "지식을 얻으려면 공부를 해야 하고, 지혜를 얻으려면 관찰을 해야 한다.",
    author: "Marilyn vos Savant",
  },
  {
    quote: "배움이란 일생동안 알고 있었던 것을 어느 날 갑자기 완전히 새로운 방식으로 이해하는 것이다.",
    author: "Doris Lessing",
  },
  {
    quote:
      "교육은 배운 것이 잊혀졌을 때 살아 남는 것이다.",
    author: "B. F. Skinner",
  },
  {
    quote: "이해하려고 노력하는 행동이 미덕의 첫 단계이자 유일한 기본이다.",
    author: "Baruch Spinoza",
  },
  {
    quote: "낭비한 시간에 대한 후회는 더 큰 시간 낭비이다.",
    author: "Mason Cooley",
  },
  {
    quote: "나는 때를 놓쳤고, 그래서 지금은 시간이 나를 낭비하고 있는 거지.",
    author: "William Shakespeare",
  },
  {
    quote: "시간은 너무 없고 할 일도 너무 없다.",
    author: "Oscar Levant",
  },
  {
    quote: "시간은 우리를 변화시키지 않는다. 시간은 단지 우리를 펼쳐 보일 뿐이다.",
    author: "Max Frisch",
  },
  {
    quote: "미래는 현재 우리가 무엇을 하는가에 달려 있다.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "나약한 태도는 성격도 나약하게 만든다.",
    author: "Albert Einstein",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//명언을 quotes의 길이에서 랜덤으로 표시
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;