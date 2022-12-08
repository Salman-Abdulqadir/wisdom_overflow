const api_url = "https://api.adviceslip.com/advice";

//colors of the card
const colors = [
  "#dcf5dc",
  "#f5f2dc",
  "#f5e4dc",
  "#dcf5ee",
  "#dfdcf5",
  "#f5dcf5",
];
let color_index = 0;
//elements
const button = document.querySelector(".green-btn");
const card = document.querySelector(".card");

//event listeners
button.addEventListener("click", () => {
  show_advice();
  if(color_index > 5)
    color_index = 0;
  card.style.backgroundColor = colors[color_index];
  color_index++;
});

// function that fetches data from the api
const fetch_advice = async () => {
  try {
    const data = await fetch(api_url);
    const result = await data.json();
    return result.slip.advice;
  } catch (err) {
    console.log(err);
  }
};

const show_advice = async () => {
  const card = document.querySelector("#advice");
  const advice = await fetch_advice();
  card.innerText = advice;
};
