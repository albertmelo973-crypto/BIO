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
    descripcion: "El mono tocón de San Martín es una especie de primate que solo se encuentra en la región de San Martín, en el Perú, por eso se dice que es endémico. Es un animal pequeño, de pelaje marrón y una cola muy larga que usa para mantener el equilibrio mientras se mueve por los árboles. Vive en grupos familiares y es conocido por emitir sonidos especiales para comunicarse con su pareja y su grupo. Este mono está en peligro de extinción debido a la deforestación de la selva y al tráfico ilegal de animales. Su conservación es muy importante porque ayuda a mantener el equilibrio del ecosistema de la Amazonía peruana."
  },
  "ronsoco": {
    nombre: "Ronsoco",
    cientifico: "Hydrochoerus hydrochaeris",
    imagen: "https://i.postimg.cc/rpg7Wj4Z/image.png",
    descripcion: "El ronsoco es el roedor más grande del mundo, y puede llegar a medir más de un metro y pesar hasta 60 kilos. Vive en zonas cercanas a ríos, lagunas y pantanos, porque le encanta el agua. Es un animal muy sociable, que suele vivir en grupos grandes, y se alimenta principalmente de pastos y plantas acuáticas. Es un excelente nadador y puede permanecer bajo el agua para esconderse de los depredadores. El ronsoco es un animal muy importante en la Amazonía, y además es un símbolo de la biodiversidad de Sudamérica."
  },
  "pescador": {
    nombre: "Martín Pescador",
    cientifico: "Alcedo atthis",
    imagen: "https://i.postimg.cc/6pZvybkw/image.png",
    descripcion: "El martín pescador es un ave pequeña y colorida, famosa por su habilidad para pescar. Su plumaje suele ser verde brillante o azul con tonos blancos y naranjas, lo que lo hace muy llamativo. Vive en zonas cercanas a ríos y lagunas, desde donde se lanza en picada para atrapar peces con su pico largo y afilado. Es un ave solitaria y muy rápida, con una vista excelente que le permite detectar presas bajo el agua. Su presencia indica que el agua está limpia y sana, por lo que se le considera un bioindicador."
  },
  "ardilla": {
    nombre: "Mono Ardilla",
    cientifico: "Saimiri sciureus",
    imagen: "https://i.postimg.cc/DykWRPWM/image.png",
    descripcion: "El mono ardilla es uno de los más simpáticos y juguetones de la selva. Es de tamaño pequeño, con la cara blanca y el cuerpo cubierto de un pelaje amarillo y gris. Son muy ágiles y siempre se mueven en grupos grandes, saltando de rama en rama. Su dieta es variada: comen frutas, insectos y pequeños animales, lo que los convierte en importantes dispersores de semillas dentro del bosque. Aunque parecen frágiles, son muy inteligentes y tienen una gran capacidad de comunicación con sonidos y gestos. Lamentablemente, también están amenazados por la pérdida de su hábitat y la caza ilegal."
  }
};

// Ir al menú principal
startBtn.addEventListener('click', () => {
  caratula.classList.add('hidden');
  main.classList.remove('hidden');
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

