<script setup>
import Poster from './Poster.vue'
defineProps({ item: Object, isFav: Boolean })
defineEmits(['close', 'toggle-fav'])
</script>

<template>
  <div class="overlay" @click.self="$emit('close')">
    <div class="modal">
      <button class="close" @click="$emit('close')" aria-label="Cerrar">✕</button>
      <Poster :item="item" class="mposter" />
      <div>
        <p class="eyebrow">{{ item.type }} · {{ item.genre }}</p>
        <h2>{{ item.title }}</h2>
        <p class="meta">
          {{ item.year }} ·
          <template v-if="item.type === 'Serie'">{{ item.seasons }} temporadas</template>
          <template v-else>{{ item.duration }}</template>
        </p>
        <p>{{ item.synopsis }}</p>
        <button class="btn" @click="$emit('toggle-fav', item.id)">
          {{ isFav ? '♥ Quitar de favoritos' : '♡ Agregar a favoritos' }}
        </button>
      </div>
    </div>
  </div>
</template>
