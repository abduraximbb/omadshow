const titleEl = document.querySelector(".title");
const start_btn = document.querySelector(".start__btn");
const mood_btn = document.querySelector(".fa-solid");
const mainEl = document.querySelector(".dark");
const showBtnEl = document.querySelector(".show_number");
const numbersEl = document.querySelector(".numbers");
const cloesBtnEl = document.querySelector(".close")

const TEL = [
  "+998 90 123 45 67",
  "+998 91 234 56 78",
  "+998 93 345 67 89",
  "+998 94 456 78 90",
  "+998 95 567 89 01",
  "+998 97 678 90 12",
  "+998 98 789 01 23",
  "+998 99 890 12 34",
  "+998 88 901 23 45",
  "+998 77 012 34 56",
  "+998 66 123 45 67",
  "+998 55 234 56 78",
  "+998 33 345 67 89",
  "+998 44 456 78 90",
  "+998 22 567 89 01",
];

function randomTel() {
  start_btn.setAttribute("disabled", true);
  const interval = setInterval(() => {
    let randomNumber = Math.floor(Math.random() * TEL.length);
    titleEl.textContent = TEL[randomNumber];
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    start_btn.removeAttribute("disabled");
    TEL.splice(TEL.indexOf(titleEl.textContent), 1);
    console.log(TEL);
  }, 2000);
}
start_btn.addEventListener("click", randomTel);

function toggle_mood() {
  mood_btn.classList.toggle("night");
  mainEl.classList.toggle("light");
}

function showNumbers() {
  const numbers = Array();
  TEL.forEach((number) => {
    numbers.push(number);
  });
  cloesBtnEl.classList.toggle("show")
  numbersEl.textContent = numbers
}
showBtnEl.addEventListener("click", showNumbers)
