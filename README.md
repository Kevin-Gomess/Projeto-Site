# Projeto-Site

## Integrantes

- Nome: Gabriel dos santos eufrasio 49005260
- Nome: Felipe militao 49331108
- Nome: Kevin Gomes 47796006
- Nome:
- Nome:

🐾 Patas Unidas — Site Institucional
1. Sobre o projeto
O Patas Unidas é um projeto acadêmico que apresenta o site institucional de uma organização não governamental fictícia voltada à proteção e ao bem-estar animal. A proposta da ONG é contribuir para a proteção de cães e gatos, por meio de ações de resgate, cuidados, adoção responsável, castração e conscientização da comunidade.

O site foi desenvolvido para apresentar a organização, divulgar seus projetos e mostrar como as pessoas podem participar como voluntárias ou colaborar com as iniciativas.
Aviso: a Patas Unidas é uma ONG fictícia, criada exclusivamente para fins acadêmicos. As informações institucionais, os números apresentados e os dados de contato são ilustrativos e não representam uma organização real.

2. Objetivo do site
O objetivo é criar uma página institucional simples, organizada e acessível, que permita ao visitante:
- Conhecer a história, a missão e os valores da Patas Unidas;
- Visualizar as iniciativas desenvolvidas pela ONG;
- Entender maneiras de ajudar e participar como voluntário;
- Preencher um formulário de contato com validação dos campos.
3. Tecnologias utilizadas
Tecnologia	Utilização no projeto
HTML5	Estrutura e organização do conteúdo das páginas.
CSS3	Estilização, cores, tipografia, espaçamentos e organização visual.
JavaScript	Validação do formulário e interação para mostrar ou ocultar informações.


O projeto utiliza JavaScript básico, sem frameworks e sem integração com banco de dados ou servidor (backend).

Também são utilizadas as fontes Fraunces e Nunito, disponibilizadas pelo Google Fonts.
4. Estrutura do projeto
ONG_PatasUnidas/
│
├── index.html
├── sobre.html
├── projetos.html
├── contato.html
│
├── css/
│   └── estilos.css
│
├── js/
│   ├── formulario.js
│   └── script.js
│
├── img/
│   ├── hero.jpg
│   ├── adocao.jpg
│   ├── castracao.jpg
│   └── educacao.jpg
│
└── README.md
Descrição dos arquivos e pastas
- index.html: página inicial, com apresentação da ONG, mensagem principal e indicadores ilustrativos de impacto.
- sobre.html: apresenta a história, a missão, o público atendido, os valores e os objetivos da organização. Também possui o botão de mostrar e ocultar informações institucionais.
- projetos.html: apresenta as três iniciativas fictícias da ONG: Castra Bairro, Feira Lar Doce Lar e Patinhas na Escola.
- contato.html: apresenta formas de voluntariado e um formulário para o visitante demonstrar interesse em participar.
- css/estilos.css: reúne as regras responsáveis pela aparência e pela organização visual do site.
- js/formulario.js: realiza a validação dos campos do formulário e exibe mensagens de erro ou confirmação.
- js/script.js: controla a exibição e a ocultação do painel de informações institucionais da página Sobre.
- img/: armazena as imagens ilustrativas utilizadas nas páginas.
- README.md: documenta o projeto, suas tecnologias, sua estrutura e as instruções de execução.
5. Páginas do site
Início — index.html
Apresenta a Patas Unidas e sua proposta de proteção animal. A página contém uma chamada principal, links para conhecer os projetos e participar, além de indicadores ilustrativos sobre o impacto da organização.
Sobre — sobre.html
Apresenta a história fictícia da ONG, criada no contexto do projeto como uma iniciativa iniciada em 2018. A página também reúne a missão, o público atendido, os valores e os objetivos da organização.

Possui um botão interativo que permite mostrar ou ocultar informações institucionais.
Projetos — projetos.html
Apresenta três iniciativas fictícias:
1. Castra Bairro: mutirões de castração e vacinação para animais de famílias de baixa renda.
2. Feira Lar Doce Lar: feiras de adoção para aproximar animais resgatados de famílias interessadas em adotar.
3. Patinhas na Escola: ações educativas sobre guarda responsável e respeito aos animais.
Cada projeto apresenta sua proposta e exemplos de como a comunidade pode contribuir.
Contato — contato.html
Apresenta possibilidades de voluntariado e disponibiliza um formulário com os campos nome, e-mail, assunto e mensagem.

O formulário verifica se os dados foram preenchidos corretamente e apresenta uma mensagem de retorno ao visitante.
6. Funcionalidades JavaScript
O site possui duas funcionalidades desenvolvidas em JavaScript:
6.1. Validação do formulário
Arquivo: js/formulario.js

A validação é executada quando o visitante tenta enviar o formulário. O código utiliza addEventListener("submit") para identificar o envio e preventDefault() para impedir o comportamento padrão do navegador.

São verificadas as seguintes condições:
- O nome deve possuir pelo menos 3 caracteres;
- O e-mail deve apresentar um formato válido;
- Um assunto deve ser selecionado;
- A mensagem deve possuir pelo menos 10 caracteres.
O método trim() remove os espaços em branco do início e do final dos textos antes da validação.

Quando existe algum problema, o site apresenta uma mensagem orientando o visitante. Quando os campos estão corretos, apresenta uma confirmação simulada e limpa o formulário.

Importante: o formulário é apenas demonstrativo. Nenhum e-mail é enviado e nenhum dado é armazenado.
6.2. Mostrar e ocultar informações
Arquivo: js/script.js

O desenvolvimento do site Patas Unidas permitiu aplicar conhecimentos de HTML5, CSS3 e JavaScript na criação de uma página institucional com diferentes seções e recursos interativos.

O projeto reúne informações sobre uma ONG fictícia, apresenta iniciativas de proteção animal e demonstra funcionalidades básicas de interação com o usuário. Além da construção visual, foram trabalhados conceitos de organização de arquivos, navegação entre páginas, validação de formulários e manipulação de elementos HTML por meio do JavaScript.
9. Créditos
- Nome do projeto: Patas Unidas;
- Tipo: projeto acadêmico — site institucional de ONG fictícia;
- Tecnologias: HTML5, CSS3 e JavaScript;
- Tipografia: Google Fonts — Fraunces e Nunito;
- Imagens: geradas por inteligência artificial para uso ilustrativo;
- Ano: 2026.
Patas Unidas — Todo animal merece um lar e cuidado.
