// Crie um projeto com dois arquivos: index.html e script.js. No arquivo 'index' insira a estrutura base HTML e dentro da tag 'body' inclua quatro tags vazias: h1, ul, a, ol. Adicione o atributo id="titulo" à tag h1, o atributo href="https://prozeducacao.com.br" à tag 'a', e o atributo id="lista-ordenada" à tag 'ol'. Na sequência, realize a conexão entre o arquivo HTML e o arquivo JavaScript.

// No arquivo script.js capture os quatro elementos criados, e use a propriedade .innerText para adicionar conteúdo textual aos elementos 'h1' e 'a', e a propriedade .innerHTML para adicionar três itens simples na lista não ordenada, e três itens com links para outros sites na lista ordenada.

const titulo = document.getElementById("titulo");
const listaOrdenada = document.getElementById("lista-ordenada");
const listaDesordenada = document.getElementById("lista-desordenada");
const anchor = document.querySelector("a");

titulo.innerHTML = "Titulo";
listaDesordenada.innerHTML = `<li><a href="https://www.google.com">Google</a></li>
<li><a href="https://github.com/Ravelos">Github</a></li>
<li><a href="https://www.instagram.com/">Instagram</a></li>`;
listaOrdenada.innerHTML = `<li>This is an ordered list:</li>
<li>Item2</li>
<li>Item3</li>`;
anchor.innerHTML = "Proz-Education";
