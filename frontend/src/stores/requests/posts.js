import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const usePostsStore = defineStore('postsRequest', () => {
  const posts = ref([]);
  const error = ref(null)

  async function getPosts(userId) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      posts.value = response.data;
    } catch (error) {
      error.value = 'Could not load posts information.';
      console.log(error);
    }
  }

  return { posts, error, getPosts }
})
