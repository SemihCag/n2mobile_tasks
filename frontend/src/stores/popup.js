import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

export const usePopupStore = defineStore('popup', () => {
  const status = ref(false);

  async function setStatus(statusVal) {
    status.value = statusVal;
  }

  return { status, setStatus }
})
