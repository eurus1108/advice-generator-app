const api_url = "https://api.adviceslip.com/advice";
const advice = document.querySelector("[data-advice]");
const adviceId = document.querySelector("[data-id]");
const nextButton = document.querySelector("[data-button]");

const getAdvice = async () => {
  const response = await fetch(api_url);
  const data = await response.json();
  const obj = data.slip;

  console.log(obj);

  advice.innerHTML = `&#8220${obj.advice}&#8221`;
  adviceId.innerHTML = `ADVICE #${obj.id}`;
};

nextButton.addEventListener("click", getAdvice);
