import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useCommentsStore = defineStore('commentsRequest', () => {
  const comments = ref([]);
  const error = ref(null)

  async function getComments(postId) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      comments.value = response.data;
    } catch (error) {
      error.value = 'Could not load posts information.';
      console.log(error);
    }
  }

  return { comments, error, getComments }
})
