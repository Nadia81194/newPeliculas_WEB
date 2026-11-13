
const raw = [
  { id: 1, title: 'Interstellar', type: 'Película', genre: 'Ciencia ficción', year: 2014, duration: '169 min', synopsis: 'Un grupo de astronautas viaja a través de un agujero de gusano para buscar un nuevo hogar para la humanidad.' },
  { id: 2, title: 'Coco', type: 'Película', genre: 'Animación', year: 2017, duration: '105 min', synopsis: 'Miguel sueña con ser músico y termina en la Tierra de los Muertos buscando a su ancestro.' },
  { id: 3, title: 'El viaje de Chihiro', type: 'Película', genre: 'Studio Ghibli', year: 2001, duration: '125 min', synopsis: 'Una niña queda atrapada en un mundo de espíritus y debe trabajar en unos baños para rescatar a sus padres.' },
  { id: 4, title: 'Mi vecino Totoro', type: 'Película', genre: 'Studio Ghibli', year: 1988, duration: '86 min', synopsis: 'Dos hermanas se mudan al campo y conocen a los espíritus del bosque, entre ellos el gran Totoro.' },
  { id: 5, title: 'La princesa Mononoke', type: 'Película', genre: 'Studio Ghibli', year: 1997, duration: '134 min', synopsis: 'Un joven guerrero queda en medio de la guerra entre los dioses del bosque y una aldea de hierro.' },
  { id: 6, title: 'El castillo ambulante', type: 'Película', genre: 'Studio Ghibli', year: 2004, duration: '119 min', synopsis: 'Sophie, convertida en anciana por una maldición, encuentra refugio en el castillo móvil del mago Howl.' },
  { id: 7, title: 'Nicky, la aprendiz de bruja', type: 'Película', genre: 'Studio Ghibli', year: 1989, duration: '103 min', synopsis: 'Una joven bruja se instala en una ciudad costera y abre un servicio de entregas volando en escoba.' },
  { id: 8, title: 'Ponyo', type: 'Película', genre: 'Studio Ghibli', year: 2008, duration: '101 min', synopsis: 'Un pez dorado que quiere ser humana se hace amiga de un niño, y su magia altera el océano.' },
  { id: 9, title: 'Your Name', type: 'Película', genre: 'Anime', year: 2016, duration: '106 min', synopsis: 'Dos adolescentes que no se conocen intercambian cuerpos y buscan encontrarse.' },
  { id: 10, title: 'Una voz silenciosa', type: 'Película', genre: 'Anime', year: 2016, duration: '130 min', synopsis: 'Un joven que acosó a una compañera sorda busca redimirse por sus acciones años después.' },
  { id: 11, title: 'Ataque a los Titanes', type: 'Serie', genre: 'Anime', year: 2013, seasons: 4, synopsis: 'La humanidad vive tras enormes murallas para protegerse de gigantes que devoran personas.' },
  { id: 12, title: 'Death Note', type: 'Serie', genre: 'Anime', year: 2006, seasons: 1, synopsis: 'Un estudiante encuentra una libreta que mata a quien se escriba en ella y se enfrenta al detective L.' },
  { id: 13, title: 'Fullmetal Alchemist: Brotherhood', type: 'Serie', genre: 'Anime', year: 2009, seasons: 1, synopsis: 'Dos hermanos alquimistas buscan la piedra filosofal para recuperar sus cuerpos tras un ritual prohibido.' },
  { id: 14, title: 'Demon Slayer', type: 'Serie', genre: 'Anime', year: 2019, seasons: 4, synopsis: 'Tanjiro se une a los cazadores de demonios para curar a su hermana, convertida en demonio.' },
  { id: 15, title: 'Black Clover', type: 'Serie', genre: 'Anime', year: 2017, seasons: 4, synopsis: 'Asta, un niño sin magia en un mundo de magos, sueña con convertirse en el Rey Mago.' },
  { id: 16, title: 'Monster High: 13 deseos', type: 'Película', genre: 'Monster High', year: 2013, duration: '70 min', synopsis: 'Las chicas monstruo descubren una lámpara mágica con un genio que concede deseos con consecuencias inesperadas.' },
  { id: 17, title: 'Monster High: Scaris, la ciudad del miedo', type: 'Película', genre: 'Monster High', year: 2013, duration: '72 min', synopsis: 'Frankie y sus amigas viajan a Scaris y viven una aventura de moda y misterio.' },
  { id: 18, title: 'Monster High: Boo York, Boo York', type: 'Película', genre: 'Monster High', year: 2015, duration: '70 min', synopsis: 'Las chicas monstruo viajan a Boo York, la ciudad que nunca duerme, con un musical y muchas sorpresas.' },
  { id: 19, title: 'Monster High: Embrujadas', type: 'Película', genre: 'Monster High', year: 2015, duration: '70 min', synopsis: 'Las chicas monstruo enfrentan una aventura llena de fantasmas y sorpresas en la escuela.' },
  { id: 20, title: 'Monster High: La película', type: 'Película', genre: 'Monster High', year: 2022, duration: '94 min', synopsis: 'Una chica mitad hombre lobo y mitad humana entra a Monster High y descubre su lugar entre los monstruos.' }
]

export const items = raw.map((i) => ({ ...i, img: `/img/${i.id}.jpg` }))
