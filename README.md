# 🐾 Patas Unidas — Site Institucional

## 1. Integrantes

- Kevin Gomes — RGM: 47796006

## 2. Sobre o projeto

O Patas Unidas é um projeto acadêmico que apresenta o site institucional de uma organização não governamental fictícia voltada à proteção e ao bem-estar animal.

A proposta da ONG é contribuir para a proteção de cães e gatos por meio de ações de resgate, cuidados, adoção responsável, castração e conscientização da comunidade.

O site foi desenvolvido para apresentar a organização, divulgar seus projetos e mostrar como as pessoas podem participar como voluntárias ou colaborar com as iniciativas.

**Aviso:** A Patas Unidas é uma ONG fictícia, criada exclusivamente para fins acadêmicos. As informações institucionais, os números apresentados e os dados de contato são ilustrativos e não representam uma organização real.

## 3. Objetivo do site

O objetivo é criar uma página institucional simples, organizada e acessível, que permita ao visitante:

- Conhecer a história, a missão e os valores da Patas Unidas;
- Visualizar os projetos desenvolvidos pela ONG;
- Entender como ajudar e participar como voluntário;
- Preencher um formulário de contato com validação dos campos.

## 4. Tecnologias utilizadas

| Tecnologia | Utilização no projeto |
|---|---|
| HTML5 | Estrutura e organização do conteúdo das páginas. |
| CSS3 | Estilização, cores, fontes, espaçamentos e organização visual. |
| JavaScript | Validação do formulário e interação para mostrar ou ocultar informações. |

O projeto utiliza JavaScript básico, sem frameworks e sem integração com banco de dados ou servidor (backend).

Também são utilizadas as fontes Fraunces e Nunito, disponibilizadas pelo Google Fonts.

## 5. Estrutura do projeto

Todos os arquivos estão organizados na mesma pasta:

```text
ONG_PatasUnidas/
│
├── index.html
├── sobre.html
├── projetos.html
├── contato.html
│
├── estilos.css
├── formulario.js
├── script.js
│
├── hero.jpg
├── adocao.jpg
├── castracao.jpg
├── educacao.jpg
│
└── README.md
```

### Descrição dos arquivos

- **index.html:** página inicial, com apresentação da ONG, mensagem principal e indicadores ilustrativos de impacto.
- **sobre.html:** apresenta a história, a missão, o público atendido, os valores e os objetivos da organização.
- **projetos.html:** apresenta as três iniciativas fictícias da ONG: Castra Bairro, Feira Lar Doce Lar e Patinhas na Escola.
- **contato.html:** apresenta formas de voluntariado e um formulário para o visitante demonstrar interesse em participar.
- **estilos.css:** reúne as regras responsáveis pela aparência e pela organização visual do site.
- **formulario.js:** realiza a validação dos campos do formulário e exibe mensagens de erro ou confirmação.
- **script.js:** controla a exibição e a ocultação do painel de informações institucionais da página Sobre.
- **hero.jpg:** imagem principal da página inicial.
- **adocao.jpg:** imagem utilizada no projeto Feira Lar Doce Lar.
- **castracao.jpg:** imagem utilizada no projeto Castra Bairro.
- **educacao.jpg:** imagem utilizada no projeto Patinhas na Escola.
- **README.md:** apresenta as informações, tecnologias, estrutura e instruções do projeto.

## 6. Páginas do site

### 6.1. Início — index.html

Apresenta a Patas Unidas e sua proposta de proteção animal. A página contém uma chamada principal, links para conhecer os projetos e participar, além de indicadores ilustrativos sobre o impacto da organização.

### 6.2. Sobre — sobre.html

Apresenta a história fictícia da ONG, criada no contexto do projeto como uma iniciativa iniciada em 2018.

A página também reúne a missão, o público atendido, os valores e os objetivos da organização.

Possui um botão interativo que permite mostrar ou ocultar informações institucionais.

### 6.3. Projetos — projetos.html

Apresenta três iniciativas fictícias:

1. **Castra Bairro:** mutirões de castração e vacinação para animais de famílias de baixa renda.
2. **Feira Lar Doce Lar:** feiras de adoção para aproximar animais resgatados de famílias interessadas em adotar.
3. **Patinhas na Escola:** ações educativas sobre guarda responsável e respeito aos animais.

Cada projeto apresenta sua proposta, uma imagem ilustrativa e exemplos de como a comunidade pode contribuir.

### 6.4. Contato — contato.html

Apresenta possibilidades de voluntariado e disponibiliza um formulário com os campos:

- Nome;
- E-mail;
- Assunto;
- Mensagem.

O formulário verifica se os dados foram preenchidos corretamente e apresenta uma mensagem de retorno ao visitante.

## 7. Funcionalidades JavaScript

O site possui duas funcionalidades desenvolvidas em JavaScript.

### 7.1. Validação do formulário

**Arquivo:** formulario.js

A validação é executada quando o visitante tenta enviar o formulário.

O código utiliza `addEventListener("submit")` para identificar o envio e `preventDefault()` para impedir o comportamento padrão do navegador.

São verificadas as seguintes condições:

- O nome deve possuir pelo menos 3 caracteres;
- O e-mail deve apresentar um formato válido;
- Um assunto deve ser selecionado;
- A mensagem deve possuir pelo menos 10 caracteres.

O método `trim()` remove os espaços em branco do início e do final dos textos antes da validação.

Quando existe algum problema, o site apresenta uma mensagem orientando o visitante. Quando os campos estão corretos, apresenta uma confirmação simulada e limpa o formulário.

**Importante:** o formulário é apenas demonstrativo. Nenhum e-mail é enviado e nenhum dado é armazenado.

### 7.2. Mostrar e ocultar informações

**Arquivo:** script.js

Essa funcionalidade permite mostrar ou ocultar as informações institucionais da ONG na página Sobre.

Ao clicar no botão, o JavaScript verifica se o painel está oculto ou visível. Em seguida, altera sua exibição e também modifica o texto do botão.

Para desenvolver essa interação, foram utilizados:

- `getElementById()` para selecionar os elementos;
- `addEventListener("click")` para identificar o clique;
- `function` para organizar a ação;
- `if/else` para verificar a condição;
- `classList` para mostrar ou ocultar o painel;
- `textContent` para alterar o texto do botão.

A interação pode ser realizada várias vezes, permitindo mostrar e ocultar as informações sem recarregar a página.

## 8. Como executar o projeto

Para visualizar o site, siga os passos:

1. Extraia os arquivos da pasta ZIP, caso estejam compactados.
2. Mantenha todos os arquivos na mesma pasta.
3. Abra o arquivo `index.html` em um navegador, como Google Chrome.
4. Utilize o menu superior para navegar entre as páginas.
5. Acesse a página Sobre para testar o botão de mostrar e ocultar informações.
6. Acesse a página Contato para testar a validação do formulário.

Não é necessário instalar programas adicionais, configurar banco de dados ou utilizar servidor.

## 9. Considerações finais

O desenvolvimento do site Patas Unidas permitiu aplicar conhecimentos de HTML5, CSS3 e JavaScript na criação de uma página institucional com diferentes seções e recursos interativos.

O projeto reúne informações sobre uma ONG fictícia, apresenta iniciativas de proteção animal e demonstra funcionalidades básicas de interação com o usuário.

Além da construção visual, foram trabalhados conceitos de organização de arquivos, navegação entre páginas, validação de formulários e manipulação de elementos HTML por meio do JavaScript.

## 10. Créditos

- **Nome do projeto:** Patas Unidas;
- **Tipo:** projeto acadêmico — site institucional de ONG fictícia;
- **Tecnologias:** HTML5, CSS3 e JavaScript;
- **Tipografia:** Google Fonts — Fraunces e Nunito;
- **Imagens:** geradas por inteligência artificial para uso ilustrativo;
- **Ano:** 2026.

---

**Patas Unidas — Todo animal merece um lar e cuidado.**
