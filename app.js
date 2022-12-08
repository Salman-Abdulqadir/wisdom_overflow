const api_url = "https://api.adviceslip.com/advice";

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
}

