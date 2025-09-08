const caratula = document.getElementById('caratula');
const main = document.getElementById('main');
const modal = document.getElementById('animalModal');
const animalContent = document.getElementById('animalContent');

const animals = {
  "tocón": {
    nombre: "Mono Tocón de San Martín",
    cientifico: "Plecturocebus oenanthe",
    imagen: "https://i.postimg.cc/Y9g9yN0f/image.png",
    descripcion: "El mono tocón de San Martín es un primate endémico del Perú. Pequeño, de cola larga, vive en grupos familiares y se comunica con sonidos únicos. Está en peligro por la deforestación y el tráfico ilegal."
  },
  "ronsoco": {
    nombre: "Ronsoco",
    cientifico: "Hydrochoerus hydrochaeris",
    imagen: "https://i.postimg.cc/rpg7Wj4Z/image.png",
    descripcion: "El ronsoco es el roedor más grande del mundo, puede pesar hasta 60 kg. Vive en zonas cercanas al agua y es un excelente nadador. Sociable, vive en grupos y representa la biodiversidad amazónica."
  },
  "pescador": {
    nombre: "Martín Pescador",
    cientifico: "Alcedo atthis",
    imagen: "https://i.postimg.cc/6pZvybkw/image.png",
    descripcion: "El martín pescador es un ave pequeña y colorida que pesca lanzándose en picada. Su presencia indica agua limpia, lo que lo convierte en un bioindicador natural de ecosistemas saludables."
  },
  "ardilla": {
    nombre: "Mono Ardilla",
    cientifico: "Saimiri sciureus",
    imagen: "https://i.postimg.cc/DykWRPWM/image.png",
    descripcion: "El mono ardilla es ágil y juguetón, vive en grupos grandes, come frutas e insectos, y ayuda a dispersar semillas en el bosque. Tiene cara blanca y pelaje amarillo y gris."
  }
};

// 👉 Carátula completa como botón
caratula.addEventListener('click', () => {
  caratula.classList.add('hidden');
  main.classList.remove('hidden');
});

// Mostrar detalle en modal
function showAnimal(key) {
  const a = animals[key];
  animalContent.innerHTML = `
    <img src="${a.imagen}" alt="${a.nombre}">
    <h3>${a.nombre}</h3>
    <h4><i>${a.cientifico}</i></h4>
    <p>${a.descripcion}</p>
  `;
  modal.style.display = "flex";
}

// Cerrar modal
function closeModal() {
  modal.style.display = "none";
}

// Cerrar modal con click fuera del contenido
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
