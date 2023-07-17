let display = document.getElementById('display');

// appendToDisplay() chama um botão clicado - adicionando o valor ao display.

function appendToDisplay(value) {
  display.value += value;
}

// clearDisplay() limpa o display.

function clearDisplay() {
  display.value = '';
}

// calculate() / eval() calcula o valor do display.

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Erro';
  }
}
