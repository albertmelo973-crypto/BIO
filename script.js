function entrar() {
  document.getElementById("animales").scrollIntoView({ behavior: "smooth" });
}

// Info de animales
const animales = {
  "mono-tocon": {
    titulo: "Mono Tocón de San Martín",
    img: "https://i.postimg.cc/Y9g9yN0f/image.png",
    desc: "El mono tocón de San Martín es una especie de primate que solo se encuentra en la región de San Martín, en el Perú, por eso se dice que es endémico. Es un animal pequeño, de pelaje marrón y una cola muy larga que usa para mantener el equilibrio mientras se mueve por los árboles. Vive en grupos familiares y es conocido por emitir sonidos especiales para comunicarse con su pareja y su grupo. Este mono está en peligro de extinción debido a la deforestación de la selva y al tráfico ilegal de animales. Su conservación es muy importante porque ayuda a mantener el equilibrio del ecosistema de la Amazonía peruana."
  },
  "ronsoco": {
    titulo: "Ronsoco",
    img: "https://i.postimg.cc/rpg7Wj4Z/image.png",
    desc: "El ronsoco es el roedor más grande del mundo, y puede llegar a medir más de un metro y pesar hasta 60 kilos. Vive en zonas cercanas a ríos, lagunas y pantanos, porque le encanta el agua. Es un animal muy sociable, que suele vivir en grupos grandes, y se alimenta principalmente de pastos y plantas acuáticas. Aunque su aspecto puede parecer torpe, es un excelente nadador y puede permanecer bajo el agua para esconderse de los depredadores. El ronsoco es un animal muy importante en la Amazonía, y además es un símbolo de la biodiversidad de Sudamérica."
  },
  "martin-pescador": {
    titulo: "Martín Pescador",
    img: "https://i.postimg.cc/6pZvybkw/image.png",
    desc: "El martín pescador es un ave pequeña y colorida, famosa por su habilidad para pescar. Su plumaje suele ser verde brillante o azul con tonos blancos y naranjas, lo que lo hace muy llamativo. Vive en zonas cercanas a ríos y lagunas, desde donde se lanza en picada para atrapar peces con su pico largo y afilado. Es un ave solitaria y muy rápida, con una vista excelente que le permite detectar presas bajo el agua. Su presencia indica que el agua está limpia y sana, por lo que se le considera un bioindicador."
  },
  "mono-ardilla": {
    titulo: "Mono Ardilla",
    img: "https://i.postimg.cc/DykWRPWM/image.png",
    desc: "El mono ardilla es uno de los más simpáticos y juguetones de la selva. Es de tamaño pequeño, con la cara blanca y el cuerpo cubierto de un pelaje amarillo y gris. Son muy ágiles y siempre se mueven en grupos grandes, saltando de rama en rama. Su dieta es variada: comen frutas, insectos y pequeños animales, lo que los convierte en importantes dispersores de semillas dentro del bosque. Aunque parecen frágiles, son muy inteligentes y tienen una gran capacidad de comunicación con sonidos y gestos. Lamentablemente, también están amenazados por la pérdida de su hábitat y la caza ilegal."
  }
};

// Mostrar modal
function mostrarInfo(animal) {
  document.getElementById("modal-title").textContent = animales[animal].titulo;
  document.getElementById("modal-img").src = animales[animal].img;
  document.getElementById("modal-desc").textContent = animales[animal].desc;
  document.getElementById("modal").style.display = "flex";
}

// Cerrar modal
function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}
