<script setup>
  import { onMounted, ref } from 'vue';

  const props = defineProps({
    previousName: {
      default: 'Home'
    },
    previousUrl: {
      default: '/'
    }
  })

  const breadcrum = ref()

  onMounted(() => {
    const userInfoEl = document.querySelector('header #user-info');
    breadcrum.value.style.height = `${userInfoEl.offsetHeight}px`;
  });
</script>

<template>
  <a ref="breadcrum" class="text-title" :href="props.previousUrl">
    <div class="flex items-center gap-6 pt-2">
      <i class="tabler-square-rounded-arrow-left text-3xl"></i>
      <h1>Go {{ props.previousName }}</h1>
    </div>
  </a>
</template>