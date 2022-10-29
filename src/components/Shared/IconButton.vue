<script setup>
const emit = defineEmits(["click"]);
</script>

<template>
  <button
    @click="emit('click')"
    type="button"
    class="rounded-lg px-2 py-1 inline-flex items-center justify-center focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 transition-all"
  >
    <slot></slot>
  </button>
</template>
