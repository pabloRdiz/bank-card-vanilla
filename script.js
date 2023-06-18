document.querySelector(".card-number-input").oninput = () => {
  const cardNumber =
    document.querySelector(".card-number-input").value || "################";

  document.querySelector(".card-number-box").innerHTML = cardNumber;
};

document.querySelector(".card-holder-input").oninput = () => {
  const holder =
    document.querySelector(".card-holder-input").value || "full name";

  document.querySelector(".card-holder-name").innerHTML = holder;
};

document.querySelector(".month-input").oninput = () => {
  const expirationMonth = document.querySelector(".month-input").value;

  document.querySelector(".exp-month").innerHTML = expirationMonth;
};

document.querySelector(".year-input").oninput = () => {
  const expirationYear = document.querySelector(".year-input").value;

  document.querySelector(".exp-year").innerHTML = expirationYear;
};

document.querySelector(".cvv-input").onmouseenter = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(-180deg)";

  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(-0deg)";
};

document.querySelector(".cvv-input").onmouseleave = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(0deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(180deg)";
};

document.querySelector(".cvv-input").oninput = () => {
  document.querySelector(".cvv-box").innerText =
    document.querySelector(".cvv-input").value;
};
ƒ;
