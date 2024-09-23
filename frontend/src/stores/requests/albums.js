import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useAlbumsStore = defineStore('albumsRequest', () => {
  const albums = ref([]);
  const error = ref(null)

  async function getAlbums(userId) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
      albums.value = response.data;
    } catch (error) {
      error.value = 'Could not load posts information.';
      console.log(error);
    }
  }

  return { albums, error, getAlbums }
})
