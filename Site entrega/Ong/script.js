// Funcionalidade 2: mostrar/ocultar as informações institucionais (página Sobre)

// Seleciona o botão e o painel pelo id
const botaoInfo = document.getElementById("botaoInfo");
const painelInfo = document.getElementById("painelInfo");

// Função que alterna o estado visível do painel
function alternarInformacoes() {
  // Condição: se o painel está oculto, mostra; senão, oculta
  if (painelInfo.classList.contains("oculto")) {
    painelInfo.classList.remove("oculto");
    botaoInfo.textContent = "Ocultar informações institucionais";
    botaoInfo.setAttribute("aria-expanded", "true");
  } else {
    painelInfo.classList.add("oculto");
    botaoInfo.textContent = "Mostrar informações institucionais";
    botaoInfo.setAttribute("aria-expanded", "false");
  }
}

// Evento: a cada clique, executa a função
botaoInfo.addEventListener("click", alternarInformacoes);
