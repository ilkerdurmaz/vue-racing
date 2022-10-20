<script setup>
defineProps({
  item: {
    type: Object,
    default: {
      text: "List item text.",
    },
  },
  index: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="flex items-center gap-2 py-0.5">
    <span
      class="flex h-8 w-8 items-center justify-center rounded-full bg-white pb-0.5 text-lg"
      >{{ index }}</span
    >
    <span class="pb-1 text-lg">{{ item.text }}</span>
  </div>
</template>

<style scoped></style>
