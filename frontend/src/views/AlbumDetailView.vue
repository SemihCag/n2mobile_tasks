<script setup>
  import Breadcrumb from '@/components/Breadcrumb.vue';
  import { usePhotosStore } from '@/stores/requests/photos';
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const photosStore = usePhotosStore();

  onMounted(() => {
    photosStore.getPhotos(router.currentRoute.value.params.albumId)
  });

</script>

<template>
  <Breadcrumb previousName="Albums" :previousUrl="'/users/' + $route.params.userId + '/albums'"></Breadcrumb>
  <div class="grid grid-cols-5 gap-6 pt-8">
    <img v-for="photo in photosStore.photos" class="w-full" :src="photo.thumbnailUrl" />
  </div>
</template>