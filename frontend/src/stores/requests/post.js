import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const usePostStore = defineStore('postRequest', () => {
  const post = ref({});
  const error = ref(null)

  async function getPost(postId) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      post.value = response.data;
    } catch (error) {
      error.value = 'Could not load posts information.';
      console.log(error);
    }
  }

  return { post, error, getPost}
})
