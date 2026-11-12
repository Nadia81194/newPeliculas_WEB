<script setup>
import { ref, computed, watch } from 'vue'
import { items } from './data.js'
import Poster from './components/Poster.vue'
import MovieCard from './components/MovieCard.vue'
import MovieModal from './components/MovieModal.vue'

const view = ref('catalogo') // 'catalogo' | 'favoritos'
const query = ref('')
const type = ref('Todas')
const genre = ref('Todos')
const selected = ref(null)
const favs = ref(JSON.parse(localStorage.getItem('favs') || '[]'))
watch(favs, (v) => localStorage.setItem('favs', JSON.stringify(v)), { deep: true })

const types = [
  { label: 'Todas', value: 'Todas' },
  { label: 'Películas', value: 'Película' },
  { label: 'Series', value: 'Serie' }
]
const genres = ['Todos', ...new Set(items.map((i) => i.genre))]
const eras = [
  { label: '1972 – 2009', from: 0, to: 2009 },
  { label: '2010 – 2016', from: 2010, to: 2016 },
  { label: '2017 – 2021', from: 2017, to: 2100 }
]
const hero = [items[1], items[0], items[2]] // tarjetas en abanico

function toggleFav(id) {
  favs.value = favs.value.includes(id) ? favs.value.filter((f) => f !== id) : [...favs.value, id]
}
function setType(v) { view.value = 'catalogo'; type.value = v }
function go(id) { setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 50) }

const filtered = computed(() =>
  items.filter((i) =>
    (view.value === 'catalogo' || favs.value.includes(i.id)) &&
    i.title.toLowerCase().includes(query.value.toLowerCase().trim()) &&
    (type.value === 'Todas' || i.type === type.value) &&
    (genre.value === 'Todos' || i.genre === genre.value)
  )
)
const sections = computed(() =>
  view.value === 'favoritos'
    ? [{ id: 'fav', label: 'Mis favoritos', items: filtered.value }]
    : eras.map((e, n) => ({ id: 'era-' + n, label: e.label, items: filtered.value.filter((i) => i.year >= e.from && i.year <= e.to) })).filter((s) => s.items.length)
)
</script>

<template>
  <header class="topbar">
    <div class="wrap bar">
      <span class="logo">🎬 Cine<b>Spot</b></span>
      <nav>
        <button :class="{ active: view === 'catalogo' && type === 'Todas' }" @click="setType('Todas')">Catálogo</button>
        <button :class="{ active: view === 'catalogo' && type === 'Película' }" @click="setType('Película')">Películas</button>
        <button :class="{ active: view === 'catalogo' && type === 'Serie' }" @click="setType('Serie')">Series</button>
        <button :class="{ active: view === 'favoritos' }" @click="view = 'favoritos'">Favoritos ({{ favs.length }})</button>
      </nav>
    </div>
  </header>

  <section class="hero">
    <div class="wrap hero-grid">
      <div>
        <p class="crumbs">Inicio › Explorador</p>
        <p class="eyebrow">{{ view === 'catalogo' ? 'Colección completa' : 'Tu lista' }}</p>
        <h1>{{ view === 'catalogo' ? 'Lista completa de películas y series' : 'Tus películas y series favoritas' }}</h1>
        <p class="sub">Una guía ordenada por etapas para buscar, filtrar y descubrir qué ver hoy.</p>
        <p class="cta">
          <span><b class="count">{{ items.length }}</b> títulos en esta colección</span>
          <button class="btn" @click="view = 'catalogo'; go('catalogo')">Explorar catálogo ↓</button>
        </p>
      </div>
      <div class="fan">
        <Poster v-for="(h, n) in hero" :key="h.id" :item="h" :class="['fan-card', 'f' + n]" />
      </div>
    </div>
    <div class="wrap explore">
      <span>También puedes explorar</span>
      <button class="chip soft" @click="setType('Película'); go('catalogo')">✦ Películas</button>
      <button class="chip soft" @click="setType('Serie'); go('catalogo')">⚡ Series</button>
      <button class="chip soft" @click="view = 'favoritos'; go('catalogo')">♥ Favoritos →</button>
    </div>
  </section>

  <main id="catalogo" class="wrap">
    <div class="filters">
      <label class="lbl" for="q">BUSCAR</label>
      <input id="q" v-model="query" type="search" placeholder="Buscar una película o serie..." />
      <button v-for="t in types" :key="t.value" class="chip" :class="{ active: type === t.value }" @click="type = t.value">{{ t.label }}</button>
      <select v-model="genre" aria-label="Género">
        <option v-for="g in genres" :key="g">{{ g }}</option>
      </select>
      <template v-if="view === 'catalogo'">
        <button v-for="(e, n) in eras" :key="e.label" class="chip" @click="go('era-' + n)">{{ e.label }}</button>
      </template>
    </div>

    <section v-for="s in sections" :id="s.id" :key="s.id" class="stage">
      <div class="stage-head">
        <div>
          <p class="eyebrow">{{ view === 'catalogo' ? 'Etapa' : 'Lista' }}</p>
          <h2>{{ s.label }}</h2>
        </div>
        <span class="n">{{ s.items.length }} títulos</span>
      </div>
      <div class="grid">
        <MovieCard v-for="i in s.items" :key="i.id" :item="i" :is-fav="favs.includes(i.id)" @open="selected = $event" @toggle-fav="toggleFav" />
      </div>
    </section>

    <p v-if="!sections.length" class="empty">
      {{ view === 'favoritos' && !favs.length ? 'Aún no tienes favoritos. Toca el ♡ en una tarjeta.' : 'No se encontraron resultados.' }}
    </p>
  </main>

  <MovieModal v-if="selected" :item="selected" :is-fav="favs.includes(selected.id)" @close="selected = null" @toggle-fav="toggleFav" />
</template>
