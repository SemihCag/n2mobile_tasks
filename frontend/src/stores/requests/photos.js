import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const usePhotosStore = defineStore('photosRequest', () => {
  const photos = ref([]);
  const error = ref(null)

  async function getPhotos(albumId) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
      photos.value = response.data;
    } catch (error) {
      error.value = 'Could not load posts information.';
      console.log(error);
    }
  }

  return { photos, error, getPhotos }
})
