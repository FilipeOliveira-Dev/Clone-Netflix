let accountMenu = document.getElementById('account-menu-item');
let arrow = accountMenu.querySelector('.fa-solid');
let dropdownMenu = document.getElementById('navbar__user--dropdown');

// APARECER DROPDOWN QUANDO PASSA O MOUSE
function arrowUp() {
  arrow.classList.remove('fa-caret-down');
  arrow.classList.add('fa-caret-up');  
  arrow.style.transition = "0.5s";
  arrow.style.transform = "rotate(180deg)";

  dropdownMenu.style.display = "flex";
}

// DESAPARECER DROPDOWN QUANDO TIRA O MOUSE
function arrowDown() {
  arrow.classList.remove('fa-caret-up');
  arrow.classList.add('fa-caret-down');  
  arrow.style.transition = "0.5s";
  arrow.style.transform = "rotate(180deg)";

  dropdownMenu.style.display = "none";
  dropdownMenu.style.transition = "2s";
}

// GERAR CÓDIGO RANDOMICO DE SERVIÇO 
function gerarCodigoServico() {
  let codigoGerado1 = Math.floor(Math.random() * 900) + 100; 
  let codigoGerado2 = Math.floor(Math.random() * 900) + 100; 
  console.log(`${codigoGerado1}-${codigoGerado2}`);

  let campoCodigoServico = document.getElementById('codigoServico');
  campoCodigoServico.innerText = `${codigoGerado1}-${codigoGerado2}`;
}