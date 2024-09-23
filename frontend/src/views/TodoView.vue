<script setup>
  import Breadcrumb from '@/components/Breadcrumb.vue';
  import { useTodosStore } from '@/stores/requests/todos';
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();
  const todoStore = useTodosStore();

  onMounted(() => {
    todoStore.getTodos(router.currentRoute.value.params.userId)

  });
</script>

<template>
  <Breadcrumb></Breadcrumb>
  <div class="mt-16 flex flex-col gap-3">
    <div v-for="todo in todoStore.todos" class="flex items-center gap-3">
      <input type="checkbox" :id="todo.id" :checked="todo.completed" class="form-checkbox rounded text-primary focus:border-primary focus:ring-primary w-4 h-4"/>
      <label :for="todo.id" class="text-subtitle">{{ todo.title }}</label>
    </div>
  </div>
</template>