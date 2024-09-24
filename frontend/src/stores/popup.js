import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePopupStore = defineStore('popup', () => {
  const status = ref(false);
  const postId = ref(0);

  function setStatus(statusVal, postNo = 0) {
    status.value = statusVal;
    postId.value = postNo;
  }


  return { status, postId, setStatus }
})
