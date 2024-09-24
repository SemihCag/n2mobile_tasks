<script setup>
  import { usePopupStore } from '@/stores/popup';
  import { useCommentsStore } from '@/stores/requests/comments';
  import { onMounted } from 'vue';
  const props = defineProps({
    comment: {
      type: Object,
      required: false
    }
  });
  const popupStore = usePopupStore();
  const commentsStore = useCommentsStore();
  onMounted(() => {
    commentsStore.getComments(popupStore.postId);
  });
</script>

<template>
  <div class="flex flex-row gap-3">
    <img src="../assets/images/user.png" class="w-12 h-12 rounded-full"/>
    <div class="text-sm">
      <p class="font-medium">{{ props.comment.name }}</p>
      <p class="font-normal mt-3"> {{ props.comment.body }} </p>
    </div>
  </div>
</template>