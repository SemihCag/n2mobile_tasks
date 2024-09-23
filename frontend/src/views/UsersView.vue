<script setup>
import UserCard from '@/components/UserCard.vue';
import { useUsersStore } from '@/stores/requests/users';
import { onMounted } from 'vue';

const usersStore = useUsersStore();

onMounted(() => {
  usersStore.getUsers()
});
</script>

<template>
  <h1 class="h-10 flex items-center text-title">All users</h1>
  <div class="grid grid-cols-3 gap-6 pt-8">
    <UserCard v-for="user in usersStore.users" :user="user"></UserCard>
  </div>
</template>
