// Responsavel pela transformacao do velocimetro
const gaugeElement = document.querySelector(".gauge");
const gaugeElement2 = document.querySelector("#gauge2");

function setGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge.querySelector(".gauge__cover").textContent = `${Math.round(
    value * 100
  )}`;
  let gaugeCover = gauge.querySelector(".gauge__cover");
  gaugeCover.innerHTML += "<span class='percent'>%</span>";
}

function setGaugeValue2(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge.querySelector(".gauge__cover").textContent = `${Math.round(
    value * 100
  )}`;
  let gaugeCover = gauge.querySelector(".gauge__cover");
  gaugeCover.innerHTML += "<span class='percent'>%</span>";
}

setGaugeValue(gaugeElement, 0.823);
setGaugeValue2(gaugeElement2, 0.5);
