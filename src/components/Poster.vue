<script setup>
import { ref } from 'vue'
defineProps({ item: Object })
const failed = ref(false) // si la imagen no existe, se muestra el póster de respaldo
</script>

<template>
  <div class="poster">
    <img v-if="!failed" :src="item.img" :alt="item.title" loading="lazy" @error="failed = true" />
    <span v-else class="poster-title">{{ item.title }}</span>
    <slot />
  </div>
</template>
