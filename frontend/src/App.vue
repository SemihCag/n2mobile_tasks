<script setup>
  import { RouterView } from 'vue-router'
  import { useRouter } from 'vue-router'
  import { usePopupStore } from './stores/popup';
  import { watch } from 'vue';
import PostPopup from './components/PostPopup.vue';

  const popup = usePopupStore();
  const router = useRouter();
  watch(popup.status, () => {

  });
</script>

<template>
  <header class="h-screen w-1/5 flex flex-col justify-between py-8 border-r border-border bg-neutral-100">
    <nav class="flex flex-col gap-y-8">
      <component :is="router.currentRoute.value.meta.header"></component>
    </nav>
    <div class="flex justify-center items-center gap-2 mx-8 pt-8 border-t border-border">
      <img src="./assets/images/logo.png" />
      <span class="text-xl text-brand font-bold">N2Mobile</span>
    </div>
  </header>
  <main class="w-4/5 p-8 max-h-screen overflow-y-auto">
    <RouterView />
  </main>

  <div class="absolute flex justify-center items-center w-full h-full bg-popup" v-if="popup.status">
    <div class="bg-white w-3/4 h-1/2 rounded-3xl p-5 overflow-hidden">
      <PostPopup></PostPopup>
    </div>
  </div>
</template>