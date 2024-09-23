<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <a :href="'/users/' + props.user.id" class="w-full border border-border rounded-xl py-5 px-6 hover:shadow-user-card">
    <div class="flex items-center gap-2">
      <div
        class="w-100 h-100 rounded-full bg-[url('http://localhost:5173/src/assets/images/user.png')] bg-cover bg-top">
      </div>
      <div class="w-auto">
        <h2 class="text-lg text-title font-medium">{{ props.user.name }}</h2>
        <p class="text-sm text-subtitle font-light">{{ props.user.email }}</p>
        <p class="text-sm text-subtitle font-light">{{ props.user.phone }}</p>
      </div>
    </div>
    <div class="mt-4 flex flex-col gap-4">
      <div>
        <div class="flex items-center gap-2 text-title">
          <i class="tabler-map-pin-heart text-2xl"></i>
          <h2 class="text-sm">Location</h2>
        </div>
        <p class="font-light text-sm text-subtitle">{{ props.user.address.street }}, {{ props.user.address.suite }}</p>
        <p class="font-light text-sm text-subtitle">{{ props.user.address.city }}</p>
      </div>
      <div>
        <div class="flex items-center gap-2 text-title">
          <i class="tabler-building-skyscraper text-2xl"></i>
          <h2 class="text-sm">Company</h2>
        </div>
        <p class="font-light text-sm text-subtitle">{{ props.user.company.name }}</p>
      </div>
      <div>
        <div class="flex items-center gap-2 text-title">
          <i class="tabler-world-share text-2xl"></i>
          <h2 class="text-sm">Website</h2>
        </div>
        <p class="font-light text-sm text-subtitle">{{ props.user.website }}</p>
      </div>
    </div>
  </a>
</template>