import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useUserStore = defineStore('userRequest', () => {
  const user = ref({});
  const error = ref(null)

  async function getUser(id) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      user.value = response.data;
    } catch (error) {
      error.value = 'Could not load user information.';
      console.log(error);
    }
  }

  return { user, error, getUser }
})
