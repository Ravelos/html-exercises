const container = document.querySelector(".container");
const h = document.createElement("h1");
h.innerHTML = "Pneus bonitos"
const preco = document.createElement("p");
preco.innerHTML = "R$ 1200";
const img = document.createElement("img")
img.src = "https://img.freepik.com/vetores-premium/desenhos-animados-pneu-carro-vetor-mao-desenhada-ilustracao-isolada-em-fundo-transparente_20412-782.jpg?w=100";

container.appendChild(h);
container.appendChild(preco);
container.appendChild(img);