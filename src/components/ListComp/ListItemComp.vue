<script setup>
const props = defineProps({
  index: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="flex items-center gap-2 py-1 lg:py-2.5">
    <span
      class="flex shrink-0 h-8 w-8 items-center justify-center rounded-full text-white bg-gradient-to-br from-pink-500 to-orange-400 pb-0.5 text-lg"
      >{{ props.index }}.</span
    >
    <slot></slot>
  </div>
</template>

<style scoped></style>
