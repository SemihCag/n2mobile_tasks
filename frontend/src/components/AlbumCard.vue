<script setup>
  import { useAlbumsStore } from '@/stores/requests/albums';
import { useRoute } from 'vue-router';
  const props = defineProps({
    album: {
      type: Object,
      required: true
    }
  });
</script>

<template>
  <a :href="$route.path + '/' + props.album.id" class="w-full border border-border rounded-xl py-5 px-6 hover:shadow-user-card">
    <div>
      <img class="w-full h-full" src="../assets/images/albums.png">
      <p class="w-64 text-sm text-title truncate mt-3">{{ props.album.title }}</p>
    </div>
  </a>
</template>