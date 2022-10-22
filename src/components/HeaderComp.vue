<script setup>
import ButtonComp from "./ButtonComp.vue";

const props = defineProps({
  title: {
    type: String,
    default: "Default Header Title",
  },
});
</script>

<template>
  <div
    class="bg-gradient-to-b from-white to-zinc-200 dark:from-zinc-800 dark:to-black dark:text-white border-b border-gray-300 dark:border-zinc-900 shadow-sm dark:shadow-zinc-900"
  >
    <div class="flex justify-between items-center py-2 px-4 max-w-7xl mx-auto">
      <h1 class="text-xl sm:text-2xl">{{ props.title }}</h1>
      <ButtonComp text="Start Race" @click="$emit('btnClick')"></ButtonComp>
    </div>
  </div>
</template>

<style scoped></style>
