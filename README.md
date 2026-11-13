# CineSpot – Explorador de películas y series

Aplicación web hecha con **Vue 3 + Vite** para explorar un catálogo de 20 películas y series: búsqueda, filtros, detalle y favoritos. Sin backend ni API

## Instalación y ejecución
Requiere Node.js 18 o superior.
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    
```

## Imágenes del catálogo
Coloca los pósters en `public/img/` con el nombre `<id>.jpg` (ver `public/img/`). Si falta alguno, se muestra un póster de respaldo.

## Componentes
| Archivo | Función |
|---|---|
| `src/App.vue` | Estado, filtros, favoritos, hero y secciones por etapa |
| `src/components/Poster.vue` | Imagen con póster de respaldo si no carga |
| `src/components/MovieCard.vue` | Tarjeta (imagen, título, género, botón favorito) |
| `src/components/MovieModal.vue` | Detalle: sinopsis, año, duración o temporadas |
| `src/data.js` | Arreglo de 20 objetos |

# Reporte de proyecto: CineSpot, explorador de películas y series

**Tema 3. Programación del lado del cliente – Manejo de frameworks**
**Equipo:** _(nombres de los integrantes)_  **Fecha:** _(fecha de entrega)_  **Repositorio:** _(enlace a GitHub)_

## 1. Introducción
CineSpot es una aplicación web interactiva para explorar un catálogo de películas y series, consultar su información y guardar favoritos. Se desarrolló con un framework de JavaScript para practicar componentes, manejo de estado y renderizado dinámico.

## 2. Objetivo
Investigar e implementar Vue.js mediante una aplicación que muestre información de forma dinámica, aplicando componentes, estado reactivo y eventos.

## 3. Tecnología seleccionada
Se eligió **Vue 3** con la Composition API y **Vite** como herramienta de desarrollo.
- Sintaxis cercana a HTML, CSS y JS, con curva de aprendizaje suave.
- Los componentes `.vue` agrupan plantilla, lógica y estilos.
- La reactividad (`ref`, `computed`) simplifica filtros y búsquedas.
- Vite ofrece arranque rápido y recarga instantánea.

## 4. Investigación
### 4.1 Creación y ejecución del proyecto
Se usó `npm create vue@latest` (o Vite con plantilla Vue). Estructura base: `index.html`, `src/main.js` (monta la app con `createApp`), `App.vue` y `vite.config.js`. Se ejecuta con `npm install` y `npm run dev`.

### 4.2 Componentes y comunicación
Un componente es una pieza reutilizable de interfaz. La comunicación sigue dos reglas:
- **Props:** el padre envía datos al hijo (`:item="i"`).
- **Emits:** el hijo avisa al padre de un evento (`$emit('open', item)`).

### 4.3 Estado y eventos
- `ref()` guarda estado reactivo: búsqueda, filtros, favoritos, título seleccionado.
- `computed()` deriva datos, como la lista filtrada, y se recalcula solo.
- `watch()` guarda los favoritos en `localStorage`.
- Eventos con `@click`; enlace de formularios con `v-model`.
- Renderizado con `v-for` (listas) y `v-if` (condicionales).

## 5. Implementación de requisitos
| Requisito | Cómo se resolvió |
|---|---|
| Catálogo de 20 títulos | Arreglo de objetos en `src/data.js` |
| Tarjeta con imagen, título y género | `MovieCard.vue` y `Poster.vue` |
| Búsqueda por título | `v-model` + `computed` con `includes()` |
| Filtro por género y tipo | Chips de tipo y `<select>` de género, combinados en el mismo `computed` |
| Detalle al seleccionar | `MovieModal.vue` (sinopsis, año, duración o temporadas) |
| Marcar/desmarcar favoritos | Botón ♡ en tarjeta y modal; función `toggleFav` |
| Sección de favoritos | Vista «Favoritos» que filtra por los ids guardados |
| Diseño adaptable | CSS Grid con `auto-fill` y media queries |

## 6. Estructura del proyecto
```
cinespot/
├── index.html
├── public/img/            # pósters (<id>.jpg)
└── src/
    ├── main.js
    ├── App.vue
    ├── data.js
    ├── style.css
    └── components/ (Poster, MovieCard, MovieModal)
```

## 7. Diseño de la interfaz
- **Página principal:** encabezado con navegación, sección de bienvenida con tarjetas en abanico, buscador con filtros y catálogo organizado por etapas (líneas de tiempo por años).
- **Paleta:** tomada de una imagen de referencia de cine (tonos azul marino, verde azulado y malva sobre negro).

| Uso | Color |
|---|---|
| Fondo | `#03080E` / `#000000` |
| Superficies | `#0B2440` |
| Acento principal | `#12909C`, `#35A9A9` |
| Resaltado | `#86CFD0` |
| Textos secundarios | `#A3B9BB` |
| Detalles | `#3A6680`, `#9A8D9C`, `#8E6A70`, `#5C4A50` |

## 8. Pruebas
| Prueba | Resultado esperado |
|---|---|
| Escribir «co» en el buscador | Solo aparecen títulos que contienen «co» |
| Filtrar «Series» + género «Comedia» | Solo series de comedia |
| Clic en una tarjeta | Se abre el detalle con los datos correctos |
| Clic en ♡ y recargar la página | El favorito sigue marcado |
| Vista «Favoritos» sin favoritos | Mensaje de lista vacía |
| Pantalla de celular | Una columna de contenido, sin desbordes |
| Imagen faltante | Se muestra el póster de respaldo |

_(Anota aquí el resultado real de cada prueba y agrega capturas de pantalla.)_

## 9. Conclusiones
Vue permitió construir la aplicación dividiendo la interfaz en componentes pequeños y manteniendo la lógica ordenada. La reactividad evitó manipular el DOM manualmente, y props/emits dejaron claro el flujo de datos. _(Agrega aquí dificultades y aprendizajes del equipo.)_

## 10. Referencias
- Vue.js, guía de inicio: https://vuejs.org/guide/quick-start
- Documentación de Vite: https://vite.dev/guide/
