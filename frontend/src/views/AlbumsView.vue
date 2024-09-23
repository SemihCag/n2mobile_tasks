<script setup>
  import AlbumCard from '@/components/AlbumCard.vue';
  import Breadcrumb from '@/components/Breadcrumb.vue';
  import { useAlbumsStore } from '@/stores/requests/albums';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

  const router = useRouter();
  const albumsStore = useAlbumsStore();

  onMounted(() => {
    albumsStore.getAlbums(router.currentRoute.value.params.userId)
  });

</script>

<template>
  <Breadcrumb></Breadcrumb>
  <div class="grid grid-cols-3 gap-6 pt-8">
    <AlbumCard v-for="album in albumsStore.albums" :album="album"></AlbumCard>
  </div>
</template>
