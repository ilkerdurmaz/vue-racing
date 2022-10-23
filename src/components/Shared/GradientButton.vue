<script setup>
defineProps({
  text: {
    type: String,
    default: "Button",
  },
});

const emit = defineEmits(["click"]);
</script>

<template>
  <button
    @click="emit('click')"
    class="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
  >
    <span
      class="px-5 py-2.5 transition-all ease-in duration-75 bg-zinc-100 dark:bg-zinc-800 rounded-md group-hover:bg-opacity-0"
    >
      {{ text }}
    </span>
  </button>
</template>
