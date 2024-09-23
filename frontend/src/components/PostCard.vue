<script setup>

import { usePopupStore } from '@/stores/popup';

  const props = defineProps({
    post: {
      type: Object,
      required: false
    }
  });
  const popup = usePopupStore()
</script>

<template>
  <div class="flex flex-col gap-y-4 px-6 py-4 border-b border-border">
    <h2 class="capitalize">{{ props.post.title }}</h2>
    <p class="w-1/2 text-sm text-black/[.7] capitalize">{{ props.post.body }}</p>
    <div class="flex justify-end">
      <div class="flex items-center gap-6 hover:cursor-pointer" @click="popup.setStatus(true)">
        <span class="text-title">See More</span>
        <i class="tabler-square-rounded-arrow-right text-primary text-3xl"></i>
      </div>
    </div>
  </div>
</template>