import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const useTodosStore = defineStore('todoRequest', () => {
  const todos = ref([]);
  const error = ref(null)

  async function getTodos(id) {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
      todos.value = response.data;
    } catch (error) {
      error.value = 'Could not load todos information.';
      console.log(error);
    }
  }

  return { todos, error, getTodos }
})
