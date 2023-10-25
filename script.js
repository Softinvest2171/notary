let marriage = document.querySelectorAll(".marriage");

$(".is-marriage").fadeOut();

// for (let i = 0; i < marriage.length; i++) {
//   marriage[i].addEventListener("click", () => {
//     if (marriage[i].value === "marriage-yes") {
//       document.querySelector(".is-marriage").style = "display:block";
//     } else {
//       document.querySelector(".is-marriage").style = "";
//     }
//   });
// }

for (let i = 0; i < marriage.length; i++) {
  marriage[i].addEventListener("click", () => {
    if (marriage[i].getAttribute("id") === "marriage-yes") {
      $(".is-marriage").fadeIn();
    } else {
      $(".is-marriage").fadeOut();
    }
  });
}

const priceElement = document.querySelector("#price-in-num");

priceElement.addEventListener("keyup", (e) => {
  let v = "" + e.target.value;

  let nValue = "";

  for (let j = 0; j < v.length; j++) {
    if (v[j] !== " " && isNaN(Number(v[j])) !== true) {
      nValue = nValue + v[j];
    }
  }

  let price = [];

  let c = 1;

  for (let i = nValue.length - 1; i > -1; i--) {
    price.unshift(nValue[i]);
    if (c % 3 == 0) {
      price.unshift(" ");
    }
    c++;
  }

  priceElement.value = price.join("");
});

document.getElementById("button").addEventListener("click", () => {
  let number = document.getElementById("number");
  let cNum = number.value;
  let fNum = "";
  for (let i = 0; i < cNum.length; i++) {
    if (i === 0 && cNum[i] === "8") {
      fNum = fNum + 7;
    } else if (
      cNum[i] === "+" ||
      cNum[i] === "(" ||
      cNum[i] === ")" ||
      cNum[i] === "-" ||
      cNum[i] === " "
    ) {
      fNum = fNum + "";
    } else {
      fNum = fNum + cNum[i];
    }
  }
