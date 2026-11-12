// Catálogo local (arreglo de objetos). Cambia "hue" para el color del póster
// o agrega "img: '/img/archivo.jpg'" (en la carpeta public/img) para usar imágenes reales.
const raw = [
  { id: 1, title: 'Interstellar', type: 'Película', genre: 'Ciencia ficción', year: 2014, duration: '169 min', hue: 215, synopsis: 'Un grupo de astronautas viaja a través de un agujero de gusano para buscar un nuevo hogar para la humanidad.' },
  { id: 2, title: 'Coco', type: 'Película', genre: 'Animación', year: 2017, duration: '105 min', hue: 330, synopsis: 'Miguel sueña con ser músico y termina en la Tierra de los Muertos buscando a su ancestro.' },
  { id: 3, title: 'Stranger Things', type: 'Serie', genre: 'Misterio', year: 2016, seasons: 5, hue: 0, synopsis: 'Un grupo de niños enfrenta fuerzas sobrenaturales tras la desaparición de un amigo en Hawkins.' },
  { id: 4, title: 'Inception', type: 'Película', genre: 'Ciencia ficción', year: 2010, duration: '148 min', hue: 200, synopsis: 'Un ladrón que roba secretos entrando en los sueños recibe la misión de plantar una idea.' },
  { id: 5, title: 'Toy Story', type: 'Película', genre: 'Animación', year: 1995, duration: '81 min', hue: 45, synopsis: 'Los juguetes de Andy cobran vida cuando nadie los ve y Woody enfrenta la llegada de Buzz.' },
  { id: 6, title: 'Breaking Bad', type: 'Serie', genre: 'Drama', year: 2008, seasons: 5, hue: 130, synopsis: 'Un profesor de química con cáncer se convierte en fabricante de metanfetamina.' },
  { id: 7, title: 'El Rey León', type: 'Película', genre: 'Animación', year: 1994, duration: '88 min', hue: 28, synopsis: 'Simba, joven heredero del trono, debe regresar para enfrentar a su tío Scar.' },
  { id: 8, title: 'Black Mirror', type: 'Serie', genre: 'Ciencia ficción', year: 2011, seasons: 6, hue: 260, synopsis: 'Episodios independientes que muestran el lado oscuro de la tecnología moderna.' },
  { id: 9, title: 'Parásitos', type: 'Película', genre: 'Drama', year: 2019, duration: '132 min', hue: 160, synopsis: 'Una familia pobre se infiltra poco a poco en la vida de una familia adinerada.' },
  { id: 10, title: 'The Office', type: 'Serie', genre: 'Comedia', year: 2005, seasons: 9, hue: 190, synopsis: 'Día a día de los empleados de una oficina de papel filmado como documental.' },
  { id: 11, title: 'Spider-Man: Un nuevo universo', type: 'Película', genre: 'Animación', year: 2018, duration: '117 min', hue: 350, synopsis: 'Miles Morales se convierte en Spider-Man y conoce a otros héroes de dimensiones distintas.' },
  { id: 12, title: 'Dark', type: 'Serie', genre: 'Misterio', year: 2017, seasons: 3, hue: 240, synopsis: 'La desaparición de un niño revela secretos de cuatro familias a través del tiempo.' },
  { id: 13, title: 'Mad Max: Furia en el camino', type: 'Película', genre: 'Acción', year: 2015, duration: '120 min', hue: 20, synopsis: 'Max y Furiosa huyen por el desierto de un tirano en una persecución sin descanso.' },
  { id: 14, title: 'Friends', type: 'Serie', genre: 'Comedia', year: 1994, seasons: 10, hue: 300, synopsis: 'Seis amigos viven sus vidas y amores en Nueva York.' },
  { id: 15, title: 'Buscando a Nemo', type: 'Película', genre: 'Animación', year: 2003, duration: '100 min', hue: 195, synopsis: 'Un pez payaso cruza el océano para encontrar a su hijo capturado.' },
  { id: 16, title: 'The Mandalorian', type: 'Serie', genre: 'Acción', year: 2019, seasons: 3, hue: 90, synopsis: 'Un cazarrecompensas solitario protege a un misterioso niño en los confines de la galaxia.' },
  { id: 17, title: 'El Padrino', type: 'Película', genre: 'Drama', year: 1972, duration: '175 min', hue: 15, synopsis: 'La saga de la familia Corleone y la transición de poder de padre a hijo.' },
  { id: 18, title: 'Arcane', type: 'Serie', genre: 'Animación', year: 2021, seasons: 2, hue: 280, synopsis: 'Dos hermanas quedan en bandos opuestos en la guerra entre Piltover y Zaun.' },
  { id: 19, title: 'Get Out', type: 'Película', genre: 'Misterio', year: 2017, duration: '104 min', hue: 170, synopsis: 'Un joven visita a la familia de su novia y descubre un inquietante secreto.' },
  { id: 20, title: 'Brooklyn Nine-Nine', type: 'Serie', genre: 'Comedia', year: 2013, seasons: 8, hue: 220, synopsis: 'Un detective inmaduro y su capitán serio trabajan en una comisaría de Brooklyn.' }
]

// Cada título busca su imagen en public/img/<id>.jpg (si no existe, se muestra un póster de respaldo)
export const items = raw.map((i) => ({ ...i, img: `/img/${i.id}.jpg` }))
