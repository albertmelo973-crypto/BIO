const startBtn = document.getElementById('startBtn');
const caratula = document.getElementById('caratula');
const main = document.getElementById('main');
const animalDetail = document.getElementById('animalDetail');
const animalContent = document.getElementById('animalContent');

const animals = {
  "tocón": {
    nombre: "Mono Tocón de San Martín",
    cientifico: "Plecturocebus oenanthe",
    imagen: "https://i.postimg.cc/Y9g9yN0f/image.png",
    descripcion: "El mono tocón de San Martín es una especie de primate endémica de la región San Martín, Perú. Es pequeño, de pelaje marrón y una cola larga que le ayuda a equilibrarse. Vive en grupos familiares y usa vocalizaciones para comunicarse. Está en peligro de extinción por la deforestación y el tráfico ilegal."
  },
  "ronsoco": {
    nombre: "Ronsoco",
    cientifico: "Hydrochoerus hydrochaeris",
    imagen: "https://i.postimg.cc/rpg7Wj4Z/image.png",
    descripcion: "El ronsoco, o capibara, es el roedor más grande del mundo. Vive en ríos, lagunas y pantanos. Es sociable, excelente nadador y puede pesar hasta 60 kilos. Su rol en la Amazonía es clave para los ecosistemas acuáticos."
  },
  "pescador": {
    nombre: "Martín Pescador",
    cientifico: "Alcedo atthis",
    imagen: "https://i.postimg.cc/6pZvybkw/image.png",
    descripcion: "El martín pescador es un ave colorida de azules y naranjas intensos. Se lanza en picada para pescar, gracias a su aguda visión. Es un bioindicador, ya que su presencia significa que los ríos tienen agua limpia."
  },
  "ardilla": {
    nombre: "Mono Ardilla",
    cientifico: "Saimiri sciureus",
    imagen: "https://i.postimg.cc/DykWRPWM/image.png",
    descripcion: "El mono ardilla es ágil y curioso, con pelaje amarillo y gris y rostro blanco. Vive en grandes grupos, salta de rama en rama y se alimenta de frutas, insectos y pequeños animales. Es vital para la dispersión de semillas en el bosque."
  }
};

// Ir al menú principal
startBtn.addEventListener('click', () => {
  caratula.classList.add('hidden');
  main.classList.remove('hidden');
  document.body.style.overflow = "auto"; // habilita scroll recién aquí
  history.pushState({page: "main"}, "Main", "#main");
});

// Mostrar animal
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

// Manejar retroceso del celular
window.addEventListener('popstate', (event) => {
  if (!event.state) {
    animalDetail.classList.add('hidden');
    main.classList.add('hidden');
    caratula.classList.remove('hidden');
    document.body.style.overflow = "hidden"; // vuelve a bloquear scroll
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

