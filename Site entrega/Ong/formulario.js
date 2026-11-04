// Funcionalidade 1: validação do formulário de contato

// Seleciona o formulário e a área de retorno
const formulario = document.getElementById("formContato");
const retorno = document.getElementById("retorno");

// Função que exibe uma mensagem no HTML (erro ou sucesso)
function mostrarMensagem(texto, tipo) {
  retorno.textContent = texto;
  retorno.className = "mensagem " + tipo; // remove "oculto" e aplica a cor
}

// Função principal: chamada no envio do formulário
function validarFormulario(evento) {
  // Impede o envio/recarregamento padrão da página
  evento.preventDefault();

  // Lê os valores dos campos e remove espaços extras com trim()
  const nome = document.getElementById("nome").value.trim();
  const campoEmail = document.getElementById("email");
  const email = campoEmail.value.trim();
  const assunto = document.getElementById("assunto").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // Verificações com if/else
  if (nome.length < 3) {
    mostrarMensagem("O nome precisa ter pelo menos 3 caracteres.", "erro");
  } else if (email === "" || !campoEmail.checkValidity()) {
    mostrarMensagem("Informe um e-mail válido (ex.: nome@email.com).", "erro");
  } else if (assunto === "") {
    mostrarMensagem("Selecione um assunto.", "erro");
  } else if (mensagem.length < 10) {
    mostrarMensagem("A mensagem precisa ter pelo menos 10 caracteres.", "erro");
  } else {
    // Tudo válido: confirmação simulada
    mostrarMensagem(
      "Obrigado, " + nome + "! Mensagem recebida (simulação: nenhum e-mail foi enviado e nenhum dado foi armazenado).",
      "sucesso"
    );
    formulario.reset();
  }
}

// Registra o evento submit do formulário
formulario.addEventListener("submit", validarFormulario);
