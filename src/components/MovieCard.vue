<script setup>
import Poster from './Poster.vue'
defineProps({ item: Object, isFav: Boolean })
defineEmits(['open', 'toggle-fav'])
</script>

<template>
  <article class="card" @click="$emit('open', item)">
    <Poster :item="item">
      <button class="fav" :class="{ on: isFav }" :aria-label="isFav ? 'Quitar de favoritos' : 'Agregar a favoritos'" @click.stop="$emit('toggle-fav', item.id)">
        {{ isFav ? '♥' : '♡' }}
      </button>
    </Poster>
    <div class="info">
      <h3>{{ item.title }}</h3>
      <p>{{ item.genre }} · {{ item.type }}</p>
    </div>
  </article>
</template>
