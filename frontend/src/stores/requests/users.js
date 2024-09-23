import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useUsersStore = defineStore('usersRequest', () => {
  const users = ref([]);
  const error = ref(null)

  async function getUsers() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      users.value = response.data;
    } catch (error) {
      error.value = 'Could not load users information.';
      console.log(error);
    }
  }

  return { users, error, getUsers }
})
