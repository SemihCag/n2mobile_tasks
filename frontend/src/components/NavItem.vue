<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps(['to', 'title', 'icon']) 
</script>

<template>
  <RouterLink class="h-10 text-subtitle text-lg flex items-center relative pl-navitem gap-3"
    activeClass="before:absolute before:left-0 before:h-10 before:w-1.5 before:bg-primary before:rounded-r-md bg-white !text-primary"
    :to="props.to"> <i :class="'tabler-' + props.icon" class="text-primary"></i> {{ props.title }}</RouterLink>
</template>