<script setup>
import { useUserStore } from '@/stores/requests/user';
import { onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import NavItem from '../NavItem.vue';

const router = useRouter();
const userStore = useUserStore();

onMounted(() => {
  userStore.getUser(router.currentRoute.value.params.userId);
});
</script>

<template>
  <div id="user-info" class="flex items-center gap-2 mx-8 pb-8 mb-8 border-b border-border ">
    <div class="w-12 h-12 rounded-full bg-[url('/src/assets/images/user.png')] bg-cover bg-top"></div>
    <div>
      <h2>{{ userStore.user.name }}</h2>
      <p class="text-sm text-subtitle font-light">{{ userStore.user.email }}</p>
    </div>
  </div>

  <NavItem :to="'/users/' + userStore.user.id" title="Todos" icon="checkup-list"></NavItem>
  <NavItem :to="'/users/' + userStore.user.id + '/posts'" title="Posts" icon="notebook"></NavItem>
  <NavItem :to="'/users/' + userStore.user.id + '/albums'" title="Albums" icon="photo-heart"></NavItem>
</template>