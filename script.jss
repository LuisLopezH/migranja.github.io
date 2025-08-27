const farm = document.getElementById("farm");
const buyBtn = document.getElementById("buy");

buyBtn.onclick = () => {
  const newplot = document.createElement("div");
  newPlot.classList.add("plot");
  farm.appendChild(newPlot);
};
