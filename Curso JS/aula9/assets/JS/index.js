const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector("#altura");
  
  const peso = Number(inputPeso.value)
  const altura = Number(inputAltura.value);

  if (!peso) {
    setSoma('Peso inválido', false);
    return;
  }

  if (!altura) {
    setSoma('Altura inválido', false);
    return;
  }

  const imc = getImc(peso, altura);
  const NivelImc = getNivelImc(imc)

  const msg = `Seu IMC é ${imc} (${NivelImc})`

  setSoma(msg, true);
});

function getNivelImc(imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobre peso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5]
  if (imc >= 34.9) return nivel[4]
  if (imc >= 29.9) return nivel[3]
  if (imc >= 24.9) return nivel[2]
  if (imc >= 18.5) return nivel[1]
  if (imc < 18.5) return nivel[0]
}

function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP(className) {
  const p = document.createElement("p");
  return p;
}

function setSoma(msg, isValid) {
  const soma = document.querySelector('#soma');
  soma.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('p-soma')
  } else {
    p.classList.add('errado')
  }

  p.innerHTML = msg;
  soma.appendChild(p);
}