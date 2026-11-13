const container = document.querySelector("#container");

// 1. Párrafo rojo
const paragraphRed = document.createElement("p");
paragraphRed.style.color = "red";
paragraphRed.textContent = "¡Hola, soy rojo!";
container.appendChild(paragraphRed);

// 2. H3 azul
const h3Blue = document.createElement("h3");
h3Blue.style.color = "blue";
h3Blue.textContent = "¡Soy un h3 azul!";
container.appendChild(h3Blue);

// 3. Div con fondo rosa y borde negro
const pinkDiv = document.createElement("div");
pinkDiv.setAttribute("style", "border: 2px solid black; background-color: pink; padding: 15px; margin-top: 10px;");

const divH1 = document.createElement("h1");
divH1.textContent = "Estoy en un div";
pinkDiv.appendChild(divH1);

const divP = document.createElement("p");
divP.textContent = "YO TAMBIÉN!";
pinkDiv.appendChild(divP);

container.appendChild(pinkDiv);