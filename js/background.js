const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg"
];

const choseImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img"); //이미지 태그 만들어서
bgImage.src = `img/${choseImage}`; //이미지 경로 불러와서
document.body.appendChild(bgImage); //body의 맨뒤에 붙인다