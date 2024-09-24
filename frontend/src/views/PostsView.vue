<script setup>
  import Breadcrumb from '@/components/Breadcrumb.vue';
import PostCard from '@/components/PostCard.vue';
import PostPopup from '@/components/PostPopup.vue';
  import { usePostsStore } from '@/stores/requests/posts';
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const postsStore = usePostsStore();

  onMounted(() => {
    postsStore.getPosts(router.currentRoute.value.params.userId)
  });
</script>

<template>
  <Breadcrumb/>
  <div class="mt-8">
    <PostCard v-for="post in postsStore.posts" :post="post"/>
  </div>
</template>
