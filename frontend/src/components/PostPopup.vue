<script setup>
  import { usePopupStore } from '@/stores/popup';
  import { usePostStore } from '@/stores/requests/post';
  import { useCommentsStore } from '@/stores/requests/comments';
  import { onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
import CommentCard from './CommentCard.vue';

  const route = useRoute();
  const popupStore = usePopupStore()
  const postStore = usePostStore();
  const commentsStore = useCommentsStore();
  onMounted(() => {
    postStore.getPost(popupStore.postId);
    commentsStore.getComments(popupStore.postId);
  })

  function clearPopupData(){
    postStore.post = {};
    commentsStore.comments = [];
  }
</script>

<template>
  <div class="flex justify-between h-fill">
    <h2 class="text-2xl font-medium capitalize">{{ postStore.post.title }}</h2>
    <i class="tabler-square-rounded-x hover:cursor-pointer" @click="popupStore.setStatus(false); clearPopupData();"></i>
  </div>
  <div class="w-full h-full flex">
    <div class="w-1/2 h-full overflow-y-auto p-3 border-r border-border">
      <p class="text-sm font-normal text-black/[0.7]">
        {{ postStore.post.body }}
      </p>
    </div>
    <div class="w-1/2 p-3">
      <h2>Comments</h2>
      <div class="flex flex-col gap-6 mt-3 h-full overflow-y-auto">
        <CommentCard v-for="comment in commentsStore.comments" :comment="comment"></CommentCard>
      </div>
    </div>
  </div>
</template>