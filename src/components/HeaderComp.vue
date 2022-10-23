<script setup>
import GradientButton from "./Shared/GradientButton.vue";
import CloseButtonComp from "./Shared/IconButton.vue";

const props = defineProps({
  title: {
    type: String,
    default: "Default Header Title",
  },
  darkMode: {
    type: Boolean,
    default: true,
  },
  mainBtnText: {
    type: String,
    default: "Main Button",
  },
});

const emit = defineEmits(["darkModeClick", "mainBtnClick"]);
</script>

<template>
  <header
    class="border-b dark:bg-neutral-800 dark:text-white dark:border-neutral-700 shadow dark:shadow-zinc-900"
  >
    <div
      class="flex justify-between items-center py-2 px-2 sm:px-4 max-w-7xl mx-auto"
    >
      <h1 class="text-xl sm:text-2xl">{{ props.title }}</h1>
      <div class="flex gap-2 sm:gap-4 items-center">
        <CloseButtonComp
          @click="emit('darkModeClick')"
          class="bg-clip-text bg-gradient-to-br from-pink-500 to-orange-400"
        >
          <i
            v-if="props.darkMode"
            class="bi bi-moon-stars text-2xl text-transparent hover:text-gray-300"
          ></i>
          <i
            v-if="!props.darkMode"
            class="bi bi-brightness-high text-2xl text-transparent hover:text-gray-300"
          ></i>
        </CloseButtonComp>
        <GradientButton
          :text="props.mainBtnText"
          @click="emit('mainBtnClick')"
        ></GradientButton>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
