const farmContainer = document.getElementById("farm-container");
const buyBtn = document.getElementById("buy");
const moneyDisplay = document.getElementById("money");

let parcelas = 0;
const maxParcelas = 20;
const parcelasPorFila = 5;

let money = 200;         // inicio con 200 monedas
const pricePerPlot = 20; // cada parcela cuesta 20

// función para actualizar el contador de dinero
function updateMoney() {
  moneyDisplay.textContent = `💰Monedas: ${money}`;
}

// función para agregar una parcela
function addPlot() {
  parcelas++;

  // calcular en qué fila estamos
  const filaIndex = Math.floor((parcelas - 1) / parcelasPorFila);

  // obtener o crear la fila correspondiente
  let row = farmContainer.querySelector(`.farm-row[data-index="${filaIndex}"]`);
  if (!row) {
    row = document.createElement("div");
    row.classList.add("farm-row");
    row.dataset.index = filaIndex;
    farmContainer.appendChild(row);
  }

  // crear parcela sin arar
  const plot = document.createElement("div");
  plot.classList.add("plot");

  // evento click para ararla
  plot.addEventListener("click", () => {
    plot.classList.add("arada");
  });

  // agregar la parcela a la fila
  row.appendChild(plot);
}

// manejar click del botón de compra
buyBtn.onclick = () => {
  if (parcelas >= maxParcelas) {
    alert("¡Ya tienes el máximo de 20 parcelas! 🌾");
    return;
  }

  if (money < pricePerPlot) {
    alert("No tienes suficientes monedas para comprar una parcela 💰");
    return;
  }

  money -= pricePerPlot;
  updateMoney();

  addPlot();
};

// inicializar dinero al cargar la página
updateMoney();
