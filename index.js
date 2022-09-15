data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const mon = document.getElementById("mon");
const tue = document.getElementById("tue");
const wed = document.getElementById("wed");
const thu = document.getElementById("thu");
const fri = document.getElementById("fri");
const sat = document.getElementById("sat");
const sun = document.getElementById("sun");

mon.textContent = `$${data[0].amount}`;
tue.textContent = `$${data[1].amount}`;
wed.textContent = `$${data[2].amount}`;
thu.textContent = `$${data[3].amount}`;
fri.textContent = `$${data[4].amount}`;
sat.textContent = `$${data[5].amount}`;
sun.textContent = `$${data[6].amount}`;

document.addEventListener("mouseover", showHoverState);
document.addEventListener("mouseout", removeHoverState);

function showHoverState() {
  event.target.firstElementChild.classList.add("active");
}

function removeHoverState() {
  event.target.firstElementChild.classList.remove("active");
}
