<script setup>
const props = defineProps({
  btnText: {
    type: String,
    default: "Button",
  },
  btnDisable: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);
</script>

<template>
  <button
    @click="emit('click')"
    type="button"
    :disabled="props.btnDisable"
    class="inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
    :class="{ 'opacity-40': props.btnDisable }"
  >
    <span
      class="px-5 py-2.5 transition-all ease-in duration-75 bg-zinc-100 dark:bg-zinc-800 rounded-md"
      :class="{ 'group-hover:bg-opacity-0': !props.btnDisable }"
    >
      {{ props.btnText }}
    </span>
  </button>
</template>
