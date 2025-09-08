const caratula = document.getElementById('caratula');
const main = document.getElementById('main');
const animalDetail = document.getElementById('animalDetail');
const animalContent = document.getElementById('animalContent');

const animals = {
  "tocón": {
    nombre: "Mono Tocón de San Martín",
    cientifico: "Plecturocebus oenanthe",
    imagen: "https://i.postimg.cc/Y9g9yN0f/image.png",
    descripcion: "El mono tocón de San Martín es un primate endémico del Perú, pequeño y con una cola larga para mantener el equilibrio en los árboles. Vive en grupos familiares y se comunica con sonidos únicos. Está en peligro de extinción debido a la deforestación y el tráfico ilegal."
  },
  "ronsoco": {
    nombre: "Ronsoco",
    cientifico: "Hydrochoerus hydrochaeris",
    imagen: "https://i.postimg.cc/rpg7Wj4Z/image.png",
    descripcion: "El ronsoco es el roedor más grande del mundo, pudiendo pesar hasta 60 kg. Vive cerca de ríos y pantanos, en grupos sociables. Es un gran nadador y se alimenta de pastos y plantas acuáticas. Representa la biodiversidad de la Amazonía."
  },
  "pescador": {
    nombre: "Martín Pescador",
    cientifico: "Alcedo atthis",
    imagen: "https://i.postimg.cc/6pZvybkw/image.png",
    descripcion: "El martín pescador es un ave pequeña con plumaje brillante azul y naranja. Habita cerca de ríos y se lanza en picada para pescar. Su presencia indica agua limpia, lo que lo convierte en un bioindicador de ecosistemas sanos."
  },
  "ardilla": {
    nombre: "Mono Ardilla",
    cientifico: "Saimiri sciureus",
    imagen: "https://i.postimg.cc/DykWRPWM/image.png",
    descripcion: "El mono ardilla es ágil y juguetón, vive en grandes grupos en la selva. Tiene cara blanca, pelaje amarillo y gris, y come frutas, insectos y pequeños animales. Ayuda a dispersar semillas y mantener el equilibrio ecológico."
  }
};

// 👉 Carátula completa es el botón de inicio
caratula.addEventListener('click', () => {
  caratula.classList.add('hidden');
  main.classList.remove('hidden');
  history.pushState({page: "main"}, "Main", "#main");
});

// Mostrar detalle del animal
function showAnimal(key) {
  const a = animals[key];
  animalContent.innerHTML = `
    <img src="${a.imagen}" alt="${a.nombre}">
    <h2>${a.nombre}</h2>
    <h3>${a.cientifico}</h3>
    <p>${a.descripcion}</p>
  `;
  main.classList.add('hidden');
  animalDetail.classList.remove('hidden');
  history.pushState({page: key}, a.nombre, `#${key}`);
}

// Botón volver
function goBack() {
  history.back();
}

// Controlar retroceso en celular
window.addEventListener('popstate', (event) => {
  if (!event.state) {
    animalDetail.classList.add('hidden');
    main.classList.add('hidden');
    caratula.classList.remove('hidden');
  } else if (event.state.page === "main") {
    animalDetail.classList.add('hidden');
    caratula.classList.add('hidden');
    main.classList.remove('hidden');
  } else {
    const a = animals[event.state.page];
    if (a) {
      animalContent.innerHTML = `
        <img src="${a.imagen}" alt="${a.nombre}">
        <h2>${a.nombre}</h2>
        <h3>${a.cientifico}</h3>
        <p>${a.descripcion}</p>
      `;
      main.classList.add('hidden');
      caratula.classList.add('hidden');
      animalDetail.classList.remove('hidden');
    }
  }
});
